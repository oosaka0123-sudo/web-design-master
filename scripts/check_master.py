#!/usr/bin/env python3
"""Dependency-free structural smoke checks for the reusable design master.

This does not replace real-browser, accessibility, or performance testing.
"""
from html.parser import HTMLParser
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
HTML_PAGES = [ROOT / "index.html", ROOT / "demo/index.html"]


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []
        self.ids = set()
        self.references = []
        self.controls = []
        self.headings = []
        self.lang = None

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        self.tags.append((tag, a))
        if tag == "html":
            self.lang = a.get("lang")
        if "id" in a:
            if a["id"] in self.ids:
                raise ValueError("Duplicate id: " + a["id"])
            self.ids.add(a["id"])
        if tag in ("link", "script"):
            ref = a.get("href") or a.get("src")
            if ref and not ref.startswith(("https:", "http:", "#", "data:")):
                self.references.append(ref)
        if tag == "button" and "data-ks-overlay-open" in a:
            self.controls.append(a)
        if tag in ("h1", "h2"):
            self.headings.append(tag)


def main():
    errors = []
    for page in HTML_PAGES:
        document = Page()
        try:
            document.feed(page.read_text(encoding="utf-8"))
        except (ValueError, OSError) as exc:
            errors.append(f"{page.relative_to(ROOT)}: {exc}")
            continue
        if document.lang != "ja":
            errors.append(f"{page.name}: expected lang=ja")
        if document.headings.count("h1") != 1:
            errors.append(f"{page.name}: expected exactly one h1")
        if not any("data-ks-overlay" in attrs for _, attrs in document.tags):
            errors.append(f"{page.name}: missing overlay")
        for control in document.controls:
            if control.get("aria-expanded") != "false":
                errors.append(f"{page.name}: opener must initialize aria-expanded=false")
            if control.get("aria-controls") not in document.ids:
                errors.append(f"{page.name}: aria-controls must target overlay id")
        for ref in document.references:
            file_path = (page.parent / ref.split("?", 1)[0].split("#", 1)[0]).resolve()
            if not file_path.is_relative_to(ROOT) or not file_path.is_file():
                errors.append(f"{page.name}: missing or unsafe local reference {ref}")
        if not any("initKSDesign()" in page.read_text(encoding="utf-8") for _ in [0]):
            errors.append(f"{page.name}: design initializer absent")

    css = (ROOT / "src/ks-design.css").read_text(encoding="utf-8")
    js = (ROOT / "src/ks-motion.js").read_text(encoding="utf-8")
    if "prefers-reduced-motion" not in css:
        errors.append("CSS: reduced-motion fallback absent")
    for token in ("[data-ks-header]", "[data-ks-overlay]", "[data-ks-overlay-open]",
                  "[data-ks-overlay-close]", "[data-ks-reveal]"):
        if token not in js:
            errors.append(f"JS: selector {token} absent")
    for media in ROOT.rglob("*"):
        if media.is_file() and media.suffix.lower() in {
            ".png", ".jpg", ".jpeg", ".webp", ".gif", ".mp4", ".mov", ".webm"
        }:
            errors.append(f"Binary media not permitted in master: {media.relative_to(ROOT)}")
    if errors:
        print("FAIL: design master checks")
        for error in errors:
            print(" -", error)
        return 1
    print("PASS: structural checks for index and demo, reusable CSS/JS, and asset policy")
    print("NOTE: browser/visual/assistive-technology/Lighthouse checks remain NOT_TESTED")
    return 0


if __name__ == "__main__":
    sys.exit(main())
