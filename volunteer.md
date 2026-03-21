---
permalink: /donation
title: Make a Donation
layout: page
api_base: http://localhost:4500
paypal_button_id: YOUR_BUTTON_ID
campaigns: "{{ site.data.dv.campaigns }}"
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
    --cream: #f8f5ef;
    --warm-white: #fdfcf9;
    --gray: #6b7280;
    --gray-light: #e8e4dc;
    --text: #1f2937;
    --font-display: 'Playfair Display', Georgia, serif;
    --font-body: 'Source Sans 3', 'Georgia', sans-serif;
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: var(--font-body);
    background: var(--warm-white);
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
    background: var(--navy);
    padding: 5rem 2rem 4rem;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 40px,
        rgba(200,146,42,0.04) 40px,
        rgba(200,146,42,0.04) 41px
      );
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
    color: var(--gray);
    max-width: 640px;
    line-height: 1.75;
    margin-bottom: 2.5rem;
  }

  /* ── STAT BAR ── */
  .stat-bar {
    background: var(--navy);
    padding: 2.5rem 2rem;
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
    background: #fff;
    border: 1px solid var(--gray-light);
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
    color: var(--navy);
    margin-bottom: 0.35rem;
  }
  .role-desc {
    font-size: 0.88rem;
    color: var(--gray);
    line-height: 1.6;
    margin-bottom: 1rem;
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
    background: var(--cream);
    border-top: 1px solid var(--gray-light);
    border-bottom: 1px solid var(--gray-light);
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
    color: var(--navy);
    margin-bottom: 0.75rem;
  }
  .corporate-text p { color: var(--gray); line-height: 1.75; font-size: 0.95rem; }
  .corporate-perks { list-style: none; margin-top: 1rem; }
  .corporate-perks li {
    font-size: 0.88rem;
    color: var(--gray);
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
    background: var(--navy);
    padding: 4rem 2rem;
  }
  .form-shell {
    max-width: 680px;
    margin: 0 auto;
    background: var(--warm-white);
    border-radius: 10px;
    padding: 2.5rem;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  }
  .form-shell .section-title { margin-bottom: 0.5rem; }
  .form-shell .section-body { margin-bottom: 2rem; font-size: 0.9rem; }
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
    color: var(--navy);
  }
  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.65rem 0.9rem;
    border: 1.5px solid var(--gray-light);
    border-radius: 5px;
    font-family: var(--font-body);
    font-size: 0.95rem;
    color: var(--text);
    background: #fff;
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
    color: var(--text);
    cursor: pointer;
    padding: 0.4rem 0.5rem;
    border-radius: 4px;
    border: 1px solid var(--gray-light);
    transition: all 0.15s;
  }
  .role-check:hover { border-color: var(--gold); background: #fefaf3; }
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
    color: var(--gray);
    text-align: center;
    margin-top: 0.75rem;
  }

  /* ── DONOR PAGE ── */
  .impact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
  .impact-card {
    background: #fff;
    border-radius: 8px;
    padding: 1.75rem 1.5rem;
    text-align: center;
    border: 1px solid var(--gray-light);
    transition: box-shadow 0.2s;
  }
  .impact-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
  .impact-num {
    font-family: var(--font-display);
    font-size: 2.2rem;
    color: var(--gold);
    line-height: 1;
    margin-bottom: 0.25rem;
  }
  .impact-desc {
    font-size: 0.82rem;
    color: var(--gray);
    line-height: 1.5;
  }
  .impact-icon { font-size: 1.5rem; margin-bottom: 0.5rem; display: block; }

  /* ── CAMPAIGN CARDS ── */
  .campaign-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
  .campaign-card {
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--gray-light);
    transition: all 0.25s;
    cursor: pointer;
    background: #fff;
  }
  .campaign-card:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(0,0,0,0.1); }
  .campaign-header {
    padding: 1.5rem;
    position: relative;
  }
  .campaign-header.repair { background: #1a2744; }
  .campaign-header.scholarship { background: #2d4a1e; }
  .campaign-header.emergency { background: #6b1414; }
  .campaign-category {
    font-size: 0.68rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold);
    font-weight: 600;
    margin-bottom: 0.4rem;
  }
  .campaign-name {
    font-family: var(--font-display);
    font-size: 1.2rem;
    color: #fff;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }
  .campaign-sub { font-size: 0.82rem; color: rgba(255,255,255,0.65); line-height: 1.5; }
  .campaign-body { padding: 1.25rem 1.5rem; }
  .campaign-progress {
    height: 5px;
    background: var(--gray-light);
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 0.6rem;
  }
  .campaign-bar {
    height: 100%;
    background: var(--gold);
    border-radius: 10px;
    transition: width 1s ease;
  }
  .campaign-stats {
    display: flex;
    justify-content: space-between;
    font-size: 0.78rem;
    color: var(--gray);
    margin-bottom: 1rem;
  }
  .campaign-stats strong { color: var(--navy); }

  /* ── IMPACT STORY ── */
  .story-strip {
    background: var(--cream);
    border-left: 4px solid var(--gold);
    padding: 1.5rem 2rem;
    border-radius: 0 8px 8px 0;
    margin-bottom: 1.5rem;
  }
  .story-strip blockquote {
    font-family: var(--font-display);
    font-size: 1.15rem;
    color: var(--navy);
    line-height: 1.5;
    margin-bottom: 0.5rem;
    font-style: italic;
  }
  .story-attribution {
    font-size: 0.8rem;
    color: var(--gray);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  /* ── EXPENSE RATIO ── */
  .ratio-bar-wrap { margin: 1.5rem 0; }
  .ratio-bar {
    height: 28px;
    background: var(--gray-light);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }
  .ratio-segment {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  .ratio-segment.program { background: var(--gold); color: var(--navy); }
  .ratio-segment.admin { background: var(--gray-light); color: var(--gray); }
  .ratio-legend {
    display: flex;
    gap: 1.5rem;
    margin-top: 0.5rem;
    font-size: 0.78rem;
    color: var(--gray);
  }
  .ratio-dot {
    display: inline-block;
    width: 10px; height: 10px;
    border-radius: 50%;
    margin-right: 0.3rem;
  }

  /* ── DONOR FORM ── */
  .amount-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  .amount-btn {
    padding: 0.6rem;
    border: 1.5px solid var(--gray-light);
    background: #fff;
    border-radius: 5px;
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--navy);
    cursor: pointer;
    transition: all 0.15s;
    text-align: center;
  }
  .amount-btn:hover, .amount-btn.selected {
    border-color: var(--gold);
    background: #fef8ee;
    color: var(--gold);
  }

  /* ── METHODS ── */
  .method-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
  }
  .method-card {
    background: #fff;
    border: 1px solid var(--gray-light);
    border-radius: 8px;
    padding: 1.25rem 1.5rem;
  }
  .method-card h4 {
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--navy);
    margin-bottom: 0.5rem;
  }
  .method-card p { font-size: 0.85rem; color: var(--gray); line-height: 1.6; }

  /* ── FRESHNESS BAND ── */
  .freshness-band {
    background: var(--navy);
    color: #fff;
    padding: 0.75rem 2rem;
  }
  .freshness-inner {
    max-width: 1040px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.82rem;
    color: rgba(255,255,255,0.7);
  }
  .freshness-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #4ade80;
    flex-shrink: 0;
    box-shadow: 0 0 6px #4ade80;
  }

  /* ── TAX NOTICE ── */
  .tax-notice {
    background: #f0f7ff;
    border: 1px solid #bcd4ef;
    border-radius: 6px;
    padding: 1rem 1.25rem;
    font-size: 0.83rem;
    color: #1e40af;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
  .tax-notice strong { color: #1e3a8a; }

  @media (max-width: 600px) {
    .form-row { grid-template-columns: 1fr; }
    .role-selector { grid-template-columns: repeat(2, 1fr); }
    .amount-grid { grid-template-columns: repeat(2, 1fr); }
    .stat-item + .stat-item::before { display: none; }
  }

</style>
</head>
<body>

<nav>
  <div class="nav-logo">Poway Veterans Organization</div>
  <div class="nav-tabs">
    <button class="nav-tab active" onclick="showPage('volunteer')">Volunteer</button>
    <button class="nav-tab" onclick="showPage('donor')">Donate</button>
  </div>
</nav>

<!-- ═══════════════════════════════════════════
     VOLUNTEER PAGE
═══════════════════════════════════════════ -->
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

  <section id="volunteer-roles" style="background: var(--cream);">
    <div class="container">
      <div class="section-label">Where you fit in</div>
      <div class="section-title">Six Teams. One Mission.</div>
      <p class="section-body">Every volunteer is matched to a team based on skills, availability, and interest. Click a card to learn more — then include it in your sign-up below.</p>

      <div class="roles-grid">

        <div class="role-card" onclick="selectRole(this, 'Home Repair')">
          <span class="role-icon">🔨</span>
          <div class="role-title">Home Repair</div>
          <p class="role-desc">Carpentry, drywall, painting, and general handyman work at veterans' homes. Our most active and impactful team.</p>
          <div class="role-meta">
            <span class="tag tag-time">4–8 hrs/project</span>
            <span class="tag tag-level">Any skill level</span>
          </div>
        </div>

        <div class="role-card" onclick="selectRole(this, 'Events')">
          <span class="role-icon">🎗️</span>
          <div class="role-title">Events & Fundraising</div>
          <p class="role-desc">Support the annual golf tournament and other PVO events — setup, registration, logistics, and community outreach.</p>
          <div class="role-meta">
            <span class="tag tag-time">Seasonal / event-based</span>
            <span class="tag tag-level">No experience needed</span>
          </div>
        </div>

        <div class="role-card" onclick="selectRole(this, 'Outreach')">
          <span class="role-icon">📣</span>
          <div class="role-title">Community Outreach</div>
          <p class="role-desc">Connect with veteran service organizations, attend community events, and help spread awareness of PVO's programs.</p>
          <div class="role-meta">
            <span class="tag tag-time">2–4 hrs/month</span>
            <span class="tag tag-level">Communication skills</span>
          </div>
        </div>

        <div class="role-card" onclick="selectRole(this, 'Admin')">
          <span class="role-icon">📋</span>
          <div class="role-title">Admin & Coordination</div>
          <p class="role-desc">Scheduling, record-keeping, donor acknowledgment letters, and volunteer coordination support from home or on-site.</p>
          <div class="role-meta">
            <span class="tag tag-time">Flexible hours</span>
            <span class="tag tag-level">Organized, detail-oriented</span>
          </div>
        </div>

        <div class="role-card" onclick="selectRole(this, 'Transport')">
          <span class="role-icon">🚗</span>
          <div class="role-title">Transport</div>
          <p class="role-desc">Drive veterans to medical appointments, help haul materials to project sites, and assist with equipment pickup and delivery.</p>
          <div class="role-meta">
            <span class="tag tag-time">As-needed scheduling</span>
            <span class="tag tag-level">Valid CA driver's license</span>
          </div>
        </div>

        <div class="role-card" onclick="selectRole(this, 'Skilled Trades')">
          <span class="role-icon">⚙️</span>
          <div class="role-title">Skilled Trades</div>
          <p class="role-desc">Licensed plumbers, electricians, welders, and mechanics. Tackle complex repairs that need professional-level expertise.</p>
          <div class="role-meta">
            <span class="tag tag-time">Project-based</span>
            <span class="tag tag-level">Licensed or certified</span>
            <span class="tag tag-group">High demand</span>
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
          <p style="font-size: 0.85rem; color: rgba(255,255,255,0.6);">✉ contact@powayveterans.org</p>
        </div>
      </div>
    </div>
  </div>

  <div class="form-section" id="volunteer-form">
    <div class="form-shell">
      <div class="section-label" style="color: var(--gold);">Sign up</div>
      <div class="section-title">Join the PVO Volunteer Team</div>
      <p class="section-body" style="color: var(--gray);">Fill out the form and a team manager will reach out within 3 business days to match you with your first project.</p>

      <div class="form-row">
        <div class="form-group">
          <label>First Name *</label>
          <input type="text" placeholder="First">
        </div>
        <div class="form-group">
          <label>Last Name *</label>
          <input type="text" placeholder="Last">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Phone *</label>
          <input type="tel" placeholder="(858) 555-0000">
        </div>
        <div class="form-group">
          <label>Email *</label>
          <input type="email" placeholder="you@email.com">
        </div>
      </div>
      <div class="form-row full">
        <div class="form-group">
          <label>City / Zip *</label>
          <input type="text" placeholder="Poway, CA 92064">
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
          <textarea placeholder="Briefly describe relevant skills (e.g. carpentry, welding, project management, driving, administrative work)…"></textarea>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Availability</label>
          <select>
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
          <select>
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
          <input type="text" placeholder="Company, faith community, service club, etc.">
        </div>
      </div>

      <button class="form-submit">Submit Volunteer Application</button>
      <p class="form-note">Your info is used only for volunteer coordination and is never shared or sold.</p>
    </div>
  </div>

</div>

<!-- ═══════════════════════════════════════════
     DONOR PAGE
═══════════════════════════════════════════ -->
<div id="donor-page" class="page">

  <div class="hero">
    <div class="hero-eyebrow">Make an impact</div>
    <h1>Your Donation Repairs<br><em>More Than Homes.</em></h1>
    <p class="hero-sub">Poway's veterans served so we didn't have to. PVO puts 95¢ of every dollar directly into veteran assistance — repairs, transportation, emergency relief, and more.</p>
    <div class="hero-cta">
      <a href="#donate-form" class="btn btn-gold">Donate Now</a>
      <a href="#impact" class="btn btn-outline">See the Impact</a>
    </div>
  </div>

  <div class="stat-bar">
    <div class="stat-grid">
      <div class="stat-item">
        <div class="stat-num">95%+</div>
        <div class="stat-label">Program expense ratio</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">340+</div>
        <div class="stat-label">Veterans helped</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">501(c)(3)</div>
        <div class="stat-label">Tax-exempt status</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">$0</div>
        <div class="stat-label">Paid staff — all volunteer</div>
      </div>
    </div>
  </div>

  <section id="impact" style="background: var(--cream);">
    <div class="container">
      <div class="section-label">Where your money goes</div>
      <div class="section-title">An Honest Look at PVO's Impact</div>
      <p class="section-body">PVO has no paid staff. Every dollar raised goes toward veteran projects — not overhead. Here's what that looks like in practice.</p>

      <div style="max-width: 640px; margin-bottom: 2.5rem;">
        <div class="ratio-bar-wrap">
          <div style="font-size: 0.78rem; color: var(--gray); margin-bottom: 0.5rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">How every dollar is spent</div>
          <div class="ratio-bar">
            <div class="ratio-segment program" style="width: 95%;">95% Programs</div>
            <div class="ratio-segment admin" style="width: 5%; font-size: 0.65rem;">&lt;5%</div>
          </div>
          <div class="ratio-legend">
            <span><span class="ratio-dot" style="background: var(--gold);"></span>Veteran programs &amp; projects — 95%+</span>
            <span><span class="ratio-dot" style="background: var(--gray-light); border: 1px solid #ccc;"></span>Admin &amp; overhead — &lt;5%</span>
          </div>
        </div>
      </div>

      <div class="impact-grid">
        <div class="impact-card">
          <span class="impact-icon">🏠</span>
          <div class="impact-num">180+</div>
          <div class="impact-desc">Home repair projects completed for Poway-area veterans</div>
        </div>
        <div class="impact-card">
          <span class="impact-icon">🚗</span>
          <div class="impact-num">400+</div>
          <div class="impact-desc">Transportation trips to VA appointments and care facilities</div>
        </div>
        <div class="impact-card">
          <span class="impact-icon">🎓</span>
          <div class="impact-num">12</div>
          <div class="impact-desc">Scholarships awarded to veterans and their family members</div>
        </div>
        <div class="impact-card">
          <span class="impact-icon">🆘</span>
          <div class="impact-num">60+</div>
          <div class="impact-desc">Emergency assistance cases — utility bills, critical repairs</div>
        </div>
      </div>

      <div class="section-label" style="margin-top: 1rem;">Recent examples</div>
      <div class="section-title" style="font-size: 1.4rem; margin-bottom: 1.5rem;">Real Help for Real Veterans</div>

      <div class="story-strip">
        <blockquote>"The roof had been leaking for two years. I didn't know who to call. PVO had a team out within a week."</blockquote>
        <div class="story-attribution">— Poway veteran, Army, served 1972–1975</div>
      </div>
      <div class="story-strip">
        <blockquote>"I couldn't get to my VA appointments — no transportation. PVO's drivers made sure I never missed one."</blockquote>
        <div class="story-attribution">— Poway veteran, Navy, served 1968–1972</div>
      </div>

    </div>
  </section>

  <section id="donate-form" style="background: #fff;">
    <div class="container">
      <div class="section-label">Choose your impact</div>
      <div class="section-title">Campaign-Based Giving</div>
      <p class="section-body">Direct your donation to the cause closest to your heart — or give to the general fund and let PVO put it where it's needed most.</p>

      <div class="campaign-grid">
        <div class="campaign-card">
          <div class="campaign-header repair">
            <div class="campaign-category">Home repair fund</div>
            <div class="campaign-name">Fix a Veteran's Home</div>
            <p class="campaign-sub">Roofing, plumbing, electrical, carpentry — restoring safety and dignity one home at a time.</p>
          </div>
          <div class="campaign-body">
            <div class="campaign-progress"><div class="campaign-bar" style="width: 72%;"></div></div>
            <div class="campaign-stats"><span><strong>72%</strong> of goal</span><span>$14,400 raised</span></div>
            <button class="btn btn-navy" style="width:100%; font-size:0.82rem; padding: 0.6rem;" onclick="selectCampaign('Home Repair Fund')">Donate to This Fund</button>
          </div>
        </div>

        <div class="campaign-card">
          <div class="campaign-header scholarship">
            <div class="campaign-category">Scholarship fund</div>
            <div class="campaign-name">Support a Veteran's Education</div>
            <p class="campaign-sub">Helping veterans and their families access education and job training opportunities.</p>
          </div>
          <div class="campaign-body">
            <div class="campaign-progress"><div class="campaign-bar" style="width: 55%;"></div></div>
            <div class="campaign-stats"><span><strong>55%</strong> of goal</span><span>$5,500 raised</span></div>
            <button class="btn btn-navy" style="width:100%; font-size:0.82rem; padding: 0.6rem;" onclick="selectCampaign('Scholarship Fund')">Donate to This Fund</button>
          </div>
        </div>

        <div class="campaign-card">
          <div class="campaign-header emergency">
            <div class="campaign-category">Emergency relief</div>
            <div class="campaign-name">Emergency Assistance</div>
            <p class="campaign-sub">Immediate help for veterans facing utility shutoffs, urgent repairs, or unexpected hardship.</p>
          </div>
          <div class="campaign-body">
            <div class="campaign-progress"><div class="campaign-bar" style="width: 40%;"></div></div>
            <div class="campaign-stats"><span><strong>40%</strong> of goal</span><span>$4,000 raised</span></div>
            <button class="btn btn-navy" style="width:100%; font-size:0.82rem; padding: 0.6rem;" onclick="selectCampaign('Emergency Relief Fund')">Donate to This Fund</button>
          </div>
        </div>
      </div>

      <!-- Donation Form -->
      <div style="max-width: 600px; margin: 0 auto;">
        <div style="background: var(--cream); border-radius: 10px; padding: 2rem; border: 1px solid var(--gray-light);">
          <div id="campaign-label" style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--gold); margin-bottom: 1rem;">General Fund (select a campaign above to redirect)</div>

          <div class="tax-notice">
            <strong>Tax deductible.</strong> PVO is a designated 501(c)(3) nonprofit (IRS). Donations in support of veteran assistance projects may be tax deductible. A receipt will be emailed upon completion. Consult your tax adviser.
          </div>

          <div class="form-group" style="margin-bottom: 1rem;">
            <label>Select an amount</label>
            <div class="amount-grid">
              <button class="amount-btn" onclick="selectAmount(this, '$25')">$25</button>
              <button class="amount-btn" onclick="selectAmount(this, '$50')">$50</button>
              <button class="amount-btn selected" onclick="selectAmount(this, '$100')">$100</button>
              <button class="amount-btn" onclick="selectAmount(this, '$250')">$250</button>
            </div>
            <input type="number" placeholder="Or enter a custom amount…" style="width:100%; padding: 0.65rem 0.9rem; border: 1.5px solid var(--gray-light); border-radius: 5px; font-size: 0.95rem; font-family: var(--font-body); outline: none;">
          </div>

          <div class="form-group" style="margin-bottom: 1rem;">
            <label>Frequency</label>
            <select style="font-family: var(--font-body); font-size: 0.95rem; padding: 0.65rem 0.9rem; border: 1.5px solid var(--gray-light); border-radius: 5px; outline: none;">
              <option>One-time gift</option>
              <option>Monthly recurring</option>
              <option>Annual recurring</option>
            </select>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>First Name *</label>
              <input type="text" placeholder="First">
            </div>
            <div class="form-group">
              <label>Last Name *</label>
              <input type="text" placeholder="Last">
            </div>
          </div>

          <div class="form-group" style="margin-bottom: 1rem;">
            <label>Email *</label>
            <input type="email" placeholder="you@email.com" style="width:100%;">
          </div>

          <div class="form-group" style="margin-bottom: 1rem;">
            <label>Mailing address (optional — for paper receipt)</label>
            <input type="text" placeholder="Street address, City, CA ZIP" style="width:100%;">
          </div>

          <div class="form-group" style="margin-bottom: 1.5rem;">
            <label>Dedication or note (optional)</label>
            <textarea placeholder="In honor of… / In memory of… / Specifically for…" style="min-height: 72px; width: 100%;"></textarea>
          </div>

          <button class="form-submit">Continue to PayPal →</button>
          <p class="form-note">You'll be redirected to PayPal to complete payment securely. Credit card accepted — no PayPal account required.</p>
        </div>

        <div class="method-grid" style="margin-top: 1.5rem;">
          <div class="method-card">
            <h4>By Check</h4>
            <p>Payable to <strong>Poway Veterans Organization</strong>. Write "Donation" in the memo line. Mail to: PO Box 563, Poway, CA 92064.</p>
          </div>
          <div class="method-card">
            <h4>Materials Donations</h4>
            <p>PVO accepts donated materials for veteran projects. Call <strong>858-206-8854</strong> or email <strong>contact@powayveterans.org</strong> to coordinate.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

</div>

<!-- Freshness band -->
<div class="freshness-band">
  <div class="freshness-inner">
    <div class="freshness-dot"></div>
    <span>Page last reviewed March 2026 · Events calendar updated monthly · Questions? Call 858-206-8854 or email contact@powayveterans.org</span>
  </div>
</div>

<script>
  function showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(page + '-page').classList.add('active');
    event.target.classList.add('active');
  }

  function selectRole(card, roleName) {
    card.classList.toggle('selected');
    // Also tick the checkbox in the form
    const checkboxes = document.querySelectorAll('#role-selector input');
    checkboxes.forEach(cb => {
      if (cb.value === roleName) cb.checked = card.classList.contains('selected');
    });
  }

  function selectAmount(btn, amount) {
    document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  }

  function selectCampaign(name) {
    document.getElementById('campaign-label').textContent = 'Donating to: ' + name;
    document.getElementById('campaign-label').style.color = 'var(--navy)';
    document.getElementById('donate-form').scrollIntoView({ behavior: 'smooth' });
  }
</script>
</body>
</html>