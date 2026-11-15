// "What is this, and where does it come from?" for everything on the crew screen, like a desktop tooltip.
// Point at a thing and rest for a moment, or press its "?" button (needed on touch screens), and a short
// card opens: what it is, what measures it on the ISS, what else could, how the value reaches this program,
// and how this very value was produced. The owner's request; text and sources gathered by Claude (Anthropic), an AI system.
//
// Use: put data-tip="<key>" on any element; a "?" button made with tipButton() opens the same card on press.
// initTips(resolve) takes a function that turns a key into the card's content (a DOM node).

let pop = null;
let current = null;
let pinned = false;
let showTimer = 0;
let hideTimer = 0;
let resolve = () => null;
const HOVER_MS = 550;

export function tipButton(key, label) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'tip-btn';
  b.dataset.tip = key;
  b.setAttribute('aria-label', `About ${label}: where it comes from`);
  b.setAttribute('aria-expanded', 'false');
  b.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>';
  return b;
}

function place() {
  if (!current || !pop || pop.hidden) return;
  const r = current.getBoundingClientRect();
  const pw = pop.offsetWidth;
  const ph = pop.offsetHeight;
  const vw = document.documentElement.clientWidth;
  const vh = window.innerHeight;
  const left = Math.min(vw - pw - 12, Math.max(12, r.left + r.width / 2 - pw / 2));
  let top = r.bottom + 8;
  if (top + ph > vh - 12 && r.top - ph - 8 > 12) top = r.top - ph - 8;
  pop.style.left = `${Math.round(left)}px`;
  pop.style.top = `${Math.round(Math.max(12, top))}px`;
}

function show(target, pin) {
  clearTimeout(showTimer);
  const content = resolve(target.dataset.tip, target);
  if (!content) return;
  if (current && current !== target) current.setAttribute('aria-expanded', 'false');
  clearTimeout(hideTimer);
  pop.replaceChildren(content);
  pop.hidden = false;
  pop.classList.toggle('pinned', Boolean(pin));
  pop.setAttribute('role', pin ? 'dialog' : 'tooltip');
  pop.setAttribute('aria-label', pin ? 'About this' : '');
  current = target;
  pinned = Boolean(pin);
  if (target.classList.contains('tip-btn')) target.setAttribute('aria-expanded', pin ? 'true' : 'false');
  place();
}

export function hideTip() {
  clearTimeout(showTimer);
  clearTimeout(hideTimer);
  if (!pop) return;
  pop.hidden = true;
  if (current && current.classList.contains('tip-btn')) current.setAttribute('aria-expanded', 'false');
  current = null;
  pinned = false;
}

const targetOf = (el) => (el && el.closest ? el.closest('[data-tip]') : null);

export function initTips(resolver) {
  resolve = resolver;
  pop = document.createElement('div');
  pop.id = 'tip-pop';
  pop.className = 'tip-pop';
  pop.hidden = true;
  document.body.append(pop);

  document.addEventListener('pointerover', (e) => {
    if (e.pointerType === 'touch') return;
    if (pop.contains(e.target)) { clearTimeout(hideTimer); return; }
    const t = targetOf(e.target);
    if (!t) return;
    if (t === current) { clearTimeout(hideTimer); return; }
    if (pinned) return;
    clearTimeout(showTimer);
    showTimer = setTimeout(() => show(t, false), t.classList.contains('tip-btn') ? 150 : HOVER_MS);
  });
  document.addEventListener('pointerout', (e) => {
    const t = targetOf(e.target);
    const into = e.relatedTarget;
    if (t && into && t.contains(into)) return;
    if (into && pop.contains(into)) return;
    clearTimeout(showTimer);
    if (!pinned && current && (t === current || pop.contains(e.target))) {
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => { if (!pinned) hideTip(); }, 220);
    }
  });
  document.addEventListener('focusin', (e) => {
    const t = e.target.closest && e.target.closest('.tip-btn');
    if (t && !pinned) show(t, false);
  });
  document.addEventListener('focusout', (e) => {
    if (pinned || !current) return;
    if (e.relatedTarget && pop.contains(e.relatedTarget)) return;
    hideTimer = setTimeout(() => { if (!pinned) hideTip(); }, 120);
  });
  document.addEventListener('click', (e) => {
    const b = e.target.closest && e.target.closest('.tip-btn');
    if (b) {
      e.preventDefault();
      e.stopPropagation();
      if (pinned && current === b) hideTip();
      else show(b, true);
      return;
    }
    if (current && !pop.contains(e.target)) hideTip();
  }, true);
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !current) return;
    const back = current;
    hideTip();
    if (back.classList.contains('tip-btn')) back.focus();
  });
  window.addEventListener('scroll', () => { if (pinned) place(); else if (current) hideTip(); }, { passive: true });
  window.addEventListener('resize', () => hideTip());
}
