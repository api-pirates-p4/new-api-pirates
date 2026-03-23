---
layout: page
permalink: /titanic
---

<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Titanic Survival Predictor</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet"/>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink: #e8e4dc;
    --ink-dim: #a09890;
    --border: rgba(232,228,220,0.15);
    --border-mid: rgba(232,228,220,0.25);
    --surface: rgba(232,228,220,0.05);
    --gold: #c9a84c;
    --gold-dim: rgba(201,168,76,0.4);
    --green: #4caf82;
    --red: #e05c5c;
    --accent: rgba(232,228,220,0.6);
  }

  body {
    background: transparent;
    color: var(--ink);
    font-family: 'EB Garamond', Georgia, serif;
    font-weight: 400;
    padding: 4rem 2.5rem 5rem;
    display: flex;
    justify-content: center;
  }

  .container { width: 100%; max-width: 920px; }

  /* MASTHEAD */
  .dateline {
    font-size: 10px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--ink-dim);
    text-align: center;
    margin-bottom: 1.25rem;
  }

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(3.2rem, 9vw, 6.5rem);
    font-weight: 900;
    line-height: 0.95;
    text-align: center;
    color: var(--ink);
    margin-bottom: 0.75rem;
  }
  h1 em { font-style: italic; color: var(--accent); }

  .rule { height: 1px; background: var(--border-mid); margin: 0.9rem 0; }
  .rule.double {
    border-top: 3px double rgba(232,228,220,0.2);
    height: 0;
    background: none;
  }

  .subhead {
    font-style: italic;
    font-size: 1.15rem;
    color: var(--ink-dim);
    text-align: center;
    line-height: 1.6;
    margin-bottom: 2.5rem;
  }

  /* FORM */
  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0;
    border-top: 1px solid var(--border);
    border-left: 1px solid var(--border);
    margin-bottom: 1.5rem;
  }

  .field {
    padding: 1.1rem 1.25rem;
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }
  .field.full { grid-column: 1 / -1; }

  label {
    display: block;
    font-family: 'EB Garamond', serif;
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--ink-dim);
    margin-bottom: 0.45rem;
  }

  select, input[type="number"] {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--border-mid);
    font-family: 'EB Garamond', serif;
    font-size: 1.15rem;
    color: var(--ink);
    outline: none;
    padding: 0.3rem 0;
    appearance: none;
    -webkit-appearance: none;
    transition: border-color 0.15s;
  }
  select:focus, input:focus { border-bottom-color: var(--gold); }
  select option { background: #111; color: #e8e4dc; }

  .select-wrap { position: relative; }
  .select-wrap::after {
    content: '↓';
    position: absolute;
    right: 0; top: 50%;
    transform: translateY(-50%);
    font-size: 0.7rem;
    color: var(--ink-dim);
    pointer-events: none;
  }

  /* Slider */
  input[type="range"] {
    width: 100%;
    -webkit-appearance: none;
    height: 1px;
    background: var(--border-mid);
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin-top: 0.5rem;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px; height: 12px;
    border-radius: 50%;
    background: var(--gold);
    cursor: pointer;
  }
  .slider-readout {
    font-family: 'Playfair Display', serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--gold);
  }

  /* BUTTON */
  .predict-btn {
    width: 100%;
    padding: 1.1rem;
    background: transparent;
    color: var(--ink);
    border: 1px solid var(--border-mid);
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem;
    font-style: italic;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
    margin-top: 0.25rem;
  }
  .predict-btn:hover { border-color: var(--gold); color: var(--gold); }

  /* RESULT */
  #result {
    display: none;
    margin-top: 2.5rem;
    animation: fadeUp 0.5s ease forwards;
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .verdict {
    text-align: center;
    padding: 2.5rem 2rem;
    border: 1px solid var(--border-mid);
    margin-bottom: 2rem;
    position: relative;
  }
  .verdict-kicker {
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--ink-dim);
    margin-bottom: 0.6rem;
  }
  .verdict-head {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.2rem, 6vw, 3.8rem);
    font-weight: 900;
    line-height: 1.05;
  }
  .verdict-head.survived { color: var(--green); }
  .verdict-head.perished { color: var(--red); }
  .verdict-head.uncertain { color: var(--gold); }
  .verdict-sub {
    margin-top: 0.4rem;
    font-style: italic;
    font-size: 0.9rem;
    color: var(--ink-dim);
  }

  /* BARS */
  .bars { margin-bottom: 2rem; }
  .bar-row {
    display: flex; align-items: center; gap: 1rem;
    padding: 0.65rem 0;
    border-bottom: 1px solid var(--border);
  }
  .bar-row:first-child { border-top: 1px solid var(--border); }
  .bar-label { font-size: 0.95rem; color: var(--ink-dim); width: 70px; flex-shrink: 0; font-style: italic; }
  .bar-track { flex: 1; height: 4px; background: var(--border); overflow: hidden; }
  .bar-fill { height: 100%; width: 0; transition: width 1s cubic-bezier(0.16,1,0.3,1); }
  .bar-fill.s { background: var(--green); }
  .bar-fill.d { background: var(--red); }
  .bar-pct { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 700; width: 52px; text-align: right; }

  /* FEATURES */
  .col-head {
    font-size: 10px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--ink-dim);
    margin-bottom: 0.75rem;
  }
  .feat-row {
    display: flex; align-items: center; gap: 0.75rem;
    padding: 0.45rem 0;
    border-bottom: 1px solid var(--border);
  }
  .feat-row:last-child { border-bottom: none; }
  .feat-name { font-size: 0.95rem; color: var(--ink-dim); font-style: italic; width: 90px; flex-shrink: 0; }
  .feat-track { flex: 1; height: 1px; background: var(--border-mid); }
  .feat-fill { height: 100%; background: var(--gold); width: 0; transition: width 1.2s cubic-bezier(0.16,1,0.3,1); }
  .feat-pct { font-family: 'Playfair Display', serif; font-size: 0.9rem; color: var(--gold); width: 36px; text-align: right; }
</style>
</head>
<body>
<div class="container">

  <div class="dateline">✦ &nbsp; April 15, 1912 &nbsp; · &nbsp; North Atlantic &nbsp; · &nbsp; Machine Learning &nbsp; ✦</div>

  <h1>Would You Have<br>Survived <em>the Titanic?</em></h1>

  <div class="rule double"></div>
  <p class="subhead">Enter your passenger profile below. A logistic regression model<br>trained on 891 passengers will determine your fate.</p>

  <div class="form-grid">

    <div class="field">
      <label>Passenger Class</label>
      <div class="select-wrap">
        <select id="pclass">
          <option value="1">1st Class</option>
          <option value="2" selected>2nd Class</option>
          <option value="3">3rd Class</option>
        </select>
      </div>
    </div>

    <div class="field">
      <label>Sex</label>
      <div class="select-wrap">
        <select id="sex">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>

    <div class="field">
      <label>Traveling Alone?</label>
      <div class="select-wrap">
        <select id="alone">
          <option value="false" selected>No</option>
          <option value="true">Yes</option>
        </select>
      </div>
    </div>

    <div class="field">
      <label>Siblings / Spouses Aboard</label>
      <input type="number" id="sibsp" value="1" min="0" max="8"/>
    </div>

    <div class="field">
      <label>Parents / Children Aboard</label>
      <input type="number" id="parch" value="1" min="0" max="6"/>
    </div>

    <div class="field">
      <label>Port of Embarkation</label>
      <div class="select-wrap">
        <select id="embarked">
          <option value="S" selected>Southampton</option>
          <option value="C">Cherbourg</option>
          <option value="Q">Queenstown</option>
        </select>
      </div>
    </div>

    <div class="field full">
      <label>Age — <span class="slider-readout" id="age-out">30</span></label>
      <input type="range" id="age" min="1" max="80" value="30"
        oninput="document.getElementById('age-out').textContent=this.value"/>
    </div>

    <div class="field full">
      <label>Fare Paid — <span class="slider-readout" id="fare-out">$16</span></label>
      <input type="range" id="fare" min="0" max="512" value="16"
        oninput="document.getElementById('fare-out').textContent='$'+this.value"/>
    </div>

  </div>

  <button class="predict-btn" onclick="predict()">Test My Chances Aboard the Titanic →</button>

  <div id="result">
    <div class="rule" style="margin-top:2rem;"></div>

    <div class="verdict">
      <div class="verdict-kicker">Logistic Regression Prediction</div>
      <div class="verdict-head" id="r-head"></div>
      <div class="verdict-sub" id="r-sub"></div>
    </div>

    <div class="bars">
      <div class="bar-row">
        <span class="bar-label">Survived</span>
        <div class="bar-track"><div class="bar-fill s" id="b-survive"></div></div>
        <span class="bar-pct" id="p-survive" style="color:var(--green)"></span>
      </div>
      <div class="bar-row">
        <span class="bar-label">Perished</span>
        <div class="bar-track"><div class="bar-fill d" id="b-die"></div></div>
        <span class="bar-pct" id="p-die" style="color:var(--red)"></span>
      </div>
    </div>

    <div class="col-head">Feature Importance (Decision Tree)</div>
    <div id="feat-list"></div>
  </div>

</div>
<script>
async function predict() {
  const passenger = {
    pclass:   +document.getElementById('pclass').value,
    sex:       document.getElementById('sex').value,
    age:      +document.getElementById('age').value,
    sibsp:    +document.getElementById('sibsp').value,
    parch:    +document.getElementById('parch').value,
    fare:     +document.getElementById('fare').value,
    embarked:  document.getElementById('embarked').value,
    alone:     document.getElementById('alone').value === 'true'
  };

  // Disable button while waiting
  const btn = document.querySelector('.predict-btn');
  btn.textContent = 'Consulting the manifest…';
  btn.disabled = true;

  try {
    // POST to Flask backend
   const response = await fetch('http://127.0.0.1:8587/api/titanic/predict', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',  // ← remove this if it's there
  body: JSON.stringify(passenger)
});

    if (!response.ok) throw new Error('Backend error: ' + response.status);
    const data = await response.json();

    const s = data.survive;
    const d = data.die;

    showResult(s, d);

    // Fetch feature weights separately
    const wRes = await fetch('http://127.0.0.1:8587/api/titanic/feature_weights');
    if (wRes.ok) {
      const weights = await wRes.json();
      showFeatures(weights);
    }

  } catch (err) {
    alert('Could not reach the backend. Make sure your Flask server is running.\n\n' + err.message);
  } finally {
    btn.textContent = 'Test My Chances Aboard the Titanic →';
    btn.disabled = false;
  }
}

function showResult(s, d) {
  const el = document.getElementById('result');
  el.style.display = 'block';
  el.style.animation = 'none'; void el.offsetWidth; el.style.animation = 'fadeUp 0.5s ease forwards';

  const head = document.getElementById('r-head');
  if (s >= 0.62) {
    head.textContent = 'You Would Have Survived.';
    head.className = 'verdict-head survived';
    document.getElementById('r-sub').textContent = 'The odds were in your favor that night.';
  } else if (s >= 0.4) {
    head.textContent = 'Your Fate Was Uncertain.';
    head.className = 'verdict-head uncertain';
    document.getElementById('r-sub').textContent = 'It could have gone either way.';
  } else {
    head.textContent = 'You Would Have Perished.';
    head.className = 'verdict-head perished';
    document.getElementById('r-sub').textContent = 'The North Atlantic would have claimed you.';
  }

  document.getElementById('p-survive').textContent = (s * 100).toFixed(1) + '%';
  document.getElementById('p-die').textContent = (d * 100).toFixed(1) + '%';
  setTimeout(() => {
    document.getElementById('b-survive').style.width = (s * 100).toFixed(1) + '%';
    document.getElementById('b-die').style.width = (d * 100).toFixed(1) + '%';
  }, 100);

  el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showFeatures(weights) {
  const sorted = Object.entries(weights).sort((a, b) => b[1] - a[1]);
  const fl = document.getElementById('feat-list');
  fl.innerHTML = sorted.map(([f, i]) => `
    <div class="feat-row">
      <span class="feat-name">${f}</span>
      <div class="feat-track"><div class="feat-fill" data-w="${(i * 100).toFixed(1)}%"></div></div>
      <span class="feat-pct">${(i * 100).toFixed(1)}%</span>
    </div>`).join('');
  setTimeout(() => fl.querySelectorAll('.feat-fill').forEach(e => e.style.width = e.dataset.w), 200);
}
</script>
</body>
