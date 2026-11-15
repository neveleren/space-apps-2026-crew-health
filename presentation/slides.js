// The seven demo slides (Space Apps allows at most seven, title included). Text drafted with SI (Claude, Anthropic);
// every fact carries its source on the slide.
const SI = 'Slides drafted with SI (Claude); every fact names its source';
const FOOT = 'Crew Health Console · team Just For Fun, Kyiv · NASA Space Apps Challenge 2026';

export const SLIDES = [
  {
    kicker: 'NASA SPACE APPS CHALLENGE 2026 · CREATE HEALTH MONITORING SOFTWARE FOR ASTRONAUTS',
    title: 'Crew Health Console',
    html: `<div><p class="lead">Health monitoring for astronauts that speaks up only when something really needs them, and keeps working when Earth is too far to ask.</p>
      <div class="chips"><span class="chip c0">Runs offline on a crew laptop</span><span class="chip c0">Every number says where it comes from</span><span class="chip c0">Built to NASA-STD-3001 display rules</span><span class="chip c0">Real NASA data inside</span></div></div>
      <img class="shot" src="./img/today.png" alt="The Today screen: one dated sentence about body and mind, the reasons, and the choice of buttons">`,
  },
  {
    kicker: 'THE PROBLEM, IN NASA\'S OWN WORDS',
    title: 'Far from Earth, the crew must look after their own health',
    one: true,
    html: `<ul class="points">
      <li><span>On the way to Mars, a message to Earth takes <b>up to about 22 minutes one way</b>, and the link can be down for two weeks. Real-time telemedicine stops.</span></li>
      <li><span>"The communication delay on a Mars mission will make <b>real-time psychological support from Earth impossible</b>."</span></li>
      <li><span>Medical operations already take <b>35.2% of ISS on-duty time</b>, and ISS medical data still move by hand, with no notifications.</span></li>
      <li><span>Crews <b>under-report symptoms</b>; too many alarms teach people to ignore them. The screen must stay calm, private and honest.</span></li>
    </ul>`,
    src: 'Sources: NASA HRP-48021 Medical System ConOps for Mars (2019), ntrs.nasa.gov 20200001715 · NASA Behavioral Health page (2024), nasa.gov/directorates/esdmd/hhp/behavioral-health · Dulin et al., Medical crew time analysis (2024), ntrs.nasa.gov 20230015627 · NASA CHP-IDSP update (2025), ntrs.nasa.gov 20250000330 · NASA BMed evidence report (2025), ntrs.nasa.gov 20250001454',
  },
  {
    kicker: 'THE TEAM\'S DESIGN: ONE SENTENCE, A REASON, A CHOICE',
    title: 'One dated sentence about body and mind',
    html: `<div><p class="quote">"As of 15 Nov 2026, your physical condition needs attention, your mental condition is excellent."</p>
      <ul class="points" style="margin-top:22px">
        <li><span>Every reading is checked on board against its normal range and the team's rules: <b>no AI needed</b>.</span></li>
        <li><span>Changes common in flight stay quiet; values past <b>medical red limits</b> raise an urgent alert at once.</span></li>
        <li><span>Then a choice: <b>Details · Analyse with AI · Message the doctor</b>.</span></li>
      </ul></div>
      <img class="shot" src="./img/today-attention.png" alt="Today with a reason and the three buttons">`,
  },
  {
    kicker: 'NOTHING UNEXPLAINED',
    title: 'Every number says where it comes from',
    html: `<ul class="points">
      <li><span>Point at any value or press <b>?</b>: what it is, what measures it on the ISS (with a link), what else could, how it reaches the program, and how <b>this</b> value was produced.</span></li>
      <li><span>History before, during and after flight, the normal range, and a straight-line forecast to landing, labelled <b>not a medical model</b>.</span></li>
      <li><span>Status line always visible, NASA colour meanings, numbered "What to do" steps, alert tones from NASA's table.</span></li>
    </ul>
    <img class="shot" src="./img/tip.png" alt="The ? card for body temperature, naming the Double Sensor used on the ISS">`,
  },
  {
    kicker: 'MIND SUPPORT, FROM NASA RESEARCH',
    title: 'Support for the mind that works with no link to Earth',
    html: `<ul class="points">
      <li><span>A one-minute morning check-in; <b>one bad day never raises an alarm</b>.</span></li>
      <li><span>The team's AI support offers an anonymous talk or to tell the doctor; <b>the choice stays with the person</b>. It is not a therapist, and a fixed safety net works without the AI.</span></li>
      <li><span>Small things that help (Earth view, calls home, shared meals), a private journal, a plan for hard days, and a 3-minute reaction test modelled on <b>NASA's Reaction Self Test</b>.</span></li>
    </ul>
    <img class="shot" src="./img/mind.png" alt="Mind support cards">`,
    src: 'Sources: NASA BMed evidence report (2025); NASA Journals study (Stuster 2010); NASA Reaction Self Test (2009); Stanley and Brown safety planning (JAMA Psychiatry 2018); APA health advisory on AI chatbots (2025)',
  },
  {
    kicker: 'WORKS FAR FROM EARTH, CONNECTS WHERE IT CAN',
    title: 'Offline first, honest about every connection',
    html: `<ul class="points">
      <li><span><b>Working:</b> Bluetooth heart rate and health devices, HL7 FHIR export for medical records, real NASA OSDR Inspiration4 blood tests, NASA ISS live telemetry and NOAA space weather (Earth demos).</span></li>
      <li><span><b>Planned, with partners:</b> EveryWear, NASA's crew medical record, the station server and NASA's delay-tolerant network.</span></li>
      <li><span>Mission profile <b>ISS, Moon or Mars</b>; no link means messages wait in the outbox; a <b>Help</b> key works from any screen.</span></li>
    </ul>
    <img class="shot" src="./img/connections.png" alt="The Connections list with working, simulated and planned rows">`,
  },
  {
    kicker: 'TRY IT',
    title: 'Open source, tested, ready for a NASA analog test',
    one: true,
    html: `<ul class="points">
      <li><span>Built after <b>NASA-STD-3001</b> Vol 1 and Vol 2 Rev F, with a requirements map; software TRL 3 to 4 by our own assessment.</span></li>
      <li><span>Automatic tests and an end-to-end walk through every screen; Apache-2.0; no internet needed on board.</span></li>
      <li><span>Next: a HERA analog test with flight surgeons, measuring false alarms and crew minutes per day.</span></li>
    </ul>
    <p class="links" style="margin-top:28px">Live: <a href="https://neveleren.github.io/space-apps-2026-crew-health/">neveleren.github.io/space-apps-2026-crew-health</a><br>Code: <a href="https://github.com/neveleren/space-apps-2026-crew-health">github.com/neveleren/space-apps-2026-crew-health</a></p>
    <p class="src" style="margin-top:16px">The idea and every decision: the team's human member. Code, research and these slides: drafted with SI (Claude, Anthropic) and checked against the cited sources. Example crew data are made up.</p>`,
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
