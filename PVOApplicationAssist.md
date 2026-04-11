---
layout: post
feedback: true
hide: true
title: PVO Application Assist
permalink: /pvo-application-assist
---
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PVO Application Assist</title>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --red:#ff6a4d;--gold:#f1b65c;--green:#55d39b;
  --bg:#08111f;--bg-2:#0c1830;--surface:#111c31;--surface-2:#15223b;--surface-3:#1b2b48;
  --border:rgba(196,214,255,0.14);--border-strong:rgba(196,214,255,0.28);
  --text:#f3f7ff;--text-2:#b9c6e5;--text-3:#7e90b7;
  --green-light:rgba(85,211,155,0.14);--gold-light:rgba(241,182,92,0.12);--red-light:rgba(255,106,77,0.12);
  --radius:16px;--radius-lg:22px;--radius-xl:28px;
  --shadow:0 18px 50px rgba(2,8,20,0.38);
  --ease:cubic-bezier(0.22,1,0.36,1);
}
html,body{height:100%;font-family:'Space Grotesk',sans-serif;background:radial-gradient(circle at top left, rgba(255,106,77,0.14), transparent 28%),radial-gradient(circle at top right, rgba(90,140,255,0.18), transparent 34%),linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 45%, #07101d 100%);color:var(--text);overflow-x:hidden}
body::before{content:"";position:fixed;inset:0;pointer-events:none;opacity:0.45;background-image:linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);background-size:32px 32px;mask-image:linear-gradient(180deg, rgba(0,0,0,0.45), transparent 85%)}
button,input,textarea,select{font:inherit}
.shell{max-width:900px;margin:0 auto;min-height:100vh;padding:1rem 1rem 3rem}
.top-frame{position:sticky;top:0.75rem;z-index:20;margin-bottom:1.1rem;padding:1rem;background:linear-gradient(180deg, rgba(18,33,63,0.92), rgba(12,24,48,0.88));border:1px solid var(--border);border-radius:26px;box-shadow:var(--shadow);backdrop-filter:blur(18px)}
.topbar{display:flex;justify-content:space-between;gap:1rem;align-items:flex-start;margin-bottom:0.9rem}
.brand{display:grid;gap:0.32rem}
.brand-line{display:flex;align-items:center;gap:0.6rem;font-family:'Sora',sans-serif;font-weight:700;letter-spacing:-0.02em}
.badge{display:inline-flex;align-items:center;justify-content:center;padding:4px 8px;border-radius:999px;background:linear-gradient(135deg,var(--red),var(--gold));color:#09111f;font-size:0.68rem;font-weight:800;letter-spacing:0.12em;text-transform:uppercase}
.brand-sub{font-size:0.82rem;line-height:1.5;color:var(--text-2);max-width:480px}
.ghost-link{display:inline-flex;align-items:center;justify-content:center;padding:0.8rem 1rem;border-radius:999px;border:1px solid var(--border);background:rgba(255,255,255,0.03);color:var(--text);text-decoration:none;font-size:0.86rem;font-weight:600;transition:all 0.2s var(--ease)}
.ghost-link:hover{background:rgba(255,255,255,0.06);border-color:var(--border-strong)}
.progress-copy{display:grid;gap:0.32rem}
.progress-kicker{font-size:0.72rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-3)}
.progress-title{font-family:'Sora',sans-serif;font-size:1rem;font-weight:700}
.progress-note{font-size:0.8rem;color:var(--text-2)}
.progress-track{position:relative;height:12px;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.06);overflow:hidden;margin-top:0.8rem}
.progress-fill{height:100%;width:0;background:linear-gradient(90deg,var(--red),#ff9568 36%,var(--gold));transition:width 0.35s var(--ease);box-shadow:0 0 22px rgba(255,122,79,0.42)}
.progress-meta{display:flex;justify-content:space-between;gap:1rem;align-items:center;margin-top:0.7rem;flex-wrap:wrap}
.progress-step{font-size:0.82rem;color:var(--text-3)}
.progress-dots{display:flex;gap:0.45rem}
.progress-dot{width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.08)}
.progress-dot.active{background:var(--gold);border-color:transparent;box-shadow:0 0 12px rgba(241,182,92,0.45)}
.progress-dot.complete{background:var(--green);border-color:transparent;box-shadow:0 0 12px rgba(85,211,155,0.35)}
.panel{background:linear-gradient(180deg, rgba(21,34,59,0.97), rgba(17,28,49,0.95));border:1px solid var(--border);border-radius:var(--radius-xl);box-shadow:var(--shadow);padding:1.4rem}
.stack{display:grid;gap:1rem}
.hero-title{font-family:'Sora',sans-serif;font-size:1.5rem;line-height:1.15;letter-spacing:-0.03em}
.hero-copy{font-size:0.9rem;line-height:1.6;color:var(--text-2)}
.guide-grid,.upload-grid,.form-grid{display:grid;gap:0.85rem}
.guide-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
.guide-card,.inner-panel{background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:var(--radius);padding:1rem}
.guide-kicker,.section-kicker,.field-label{font-size:0.74rem;font-weight:700;letter-spacing:0.07em;text-transform:uppercase;color:var(--text-3)}
.guide-title,.section-title{font-size:0.94rem;font-weight:700;color:var(--text);margin:.28rem 0}
.guide-copy,.section-copy,.helper,.status-copy{font-size:0.8rem;line-height:1.55;color:var(--text-2)}
.banner{display:flex;gap:0.8rem;align-items:flex-start;padding:0.95rem 1rem;border:1px solid rgba(241,182,92,0.22);border-radius:var(--radius);background:var(--gold-light)}
.banner-mark{width:30px;height:30px;border-radius:10px;background:rgba(241,182,92,0.18);display:flex;align-items:center;justify-content:center;color:var(--gold);font-weight:800;flex-shrink:0}
.upload-grid{grid-template-columns:1.1fr 0.9fr}
.upload-label{display:block;padding:1rem;border:1px dashed var(--border-strong);border-radius:var(--radius-lg);background:rgba(255,255,255,0.025);cursor:pointer;transition:all 0.2s var(--ease)}
.upload-label:hover{background:rgba(255,255,255,0.045);border-color:rgba(241,182,92,0.42)}
.file-meta{font-size:0.78rem;color:var(--text-3)}
.doc-preview{border:1px solid var(--border);border-radius:var(--radius-lg);background:rgba(255,255,255,0.025);min-height:240px;display:flex;align-items:center;justify-content:center;overflow:hidden}
.doc-empty{padding:1rem;text-align:center;font-size:0.8rem;line-height:1.5;color:var(--text-3)}
.doc-img{display:block;width:100%;height:100%;object-fit:cover}
.textarea,.input,.select{width:100%;background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:14px;color:var(--text);padding:0.9rem 1rem;font-size:0.88rem;transition:border-color 0.2s, box-shadow 0.2s}
.textarea{min-height:138px;resize:vertical}
.textarea:focus,.input:focus,.select:focus{outline:none;border-color:#9db7ff;box-shadow:0 0 0 4px rgba(157,183,255,0.1)}
.field{display:grid;gap:0.35rem}
.field.span-2{grid-column:span 2}
.form-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
.helper{font-size:0.76rem}
.actions{display:flex;gap:0.75rem;flex-wrap:wrap}
.primary-btn,.secondary-btn{display:inline-flex;align-items:center;justify-content:center;gap:0.5rem;padding:1rem 1.15rem;border-radius:18px;border:none;cursor:pointer;font-family:'Sora',sans-serif;font-weight:700;text-decoration:none;transition:all 0.2s var(--ease)}
.primary-btn{background:linear-gradient(135deg,var(--red),#ff8c6f 62%,var(--gold));color:#08111f;box-shadow:0 12px 30px rgba(255,106,77,0.25)}
.primary-btn:hover{filter:brightness(1.05)}
.secondary-btn{background:rgba(255,255,255,0.03);color:var(--text);border:1px solid var(--border)}
.secondary-btn:hover{background:rgba(255,255,255,0.06);border-color:var(--border-strong)}
.primary-btn:disabled,.secondary-btn:disabled,.primary-btn.is-disabled,.secondary-btn.is-disabled{opacity:.55;cursor:not-allowed;filter:none;box-shadow:none}
.status-row{display:flex;justify-content:space-between;gap:0.75rem;align-items:flex-start;padding:0.9rem 1rem;border:1px solid var(--border);border-radius:var(--radius);background:rgba(255,255,255,0.025)}
.status-pill{font-size:0.72rem;font-weight:700;border-radius:999px;padding:0.28rem 0.55rem;white-space:nowrap}
.status-pill.ready{background:var(--green-light);color:var(--green)}
.status-pill.missing{background:var(--red-light);color:var(--red)}
.preview-list{display:grid;gap:0.7rem}
.preview-row{display:flex;justify-content:space-between;gap:1rem;padding-bottom:0.7rem;border-bottom:1px solid rgba(255,255,255,0.06)}
.preview-row:last-child{padding-bottom:0;border-bottom:none}
.preview-key{font-size:0.76rem;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-3)}
.preview-val{font-size:0.86rem;line-height:1.5;color:var(--text);text-align:right;max-width:60%}
.pill-row{display:flex;flex-wrap:wrap;gap:0.45rem}
.pill{display:inline-flex;align-items:center;gap:0.35rem;padding:0.45rem 0.7rem;border-radius:999px;background:rgba(255,255,255,0.04);border:1px solid var(--border);font-size:0.76rem;color:var(--text-2)}
.notice{padding:1rem;border-radius:var(--radius);background:rgba(255,255,255,0.04);border:1px solid var(--border);font-size:0.86rem;line-height:1.55;color:var(--text-2)}
.ocr-state{padding:0.8rem 0.9rem;border-radius:var(--radius);background:rgba(255,255,255,0.03);border:1px solid var(--border);font-size:0.8rem;color:var(--text-2)}
.raw-text{padding:1rem;border-radius:var(--radius);background:rgba(255,255,255,0.03);border:1px solid var(--border);font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:0.76rem;line-height:1.5;color:var(--text-2);white-space:pre-wrap;max-height:240px;overflow:auto}
.missing-list{display:grid;gap:0.35rem;color:var(--text-2);font-size:0.82rem}
code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
@media (max-width:700px){
  .shell{padding:0.75rem 0.75rem 2.5rem}
  .topbar,.progress-meta,.preview-row,.actions{flex-direction:column;align-items:stretch}
  .guide-grid,.upload-grid,.form-grid{grid-template-columns:1fr}
  .field.span-2{grid-column:auto}
  .preview-val{max-width:none;text-align:left}
  .primary-btn,.secondary-btn,.ghost-link{width:100%}
}
</style>
</head>
<body>
<div class="shell">
  <div class="top-frame">
    <div class="topbar">
      <div class="brand">
        <div class="brand-line"><span class="badge">PVO</span><span>Application Assist Module</span></div>
        <div class="brand-sub">DL or state ID first for contact details. Military ID or DD-214 second for proof of service. Review every autofilled field before moving on.</div>
      </div>
      <a class="ghost-link" href="/MelTitanic">Back to prescreener</a>
    </div>
    <div class="progress-copy">
      <div class="progress-kicker">Module progress</div>
      <div class="progress-title" id="progress-title">Start application</div>
      <div class="progress-note" id="progress-note">We will use your prescreener answers plus document images to build a PVO-ready draft.</div>
    </div>
    <div class="progress-track"><div class="progress-fill" id="progress-fill"></div></div>
    <div class="progress-meta">
      <div class="progress-step" id="progress-step">Step 1 of 4</div>
      <div class="progress-dots" id="progress-dots"></div>
    </div>
  </div>
  <div id="app"></div>
</div>

<script>
const PRESCREENER_KEY = 'pvo_prescreener_context_v1';
const DRAFT_KEY = 'pvo_application_draft_v1';
const STEP_TOTAL = 4;
const BRANCH_OPTIONS = ['Army','Navy','Air Force','Marine Corps','Coast Guard','Space Force'];
const GENERAL_NEEDS = ['Home repairs','Medical','Counseling','Legal','Transportation','Family','Meals/food','Veterans Administration Services','Other'];
const PVO_NEED_MAP = {
  rent:'Other',utility:'Other',food:'Meals/food',transport:'Transportation',home_repair:'Home repairs',
  medical:'Medical',counseling:'Counseling',legal:'Legal',vehicle_reg:'Transportation',moving:'Other',
  storage:'Other',mental_health:'Counseling'
};
const NEED_TEXT = {
  rent:'rent or housing support',utility:'utility bill support',food:'food assistance',transport:'transportation support',
  home_repair:'home repair assistance',medical:'medical cost support',counseling:'counseling support',
  legal:'legal or VA benefits guidance',vehicle_reg:'vehicle registration help',moving:'moving or relocation help',
  storage:'storage fee assistance',mental_health:'PTSD / TBI support'
};
const EMPLOYMENT_TEXT = {
  employed:'currently working',unemployed:'currently between jobs',disabled:'currently disabled or unable to work'
};
const BACKEND_BASE = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
  ? 'http://localhost:3000'
  : location.origin;

let currentStep = 1;
let prescreenerContext = null;
let draft = null;

function escapeHtml(value=''){
  return String(value)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

function titleCase(value){
  return String(value || '')
    .toLowerCase()
    .split(/[\s-]+/)
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function splitName(fullName=''){
  const cleaned = fullName.replace(/\s+/g,' ').trim();
  if(!cleaned) return {firstName:'',lastName:''};
  const parts = cleaned.split(' ');
  return {firstName:parts.shift() || '', lastName:parts.join(' ') || ''};
}

function formatPhone(value){
  const digits = String(value || '').replace(/\D/g,'').slice(-10);
  if(digits.length !== 10) return value || '';
  return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
}

function getPreviewValue(value, fallback='Not filled yet'){
  return escapeHtml(value && String(value).trim() ? value : fallback);
}

function fileToBase64(file){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || '');
      const commaIndex = result.indexOf(',');
      resolve(commaIndex >= 0 ? result.slice(commaIndex + 1) : result);
    };
    reader.onerror = () => reject(reader.error || new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

function saveDraft(){
  localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
}

function loadData(){
  try { prescreenerContext = JSON.parse(localStorage.getItem(PRESCREENER_KEY) || 'null'); } catch { prescreenerContext = null; }
  try { draft = JSON.parse(localStorage.getItem(DRAFT_KEY) || 'null'); } catch { draft = null; }
  if(!draft && prescreenerContext) draft = createDraftFromContext(prescreenerContext);
}

function createDraftFromContext(ctx){
  const zip = ctx.user_zip || '';
  const generalNeed = PVO_NEED_MAP[ctx.need_type] || 'Other';
  const specificNeed = `Applicant is requesting ${NEED_TEXT[ctx.need_type] || 'support'}. They report being ${EMPLOYMENT_TEXT[ctx.employment] || 'currently in an unknown work status'}, household size ${ctx.household_sz || 1}, and ${ctx.housing_risk ? 'housing is at risk' : 'housing is stable'}. They are ${ctx.has_va_care ? 'already connected to VA services' : 'not yet connected to VA services'}.`;
  return {
    firstName:'',lastName:'',street:'',city:'',state:'CA',zip,
    homePhone:'',cellPhone:'',email:'',branch:'',
    generalNeed,specificNeed,
    primaryDocName:'',primaryDocPreview:'',primaryDocText:'',
    proofDocName:'',proofDocPreview:'',
    ocrStatus:'idle',ocrMessage:'Upload a DL or state ID to begin OCR-assisted autofill.'
  };
}

function setStep(step, title, note){
  currentStep = step;
  document.getElementById('progress-title').textContent = title;
  document.getElementById('progress-note').textContent = note;
  document.getElementById('progress-step').textContent = `Step ${step} of ${STEP_TOTAL}`;
  document.getElementById('progress-fill').style.width = `${Math.round((step / STEP_TOTAL) * 100)}%`;
  document.querySelectorAll('.progress-dot').forEach((dot, idx) => {
    dot.classList.toggle('complete', idx < step - 1);
    dot.classList.toggle('active', idx === step - 1);
  });
}

function initDots(){
  const dots = document.getElementById('progress-dots');
  dots.innerHTML = Array.from({length: STEP_TOTAL}, () => '<span class="progress-dot"></span>').join('');
}

function parseDocumentText(rawText=''){
  const text = String(rawText || '').replace(/\r/g,'\n');
  const normalizedText = text
    .replace(/[|]/g,'I')
    .replace(/[“”]/g,'"')
    .replace(/[‘’]/g,"'")
    .replace(/[^\S\n]+/g,' ')
    .replace(/\n{2,}/g,'\n');
  const lines = normalizedText
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);
  const parsed = {};

  const labelMap = {
    firstName: /(?:\bDAC\b|\bFN\b|\bFIRST\b|\bGIVEN\b|\bPR\b)[\s:;-]+([A-Z][A-Z' -]{1,})/i,
    lastName: /(?:\bDCS\b|\bLN\b|\bLAST\b|\bSURNAME\b|\bNO\b)[\s:;-]+([A-Z][A-Z' -]{1,})/i,
    street: /(?:\bDAG\b|\bADDR(?:ESS)?\b)[\s:;-]+([0-9A-Z.#' -]{5,})/i,
    city: /(?:\bDAI\b|\bCITY\b)[\s:;-]+([A-Z][A-Z' -]{1,})/i,
    state: /(?:\bDAJ\b|\bSTATE\b)[\s:;-]+([A-Z]{2}|CALIFORNIA)/i,
    zip: /(?:\bDAK\b|\bZIP\b)[\s:;-]+(\d{5})(?:-\d{4})?/i,
  };

  Object.entries(labelMap).forEach(([key, pattern]) => {
    const match = normalizedText.match(pattern);
    if(!match) return;
    if(key === 'zip') parsed[key] = match[1];
    else if(key === 'state') parsed[key] = match[1].length > 2 ? 'CA' : match[1].toUpperCase();
    else parsed[key] = titleCase(match[1]);
  });

  const email = normalizedText.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  if(email) parsed.email = email[0];

  const phones = [...normalizedText.matchAll(/(?:\+?1[\s.-]*)?(?:\(?(\d{3})\)?[\s.-]*)?(\d{3})[\s.-]*(\d{4})/g)]
    .map(match => formatPhone(`${match[1] || ''}${match[2]}${match[3]}`))
    .filter(Boolean);
  if(phones[0]) parsed.homePhone = phones[0];
  if(phones[1]) parsed.cellPhone = phones[1];
  else if(phones[0]) parsed.cellPhone = phones[0];

  const branch = BRANCH_OPTIONS.find(option => new RegExp(`\\b${option.replace(/\s+/g,'\\s+')}\\b`, 'i').test(normalizedText));
  if(branch) parsed.branch = branch;

  const address = normalizedText.match(/\b\d{1,6}\s+[A-Za-z0-9.#'\- ]+\s(?:Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Lane|Ln|Drive|Dr|Court|Ct|Way|Place|Pl|Circle|Cir|Trail|Trl|Highway|Hwy)\b[^\n,]*/i);
  if(address) parsed.street = address[0].replace(/\s+/g,' ').trim();

  const cityStateZip = normalizedText.match(/([A-Za-z .'-]+),?\s+(CA|California|[A-Z]{2})\s+(\d{5})(?:-\d{4})?/i);
  if(cityStateZip){
    parsed.city = titleCase(cityStateZip[1]);
    parsed.state = cityStateZip[2].length > 2 ? 'CA' : cityStateZip[2].toUpperCase();
    parsed.zip = cityStateZip[3];
  }

  const cityLineIndex = lines.findIndex(line => /(?:^|\s)(CA|CALIFORNIA|[A-Z]{2})\s+\d{5}(?:-\d{4})?$/.test(line));
  if(cityLineIndex >= 0){
    const line = lines[cityLineIndex];
    const match = line.match(/([A-Z][A-Z .'-]+?)\s+(CA|CALIFORNIA|[A-Z]{2})\s+(\d{5})(?:-\d{4})?$/i);
    if(match){
      if(!parsed.city) parsed.city = titleCase(match[1]);
      if(!parsed.state) parsed.state = match[2].length > 2 ? 'CA' : match[2].toUpperCase();
      if(!parsed.zip) parsed.zip = match[3];
    }
    if(!parsed.street && cityLineIndex > 0){
      const prev = lines[cityLineIndex - 1];
      if(/^\d{1,6}\s+[A-Z0-9.#' -]+$/i.test(prev)) parsed.street = titleCase(prev);
    }
  }

  const labelledName = normalizedText.match(/(?:name|member name|patient name|recipient|customer)[:\s]+([A-Z][A-Za-z' -]+(?:\s+[A-Z][A-Za-z' -]+)+)/i);
  const allCapsName = normalizedText.match(/^([A-Z][A-Z' -]+,\s*[A-Z][A-Z' -]+)$/m);
  const plainName = normalizedText.match(/^([A-Z][a-z]+(?:\s+[A-Z][a-z]+){1,2})$/m);
  let fullName = '';
  if(labelledName) fullName = labelledName[1];
  else if(allCapsName) fullName = allCapsName[1].split(',').reverse().join(' ');
  else if(plainName) fullName = plainName[1];
  if(!fullName){
    const ignoreTokens = ['DRIVER','LICENSE','CALIFORNIA','IDENTIFICATION','CARD','CLASS','SEX','HEIGHT','WEIGHT','EYES','HAIR','DOB','EXP','ISS','DONOR','VETERAN','ORGAN'];
    const candidate = lines.slice(0, 10).find(line =>
      !/\d/.test(line) &&
      /^[A-Z][A-Z' -]{3,}$/.test(line) &&
      line.split(/\s+/).length >= 2 &&
      !ignoreTokens.some(token => line.includes(token))
    );
    if(candidate) fullName = candidate;
  }
  if(fullName){
    const split = splitName(titleCase(fullName.replace(',', ' ')));
    parsed.firstName = split.firstName;
    parsed.lastName = split.lastName;
  }

  if(!parsed.street){
    const streetLine = lines.find(line => /^\d{1,6}\s+[A-Z0-9.#' -]{4,}$/.test(line) && !/DOB|EXP|ISS|DL|LIC/i.test(line));
    if(streetLine) parsed.street = titleCase(streetLine);
  }

  return parsed;
}

function applyParsedFields(parsed){
  Object.entries(parsed).forEach(([key, value]) => {
    if(value && !draft[key]) draft[key] = value;
  });
  saveDraft();
}

function getMissingFields(){
  const missing = [];
  if(!draft.firstName) missing.push('First name');
  if(!draft.lastName) missing.push('Last name');
  if(!draft.street) missing.push('Street address');
  if(!draft.city) missing.push('City');
  if(!draft.state) missing.push('State');
  if(!draft.zip) missing.push('ZIP code');
  if(!draft.homePhone && !draft.cellPhone) missing.push('Phone number');
  if(!draft.email) missing.push('Email');
  if(!draft.branch) missing.push('Branch of service');
  if(!draft.generalNeed) missing.push('General need');
  if(!draft.specificNeed) missing.push('Specific need');
  if(!draft.proofDocName) missing.push('Proof of service file');
  return missing;
}

function updatePrimaryPreview(){
  const nameEl = document.getElementById('primary-doc-name');
  const previewEl = document.getElementById('primary-doc-preview');
  const statusEl = document.getElementById('ocr-state');
  if(nameEl) nameEl.textContent = draft.primaryDocName || 'No intake document selected yet';
  if(previewEl){
    previewEl.innerHTML = draft.primaryDocPreview
      ? `<img class="doc-img" src="${draft.primaryDocPreview}" alt="Primary document preview">`
      : '<div class="doc-empty">Upload a DL or state ID. If OCR cannot read everything, you can still verify and finish manually.</div>';
  }
  if(statusEl) statusEl.textContent = draft.ocrMessage;
}

function applyGeminiExtraction(extracted = {}){
  const fieldMap = {
    first_name: 'firstName',
    last_name: 'lastName',
    street: 'street',
    city: 'city',
    state: 'state',
    zip: 'zip',
    home_phone: 'homePhone',
    cell_phone: 'cellPhone',
    email: 'email',
    branch: 'branch',
    raw_visible_text: 'primaryDocText',
  };

  Object.entries(fieldMap).forEach(([sourceKey, targetKey]) => {
    const value = extracted[sourceKey];
    if(value && !draft[targetKey]) draft[targetKey] = value;
  });

  if(extracted.address && !draft.street){
    draft.street = extracted.address;
  }
  if(extracted.phone && !draft.cellPhone && !draft.homePhone){
    draft.cellPhone = extracted.phone;
  }
  saveDraft();
}

function updateProofPreview(){
  const nameEl = document.getElementById('proof-doc-name');
  const previewEl = document.getElementById('proof-doc-preview');
  if(nameEl) nameEl.textContent = draft.proofDocName || 'No proof-of-service file selected yet';
  if(previewEl){
    previewEl.innerHTML = draft.proofDocPreview
      ? `<img class="doc-img" src="${draft.proofDocPreview}" alt="Proof document preview">`
      : '<div class="doc-empty">Upload a military ID or DD-214 here. Image files preview immediately; other file types are tracked by file name.</div>';
  }
}

async function handlePrimaryDoc(event){
  const file = event.target.files && event.target.files[0];
  draft.primaryDocName = file ? file.name : '';
  draft.primaryDocPreview = '';
  draft.primaryDocText = '';
  draft.ocrStatus = 'idle';
  draft.ocrMessage = file ? 'Preparing AI extraction...' : 'Upload a DL or state ID to begin Gemini-assisted autofill.';
  saveDraft();
  updatePrimaryPreview();

  if(file && file.type.startsWith('image/')){
    const reader = new FileReader();
    reader.onload = () => {
      draft.primaryDocPreview = reader.result;
      saveDraft();
      updatePrimaryPreview();
    };
    reader.readAsDataURL(file);
  }

  if(!file || !file.type.startsWith('image/')){
    draft.ocrMessage = file ? 'Gemini extraction runs on image uploads. You can still paste text manually below.' : draft.ocrMessage;
    saveDraft();
    updatePrimaryPreview();
    return;
  }

  try{
    draft.ocrStatus = 'running';
    draft.ocrMessage = 'Sending the image to Gemini for field extraction...';
    saveDraft();
    updatePrimaryPreview();
    const base64 = await fileToBase64(file);
    const response = await fetch(`${BACKEND_BASE}/api/pvo/extract-document`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        documentType: 'drivers_license',
        mimeType: file.type || 'image/jpeg',
        imageBase64: base64,
      }),
    });

    const data = await response.json();
    if(!response.ok) throw new Error(data?.error || 'Gemini extraction failed');

    const extracted = data?.extracted || {};
    draft.primaryDocText = extracted.raw_visible_text || '';
    draft.ocrStatus = 'done';
    draft.ocrMessage = extracted.confidence_summary
      ? `Gemini extraction complete: ${extracted.confidence_summary}`
      : 'Gemini extraction complete. Review the extracted fields before continuing.';
    applyGeminiExtraction(extracted);
    applyParsedFields(parseDocumentText(draft.primaryDocText));
  }catch(error){
    draft.ocrStatus = 'error';
    draft.ocrMessage = `Gemini extraction failed: ${error.message}. You can still paste text manually or continue with manual verification.`;
    saveDraft();
  }

  renderCapture();
}

function handlePrimaryText(value){
  draft.primaryDocText = value;
  draft.ocrMessage = value.trim()
    ? 'Manual text provided. We can use this to prefill the verification step.'
    : draft.ocrMessage;
  saveDraft();
}

function syncField(key, value){
  draft[key] = value;
  saveDraft();
}

function handleProofDoc(event){
  const file = event.target.files && event.target.files[0];
  draft.proofDocName = file ? file.name : '';
  draft.proofDocPreview = '';
  saveDraft();
  updateProofPreview();

  if(file && file.type.startsWith('image/')){
    const reader = new FileReader();
    reader.onload = () => {
      draft.proofDocPreview = reader.result;
      saveDraft();
      updateProofPreview();
    };
    reader.readAsDataURL(file);
  }
}

function prepareVerification(){
  if(draft.ocrStatus === 'running') return;
  applyParsedFields(parseDocumentText(draft.primaryDocText || ''));
  renderVerify();
}

function renderNoContext(){
  setStep(1, 'Start application', 'Open the prescreener first so this module can inherit the ML result and need summary.');
  document.getElementById('app').innerHTML = `<div class="panel stack">
    <div class="hero-title">No prescreener context found</div>
    <div class="notice">This module expects to open after the prescreener marks the applicant as likely eligible for direct PVO help. Start from the prescreener, then use the application button there.</div>
    <div class="actions">
      <a class="primary-btn" href="/MelTitanic">Open prescreener →</a>
    </div>
  </div>`;
}

function renderCapture(){
  setStep(1, 'Capture intake document', 'Use a DL or state ID first so Gemini can pull identity and address details before review.');
  const ocrRunning = draft.ocrStatus === 'running';
  document.getElementById('app').innerHTML = `<div class="stack">
    <div class="panel stack">
      <div class="hero-title">Start with a photo that can fill the draft</div>
      <div class="hero-copy">Best path: 1. DL or state ID for name and address. 2. Military ID or DD-214 later for proof of service. The prescreener has already prepared your need summary.</div>
    </div>
    <div class="guide-grid">
      <div class="guide-card">
        <div class="guide-kicker">Best document</div>
        <div class="guide-title">Driver's license / state ID</div>
        <div class="guide-copy">Most likely to provide full legal name, street address, city, state, and ZIP in one image.</div>
      </div>
      <div class="guide-card">
        <div class="guide-kicker">Secondary help</div>
        <div class="guide-title">VA letter or benefits mail</div>
        <div class="guide-copy">Can reinforce address or provide contact clues if the ID photo is incomplete.</div>
      </div>
      <div class="guide-card">
        <div class="guide-kicker">Proof later</div>
        <div class="guide-title">Military ID or DD-214</div>
        <div class="guide-copy">Upload this in the next module step where proof of service is required.</div>
      </div>
    </div>
    <div class="banner">
      <div class="banner-mark">i</div>
      <div class="status-copy">Gemini reads the uploaded image on the backend and returns structured fields. If the image is hard to read, you can still paste any visible text and verify everything manually before moving on.</div>
    </div>
    <div class="upload-grid">
      <div class="panel stack">
        <div class="inner-panel">
          <div class="section-kicker">Intake document</div>
          <div class="section-title">Upload or take a photo of the DL / state ID</div>
          <div class="section-copy">This step is for Gemini autofill. Use proof-of-service documents in the later step.</div>
        </div>
        <label class="upload-label">
          <input type="file" accept="image/*,.pdf" capture="environment" style="display:none" onchange="handlePrimaryDoc(event)">
          <div class="guide-title">Choose image or PDF</div>
          <div class="guide-copy">For best OCR results, use a clear, straight photo with minimal glare.</div>
        </label>
        <div class="file-meta" id="primary-doc-name">${escapeHtml(draft.primaryDocName || 'No intake document selected yet')}</div>
        <div class="ocr-state" id="ocr-state">${escapeHtml(draft.ocrMessage || '')}</div>
        <div class="field">
          <label class="field-label">Document text</label>
          <textarea class="textarea" placeholder="If Gemini misses details, paste any text you can read from the document here." oninput="handlePrimaryText(this.value)">${escapeHtml(draft.primaryDocText || '')}</textarea>
          <div class="helper">This is a fallback. The main extraction path now comes from Gemini through the backend.</div>
        </div>
      </div>
      <div class="panel stack">
        <div class="section-title">Preview</div>
        <div class="doc-preview" id="primary-doc-preview"></div>
      </div>
    </div>
    <div class="actions">
      <a class="secondary-btn" href="/MelTitanic">Back to prescreener</a>
      <button class="primary-btn${ocrRunning ? ' is-disabled' : ''}" ${ocrRunning ? 'disabled' : ''} onclick="prepareVerification()">${ocrRunning ? 'Gemini extracting...' : 'Verify extracted info →'}</button>
    </div>
  </div>`;
  updatePrimaryPreview();
}

function renderVerify(){
  setStep(2, 'Verify autofill', 'Review every field before moving to proof of service.');
  const hasRawText = !!(draft.primaryDocText && draft.primaryDocText.trim());
  document.getElementById('app').innerHTML = `<div class="stack">
    <div class="panel stack">
      <div class="section-kicker">Verification</div>
      <div class="hero-title">Check the PVO draft before continuing</div>
      <div class="hero-copy">Need-related fields came from the prescreener. Identity and address fields came from OCR or your manual corrections.</div>
    </div>
    <div class="panel form-grid">
      <div class="field">
        <label class="field-label">First name</label>
        <input class="input" value="${escapeHtml(draft.firstName || '')}" oninput="syncField('firstName', this.value)">
      </div>
      <div class="field">
        <label class="field-label">Last name</label>
        <input class="input" value="${escapeHtml(draft.lastName || '')}" oninput="syncField('lastName', this.value)">
      </div>
      <div class="field span-2">
        <label class="field-label">Street address</label>
        <input class="input" value="${escapeHtml(draft.street || '')}" oninput="syncField('street', this.value)">
      </div>
      <div class="field">
        <label class="field-label">City</label>
        <input class="input" value="${escapeHtml(draft.city || '')}" oninput="syncField('city', this.value)">
      </div>
      <div class="field">
        <label class="field-label">State</label>
        <input class="input" value="${escapeHtml(draft.state || '')}" oninput="syncField('state', this.value)">
      </div>
      <div class="field">
        <label class="field-label">ZIP code</label>
        <input class="input" value="${escapeHtml(draft.zip || '')}" oninput="syncField('zip', this.value)">
      </div>
      <div class="field">
        <label class="field-label">Home phone</label>
        <input class="input" value="${escapeHtml(draft.homePhone || '')}" oninput="syncField('homePhone', this.value)">
      </div>
      <div class="field">
        <label class="field-label">Cell phone</label>
        <input class="input" value="${escapeHtml(draft.cellPhone || '')}" oninput="syncField('cellPhone', this.value)">
      </div>
      <div class="field">
        <label class="field-label">Email</label>
        <input class="input" value="${escapeHtml(draft.email || '')}" oninput="syncField('email', this.value)">
      </div>
      <div class="field">
        <label class="field-label">Branch of service</label>
        <select class="select" onchange="syncField('branch', this.value)">
          <option value="">Select branch</option>
          ${BRANCH_OPTIONS.map(option => `<option value="${option}" ${draft.branch===option?'selected':''}>${option}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <label class="field-label">General need</label>
        <select class="select" onchange="syncField('generalNeed', this.value)">
          ${GENERAL_NEEDS.map(option => `<option value="${option}" ${draft.generalNeed===option?'selected':''}>${option}</option>`).join('')}
        </select>
      </div>
      <div class="field span-2">
        <label class="field-label">Specific need</label>
        <textarea class="textarea" oninput="syncField('specificNeed', this.value)">${escapeHtml(draft.specificNeed || '')}</textarea>
      </div>
    </div>
    <div class="panel stack">
      <div class="section-title">Visible text used for autofill</div>
      <div class="section-copy">Gemini extracted fields from the image directly. This text block is only a debugging aid if a field still looks off.</div>
      <div class="raw-text">${hasRawText ? escapeHtml(draft.primaryDocText) : 'No OCR or manual document text was available yet.'}</div>
    </div>
    <div class="actions">
      <button class="secondary-btn" onclick="renderCapture()">Back to intake document</button>
      <button class="primary-btn" onclick="renderProof()">Continue to proof of service →</button>
    </div>
  </div>`;
}

function renderProof(){
  setStep(3, 'Add proof of service', 'Upload a military ID or DD-214 to complete the PVO packet.');
  document.getElementById('app').innerHTML = `<div class="stack">
    <div class="panel stack">
      <div class="section-kicker">Proof of service</div>
      <div class="hero-title">Upload the military-service document</div>
      <div class="hero-copy">This is the second document step. Use a military ID, DD-214, or another accepted proof-of-service file.</div>
    </div>
    <div class="upload-grid">
      <div class="panel stack">
        <label class="upload-label">
          <input type="file" accept="image/*,.pdf,.doc,.txt" capture="environment" style="display:none" onchange="handleProofDoc(event)">
          <div class="guide-title">Upload proof of service</div>
          <div class="guide-copy">Image files preview immediately. PDFs and other accepted files are tracked by file name.</div>
        </label>
        <div class="file-meta" id="proof-doc-name">${escapeHtml(draft.proofDocName || 'No proof-of-service file selected yet')}</div>
        <div class="status-row">
          <div>
            <strong>Draft fields</strong>
            <div class="status-copy">Review step completed for identity and assistance fields.</div>
          </div>
          <div class="status-pill ready">Ready</div>
        </div>
        <div class="status-row">
          <div>
            <strong>Proof file</strong>
            <div class="status-copy">${escapeHtml(draft.proofDocName || 'Still needed before final preview')}</div>
          </div>
          <div class="status-pill ${draft.proofDocName ? 'ready' : 'missing'}">${draft.proofDocName ? 'Uploaded' : 'Missing'}</div>
        </div>
      </div>
      <div class="panel stack">
        <div class="section-title">Proof preview</div>
        <div class="doc-preview" id="proof-doc-preview"></div>
      </div>
    </div>
    <div class="actions">
      <button class="secondary-btn" onclick="renderVerify()">Back to verification</button>
      <button class="primary-btn" onclick="renderFinal()">Show submission-ready preview →</button>
    </div>
  </div>`;
  updateProofPreview();
}

function renderFinal(){
  setStep(4, 'Submission-ready preview', 'Review the final packet before opening the live PVO form or future automation handoff.');
  const missing = getMissingFields();
  document.getElementById('app').innerHTML = `<div class="stack">
    <div class="panel stack">
      <div class="section-kicker">Final preview</div>
      <div class="hero-title">PVO-ready draft</div>
      <div class="hero-copy">This mirrors the major fields from <code>powayveterans.org/request-assistance/</code>. The final handoff can now be manual, browser-automated, or server-assisted later.</div>
    </div>
    <div class="panel preview-list">
      <div class="preview-row"><div class="preview-key">Name</div><div class="preview-val">${getPreviewValue(`${draft.firstName} ${draft.lastName}`.trim())}</div></div>
      <div class="preview-row"><div class="preview-key">Address</div><div class="preview-val">${getPreviewValue([draft.street,draft.city,draft.state,draft.zip].filter(Boolean).join(', '))}</div></div>
      <div class="preview-row"><div class="preview-key">Home phone</div><div class="preview-val">${getPreviewValue(draft.homePhone)}</div></div>
      <div class="preview-row"><div class="preview-key">Cell phone</div><div class="preview-val">${getPreviewValue(draft.cellPhone)}</div></div>
      <div class="preview-row"><div class="preview-key">Email</div><div class="preview-val">${getPreviewValue(draft.email)}</div></div>
      <div class="preview-row"><div class="preview-key">Branch</div><div class="preview-val">${getPreviewValue(draft.branch)}</div></div>
      <div class="preview-row"><div class="preview-key">General need</div><div class="preview-val">${getPreviewValue(draft.generalNeed)}</div></div>
      <div class="preview-row"><div class="preview-key">Specific need</div><div class="preview-val">${getPreviewValue(draft.specificNeed)}</div></div>
    </div>
    <div class="panel stack">
      <div class="section-title">Attached documents</div>
      <div class="pill-row">
        <div class="pill">DL / ID: ${escapeHtml(draft.primaryDocName || 'Not uploaded yet')}</div>
        <div class="pill">Proof of service: ${escapeHtml(draft.proofDocName || 'Not uploaded yet')}</div>
      </div>
    </div>
    <div class="panel stack">
      <div class="section-title">Readiness check</div>
      ${missing.length
        ? `<div class="missing-list">${missing.map(item => `<div>• ${escapeHtml(item)}</div>`).join('')}</div>`
        : `<div class="banner"><div class="banner-mark">✓</div><div class="status-copy">The draft is filled for the main PVO fields. Next automation step can hand this into the live PVO form.</div></div>`}
    </div>
    <div class="actions">
      <button class="secondary-btn" onclick="renderProof()">Back to proof step</button>
      <button class="secondary-btn" onclick="renderVerify()">Edit draft</button>
      <a class="primary-btn" href="https://powayveterans.org/request-assistance/" target="_blank">Open live PVO form →</a>
    </div>
  </div>`;
}

function init(){
  initDots();
  loadData();
  if(!prescreenerContext){
    renderNoContext();
    return;
  }
  if(!draft) draft = createDraftFromContext(prescreenerContext);
  saveDraft();
  renderCapture();
}

init();
</script>
</body>
</html>
