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

// The free part of the window for a card: below the status line (and the row of keys under it on a wide screen),
// above the bar of keys at the bottom of a phone or tablet. So a card never covers the Help key or the messages,
// and never runs under the keys. Pages without these bars use the whole window.
function freeArea() {
  const vh = window.innerHeight;
  let seenTop = 0; // the visible part of the page, between the bars
  let seenBottom = vh;
  const bar = document.querySelector('.status-line');
  if (bar) { const r = bar.getBoundingClientRect(); if (r.height) seenTop = Math.max(seenTop, r.bottom); }
  const keys = document.getElementById('tabs');
  if (keys && !keys.hidden) {
    const r = keys.getBoundingClientRect();
    const pos = getComputedStyle(keys).position;
    if (r.height && pos === 'fixed') seenBottom = Math.min(seenBottom, r.top);
    else if (r.height && pos === 'sticky' && r.top < vh / 2) seenTop = Math.max(seenTop, r.bottom);
  }
  const top = Math.max(12, seenTop + 8);
  return { seenTop, seenBottom, top, bottom: Math.max(top + 120, seenBottom - 8 - (seenBottom === vh ? 4 : 0)) };
}

function place() {
  if (!current || !pop || pop.hidden) return;
  const area = freeArea();
  const r = current.getBoundingClientRect();
  // A card whose "?" has scrolled out of sight (under the status line or the keys) closes, instead of floating
  // over the status line. Things on the status line itself keep their card, placed just below it.
  const onBar = current.closest && current.closest('.status-line, #tabs');
  if (!onBar && (r.bottom <= area.seenTop || r.top >= area.seenBottom)) { hideTip(); return; }
  const room = area.bottom - area.top;
  pop.style.maxHeight = `${Math.round(room)}px`;
  const pw = pop.offsetWidth;
  const full = pop.offsetHeight;
  const vw = document.documentElement.clientWidth;
  const left = Math.min(vw - pw - 12, Math.max(12, r.left + r.width / 2 - pw / 2));
  const below = area.bottom - (r.bottom + 8);
  const above = r.top - 8 - area.top;
  let top;
  let maxH = room;
  if (full <= below) top = r.bottom + 8; // below the "?"
  else if (full <= above) top = r.top - 8 - full; // above it
  else if (Math.max(below, above) >= 240) { maxH = Math.max(below, above); top = below >= above ? r.bottom + 8 : area.top; } // the roomier side, scrolling inside
  else top = area.top; // no room on either side: at the top of the free area, scrolling inside
  pop.style.maxHeight = `${Math.round(maxH)}px`;
  const ph = Math.min(full, maxH);
  pop.style.left = `${Math.round(left)}px`;
  pop.style.top = `${Math.round(Math.max(area.top, Math.min(top, area.bottom - ph)))}px`;
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
  // Keyboard focus on a "?" shows its card at once. A press with a mouse or a finger also focuses the button, but
  // then the card waits for the click, so it never opens under the pointer between press and release.
  let pressing = false;
  document.addEventListener('pointerdown', () => { pressing = true; }, true);
  document.addEventListener('pointerup', () => { setTimeout(() => { pressing = false; }, 0); }, true);
  document.addEventListener('pointercancel', () => { pressing = false; }, true);
  document.addEventListener('focusin', (e) => {
    const t = e.target.closest && e.target.closest('.tip-btn');
    if (t && !pinned && !pressing) show(t, false);
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
    if (e.key !== 'Escape' || !current || pop.hidden) return;
    const back = current;
    hideTip();
    // This Escape closed the card only: the page's own Escape (closing a side sheet) leaves it alone.
    e.preventDefault();
    if (back.classList.contains('tip-btn')) back.focus();
  });
  window.addEventListener('scroll', () => { if (pinned) place(); else if (current) hideTip(); }, { passive: true });
  window.addEventListener('resize', () => hideTip());
}
