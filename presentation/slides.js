// The seven demo slides (Space Apps allows at most seven, title included). Text drafted with SI (Claude, Anthropic);
// every fact carries its source on the slide.
const SI = 'Slides drafted with SI (Claude); every fact names its source';
const FOOT = 'Crew Health Console · team Just For Fun, Kyiv · NASA Space Apps Challenge 2026';

export const SLIDES = [
  {
    kicker: 'NASA SPACE APPS CHALLENGE 2026 · CREATE HEALTH MONITORING SOFTWARE FOR ASTRONAUTS',
    title: 'Crew Health Console',
    html: `<div><p class="lead">Health monitoring for astronauts that speaks up only when something really needs them, and works when Earth is too far to ask.</p>
      <div class="chips"><span class="chip c0">Runs offline on a crew laptop</span><span class="chip c0">Every number explains itself</span><span class="chip c0">Built to NASA display rules</span></div></div>
      <img class="shot" src="./img/today.png" alt="The Today screen: one dated sentence about body and mind, the reasons, and the choice of buttons">`,
  },
];

const deck = document.getElementById('deck');
const counter = document.getElementById('counter');

function build() {
  deck.replaceChildren(...SLIDES.map((s, i) => {
    const el = document.createElement('section');
    el.className = 'slide';
    el.setAttribute('aria-label', `Slide ${i + 1} of ${SLIDES.length}: ${s.title}`);
    el.hidden = i !== 0;
    el.innerHTML = `<header><p class="kicker">${s.kicker}</p>${i === 0 ? `<h1 class="big">${s.title}</h1>` : `<h2>${s.title}</h2>`}</header>
      <div class="body ${s.one ? 'one' : ''}">${s.html}</div>
      <footer class="foot"><span>${s.src ? `<span class="src">${s.src}</span>` : FOOT}</span><span class="si">${SI}</span></footer>`;
    return el;
  }));
}

let at = 0;
function show(i) {
  at = Math.max(0, Math.min(SLIDES.length - 1, i));
  [...deck.children].forEach((el, k) => { el.hidden = k !== at; });
  counter.textContent = `${at + 1} / ${SLIDES.length}`;
  try { history.replaceState(null, '', `#${at + 1}`); } catch { /* no history in some viewers */ }
}
function fit() {
  const k = Math.min(window.innerWidth / 1280, window.innerHeight / 720);
  for (const el of deck.children) el.style.transform = `scale(${k})`;
}

build();
fit();
show(Number((location.hash || '#1').slice(1)) - 1 || 0);
window.addEventListener('resize', fit);
document.addEventListener('keydown', (e) => {
  if (['ArrowRight', 'PageDown', ' ', 'Enter'].includes(e.key)) { e.preventDefault(); show(at + 1); }
  else if (['ArrowLeft', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); show(at - 1); }
  else if (e.key === 'Home') show(0);
  else if (e.key === 'End') show(SLIDES.length - 1);
});
deck.addEventListener('click', (e) => { if (e.target.closest('a')) return; show(e.clientX > window.innerWidth / 2 ? at + 1 : at - 1); });
