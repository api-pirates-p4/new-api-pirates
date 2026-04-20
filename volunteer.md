---
permalink: /volunteer
layout: page
api_base: http://localhost:4500
---
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Poway Veterans Organization — Volunteer & Donate</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Source+Sans+3:wght@300;400;600&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --navy: #1a2744;
    --navy-light: #243360;
    --gold: #c8922a;
    --gold-light: #e8b04a;
    --red: #8b1c1c;
    --cream: transparent;
    --warm-white: transparent;
    --gray: #6b7280;
    --gray-light: #e8e4dc;
    --text: #1f2937;
    --font-display: 'Playfair Display', Georgia, serif;
    --font-body: 'Source Sans 3', 'Georgia', sans-serif;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: var(--font-body);
    background: transparent;
    color: var(--text);
    line-height: 1.6;
    font-size: 16px;
  }

  /* ── NAV ── */
  nav {
    background: var(--navy);
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 12px rgba(0,0,0,0.3);
  }
  .nav-logo {
    font-family: var(--font-display);
    color: var(--gold);
    font-size: 1.1rem;
    letter-spacing: 0.04em;
  }
  .nav-tabs {
    display: flex;
    gap: 0;
    background: rgba(255,255,255,0.08);
    border-radius: 6px;
    overflow: hidden;
  }
  .nav-tab {
    padding: 0.5rem 1.5rem;
    color: rgba(255,255,255,0.7);
    cursor: pointer;
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 600;
    transition: all 0.2s;
    border: none;
    background: none;
  }
  .nav-tab.active, .nav-tab:hover {
    background: var(--gold);
    color: var(--navy);
  }

  /* ── PAGE SECTIONS ── */
  .page { display: none; }
  .page.active { display: block; }

  /* ── HERO BANNER ── */
  .hero {
    background: transparent;
    padding: 5rem 2rem 4rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .hero-eyebrow {
    font-family: var(--font-body);
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
    font-weight: 600;
  }
  .hero h1 {
    font-family: var(--font-display);
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    color: #fff;
    line-height: 1.15;
    margin-bottom: 1.25rem;
    position: relative;
  }
  .hero h1 em {
    color: var(--gold);
    font-style: normal;
  }
  .hero-sub {
    font-size: 1.1rem;
    color: rgba(255,255,255,0.72);
    max-width: 560px;
    margin: 0 auto 2.5rem;
    font-weight: 300;
    line-height: 1.75;
  }
  .hero-cta {
    display: inline-flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  .btn {
    display: inline-block;
    padding: 0.75rem 2rem;
    border-radius: 4px;
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 0.2s;
    text-decoration: none;
  }
  .btn-gold {
    background: var(--gold);
    color: var(--navy);
    border-color: var(--gold);
  }
  .btn-gold:hover { background: var(--gold-light); border-color: var(--gold-light); }
  .btn-outline {
    background: transparent;
    color: #fff;
    border-color: rgba(255,255,255,0.4);
  }
  .btn-outline:hover { border-color: var(--gold); color: var(--gold); }
  .btn-navy {
    background: var(--navy);
    color: #fff;
    border-color: var(--navy);
  }
  .btn-navy:hover { background: var(--navy-light); }

  /* ── SECTION SHELL ── */
  section { padding: 4rem 2rem; }
  .container { max-width: 1040px; margin: 0 auto; }
  .section-label {
    font-size: 0.7rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .section-title {
    font-family: var(--font-display);
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    color: var(--navy);
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  .section-body {
    font-size: 1rem;
    color: rgba(255,255,255,0.7);
    max-width: 640px;
    line-height: 1.75;
    margin-bottom: 2.5rem;
  }

  /* ── STAT BAR ── */
  .stat-bar {
    background: transparent;
    padding: 2.5rem 2rem;
    border-top: 1px solid rgba(200,146,42,0.15);
    border-bottom: 1px solid rgba(200,146,42,0.15);
  }
  .stat-grid {
    max-width: 1040px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 2rem;
    text-align: center;
  }
  .stat-item { position: relative; }
  .stat-item + .stat-item::before {
    content: '';
    position: absolute;
    left: 0; top: 50%;
    transform: translateY(-50%);
    height: 40px;
    width: 1px;
    background: rgba(200,146,42,0.3);
  }
  .stat-num {
    font-family: var(--font-display);
    font-size: 2.4rem;
    color: var(--gold);
    line-height: 1;
    margin-bottom: 0.35rem;
  }
  .stat-label {
    font-size: 0.78rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.6);
  }

  /* ── ROLE CARDS ── */
  .roles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 1.5rem;
  }
  .role-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(200,146,42,0.2);
    border-radius: 8px;
    padding: 1.75rem;
    cursor: pointer;
    transition: all 0.25s;
    position: relative;
    overflow: hidden;
  }
  .role-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 4px; height: 100%;
    background: var(--gold);
    opacity: 0;
    transition: opacity 0.2s;
  }
  .role-card:hover, .role-card.selected {
    border-color: var(--gold);
    box-shadow: 0 4px 20px rgba(200,146,42,0.15);
    transform: translateY(-2px);
  }
  .role-card:hover::before, .role-card.selected::before { opacity: 1; }
  .role-icon {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
    display: block;
  }
  .role-title {
    font-family: var(--font-display);
    font-size: 1.1rem;
    color: #fff;
    margin-bottom: 0.35rem;
  }
  .role-desc {
    font-size: 0.88rem;
    color: #ffffff !important;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  .role-card .role-body {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.35s ease, opacity 0.3s ease;
    opacity: 0;
  }
  .role-card.open .role-body {
    max-height: 200px;
    opacity: 1;
  }
  .role-toggle {
    float: right;
    font-size: 0.75rem;
    color: var(--gold);
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    transition: transform 0.3s;
    display: inline-block;
  }
  .role-card.open .role-toggle {
    transform: rotate(180deg);
  }
  .role-meta {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
  .tag {
    font-size: 0.72rem;
    padding: 0.2rem 0.6rem;
    border-radius: 20px;
    font-weight: 600;
    letter-spacing: 0.05em;
  }
  .tag-time { background: #eff6ff; color: #1d4ed8; }
  .tag-level { background: #f0fdf4; color: #166534; }
  .tag-group { background: #fef3c7; color: #92400e; }

  /* ── CORPORATE BAND ── */
  .corporate-band {
    background: transparent;
    border-top: 1px solid rgba(200,146,42,0.2);
    border-bottom: 1px solid rgba(200,146,42,0.2);
    padding: 3rem 2rem;
  }
  .corporate-inner {
    max-width: 1040px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }
  @media (max-width: 640px) { .corporate-inner { grid-template-columns: 1fr; } }
  .corporate-text h3 {
    font-family: var(--font-display);
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 0.75rem;
  }
  .corporate-text p { color: #fff !important; line-height: 1.75; font-size: 0.95rem; }
  .corporate-perks { list-style: none; margin-top: 1rem; }
  .corporate-perks li {
    font-size: 0.88rem;
    color: #fff !important;
    padding: 0.3rem 0;
    padding-left: 1.2rem;
    position: relative;
  }
  .corporate-perks li::before {
    content: '✓';
    position: absolute; left: 0;
    color: var(--gold);
    font-weight: 700;
  }

  /* ── SIGN-UP FORM ── */
  .form-section {
    background: transparent;
    padding: 4rem 2rem;
  }
  .form-shell {
    max-width: 680px;
    margin: 0 auto;
    background: transparent;
    border-radius: 10px;
    padding: 2.5rem;
    border: 1px solid rgba(200,146,42,0.25);
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  }
  .form-shell .section-title { margin-bottom: 0.5rem; color: #fff !important; }
  .form-shell .section-body { margin-bottom: 2rem; font-size: 0.9rem; color: #fff !important; }
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .form-row.full { grid-template-columns: 1fr; }
  .form-group { display: flex; flex-direction: column; gap: 0.35rem; }
  .form-group label {
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.8);
  }
  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.65rem 0.9rem;
    border: 1.5px solid rgba(200,146,42,0.3);
    border-radius: 5px;
    font-family: var(--font-body);
    font-size: 0.95rem;
    color: #fff;
    background: rgba(255,255,255,0.06);
    transition: border-color 0.2s;
    outline: none;
  }
  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    border-color: var(--gold);
    box-shadow: 0 0 0 3px rgba(200,146,42,0.12);
  }
  .form-group textarea { resize: vertical; min-height: 90px; }
  .role-selector {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  .role-check {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.82rem;
    color: rgba(255,255,255,0.8);
    cursor: pointer;
    padding: 0.4rem 0.5rem;
    border-radius: 4px;
    border: 1px solid rgba(200,146,42,0.25);
    transition: all 0.15s;
  }
  .role-check:hover { border-color: var(--gold); background: rgba(200,146,42,0.08); }
  .role-check input { accent-color: var(--gold); }
  .form-submit {
    margin-top: 1.5rem;
    width: 100%;
    padding: 1rem;
    background: var(--gold);
    color: var(--navy);
    border: none;
    border-radius: 5px;
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.2s;
  }
  .form-submit:hover { background: var(--gold-light); }
  .form-note {
    font-size: 0.78rem;
    color: #1f2937;
    text-align: center;
    margin-top: 0.75rem;
  }

  /* ── STAT BAR MOBILE ── */
  @media (max-width: 600px) {
    .form-row { grid-template-columns: 1fr; }
    .role-selector { grid-template-columns: repeat(2, 1fr); }
    .stat-item + .stat-item::before { display: none; }
  }

</style>
</head>
<body>

<nav>
  <div class="nav-logo">Poway Veterans Organization</div>
  <div class="nav-tabs">
    <button class="nav-tab active" onclick="showPage('volunteer')">Volunteer</button>
  </div>
</nav>

<div id="volunteer-page" class="page active">

  <div class="hero">
    <div class="hero-eyebrow">Join the mission</div>
    <h1>Give Your Time.<br><em>Change a Veteran's Life.</em></h1>
    <p class="hero-sub">PVO volunteers are the reason area veterans have roofs over their heads, wheels under them, and someone in their corner. Find your role below — then sign up in minutes.</p>
    <div class="hero-cta">
      <a href="#volunteer-roles" class="btn btn-gold">Find My Role</a>
      <a href="#volunteer-form" class="btn btn-outline">Go to Sign-Up Form</a>
    </div>
  </div>

  <div class="stat-bar">
    <div class="stat-grid">
      <div class="stat-item">
        <div class="stat-num">340+</div>
        <div class="stat-label">Veterans served</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">6</div>
        <div class="stat-label">Volunteer teams</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">8,200+</div>
        <div class="stat-label">Volunteer hours logged</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">100%</div>
        <div class="stat-label">Volunteer-driven</div>
      </div>
    </div>
  </div>

  <section id="volunteer-roles" style="background: transparent;">
    <div class="container">
      <div class="section-label">Where you fit in</div>
      <div class="section-title" style="color: #fff;">Six Teams. One Mission.</div>
      <p class="section-body">Every volunteer is matched to a team based on skills, availability, and interest. Click a card to expand — then include it in your sign-up below.</p>

      <div class="roles-grid">

        <div class="role-card" onclick="toggleRole(this, 'Home Repair')">
          <span class="role-icon">🔨</span>
          <div class="role-title">Home Repair <span class="role-toggle">▼</span></div>
          <div class="role-body">
            <p class="role-desc">Carpentry, drywall, painting, and general handyman work at veterans' homes. Our most active and impactful team.</p>
            <div class="role-meta">
              <span class="tag tag-time">4–8 hrs/project</span>
              <span class="tag tag-level">Any skill level</span>
            </div>
          </div>
        </div>

        <div class="role-card" onclick="toggleRole(this, 'Events')">
          <span class="role-icon">🎗️</span>
          <div class="role-title">Events & Fundraising <span class="role-toggle">▼</span></div>
          <div class="role-body">
            <p class="role-desc">Support the annual golf tournament and other PVO events — setup, registration, logistics, and community outreach.</p>
            <div class="role-meta">
              <span class="tag tag-time">Seasonal / event-based</span>
              <span class="tag tag-level">No experience needed</span>
            </div>
          </div>
        </div>

        <div class="role-card" onclick="toggleRole(this, 'Outreach')">
          <span class="role-icon">📣</span>
          <div class="role-title">Community Outreach <span class="role-toggle">▼</span></div>
          <div class="role-body">
            <p class="role-desc">Connect with veteran service organizations, attend community events, and help spread awareness of PVO's programs.</p>
            <div class="role-meta">
              <span class="tag tag-time">2–4 hrs/month</span>
              <span class="tag tag-level">Communication skills</span>
            </div>
          </div>
        </div>

        <div class="role-card" onclick="toggleRole(this, 'Admin')">
          <span class="role-icon">📋</span>
          <div class="role-title">Admin & Coordination <span class="role-toggle">▼</span></div>
          <div class="role-body">
            <p class="role-desc">Scheduling, record-keeping, donor acknowledgment letters, and volunteer coordination support from home or on-site.</p>
            <div class="role-meta">
              <span class="tag tag-time">Flexible hours</span>
              <span class="tag tag-level">Organized, detail-oriented</span>
            </div>
          </div>
        </div>

        <div class="role-card" onclick="toggleRole(this, 'Transport')">
          <span class="role-icon">🚗</span>
          <div class="role-title">Transport <span class="role-toggle">▼</span></div>
          <div class="role-body">
            <p class="role-desc">Drive veterans to medical appointments, help haul materials to project sites, and assist with equipment pickup and delivery.</p>
            <div class="role-meta">
              <span class="tag tag-time">As-needed scheduling</span>
              <span class="tag tag-level">Valid CA driver's license</span>
            </div>
          </div>
        </div>

        <div class="role-card" onclick="toggleRole(this, 'Skilled Trades')">
          <span class="role-icon">⚙️</span>
          <div class="role-title">Skilled Trades <span class="role-toggle">▼</span></div>
          <div class="role-body">
            <p class="role-desc">Licensed plumbers, electricians, welders, and mechanics. Tackle complex repairs that need professional-level expertise.</p>
            <div class="role-meta">
              <span class="tag tag-time">Project-based</span>
              <span class="tag tag-level">Licensed or certified</span>
              <span class="tag tag-group">High demand</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <div class="corporate-band">
    <div class="corporate-inner">
      <div class="corporate-text">
        <h3>Group & Corporate Volunteering</h3>
        <p>Bring your team. PVO welcomes corporate volunteer days, service club projects, and faith community groups. We'll coordinate a meaningful half-day or full-day experience for groups of any size.</p>
        <ul class="corporate-perks">
          <li>Dedicated project coordinator for your group</li>
          <li>All materials and tools provided on-site</li>
          <li>Certificate of service for company CSR reporting</li>
          <li>Tax-deductible materials donations welcome</li>
          <li>Opportunity for ongoing community partnership</li>
        </ul>
      </div>
      <div>
        <div style="background: var(--navy); border-radius: 8px; padding: 2rem; color: #fff;">
          <div style="font-family: var(--font-display); font-size: 1.1rem; margin-bottom: 0.75rem; color: var(--gold);">Schedule a group day</div>
          <p style="font-size: 0.88rem; color: rgba(255,255,255,0.7); margin-bottom: 1.25rem; line-height: 1.65;">Contact us to plan your team's volunteer experience. We accommodate groups of 5 to 40+.</p>
          <p style="font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-bottom: 0.4rem;">📞 858-206-8854</p>
          <p style="font-size: 0.85rem; color: rgba(255,255,255,0.6);">✉ <a href="mailto:contact@powayveterans.org">contact@powayveterans.org</a></p>
        </div>
      </div>
    </div>
  </div>

  <div class="form-section" id="volunteer-form">
    <div class="form-shell">
      <div class="section-label" style="color: var(--gold);">Sign up</div>
      <div class="section-title">Join the PVO Volunteer Team</div>
      <p class="section-body">Fill out the form and a team manager will reach out within 3 business days to match you with your first project.</p>

      <div class="form-row">
  <div class="form-group">
    <label>First Name *</label>
    <input type="text" id="first_name" placeholder="First">
  </div>
  <div class="form-group">
    <label>Last Name *</label>
    <input type="text" id="last_name" placeholder="Last">
  </div>
</div>
<div class="form-row">
  <div class="form-group">
    <label>Phone *</label>
    <input type="tel" id="phone" placeholder="(858) 555-0000">
  </div>
  <div class="form-group">
    <label>Email *</label>
    <input type="email" id="email" placeholder="you@email.com">
  </div>
</div>
<div class="form-row full">
  <div class="form-group">
    <label>City / Zip *</label>
    <input type="text" id="city_zip" placeholder="Poway, CA 92064">
  </div>
</div>

<div class="form-group" style="margin-bottom: 1rem;">
  <label>Volunteer Roles (select all that interest you)</label>
  <div class="role-selector" id="role-selector">
    <label class="role-check"><input type="checkbox" value="Home Repair"> Home Repair</label>
    <label class="role-check"><input type="checkbox" value="Events"> Events</label>
    <label class="role-check"><input type="checkbox" value="Outreach"> Outreach</label>
    <label class="role-check"><input type="checkbox" value="Admin"> Admin</label>
    <label class="role-check"><input type="checkbox" value="Transport"> Transport</label>
    <label class="role-check"><input type="checkbox" value="Skilled Trades"> Skilled Trades</label>
  </div>
</div>

<div class="form-row full">
  <div class="form-group">
    <label>Skills & Experience</label>
    <textarea id="skills" placeholder="Briefly describe relevant skills (e.g. carpentry, welding, project management, driving, administrative work)…"></textarea>
  </div>
</div>
<div class="form-row">
  <div class="form-group">
    <label>Availability</label>
    <select id="availability">
      <option value="">Any restrictions?</option>
      <option>Weekdays only</option>
      <option>Weekends only</option>
      <option>Weekday mornings</option>
      <option>Flexible — most days</option>
      <option>Event-based only</option>
    </select>
  </div>
  <div class="form-group">
    <label>Best time to reach you</label>
    <select id="best_time">
      <option value="">Select…</option>
      <option>Morning (8am–12pm)</option>
      <option>Afternoon (12pm–5pm)</option>
      <option>Evening (5pm–8pm)</option>
    </select>
  </div>
</div>
<div class="form-row full">
  <div class="form-group">
    <label>Group or Organization (optional)</label>
    <input type="text" id="organization" placeholder="Company, faith community, service club, etc.">
  </div>
</div>

<button class="form-submit">Submit Volunteer Application</button>
<p class="form-note">Your info is used only for volunteer coordination and is never shared or sold.</p>


<script>
  function toggleRole(card, role) {
    card.classList.toggle('open');
    const checkboxes = document.querySelectorAll('#role-selector input[type="checkbox"]');
    checkboxes.forEach(cb => {
      if (cb.value === role) cb.checked = card.classList.contains('open');
    });
  }

  document.querySelector('.form-submit').addEventListener('click', async () => {
    const roles = [...document.querySelectorAll('#role-selector input:checked')]
      .map(cb => cb.value).join(', ');

    const payload = {
      first_name:   document.getElementById('first_name').value.trim(),
      last_name:    document.getElementById('last_name').value.trim(),
      phone:        document.getElementById('phone').value.trim(),
      email:        document.getElementById('email').value.trim(),
      city_zip:     document.getElementById('city_zip').value.trim(),
      roles,
      skills:       document.getElementById('skills').value.trim(),
      availability: document.getElementById('availability').value,
      best_time:    document.getElementById('best_time').value,
      organization: document.getElementById('organization').value.trim(),
    };

    if (!payload.first_name || !payload.last_name || !payload.email) {
      alert('Please fill in First Name, Last Name, and Email.');
      return;
    }

    try {
      const res = await fetch('http://localhost:8426/api/volunteers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (res.ok) {
        alert("Application submitted! We'll be in touch within 3 business days.");
      } else {
        alert('Error: ' + data.error);
      }
    } catch (err) {
      alert('Could not reach the server. Please try again.');
    }
  });
</script>