// The seven demo slides (Space Apps allows at most seven, title included). Text drafted with SI (Claude, Anthropic);
// every fact carries its source on the slide.
const SI = 'Slides drafted with SI (Claude); every fact names its source';
const FOOT = 'Crew Health Console · team Just For Fun, Kyiv · NASA Space Apps Challenge 2026';

export const SLIDES = [
  {
    kicker: 'NASA SPACE APPS CHALLENGE 2026 · CREATE HEALTH MONITORING SOFTWARE FOR ASTRONAUTS',
    title: 'Crew Health Console',
    html: `<div><p class="lead">Health monitoring for astronauts that speaks up only when something really needs them, and keeps working when Earth is too far to ask.</p>
      <div class="chips"><span class="chip c0">Runs offline on a crew laptop</span><span class="chip c0">Every number says where it comes from</span><span class="chip c0">Follows NASA-STD-3001 display rules</span><span class="chip c0">Real NASA data inside</span></div></div>
      <img class="shot" src="./img/today.png" alt="Today on a calm day: As of 15 Nov 2026, your physical and mental condition is excellent">`,
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
        <li><span>Changes common in flight stay quiet; a value past a <b>medical red limit</b> alerts the person at once and every crew screen in use within seconds, with no AI in the loop.</span></li>
        <li><span>Then a choice: <b>Details · Analyse with AI · Message the doctor</b>.</span></li>
      </ul></div>
      <img class="shot" src="./img/today-attention.png" alt="Today with a reason and the three buttons">`,
  },
  {
    kicker: 'NOTHING UNEXPLAINED',
    title: 'Every number says where it comes from',
    html: `<ul class="points">
      <li><span>Point at any value or press <b>?</b>: what it is, what measures it on the ISS (with a link), what else could measure it, how it reaches the program, and how <b>this</b> value was produced.</span></li>
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
    <img class="shot" src="./img/mind.png" alt="The team's AI support offer after hard days, with the choice: an anonymous session with AI or telling the doctor on Earth">`,
    src: 'Sources: NASA BMed evidence report (2025); NASA Journals study (Stuster 2010); NASA Reaction Self Test (2009); Stanley and Brown safety planning (JAMA Psychiatry 2018); APA health advisory on AI chatbots (2025)',
  },
  {
    kicker: 'SAFE, PRIVATE, CONNECTED WHERE IT CAN BE',
    title: 'Danger reaches the crew in seconds; privacy stays',
    html: `<ul class="points">
      <li><span><b>Safe:</b> past a red limit, the person is alerted at once and every crew screen in use within seconds, with no AI and no link to Earth; a message to the doctor is written by itself. Crewmates see <b>one line</b>, never the record.</span></li>
      <li><span><b>Private:</b> each person opens only their own medical record, everything in one place, with an optional PIN; messages to the doctor are sealed for the flight surgeon's key.</span></li>
      <li><span><b>Connected:</b> Bluetooth health devices, HL7 FHIR export, NASA OSDR blood tests, live ISS cabin air (NASA ISSLive), NOAA space weather. <b>Planned with partners:</b> EveryWear, NASA's crew medical record.</span></li>
    </ul>
    <div class="shots2"><img class="shot" src="./img/crew-alarm.png" alt="A crewmate's screen: Tom needs help now, blood oxygen 85 percent; go to them"><img class="shot" src="./img/connections-live.png" alt="Live rows of the Connections list: ISS cabin air from NASA ISSLive and NOAA space weather, each marked Earth demo"></div>`,
    src: 'Sources: MedlinePlus pulse oximetry (urgent at 88% or lower); ISS crew code of conduct, 14 CFR 1214.403; Bluetooth GATT specifications; HL7 FHIR R4; NASA OSDR OSD-575 and OSD-569; NASA ISS Live! (NTRS 20130013825); NOAA SWPC',
  },
  {
    kicker: 'TRY IT',
    title: 'Open source, tested, ready for a NASA analog test',
    one: true,
    html: `<ul class="points">
      <li><span>Built after <b>NASA-STD-3001</b> Vol 1 and Vol 2 Rev F, with a requirements map; software TRL 3 to 4 by our own assessment.</span></li>
      <li><span>Automatic tests and an end-to-end walk through every screen; Apache-2.0; no internet needed on board.</span></li>
      <li><span>Ready for a NASA analog test such as HERA: every alert is logged with its time to acknowledge, drills never count, and a de-identified study export is built in.</span></li>
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
  counter.textContent = `${at + 1} / ${SLIDES.length} · arrow keys`;
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
