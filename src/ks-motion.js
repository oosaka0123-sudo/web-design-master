/**
 * Lightweight, dependency-free KS design behaviors.
 * Initialize after DOM readiness. Returns a cleanup function.
 */
export function initKSDesign(root = document) {
  const doc = root.ownerDocument || root;
  const win = doc.defaultView || window;
  const cleanups = [];
  const header = root.querySelector('[data-ks-header]');
  const overlay = root.querySelector('[data-ks-overlay]');
  const openers = [...root.querySelectorAll('[data-ks-overlay-open]')];
  const closers = [...root.querySelectorAll('[data-ks-overlay-close]')];
  const mq = win.matchMedia('(prefers-reduced-motion: reduce)');
  let trigger = null;
  let lastFocus = null;
  let previousOverflow = '';
  let scrollLocked = false;

  const on = (target, event, handler, options) => {
    target.addEventListener(event, handler, options);
    cleanups.push(() => target.removeEventListener(event, handler, options));
  };
  const scrollHeader = () => header?.classList.toggle('ks-header--scrolled', win.scrollY > 18);
  scrollHeader();
  on(win, 'scroll', scrollHeader, { passive: true });

  if (overlay) {
    overlay.setAttribute('aria-hidden', 'true');
    overlay.hidden = false;
    const focusables = () => [...overlay.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])')]
      .filter(el => el.getClientRects().length > 0);
    const setOpen = (open) => {
      if (open) {
        trigger = doc.activeElement;
        previousOverflow = doc.documentElement.style.overflow;
        doc.documentElement.style.overflow = 'hidden';
        scrollLocked = true;
        overlay.setAttribute('aria-hidden', 'false');
        openers.forEach(el => el.setAttribute('aria-expanded', 'true'));
        (focusables()[0] || overlay).focus();
      } else {
        overlay.setAttribute('aria-hidden', 'true');
        openers.forEach(el => el.setAttribute('aria-expanded', 'false'));
        if (scrollLocked) doc.documentElement.style.overflow = previousOverflow;
        scrollLocked = false;
        if (trigger instanceof win.HTMLElement && trigger.isConnected) trigger.focus();
        trigger = null;
      }
    };
    const isOpen = () => overlay.getAttribute('aria-hidden') === 'false';
    openers.forEach(el => on(el, 'click', () => setOpen(true)));
    closers.forEach(el => on(el, 'click', () => setOpen(false)));
    on(doc, 'keydown', e => {
      if (!isOpen()) return;
      if (e.key === 'Escape') { e.preventDefault(); setOpen(false); }
      if (e.key !== 'Tab') return;
      const nodes = focusables();
      if (!nodes.length) { e.preventDefault(); overlay.focus(); return; }
      const first = nodes[0], last = nodes[nodes.length - 1];
      if (e.shiftKey && doc.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && doc.activeElement === last) { e.preventDefault(); first.focus(); }
    });
    cleanups.push(() => { if (scrollLocked) doc.documentElement.style.overflow = previousOverflow; });
  }

  const animated = [...root.querySelectorAll('[data-ks-reveal],[data-ks-h2],[data-ks-image],[data-ks-hero]')];
  if (mq.matches || !('IntersectionObserver' in win)) {
    animated.forEach(el => el.classList.add('ks-visible'));
  } else {
    const observer = new win.IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('ks-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    animated.forEach(el => observer.observe(el));
    cleanups.push(() => observer.disconnect());
  }
  return () => { cleanups.reverse().forEach(fn => fn()); };
}
