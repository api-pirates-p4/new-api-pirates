---
layout: post 
feedback: true
hide: true
title: PVO Ml Solutions
permalink: /MelTitanic
---
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PVO — Find Your Support</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --red:   #c0392b;
  --navy:  #1a1f3c;
  --gold:  #d4a843;
  --dark:  #0d1024;
  --glass: rgba(255,255,255,0.06);
  --ease:  cubic-bezier(0.16, 1, 0.3, 1);
}
html, body { height: 100%; font-family: 'DM Sans', sans-serif; background: var(--dark); color: #fff; overflow-x: hidden; }

.bg-canvas {
  position: fixed; inset: 0; z-index: 0;
  background: radial-gradient(ellipse at 20% 50%, #1e2a5e 0%, transparent 60%),
              radial-gradient(ellipse at 80% 20%, #2d1a3e 0%, transparent 50%), var(--dark);
}
.bg-canvas::after {
  content: '';
  position: absolute; inset: 0;
  background-image:
    radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.4) 0%, transparent 100%),
    radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.3) 0%, transparent 100%),
    radial-gradient(1px 1px at 80% 15%, rgba(255,255,255,0.35) 0%, transparent 100%),
    radial-gradient(1px 1px at 40% 85%, rgba(255,255,255,0.25) 0%, transparent 100%),
    radial-gradient(1.5px 1.5px at 90% 55%, rgba(255,255,255,0.3) 0%, transparent 100%),
    radial-gradient(1px 1px at 55% 40%, rgba(255,255,255,0.4) 0%, transparent 100%);
}

.app { position: relative; z-index: 1; min-height: 100vh; display: flex; flex-direction: column; }

.topbar { display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 1.5rem 1rem; }
.topbar-logo { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; letter-spacing: 3px; color: var(--gold); }
.topbar-skip { font-size: 0.8rem; color: rgba(255,255,255,0.35); background: none; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif; transition: color 0.2s; }
.topbar-skip:hover { color: rgba(255,255,255,0.65); }

.progress-wrap { padding: 0 1.5rem; margin-bottom: 0.5rem; }
.progress-track { height: 3px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden; }
.progress-fill { height: 100%; background: linear-gradient(90deg, var(--red), var(--gold)); border-radius: 2px; transition: width 0.5s var(--ease); width: 0%; }
.progress-label { display: flex; justify-content: space-between; margin-top: 0.4rem; font-size: 0.72rem; color: rgba(255,255,255,0.35); letter-spacing: 1px; }

.stage { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1rem 1.25rem 2rem; }

.q-card { width: 100%; max-width: 560px; animation: slideUp 0.45s var(--ease); }
@keyframes slideUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
.q-card.exit { animation: slideOut 0.3s var(--ease) forwards; }
@keyframes slideOut { to { opacity: 0; transform: translateY(-20px); } }

.q-tag { display: inline-block; font-size: 0.68rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); margin-bottom: 0.9rem; }
.q-text { font-family: 'Bebas Neue', sans-serif; font-size: clamp(2rem, 6vw, 3.2rem); line-height: 1.05; letter-spacing: 1px; color: #fff; margin-bottom: 0.4rem; }
.q-sub { font-size: 0.88rem; color: rgba(255,255,255,0.45); margin-bottom: 1.8rem; line-height: 1.5; }

.answer-grid { display: grid; gap: 0.65rem; width: 100%; }
.answer-grid.cols-2 { grid-template-columns: 1fr 1fr; }
.answer-grid.cols-1 { grid-template-columns: 1fr; }

.answer-tile {
  position: relative; background: var(--glass);
  border: 1.5px solid rgba(255,255,255,0.12); border-radius: 14px;
  padding: 1rem 1.1rem; cursor: pointer;
  transition: all 0.2s var(--ease);
  display: flex; align-items: center; gap: 0.8rem;
  backdrop-filter: blur(8px); overflow: hidden;
  user-select: none; -webkit-tap-highlight-color: transparent;
}
.answer-tile:hover { border-color: rgba(255,255,255,0.28); transform: translateY(-2px); background: rgba(255,255,255,0.09); }
.answer-tile:active { transform: scale(0.98); }
.answer-tile.selected { border-color: var(--gold); background: rgba(212,168,67,0.14); box-shadow: 0 0 0 1px rgba(212,168,67,0.3), 0 4px 24px rgba(212,168,67,0.15); }
.answer-tile.selected .tile-icon { background: var(--gold); color: var(--dark); }
.answer-tile.selected .tile-label { color: #fff; }

.tile-icon { width: 38px; height: 38px; flex-shrink: 0; border-radius: 10px; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; transition: all 0.2s; }
.tile-label { font-size: 0.95rem; font-weight: 500; color: rgba(255,255,255,0.8); line-height: 1.3; transition: color 0.2s; }
.tile-sub { font-size: 0.76rem; color: rgba(255,255,255,0.4); margin-top: 0.15rem; }

.stepper-wrap { display: flex; align-items: center; background: var(--glass); border: 1.5px solid rgba(255,255,255,0.12); border-radius: 14px; padding: 0.5rem; width: fit-content; backdrop-filter: blur(8px); }
.stepper-btn { width: 48px; height: 48px; background: rgba(255,255,255,0.07); border: none; border-radius: 10px; color: #fff; font-size: 1.4rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s; font-family: 'DM Sans', sans-serif; }
.stepper-btn:hover { background: rgba(255,255,255,0.15); }
.stepper-btn:active { transform: scale(0.92); }
.stepper-val { font-family: 'Bebas Neue', sans-serif; font-size: 2.4rem; color: #fff; min-width: 72px; text-align: center; letter-spacing: 2px; }

.continue-btn { margin-top: 1.5rem; width: 100%; padding: 1rem; background: var(--red); color: #fff; border: none; border-radius: 12px; font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem; letter-spacing: 3px; cursor: pointer; transition: all 0.2s var(--ease); display: flex; align-items: center; justify-content: center; gap: 0.5rem; opacity: 0; pointer-events: none; }
.continue-btn.visible { opacity: 1; pointer-events: auto; animation: fadeIn 0.3s var(--ease); }
@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
.continue-btn:hover { background: #a93226; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(192,57,43,0.4); }
.continue-btn:active { transform: scale(0.98); }
.continue-arrow { font-size: 1rem; transition: transform 0.2s; }
.continue-btn:hover .continue-arrow { transform: translateX(4px); }

.result-screen { width: 100%; max-width: 560px; animation: slideUp 0.5s var(--ease); }
.result-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 4px; text-transform: uppercase; color: rgba(255,255,255,0.4); text-align: center; margin-bottom: 0.75rem; }
.result-seal { width: 90px; height: 90px; border-radius: 50%; margin: 0 auto 1.25rem; display: flex; align-items: center; justify-content: center; font-size: 2.2rem; }
.result-seal.yes { background: radial-gradient(circle, rgba(91,196,160,0.3) 0%, rgba(91,196,160,0.05) 70%); border: 2px solid rgba(91,196,160,0.5); animation: pulse-green 2s ease-in-out infinite; }
.result-seal.refer { background: radial-gradient(circle, rgba(212,168,67,0.3) 0%, rgba(212,168,67,0.05) 70%); border: 2px solid rgba(212,168,67,0.5); animation: pulse-gold 2s ease-in-out infinite; }
@keyframes pulse-green { 0%,100%{box-shadow:0 0 30px rgba(91,196,160,0.2)}50%{box-shadow:0 0 55px rgba(91,196,160,0.4)} }
@keyframes pulse-gold  { 0%,100%{box-shadow:0 0 30px rgba(212,168,67,0.2)}50%{box-shadow:0 0 55px rgba(212,168,67,0.4)} }

.result-headline { font-family: 'Bebas Neue', sans-serif; font-size: clamp(2rem, 6vw, 3rem); line-height: 1.05; letter-spacing: 1px; text-align: center; margin-bottom: 0.5rem; }
.result-headline.yes   { color: #5bc4a0; }
.result-headline.refer { color: var(--gold); }
.result-desc { text-align: center; font-size: 0.9rem; color: rgba(255,255,255,0.55); line-height: 1.6; margin-bottom: 1.75rem; max-width: 420px; margin-left: auto; margin-right: auto; }

.prob-display { background: var(--glass); border: 1.5px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 1.25rem 1.25rem 1rem; margin-bottom: 1rem; backdrop-filter: blur(8px); }
.prob-row-inner { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem; }
.prob-name { font-size: 0.82rem; font-weight: 500; color: rgba(255,255,255,0.7); }
.prob-pct { font-family: 'Bebas Neue', sans-serif; font-size: 1.3rem; letter-spacing: 1px; }
.prob-pct.green { color: #5bc4a0; }
.prob-pct.gold  { color: var(--gold); }
.prob-track { height: 6px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden; margin-bottom: 0.9rem; }
.prob-fill  { height: 100%; border-radius: 3px; width: 0; transition: width 1s var(--ease); }
.prob-fill.green { background: linear-gradient(90deg, #2d9e7a, #5bc4a0); }
.prob-fill.gold  { background: linear-gradient(90deg, #a07820, #d4a843); }

.steps-list { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem; }
.step-row { display: flex; gap: 0.75rem; align-items: flex-start; background: var(--glass); border: 1.5px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 0.85rem 1rem; animation: fadeIn 0.4s var(--ease) both; }
.step-row:nth-child(1){animation-delay:0.1s}.step-row:nth-child(2){animation-delay:0.2s}.step-row:nth-child(3){animation-delay:0.3s}
.step-num-badge { width: 24px; height: 24px; flex-shrink: 0; border-radius: 6px; background: var(--red); font-size: 0.72rem; font-weight: 700; display: flex; align-items: center; justify-content: center; color: #fff; margin-top: 1px; }
.step-content strong { font-size: 0.88rem; display: block; margin-bottom: 0.15rem; }
.step-content span { font-size: 0.8rem; color: rgba(255,255,255,0.45); line-height: 1.45; }

.cta-btn { margin-top: 1.25rem; width: 100%; padding: 1rem; background: var(--red); color: #fff; border: none; border-radius: 12px; font-family: 'Bebas Neue', sans-serif; font-size: 1.25rem; letter-spacing: 3px; cursor: pointer; transition: all 0.2s var(--ease); text-decoration: none; display: block; text-align: center; }
.cta-btn:hover { background: #a93226; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(192,57,43,0.4); }
.restart-link { text-align: center; margin-top: 1rem; font-size: 0.8rem; color: rgba(255,255,255,0.3); cursor: pointer; background: none; border: none; font-family: 'DM Sans', sans-serif; text-decoration: underline; text-underline-offset: 2px; display: block; width: 100%; }
.restart-link:hover { color: rgba(255,255,255,0.55); }

.ripple { position: absolute; border-radius: 50%; background: rgba(255,255,255,0.15); transform: scale(0); animation: ripple-anim 0.5s linear; pointer-events: none; }
@keyframes ripple-anim { to { transform: scale(4); opacity: 0; } }

.confetti-piece { position: fixed; animation: fall linear forwards; z-index: 100; pointer-events: none; }
@keyframes fall { 0%{transform:translateY(-20px) rotate(0deg);opacity:1} 100%{transform:translateY(100vh) rotate(720deg);opacity:0} }
</style>
</head>
<body>
<div class="bg-canvas"></div>
<div class="app">
  <div class="topbar">
    <div class="topbar-logo">PVO &nbsp;·&nbsp; Poway Veterans Org</div>
    <button class="topbar-skip" onclick="window.open('https://powayveterans.org/request-assistance/','_blank')">Skip to full form →</button>
  </div>
  <div class="progress-wrap">
    <div class="progress-track"><div class="progress-fill" id="prog-fill"></div></div>
    <div class="progress-label"><span id="prog-step">Question 1 of 7</span><span id="prog-pct">0%</span></div>
  </div>
  <div class="stage" id="stage"></div>
</div>

<script>
const QUESTIONS = [
  { id:'vet_status', tag:'Who you are', text:'Are you a veteran or a family member?', sub:'PVO supports veterans and their dependents across the Poway–Ramona area.', type:'tiles', cols:2,
    options:[{value:'veteran',icon:'🎖️',label:'I served',sub:'Active duty or veteran'},{value:'dependent',icon:'👪',label:"I'm family",sub:'Dependent or surviving spouse'}]},
  { id:'location', tag:'Where you are', text:"What area do you call home?", sub:'PVO primarily serves Poway, Ramona, and surrounding San Diego communities.', type:'tiles', cols:2,
    options:[{value:'poway',icon:'📍',label:'Poway'},{value:'ramona',icon:'📍',label:'Ramona'},{value:'escondido',icon:'📍',label:'Escondido'},{value:'vista',icon:'📍',label:'Vista'},{value:'santee',icon:'📍',label:'Santee'},{value:'san_marcos',icon:'📍',label:'San Marcos'},{value:'san_diego',icon:'📍',label:'San Diego'},{value:'outside_area',icon:'🌐',label:'Outside area'}]},
  { id:'need_type', tag:'What you need', text:"What's your primary need right now?", sub:'Pick the one that feels most urgent.', type:'tiles', cols:2,
    options:[{value:'rent',icon:'🏠',label:'Rent / housing'},{value:'utility',icon:'💡',label:'Utility bills'},{value:'food',icon:'🛒',label:'Food assistance'},{value:'transport',icon:'🚗',label:'Transportation'},{value:'home_repair',icon:'🔧',label:'Home repairs'},{value:'medical',icon:'⚕️',label:'Medical costs'},{value:'counseling',icon:'🧠',label:'Counseling'},{value:'legal',icon:'⚖️',label:'Legal / VA benefits'},{value:'vehicle_reg',icon:'📋',label:'Vehicle registration'},{value:'moving',icon:'📦',label:'Moving / relocation'},{value:'storage',icon:'🗄️',label:'Storage fees'},{value:'mental_health',icon:'💙',label:'PTSD / TBI support'}]},
  { id:'employment', tag:'Your situation', text:"What's your current work status?", type:'tiles', cols:1,
    options:[{value:'employed',icon:'💼',label:'Working',sub:'Full or part time'},{value:'unemployed',icon:'🔍',label:'Between jobs',sub:'Actively looking or laid off'},{value:'disabled',icon:'🛡️',label:'Disabled / unable to work',sub:'Service-connected or medical'}]},
  { id:'household_sz', tag:'Your household', text:'How many people are in your household?', sub:'Including yourself.', type:'stepper', min:1, max:12, default:1 },
  { id:'housing_risk', tag:'Housing safety', text:'Is your housing at risk?', sub:'This helps us flag urgency.', type:'tiles', cols:1,
    options:[{value:1,icon:'🚨',label:"Yes — I'm behind on rent, facing eviction, or homeless"},{value:0,icon:'✅',label:'No — my housing is stable right now'}]},
  { id:'has_va_care', tag:'VA connection', text:'Are you connected to VA services?', sub:'VA healthcare, disability claims, or a VA counselor.', type:'tiles', cols:1,
    options:[{value:1,icon:'🏥',label:"Yes — I'm in the VA system"},{value:0,icon:'❌',label:"No — I'm not currently connected"}]},
];

const answers = {};
let currentQ = 0;
let stepperVal = 1;

function updateProgress() {
  const pct = Math.round((currentQ / QUESTIONS.length) * 100);
  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('prog-pct').textContent = pct + '%';
  document.getElementById('prog-step').textContent = currentQ < QUESTIONS.length ? `Question ${currentQ+1} of ${QUESTIONS.length}` : 'Complete';
}

function renderQuestion(idx) {
  const q = QUESTIONS[idx];
  const stage = document.getElementById('stage');
  let body = '';

  if (q.type === 'tiles') {
    const gc = q.cols === 2 ? 'cols-2' : 'cols-1';
    body = `<div class="answer-grid ${gc}">` +
      q.options.map(o => `<div class="answer-tile" data-value="${o.value}" onclick="selectTile(this,'${q.id}','${String(o.value).replace(/'/g,"\\'")}')"><div class="tile-icon">${o.icon}</div><div><div class="tile-label">${o.label}</div>${o.sub?`<div class="tile-sub">${o.sub}</div>`:''}</div></div>`).join('') +
      `</div><button class="continue-btn" id="cont-btn" onclick="nextQuestion()">CONTINUE <span class="continue-arrow">→</span></button>`;
  } else {
    stepperVal = q.default;
    body = `<div class="stepper-wrap"><button class="stepper-btn" onclick="stepChange(-1)">−</button><div class="stepper-val" id="sdisplay">${q.default}</div><button class="stepper-btn" onclick="stepChange(1)">+</button></div>
    <button class="continue-btn visible" id="cont-btn" onclick="nextQuestion()">LOOKS GOOD <span class="continue-arrow">→</span></button>`;
  }

  stage.innerHTML = `<div class="q-card" id="q-card"><div class="q-tag">${q.tag}</div><div class="q-text">${q.text}</div>${q.sub?`<div class="q-sub">${q.sub}</div>`:''} ${body}</div>`;
  updateProgress();
}

function selectTile(el, qId, value) {
  const rect = el.getBoundingClientRect();
  const rip = document.createElement('span');
  rip.className = 'ripple';
  const sz = el.offsetWidth * 2;
  rip.style.cssText = `width:${sz}px;height:${sz}px;left:${rect.width/2-el.offsetWidth}px;top:${rect.height/2-el.offsetWidth}px`;
  el.appendChild(rip);
  setTimeout(() => rip.remove(), 500);

  document.querySelectorAll('.answer-tile').forEach(t => t.classList.remove('selected'));
  el.classList.add('selected');
  answers[qId] = isNaN(Number(value)) ? value : Number(value);

  const btn = document.getElementById('cont-btn');
  if (btn) btn.classList.add('visible');

  const q = QUESTIONS[currentQ];
  if (q.cols === 1 || (q.options && q.options.length <= 2)) {
    setTimeout(() => nextQuestion(), 380);
  }
}

function stepChange(d) {
  const q = QUESTIONS[currentQ];
  stepperVal = Math.max(q.min, Math.min(q.max, stepperVal + d));
  document.getElementById('sdisplay').textContent = stepperVal;
  answers[q.id] = stepperVal;
}

function nextQuestion() {
  const q = QUESTIONS[currentQ];
  if (answers[q.id] === undefined && q.type !== 'stepper') return;
  if (q.type === 'stepper') answers[q.id] = stepperVal;

  const card = document.getElementById('q-card');
  if (card) card.classList.add('exit');
  setTimeout(() => {
    currentQ++;
    if (currentQ >= QUESTIONS.length) showResult();
    else renderQuestion(currentQ);
  }, 280);
}

function showResult() {
  const stage = document.getElementById('stage');
  document.getElementById('prog-fill').style.width = '100%';
  document.getElementById('prog-pct').textContent = '100%';
  document.getElementById('prog-step').textContent = 'Complete';

  const result = simulate(answers);
  const isPVO = result.pvo_direct >= 0.5;
  if (isPVO) launchConfetti();

  const pvoPct = Math.round(result.pvo_direct * 100);
  const refPct = Math.round(result.refer_out * 100);
  const confMap = { high:'✦ High confidence', medium:'~ Medium confidence', low:'~ Low confidence' };

  const steps = isPVO
    ? [{t:'Gather proof of service',b:'DD-214 or military ID + documentation of your need (bill, lease, medical records).'},{t:'Submit the application',b:'Takes ~5 min at powayveterans.org — a volunteer reviews it personally.'},{t:'Expect a callback',b:"PVO's review committee contacts you before it goes to the board."}]
    : [{t:'Apply anyway',b:'Even referrals start here — PVO will personally connect you to the right partner.'},{t:'Call or email PVO',b:'(858) 206-8854 · contact@powayveterans.org · Response within 1 business day.'},{t:'Know your partners',b:'PVO works with DAV, STEP, Wounded Warrior Homes, WAVE Academy, and VA Medical.'}];

  stage.innerHTML = `
    <div class="result-screen">
      <div class="result-label">${confMap[result.confidence]}</div>
      <div class="result-seal ${isPVO?'yes':'refer'}">${isPVO?'✓':'→'}</div>
      <div class="result-headline ${isPVO?'yes':'refer'}">${isPVO?'PVO CAN HELP YOU DIRECTLY':'WE\'LL CONNECT YOU TO THE RIGHT SUPPORT'}</div>
      <p class="result-desc">${isPVO?"Based on your answers, PVO has directly assisted veterans in similar situations. Here's what to do next.":"Your need may be best served through a specialized partner — but PVO will personally make that connection for you."}</p>
      <div class="prob-display">
        <div class="prob-row-inner"><span class="prob-name">PVO handles directly</span><span class="prob-pct green" id="pvo-pct">0%</span></div>
        <div class="prob-track"><div class="prob-fill green" id="pvo-bar"></div></div>
        <div class="prob-row-inner"><span class="prob-name">Referred to partner org</span><span class="prob-pct gold" id="ref-pct">0%</span></div>
        <div class="prob-track"><div class="prob-fill gold" id="ref-bar"></div></div>
      </div>
      <div class="steps-list">${steps.map((s,i)=>`<div class="step-row"><div class="step-num-badge">${i+1}</div><div class="step-content"><strong>${s.t}</strong><span>${s.b}</span></div></div>`).join('')}</div>
      <a class="cta-btn" href="https://powayveterans.org/request-assistance/" target="_blank">APPLY NOW →</a>
      <button class="restart-link" onclick="restart()">Start over with different answers</button>
    </div>`;

  setTimeout(() => {
    document.getElementById('pvo-bar').style.width = pvoPct + '%';
    document.getElementById('ref-bar').style.width = refPct + '%';
    document.getElementById('pvo-pct').textContent = pvoPct + '%';
    document.getElementById('ref-pct').textContent = refPct + '%';
  }, 200);

  fetch('/api/veteran/predict', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(answers) })
    .then(r=>r.json()).then(r=>{
      const p=Math.round(r.pvo_direct*100), rv=Math.round(r.refer_out*100);
      document.getElementById('pvo-bar').style.width=p+'%'; document.getElementById('pvo-pct').textContent=p+'%';
      document.getElementById('ref-bar').style.width=rv+'%'; document.getElementById('ref-pct').textContent=rv+'%';
    }).catch(()=>{});
}

function simulate(a) {
  const direct=['rent','utility','food','transport','home_repair','vehicle_reg','medical','storage','moving'];
  const refer=['counseling','legal','mental_health'];
  const inArea=['poway','ramona','escondido','vista','santee','san_marcos','spring_valley','mira_mesa','carlsbad','imperial_beach','pacific_beach','chula_vista','fallbrook','san_diego'];
  let s=0.5;
  if(direct.includes(a.need_type))s+=0.22;
  if(refer.includes(a.need_type))s-=0.30;
  if(inArea.includes(a.location))s+=0.18;
  if(a.location==='outside_area')s-=0.28;
  if(a.employment==='disabled')s+=0.08;
  if(a.housing_risk)s+=0.05;
  s=Math.max(0.06,Math.min(0.94,s));
  return { pvo_direct:parseFloat(s.toFixed(4)), refer_out:parseFloat((1-s).toFixed(4)), confidence:s>0.75?'high':s>0.58?'medium':'low' };
}

function launchConfetti() {
  const colors=['#c0392b','#d4a843','#5bc4a0','#ffffff','#3c6eb5'];
  for(let i=0;i<60;i++){
    const c=document.createElement('div');
    c.className='confetti-piece';
    c.style.cssText=`left:${Math.random()*100}vw;top:-10px;background:${colors[Math.floor(Math.random()*colors.length)]};width:${4+Math.random()*6}px;height:${4+Math.random()*6}px;border-radius:${Math.random()>.5?'50%':'2px'};animation-duration:${1.5+Math.random()*2}s;animation-delay:${Math.random()*.8}s;`;
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),4000);
  }
}

function restart() {
  Object.keys(answers).forEach(k=>delete answers[k]);
  currentQ=0; stepperVal=1;
  renderQuestion(0);
}

renderQuestion(0);
</script>
</body>
</html>