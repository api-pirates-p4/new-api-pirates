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
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --red:#ff6a4d;--red-strong:#ff7d63;--red-light:rgba(255,106,77,0.14);
  --navy:#dce8ff;--navy-mid:#9db7ff;
  --gold:#f1b65c;--gold-light:rgba(241,182,92,0.16);
  --green:#55d39b;--green-light:rgba(85,211,155,0.14);
  --bg:#08111f;--bg-2:#0c1830;--bg-3:#12213f;
  --surface:#111c31;--surface-2:#15223b;--surface-3:#1b2b48;--surface-4:#21345a;
  --border:rgba(196,214,255,0.12);--border-strong:rgba(196,214,255,0.28);
  --text:#f3f7ff;--text-2:#b9c6e5;--text-3:#7e90b7;
  --radius:14px;--radius-lg:20px;--radius-xl:28px;
  --shadow:0 14px 40px rgba(2,8,20,0.34);
  --shadow-lg:0 24px 80px rgba(2,8,20,0.46);
  --ease:cubic-bezier(0.22,1,0.36,1);
}
html,body{height:100%;font-family:'Space Grotesk',sans-serif;background:radial-gradient(circle at top left, rgba(255,106,77,0.14), transparent 28%),radial-gradient(circle at top right, rgba(90,140,255,0.18), transparent 34%),linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 45%, #07101d 100%);color:var(--text);overflow-x:hidden}
body::before{content:"";position:fixed;inset:0;pointer-events:none;opacity:0.45;background-image:linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);background-size:32px 32px;mask-image:linear-gradient(180deg, rgba(0,0,0,0.45), transparent 85%)}
button,input{font:inherit}
:focus-visible{outline:2px solid rgba(157,183,255,0.9);outline-offset:3px}

/* ── Layout ── */
.shell{position:relative;min-height:100vh;display:flex;flex-direction:column;max-width:760px;margin:0 auto;padding:1rem 1rem 3rem}

/* ── Top frame ── */
.top-frame{position:sticky;top:0.75rem;z-index:30;margin-bottom:1.2rem;padding:1rem 1rem 1.1rem;background:linear-gradient(180deg, rgba(18,33,63,0.92), rgba(12,24,48,0.88));border:1px solid var(--border);border-radius:26px;box-shadow:var(--shadow);backdrop-filter:blur(18px)}
.topbar{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:0.95rem}
.brand-stack{display:flex;flex-direction:column;gap:0.3rem}
.brand-line{display:flex;align-items:center;gap:0.65rem}
.logo{font-family:'Sora',sans-serif;font-size:1rem;font-weight:700;color:var(--text);letter-spacing:-0.02em;display:flex;align-items:center;gap:0.5rem}
.logo-badge{background:linear-gradient(135deg,var(--red),var(--gold));color:#09111f;font-size:0.65rem;font-weight:800;letter-spacing:0.12em;padding:4px 8px;border-radius:999px;text-transform:uppercase}
.brand-sub{font-size:0.82rem;color:var(--text-2);line-height:1.4;max-width:420px}
.skip-btn{font-size:0.82rem;color:var(--text);background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:999px;cursor:pointer;padding:0.75rem 1rem;white-space:nowrap;transition:all 0.2s var(--ease)}
.skip-btn:hover{background:rgba(255,255,255,0.06);border-color:var(--border-strong);transform:translateY(-1px)}

/* ── Progress header ── */
.progress-section{display:grid;gap:0.75rem}
.progress-head{display:flex;justify-content:space-between;align-items:flex-start;gap:1rem}
.progress-copy{display:grid;gap:0.28rem}
.progress-kicker{display:inline-flex;align-items:center;gap:0.45rem;width:max-content;padding:0.32rem 0.65rem;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid var(--border);font-size:0.72rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-2)}
.progress-label{font-family:'Sora',sans-serif;font-size:1rem;font-weight:700;color:var(--text);letter-spacing:-0.02em}
.progress-note{font-size:0.8rem;color:var(--text-3)}
.progress-pct-wrap{text-align:right;display:grid;gap:0.15rem}
.progress-pct{font-family:'Sora',sans-serif;font-size:1.4rem;font-weight:700;color:var(--text)}
.progress-step{font-size:0.78rem;font-weight:600;color:var(--text-3)}
.progress-track{position:relative;height:12px;background:rgba(255,255,255,0.05);border-radius:999px;overflow:hidden;border:1px solid rgba(255,255,255,0.06)}
.progress-track::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg, transparent 0, transparent calc(14.285% - 2px), rgba(255,255,255,0.09) calc(14.285% - 2px), rgba(255,255,255,0.09) 14.285%);opacity:0.7;pointer-events:none}
.progress-bar{position:relative;height:100%;background:linear-gradient(90deg,var(--red) 0%, #ff9568 38%, var(--gold) 100%);border-radius:999px;transition:width 0.55s var(--ease);width:0%;box-shadow:0 0 22px rgba(255,122,79,0.45)}
.progress-bar::after{content:"";position:absolute;top:1px;bottom:1px;right:0;width:38%;border-radius:999px;background:linear-gradient(90deg, transparent, rgba(255,255,255,0.4))}
.progress-foot{display:flex;justify-content:space-between;align-items:center;gap:0.75rem;flex-wrap:wrap}
.progress-caption{font-size:0.8rem;color:var(--text-2)}
.progress-dots{display:flex;gap:0.45rem}
.progress-dot{width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.08);transition:all 0.28s var(--ease)}
.progress-dot.active{background:var(--gold);box-shadow:0 0 14px rgba(241,182,92,0.55);border-color:transparent}
.progress-dot.complete{background:var(--green);box-shadow:0 0 14px rgba(85,211,155,0.45);border-color:transparent}

/* ── Time saved ticker ── */
.time-saved-wrap{display:flex;align-items:center;justify-content:center;gap:0.5rem;background:var(--green-light);border:1px solid rgba(85,211,155,0.22);border-radius:var(--radius);padding:0.65rem 1rem;transition:all 0.3s}
.time-saved-icon{width:18px;height:18px;background:var(--green);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 0 14px rgba(85,211,155,0.35)}
.time-saved-text{font-size:0.78rem;color:#cbf5e2;font-weight:600}
.time-saved-num{font-family:'Sora',sans-serif;font-size:0.85rem;font-weight:700;color:#fff}
.time-saved-wrap.hidden{opacity:0;pointer-events:none;height:0;padding:0;margin:0;border:none}

/* ── Stage ── */
.stage{flex:1;display:flex;flex-direction:column;align-items:center}

/* ── Question card ── */
.q-card{width:100%;background:linear-gradient(180deg, rgba(21,34,59,0.96), rgba(17,28,49,0.94));border-radius:var(--radius-xl);border:1px solid var(--border);box-shadow:var(--shadow);padding:2.15rem;animation:slideUp 0.4s var(--ease)}
@keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.q-card.exit{animation:slideOut 0.28s var(--ease) forwards}
@keyframes slideOut{to{opacity:0;transform:translateY(-16px)}}

.q-eyebrow{display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem}
.step-pill{font-size:0.7rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;background:rgba(255,255,255,0.05);color:var(--text-2);padding:5px 10px;border-radius:99px;border:1px solid var(--border)}
.q-title{font-family:'Sora',sans-serif;font-size:1.65rem;font-weight:700;line-height:1.15;letter-spacing:-0.03em;color:var(--text);margin-bottom:0.55rem}
.q-sub{font-size:0.88rem;color:var(--text-2);line-height:1.55;margin-bottom:1.5rem}

/* ── ZIP input ── */
.zip-input-wrap{position:relative;margin-bottom:0.75rem}
.zip-input{width:100%;font-family:'Sora',sans-serif;font-size:2.3rem;font-weight:700;letter-spacing:0.12em;color:var(--text);background:rgba(255,255,255,0.04);border:2px solid var(--border);border-radius:var(--radius-lg);padding:1rem 1.25rem;text-align:center;outline:none;transition:border-color 0.2s, box-shadow 0.2s;-webkit-appearance:none;appearance:none}
.zip-input:focus{border-color:var(--navy-mid);box-shadow:0 0 0 5px rgba(157,183,255,0.1)}
.zip-input.valid{border-color:var(--green);color:var(--green)}
.zip-input.invalid{border-color:var(--red);color:var(--red)}
.zip-feedback{text-align:center;font-size:0.83rem;font-weight:600;padding:0.5rem;border-radius:var(--radius);min-height:1.5rem;transition:all 0.2s}
.zip-feedback.ok{color:var(--green);background:var(--green-light)}
.zip-feedback.err{color:var(--red);background:var(--red-light)}

/* ── Tiles ── */
.tile-grid{display:grid;gap:0.6rem;margin-bottom:0.25rem}
.tile-grid.cols-2{grid-template-columns:1fr 1fr}
.tile-grid.cols-1{grid-template-columns:1fr}
.tile{display:flex;align-items:center;gap:0.85rem;padding:0.95rem 1rem;background:rgba(255,255,255,0.025);border:1.5px solid var(--border);border-radius:var(--radius-lg);cursor:pointer;transition:all 0.18s var(--ease);user-select:none;-webkit-tap-highlight-color:transparent;position:relative;overflow:hidden}
.tile::before{content:"";position:absolute;inset:0;background:linear-gradient(135deg, rgba(255,255,255,0.04), transparent 55%);opacity:0;transition:opacity 0.18s var(--ease)}
.tile:hover{border-color:var(--border-strong);background:rgba(255,255,255,0.05);transform:translateY(-1px)}
.tile:hover::before{opacity:1}
.tile:active{transform:scale(0.98)}
.tile.selected{border-color:rgba(241,182,92,0.5);background:linear-gradient(135deg, rgba(241,182,92,0.12), rgba(255,106,77,0.08));box-shadow:0 0 0 1px rgba(241,182,92,0.3)}
.tile.selected .tile-check{opacity:1;transform:scale(1)}
.tile-icon-box{width:40px;height:40px;border-radius:12px;background:rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;transition:background 0.2s}
.tile.selected .tile-icon-box{background:rgba(241,182,92,0.18)}
.tile-body{flex:1;min-width:0}
.tile-label{font-size:0.92rem;font-weight:600;color:var(--text);line-height:1.2}
.tile-sub{font-size:0.75rem;color:var(--text-3);margin-top:2px;line-height:1.3}
.tile-check{width:20px;height:20px;border-radius:50%;background:linear-gradient(135deg,var(--gold),#ffd08a);display:flex;align-items:center;justify-content:center;flex-shrink:0;opacity:0;transform:scale(0.5);transition:all 0.2s var(--ease)}
.tile-check svg{width:10px;height:10px;fill:none;stroke:#09111f;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}

/* ── Stepper ── */
.stepper-wrap{display:flex;align-items:center;justify-content:center;gap:1rem;margin:0.5rem 0 1rem}
.step-btn{width:54px;height:54px;border-radius:50%;border:2px solid var(--border);background:rgba(255,255,255,0.04);font-size:1.6rem;font-weight:500;color:var(--text);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.15s;line-height:1}
.step-btn:hover{border-color:var(--border-strong);background:rgba(255,255,255,0.08)}
.step-btn:active{transform:scale(0.93)}
.step-val{font-family:'Sora',sans-serif;font-size:3rem;font-weight:700;color:var(--text);min-width:108px;text-align:center;letter-spacing:-0.04em;padding:0.6rem 1rem;border-radius:22px;background:rgba(255,255,255,0.04);border:1px solid var(--border)}
.step-sub{font-size:0.8rem;color:var(--text-3);text-align:center;margin-top:0.25rem;margin-bottom:1rem}

/* ── Continue button ── */
.continue-btn{width:100%;margin-top:1.25rem;padding:1rem 1.5rem;background:linear-gradient(135deg,var(--red),#ff8c6f 62%,var(--gold));color:#08111f;border:none;border-radius:var(--radius-lg);font-family:'Sora',sans-serif;font-size:1rem;font-weight:800;letter-spacing:0.01em;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:0.5rem;opacity:0;pointer-events:none;transform:translateY(6px);transition:all 0.25s var(--ease);box-shadow:0 12px 30px rgba(255,106,77,0.25)}
.continue-btn.show{opacity:1;pointer-events:auto;transform:translateY(0)}
.continue-btn:hover{filter:brightness(1.05);box-shadow:0 16px 36px rgba(255,106,77,0.3)}
.continue-btn:active{transform:scale(0.99)}
.continue-arrow{font-size:1.1rem;transition:transform 0.2s}
.continue-btn:hover .continue-arrow{transform:translateX(4px)}

/* ── Out of area wall ── */
.wall-card{width:100%;background:linear-gradient(180deg, rgba(21,34,59,0.98), rgba(17,28,49,0.96));border-radius:var(--radius-xl);border:1px solid var(--border);box-shadow:var(--shadow);padding:2.5rem 2rem;text-align:center;animation:slideUp 0.4s var(--ease)}
.wall-icon{width:72px;height:72px;border-radius:50%;background:var(--red-light);margin:0 auto 1.25rem;display:flex;align-items:center;justify-content:center;font-size:2rem}
.wall-title{font-family:'Sora',sans-serif;font-size:1.4rem;font-weight:700;color:var(--text);margin-bottom:0.5rem}
.wall-desc{font-size:0.9rem;color:var(--text-2);line-height:1.6;max-width:360px;margin:0 auto 2rem}
.wall-partners{display:grid;gap:0.5rem;margin-bottom:1.75rem}
.partner-row{display:flex;align-items:center;gap:0.75rem;background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:var(--radius);padding:0.75rem 1rem;text-align:left}
.partner-dot{width:10px;height:10px;border-radius:50%;background:var(--gold);flex-shrink:0}
.partner-name{font-size:0.85rem;font-weight:600;color:var(--text)}
.partner-detail{font-size:0.75rem;color:var(--text-3)}
.wall-cta{display:block;width:100%;padding:0.95rem;background:linear-gradient(135deg,var(--red),#ff8c6f);color:#08111f;border:none;border-radius:var(--radius-lg);font-family:'Sora',sans-serif;font-size:0.95rem;font-weight:800;cursor:pointer;text-decoration:none;text-align:center;transition:all 0.2s}
.wall-cta:hover{filter:brightness(1.05)}
.restart-sm{margin-top:0.75rem;width:100%;background:none;border:none;font-size:0.8rem;color:var(--text-3);text-decoration:underline;text-underline-offset:2px;cursor:pointer;font-family:'Space Grotesk',sans-serif}
.restart-sm:hover{color:var(--text-2)}

/* ── Achievement toast ── */
.toast{position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(12,24,48,0.94);color:#fff;padding:0.65rem 1.1rem;border-radius:99px;font-size:0.82rem;font-weight:600;white-space:nowrap;opacity:0;pointer-events:none;transition:all 0.35s var(--ease);z-index:999;display:flex;align-items:center;gap:0.5rem;border:1px solid var(--border);box-shadow:var(--shadow)}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.toast-star{color:var(--gold)}

/* ── Milestone badges ── */
.milestone-burst{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);background:linear-gradient(180deg, rgba(21,34,59,0.98), rgba(17,28,49,0.96));border-radius:var(--radius-xl);padding:1.5rem 2rem;text-align:center;box-shadow:var(--shadow-lg);border:1px solid var(--border);z-index:998;pointer-events:none;transition:all 0.4s var(--ease);min-width:220px}
.milestone-burst.show{transform:translate(-50%,-50%) scale(1)}
.burst-emoji{font-size:2.5rem;display:block;margin-bottom:0.5rem}
.burst-title{font-family:'Sora',sans-serif;font-size:1rem;font-weight:700;color:var(--text);margin-bottom:0.2rem}
.burst-sub{font-size:0.8rem;color:var(--text-3)}

/* ── Result screen ── */
.result-screen{width:100%;animation:slideUp 0.5s var(--ease)}
.result-header{background:linear-gradient(180deg, rgba(21,34,59,0.98), rgba(17,28,49,0.96));border-radius:var(--radius-xl);border:1px solid var(--border);box-shadow:var(--shadow);padding:2rem;text-align:center;margin-bottom:1rem}
.result-seal{width:80px;height:80px;border-radius:50%;margin:0 auto 1rem;display:flex;align-items:center;justify-content:center;font-size:2rem}
.result-seal.yes{background:var(--green-light);border:2px solid rgba(85,211,155,0.3)}
.result-seal.ref{background:var(--gold-light);border:2px solid rgba(241,182,92,0.3)}
.result-title{font-family:'Sora',sans-serif;font-size:1.5rem;font-weight:700;letter-spacing:-0.02em;margin-bottom:0.5rem}
.result-title.yes{color:var(--green)}
.result-title.ref{color:var(--gold)}
.result-desc{font-size:0.88rem;color:var(--text-2);line-height:1.6;max-width:380px;margin:0 auto}

.prob-section{background:linear-gradient(180deg, rgba(21,34,59,0.98), rgba(17,28,49,0.96));border-radius:var(--radius-lg);border:1px solid var(--border);padding:1.25rem;margin-bottom:1rem}
.prob-row{margin-bottom:0.85rem}
.prob-row:last-child{margin-bottom:0}
.prob-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem}
.prob-name{font-size:0.82rem;font-weight:600;color:var(--text-2)}
.prob-pct{font-family:'Sora',sans-serif;font-size:1.1rem;font-weight:700}
.prob-pct.g{color:var(--green)}
.prob-pct.a{color:var(--gold)}
.prob-track{height:8px;background:rgba(255,255,255,0.06);border-radius:99px;overflow:hidden}
.prob-fill{height:100%;border-radius:99px;width:0;transition:width 1.1s var(--ease)}
.prob-fill.g{background:linear-gradient(90deg,#28b677,var(--green))}
.prob-fill.a{background:linear-gradient(90deg,#d28d2d,var(--gold))}

.confidence-badge{display:inline-flex;align-items:center;gap:0.4rem;padding:4px 12px;border-radius:99px;font-size:0.75rem;font-weight:700;margin-top:0.6rem}
.confidence-badge.high{background:var(--green-light);color:var(--green)}
.confidence-badge.medium{background:var(--gold-light);color:var(--gold)}
.confidence-badge.low{background:rgba(255,255,255,0.06);color:var(--text-2)}

.steps-section{background:linear-gradient(180deg, rgba(21,34,59,0.98), rgba(17,28,49,0.96));border-radius:var(--radius-lg);border:1px solid var(--border);padding:1.25rem;margin-bottom:1rem}
.steps-title{font-size:0.78rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-3);margin-bottom:0.85rem}
.step-item{display:flex;gap:0.85rem;align-items:flex-start;padding-bottom:0.75rem;margin-bottom:0.75rem;border-bottom:1px solid rgba(255,255,255,0.06)}
.step-item:last-child{padding-bottom:0;margin-bottom:0;border-bottom:none}
.step-num{width:28px;height:28px;border-radius:9px;background:rgba(241,182,92,0.16);color:var(--gold);font-size:0.75rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px;border:1px solid rgba(241,182,92,0.2)}
.step-t{font-size:0.88rem;font-weight:600;color:var(--text);margin-bottom:0.15rem}
.step-b{font-size:0.8rem;color:var(--text-2);line-height:1.45}

.cta-btn{display:block;width:100%;padding:1rem;background:linear-gradient(135deg,var(--red),#ff8c6f 62%,var(--gold));color:#08111f;border:none;border-radius:var(--radius-lg);font-family:'Sora',sans-serif;font-size:1rem;font-weight:800;cursor:pointer;text-decoration:none;text-align:center;transition:all 0.2s;margin-bottom:0.75rem;box-shadow:0 12px 30px rgba(255,106,77,0.25)}
.cta-btn:hover{filter:brightness(1.05);box-shadow:0 16px 34px rgba(255,106,77,0.3)}
.restart-link{display:block;width:100%;background:none;border:none;font-size:0.8rem;color:var(--text-3);text-decoration:underline;text-underline-offset:2px;cursor:pointer;font-family:'Space Grotesk',sans-serif;text-align:center}
.restart-link:hover{color:var(--text-2)}

/* ── Summary chips ── */
.summary-bar{display:flex;flex-wrap:wrap;gap:0.45rem;margin-bottom:1.25rem;min-height:0;transition:all 0.3s}
.summary-chip{display:inline-flex;align-items:center;gap:0.35rem;background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:99px;padding:6px 11px;font-size:0.73rem;color:var(--text-2);animation:popIn 0.3s var(--ease)}
@keyframes popIn{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}
.chip-icon{font-size:0.75rem}

/* Confetti */
.confetti-p{position:fixed;animation:fall linear forwards;z-index:1000;pointer-events:none;border-radius:2px}
@keyframes fall{0%{opacity:1;transform:translateY(-10px) rotate(0)}100%{opacity:0;transform:translateY(100vh) rotate(540deg)}}

@media (max-width:640px){
  .shell{padding:0.75rem 0.75rem 2.5rem}
  .top-frame{top:0.5rem;padding:0.9rem}
  .topbar,.progress-head,.progress-foot{flex-direction:column;align-items:stretch}
  .progress-pct-wrap{text-align:left}
  .skip-btn{width:100%;text-align:center}
  .q-card,.wall-card,.result-header,.prob-section,.steps-section{padding:1.4rem}
  .q-title{font-size:1.35rem}
  .zip-input{font-size:1.85rem}
  .tile-grid.cols-2{grid-template-columns:1fr}
  .stepper-wrap{gap:0.75rem}
  .step-val{min-width:88px;font-size:2.4rem}
}
</style>
</head>
<body>
<div class="shell">

  <div class="top-frame">
    <!-- Top bar -->
    <div class="topbar">
      <div class="brand-stack">
        <div class="brand-line">
          <div class="logo">
            <span class="logo-badge">PVO</span>
            Poway Veterans Organization
          </div>
        </div>
        <div class="brand-sub">Fast prescreener for veterans and family members. Clear path, fewer questions, better handoff.</div>
      </div>
      <button class="skip-btn" onclick="window.open('https://powayveterans.org/request-assistance/','_blank')">Go to full application</button>
    </div>

    <!-- Progress section -->
    <div class="progress-section">
      <div class="progress-head">
        <div class="progress-copy">
          <span class="progress-kicker">Progress</span>
          <span class="progress-label" id="prog-label">Let's find your support</span>
          <span class="progress-note" id="prog-note">Start with your ZIP code so we can confirm the right service area.</span>
        </div>
        <div class="progress-pct-wrap">
          <span class="progress-pct" id="prog-pct">0%</span>
          <span class="progress-step" id="prog-step">Step 0 of 7</span>
        </div>
      </div>
      <div class="progress-track">
        <div class="progress-bar" id="prog-bar"></div>
      </div>
      <div class="progress-foot">
        <span class="progress-caption" id="prog-caption">About 2 minutes total.</span>
        <div class="progress-dots" id="prog-dots"></div>
      </div>
      <div class="time-saved-wrap hidden" id="time-saved">
        <div class="time-saved-icon">
          <svg viewBox="0 0 10 10" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:10px;height:10px"><polyline points="2,5 4.2,7.2 8,3"/></svg>
        </div>
        <span class="time-saved-text">You've saved&nbsp;<span class="time-saved-num" id="time-num">0 sec</span>&nbsp;by using our prescreener</span>
      </div>
    </div>
  </div>

  <!-- Summary chips -->
  <div class="summary-bar" id="summary-bar"></div>

  <!-- Main stage -->
  <div class="stage" id="stage"></div>
</div>

<!-- Toast -->
<div class="toast" id="toast">
  <span class="toast-star">★</span>
  <span id="toast-msg">Great answer!</span>
</div>

<!-- Milestone burst -->
<div class="milestone-burst" id="burst">
  <span class="burst-emoji" id="burst-emoji">🎖️</span>
  <div class="burst-title" id="burst-title">Halfway there!</div>
  <div class="burst-sub" id="burst-sub">Keep going — just 3 more questions.</div>
</div>

<script>
// ── Zip code data ─────────────────────────────────────────────────────────────
const SERVED_ZIPS = {
  // Poway
  '92064':['Poway','poway'],'92074':['Poway','poway'],
  // Ramona
  '92065':['Ramona','ramona'],
  // Escondido
  '92025':['Escondido','escondido'],'92026':['Escondido','escondido'],'92027':['Escondido','escondido'],'92029':['Escondido','escondido'],
  // Vista
  '92081':['Vista','vista'],'92083':['Vista','vista'],'92084':['Vista','vista'],
  // Santee
  '92071':['Santee','santee'],
  // San Marcos
  '92069':['San Marcos','san_marcos'],'92078':['San Marcos','san_marcos'],
  // Spring Valley
  '91977':['Spring Valley','spring_valley'],'91978':['Spring Valley','spring_valley'],
  // Mira Mesa / Scripps Ranch (San Diego)
  '92126':['Mira Mesa','mira_mesa'],'92131':['Scripps Ranch','san_diego'],
  // San Diego broader
  '92037':['La Jolla','san_diego'],'92103':['Mission Hills','san_diego'],
  '92101':['Downtown SD','san_diego'],'92104':['North Park','san_diego'],
  '92105':['City Heights','san_diego'],'92106':['Point Loma','san_diego'],
  '92107':['Ocean Beach','san_diego'],'92108':['Mission Valley','san_diego'],
  '92109':['Pacific Beach','san_diego'],'92110':['Old Town','san_diego'],
  '92111':['Linda Vista','san_diego'],'92113':['Logan Heights','san_diego'],
  '92114':['Encanto','san_diego'],'92115':['College Area','san_diego'],
  '92116':['Normal Heights','san_diego'],'92117':['Clairemont','san_diego'],
  '92119':['San Carlos','san_diego'],'92120':['Allied Gardens','san_diego'],
  '92121':['Torrey Pines','san_diego'],'92122':['University City','san_diego'],
  '92123':['Serra Mesa','san_diego'],'92124':['Tierrasanta','san_diego'],
  '92127':['Rancho Bernardo','san_diego'],'92128':['Rancho Bernardo','san_diego'],
  '92129':['Rancho Penasquitos','san_diego'],'92130':['Carmel Valley','san_diego'],
  '92145':['Miramar','san_diego'],
  // Carlsbad
  '92008':['Carlsbad','carlsbad'],'92009':['Carlsbad','carlsbad'],'92010':['Carlsbad','carlsbad'],'92011':['Carlsbad','carlsbad'],
  // Imperial Beach
  '91932':['Imperial Beach','imperial_beach'],
  // Chula Vista
  '91910':['Chula Vista','chula_vista'],'91911':['Chula Vista','chula_vista'],'91913':['Chula Vista','chula_vista'],'91914':['Chula Vista','chula_vista'],
  // Fallbrook
  '92028':['Fallbrook','fallbrook'],
  // Pacific Beach
  '92109':['Pacific Beach','pacific_beach'],
};

// ── Questions ─────────────────────────────────────────────────────────────────
const QUESTIONS = [
  {id:'vet_status',tag:'Who you are',text:'Are you a veteran or a family member?',sub:'PVO supports veterans and their dependents across the Poway–Ramona area.',type:'tiles',cols:2,
    options:[{v:'veteran',icon:'🎖️',label:'I served',sub:'Active duty or veteran'},{v:'dependent',icon:'👨‍👩‍👧',label:"I'm family",sub:'Dependent or surviving spouse'}]},
  {id:'need_type',tag:'What you need',text:"What's your primary need right now?",sub:'Pick the one that feels most urgent.',type:'tiles',cols:2,
    options:[{v:'rent',icon:'🏠',label:'Rent / housing'},{v:'utility',icon:'💡',label:'Utility bills'},{v:'food',icon:'🛒',label:'Food assistance'},{v:'transport',icon:'🚗',label:'Transportation'},{v:'home_repair',icon:'🔧',label:'Home repairs'},{v:'medical',icon:'⚕️',label:'Medical costs'},{v:'counseling',icon:'🧠',label:'Counseling'},{v:'legal',icon:'⚖️',label:'Legal / VA benefits'},{v:'vehicle_reg',icon:'📋',label:'Vehicle registration'},{v:'moving',icon:'📦',label:'Moving / relocation'},{v:'storage',icon:'🗄️',label:'Storage fees'},{v:'mental_health',icon:'💙',label:'PTSD / TBI support'}]},
  {id:'employment',tag:'Your situation',text:"What's your current work status?",type:'tiles',cols:1,
    options:[{v:'employed',icon:'💼',label:'Working',sub:'Full or part time'},{v:'unemployed',icon:'🔍',label:'Between jobs',sub:'Actively looking or laid off'},{v:'disabled',icon:'🛡️',label:'Disabled / unable to work',sub:'Service-connected or medical'}]},
  {id:'household_sz',tag:'Your household',text:'How many people are in your household?',sub:'Including yourself.',type:'stepper',min:1,max:12,def:1},
  {id:'housing_risk',tag:'Housing safety',text:'Is your housing currently at risk?',sub:'This helps us flag urgency to our review committee.',type:'tiles',cols:1,
    options:[{v:1,icon:'🚨',label:"Yes — I'm behind on rent, facing eviction, or currently unhoused"},{v:0,icon:'✅',label:'No — my housing is stable right now'}]},
  {id:'has_va_care',tag:'VA connection',text:'Are you connected to VA services?',sub:'VA healthcare, disability claims, or a VA counselor.',type:'tiles',cols:1,
    options:[{v:1,icon:'🏥',label:"Yes — I'm in the VA system"},{v:0,icon:'❌',label:"No — I'm not currently connected"}]},
];

const TOTAL_STEPS = QUESTIONS.length + 1; // +1 for zip
let currentQ = -1; // -1 = zip screen
let stepperVal = 1;
const answers = {};
let savedSeconds = 0;
let zipLocation = null;

// ── Chip labels ───────────────────────────────────────────────────────────────
const CHIP_LABELS = {
  vet_status:{veteran:'🎖️ Veteran',dependent:'👨‍👩‍👧 Family'},
  need_type:{rent:'🏠 Rent',utility:'💡 Utilities',food:'🛒 Food',transport:'🚗 Transport',home_repair:'🔧 Home repair',medical:'⚕️ Medical',counseling:'🧠 Counseling',legal:'⚖️ Legal',vehicle_reg:'📋 Vehicle reg',moving:'📦 Moving',storage:'🗄️ Storage',mental_health:'💙 Mental health'},
  employment:{employed:'💼 Working',unemployed:'🔍 Job seeking',disabled:'🛡️ Disabled'},
  household_sz:(v)=>`👥 ${v} person${v>1?'s':''}`,
  housing_risk:{0:'✅ Stable housing',1:'🚨 Housing at risk'},
  has_va_care:{0:'❌ Not VA connected',1:'🏥 VA connected'},
};

const TOASTS = [
  "You're off to a great start!",
  "Got it — nice work.",
  "Perfect, noted!",
  "Halfway there — keep going!",
  "Almost done!",
  "One more question!",
];

// ── Utilities ─────────────────────────────────────────────────────────────────
const PROGRESS_NOTES = [
  'Start with your ZIP code so we can confirm the right service area.',
  'We only ask what helps route your support request.',
  'Pick the need that feels most urgent right now.',
  'This helps us understand your current situation.',
  'Household size helps us gauge support fit.',
  'Housing stability helps us flag urgency.',
  'VA connection helps us coordinate next steps.',
  'Your routing summary is ready.'
];

function initProgressDots(){
  const dots = document.getElementById('prog-dots');
  if(!dots) return;
  dots.innerHTML = Array.from({length: TOTAL_STEPS}, (_, idx) => `<span class="progress-dot" data-step="${idx}"></span>`).join('');
}

function updateProgress(){
  const step = currentQ + 1; // 0 = zip, 1..N = questions
  const pct = Math.round((step / TOTAL_STEPS) * 100);
  document.getElementById('prog-bar').style.width = pct+'%';
  document.getElementById('prog-pct').textContent = pct+'%';
  document.getElementById('prog-step').textContent = `Step ${step} of ${TOTAL_STEPS}`;
  const labels=[
    'Let\'s find your support',
    'Tell us who needs help',
    'Choose your main need',
    'Tell us your work status',
    'Confirm household size',
    'Flag housing urgency',
    'Check VA connection',
    'Review your result'
  ];
  const captions=[
    'About 2 minutes total.',
    '1 of 6 quick questions complete.',
    '2 of 6 quick questions complete.',
    '3 of 6 quick questions complete.',
    '4 of 6 quick questions complete.',
    '5 of 6 quick questions complete.',
    'Last question before results.',
    'Done. Review the best next step.'
  ];
  document.getElementById('prog-label').textContent = labels[Math.min(step,labels.length-1)] || 'Almost done!';
  document.getElementById('prog-note').textContent = PROGRESS_NOTES[Math.min(step,PROGRESS_NOTES.length-1)] || PROGRESS_NOTES.at(-1);
  document.getElementById('prog-caption').textContent = captions[Math.min(step,captions.length-1)] || 'Done. Review the best next step.';
  document.querySelectorAll('.progress-dot').forEach((dot, idx) => {
    dot.classList.toggle('complete', idx < step);
    dot.classList.toggle('active', idx === step && step < TOTAL_STEPS);
  });
}

function addTimeSaved(seconds){
  savedSeconds += seconds;
  const el = document.getElementById('time-saved');
  const numEl = document.getElementById('time-num');
  el.classList.remove('hidden');
  const mins = Math.floor(savedSeconds/60);
  numEl.textContent = mins>0?`${mins} min ${savedSeconds%60} sec`:`${savedSeconds} sec`;
}

function addChip(id, val){
  const bar = document.getElementById('summary-bar');
  let label = '';
  if(typeof CHIP_LABELS[id] === 'function') label = CHIP_LABELS[id](val);
  else if(CHIP_LABELS[id]) label = CHIP_LABELS[id][val] || val;
  else if(id==='zip') label = `📍 ${val}`;
  if(!label) return;
  const old = document.getElementById('chip-'+id);
  if(old) old.remove();
  const chip = document.createElement('div');
  chip.className = 'summary-chip';
  chip.id = 'chip-'+id;
  chip.textContent = label;
  bar.appendChild(chip);
}

function showToast(msg){
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2400);
}

function showMilestone(emoji,title,sub){
  const b = document.getElementById('burst');
  document.getElementById('burst-emoji').textContent = emoji;
  document.getElementById('burst-title').textContent = title;
  document.getElementById('burst-sub').textContent = sub;
  b.classList.add('show');
  setTimeout(()=>b.classList.remove('show'),2200);
}

function confetti(){
  const colors=['#C23B22','#D4892A','#1a7a4a','#0f1f3d','#fff'];
  for(let i=0;i<55;i++){
    const c=document.createElement('div');
    c.className='confetti-p';
    c.style.cssText=`left:${Math.random()*100}vw;top:-8px;background:${colors[i%colors.length]};width:${4+Math.random()*6}px;height:${4+Math.random()*6}px;animation-duration:${1.6+Math.random()*2}s;animation-delay:${Math.random()*0.7}s`;
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),4000);
  }
}

// ── Render ────────────────────────────────────────────────────────────────────
function render(){
  if(currentQ === -1) renderZip();
  else renderQuestion(currentQ);
  updateProgress();
}

function renderZip(){
  const stage = document.getElementById('stage');
  stage.innerHTML = `<div class="q-card" id="q-card">
    <div class="q-eyebrow"><span class="step-pill">Start here</span></div>
    <div class="q-title">What's your ZIP code?</div>
    <div class="q-sub">We'll confirm you're in PVO's service area before collecting your information — no wasted time.</div>
    <input class="zip-input" id="zip-in" type="tel" inputmode="numeric" pattern="[0-9]*" maxlength="5" placeholder="92064" autocomplete="postal-code" />
    <div class="zip-feedback" id="zip-fb"></div>
    <button class="continue-btn" id="cont-btn" onclick="submitZip()">Check my area <span class="continue-arrow">→</span></button>
  </div>`;
  const inp = document.getElementById('zip-in');
  inp.addEventListener('input',onZipInput);
  inp.addEventListener('keydown',e=>{if(e.key==='Enter')submitZip()});
  setTimeout(()=>inp.focus(),100);
}

function onZipInput(e){
  const val = e.target.value.replace(/\D/g,'').slice(0,5);
  e.target.value = val;
  const btn = document.getElementById('cont-btn');
  const fb = document.getElementById('zip-fb');
  e.target.className = 'zip-input';
  fb.className = 'zip-feedback';
  fb.textContent = '';
  btn.classList.remove('show');
  if(val.length === 5){
    if(SERVED_ZIPS[val]){
      e.target.className = 'zip-input valid';
      fb.className = 'zip-feedback ok';
      fb.textContent = `✓ ${SERVED_ZIPS[val][0]} — PVO serves your area!`;
      btn.classList.add('show');
      zipLocation = SERVED_ZIPS[val][1];
    } else {
      e.target.className = 'zip-input invalid';
      fb.className = 'zip-feedback err';
      fb.textContent = `ZIP ${val} is outside PVO's current service area.`;
      btn.classList.remove('show');
      // show wall after brief delay
      setTimeout(()=>showOutOfArea(val),600);
    }
  }
}

function submitZip(){
  const val = document.getElementById('zip-in').value;
  if(!SERVED_ZIPS[val]) return;
  answers['location'] = zipLocation;
  addChip('zip', val+' — '+SERVED_ZIPS[val][0]);
  addTimeSaved(45);
  advanceToFirst();
}

function showOutOfArea(zip){
  const stage = document.getElementById('stage');
  stage.innerHTML=`<div class="wall-card" id="q-card">
    <div class="wall-icon">📍</div>
    <div class="wall-title">Outside PVO's service area</div>
    <div class="wall-desc">ZIP code <strong>${zip}</strong> is outside the Poway–Ramona–North San Diego area PVO currently serves. But you're not out of options — here are trusted veterans orgs that cover your area:</div>
    <div class="wall-partners">
      <div class="partner-row"><div class="partner-dot"></div><div><div class="partner-name">DAV (Disabled American Veterans)</div><div class="partner-detail">Statewide — transportation, benefits, claims assistance</div></div></div>
      <div class="partner-row"><div class="partner-dot"></div><div><div class="partner-name">Veterans Village of San Diego</div><div class="partner-detail">4141 Pacific Hwy, San Diego — housing, services</div></div></div>
      <div class="partner-row"><div class="partner-dot"></div><div><div class="partner-name">211 San Diego</div><div class="partner-detail">Call 2-1-1 — connects you to local veterans resources</div></div></div>
      <div class="partner-row"><div class="partner-dot"></div><div><div class="partner-name">VA San Diego Healthcare System</div><div class="partner-detail">(858) 552-8585 — medical, mental health, housing</div></div></div>
    </div>
    <a class="wall-cta" href="https://powayveterans.org/request-assistance/" target="_blank">Apply to PVO anyway (they may still help) →</a>
    <button class="restart-sm" onclick="restartFlow()">Try a different ZIP code</button>
  </div>`;
}

function advanceToFirst(){
  const card = document.getElementById('q-card');
  if(card) card.classList.add('exit');
  setTimeout(()=>{currentQ=0;render();},280);
}

function renderQuestion(idx){
  const q = QUESTIONS[idx];
  const stage = document.getElementById('stage');
  let body = '';

  if(q.type==='tiles'){
    const gc = q.cols===2?'cols-2':'cols-1';
    body = `<div class="tile-grid ${gc}">` +
      q.options.map(o=>`<div class="tile" data-val="${o.v}" onclick="pickTile(this,'${q.id}','${String(o.v).replace(/'/g,"\\'")}')">`+
        `<div class="tile-icon-box">${o.icon}</div>`+
        `<div class="tile-body"><div class="tile-label">${o.label}</div>${o.sub?`<div class="tile-sub">${o.sub}</div>`:''}</div>`+
        `<div class="tile-check"><svg viewBox="0 0 10 8"><polyline points="1,4 3.5,6.5 9,1"/></svg></div>`+
        `</div>`).join('')+
      `</div>`;
  } else {
    stepperVal = q.def;
    body = `<div class="stepper-wrap"><button class="step-btn" onclick="stepChg(-1)">−</button><div class="step-val" id="sv">${q.def}</div><button class="step-btn" onclick="stepChg(1)">+</button></div>
    <div class="step-sub">people in your household</div>`;
  }

  const isLast = idx === QUESTIONS.length-1;
  const btnLabel = isLast ? 'See my results' : 'Continue';
  const contShow = q.type==='stepper'?' show':'';

  stage.innerHTML = `<div class="q-card" id="q-card">
    <div class="q-eyebrow"><span class="step-pill">${q.tag}</span></div>
    <div class="q-title">${q.text}</div>
    ${q.sub?`<div class="q-sub">${q.sub}</div>`:''}
    ${body}
    <button class="continue-btn${contShow}" id="cont-btn" onclick="advance()">${btnLabel} <span class="continue-arrow">→</span></button>
  </div>`;
}

function pickTile(el, qId, val){
  document.querySelectorAll('.tile').forEach(t=>t.classList.remove('selected'));
  el.classList.add('selected');
  const parsed = (val==='0'||val==='1') ? Number(val) : (isNaN(Number(val))?val:Number(val));
  answers[qId] = parsed;
  const btn = document.getElementById('cont-btn');
  if(btn) btn.classList.add('show');
  const q = QUESTIONS[currentQ];
  if(q.cols===1 || (q.options&&q.options.length<=2)){
    setTimeout(()=>advance(),360);
  }
}

function stepChg(d){
  const q = QUESTIONS[currentQ];
  stepperVal = Math.max(q.min,Math.min(q.max,stepperVal+d));
  document.getElementById('sv').textContent = stepperVal;
  answers[q.id] = stepperVal;
}

function advance(){
  const q = QUESTIONS[currentQ];
  if(q.type!=='stepper' && answers[q.id]===undefined) return;
  if(q.type==='stepper') answers[q.id]=stepperVal;

  // Add chip
  addChip(q.id, answers[q.id]);
  // Add time saved
  addTimeSaved(q.type==='stepper'?18:12);
  // Toast
  const toastIdx = Math.min(currentQ, TOASTS.length-1);
  showToast(TOASTS[toastIdx]);
  // Milestone at question 3 (halfway)
  if(currentQ===2) showMilestone('🏅','Halfway there!','Just 3 more quick questions.');
  if(currentQ===QUESTIONS.length-2) showMilestone('🎯','Almost done!','One last question.');

  const card = document.getElementById('q-card');
  if(card) card.classList.add('exit');
  setTimeout(()=>{
    currentQ++;
    if(currentQ>=QUESTIONS.length) showResult();
    else render();
  },280);
}

function showResult(){
  document.getElementById('prog-bar').style.width='100%';
  document.getElementById('prog-pct').textContent='100%';
  document.getElementById('prog-label').textContent='Complete!';
  document.getElementById('prog-step').textContent=`Step ${TOTAL_STEPS} of ${TOTAL_STEPS}`;
  document.getElementById('prog-note').textContent='Your prescreener is complete. Review the best next step below.';
  document.getElementById('prog-caption').textContent='Routing summary ready.';
  document.querySelectorAll('.progress-dot').forEach(dot => {
    dot.classList.remove('active');
    dot.classList.add('complete');
  });

  const res = simulate(answers);
  const isPVO = res.pvo_direct >= 0.5;
  if(isPVO) confetti();

  const pvoPct = Math.round(res.pvo_direct*100);
  const refPct = Math.round(res.refer_out*100);
  const confLabel = {high:'High confidence',medium:'Medium confidence',low:'Lower confidence'};

  const steps = isPVO
    ?[{t:'Gather proof of service',b:'DD-214 or military ID, plus documentation of your need (bill, lease, medical records).'},
      {t:'Submit the application',b:'Takes ~5 min at powayveterans.org — a PVO volunteer reviews it personally.'},
      {t:'Expect a callback',b:"PVO's review committee contacts you directly before the application goes to the board."}]
    :[{t:'Apply anyway — PVO will connect you',b:'Even referrals start here. PVO personally routes you to the right partner organization.'},
      {t:'Call or email PVO directly',b:'(858) 206-8854 · contact@powayveterans.org · Response within 1 business day.'},
      {t:'Know your partner network',b:'PVO works with DAV, STEP, Wounded Warrior Homes, WAVE Academy, and VA San Diego.'}];

  const stage = document.getElementById('stage');
  stage.innerHTML=`<div class="result-screen">
    <div class="result-header">
      <div class="result-seal ${isPVO?'yes':'ref'}">${isPVO?'✓':'→'}</div>
      <div class="result-title ${isPVO?'yes':'ref'}">${isPVO?'PVO Can Help You Directly':'We\'ll Connect You to the Right Support'}</div>
      <p class="result-desc">${isPVO?'Based on your answers, PVO has directly assisted veterans in similar situations. Here\'s what to do next.':'Your need may be best served through a specialized partner — but PVO will personally make that connection for you.'}</p>
      <div class="confidence-badge ${res.confidence}">${confLabel[res.confidence]}</div>
    </div>
    <div class="prob-section">
      <div class="prob-row">
        <div class="prob-top"><span class="prob-name">PVO handles directly</span><span class="prob-pct g" id="p1">0%</span></div>
        <div class="prob-track"><div class="prob-fill g" id="pb1"></div></div>
      </div>
      <div class="prob-row">
        <div class="prob-top"><span class="prob-name">Referred to partner org</span><span class="prob-pct a" id="p2">0%</span></div>
        <div class="prob-track"><div class="prob-fill a" id="pb2"></div></div>
      </div>
    </div>
    <div class="steps-section">
      <div class="steps-title">Your next steps</div>
      ${steps.map((s,i)=>`<div class="step-item"><div class="step-num">${i+1}</div><div><div class="step-t">${s.t}</div><div class="step-b">${s.b}</div></div></div>`).join('')}
    </div>
    <a class="cta-btn" href="https://powayveterans.org/request-assistance/" target="_blank">Apply Now →</a>
    <button class="restart-link" onclick="restartFlow()">Start over with different answers</button>
  </div>`;

  setTimeout(()=>{
    document.getElementById('pb1').style.width=pvoPct+'%';
    document.getElementById('p1').textContent=pvoPct+'%';
    document.getElementById('pb2').style.width=refPct+'%';
    document.getElementById('p2').textContent=refPct+'%';
  },250);

  // Try the real API
  fetch('http://localhost:8587/api/veteran/predict',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(answers)})
    .then(r=>r.json()).then(r=>{
      const p=Math.round(r.pvo_direct*100),rv=Math.round(r.refer_out*100);
      document.getElementById('pb1').style.width=p+'%';document.getElementById('p1').textContent=p+'%';
      document.getElementById('pb2').style.width=rv+'%';document.getElementById('p2').textContent=rv+'%';
    }).catch(()=>{});
}

function simulate(a){
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
  return{pvo_direct:parseFloat(s.toFixed(4)),refer_out:parseFloat((1-s).toFixed(4)),confidence:s>0.75?'high':s>0.58?'medium':'low'};
}

function restartFlow(){
  Object.keys(answers).forEach(k=>delete answers[k]);
  currentQ=-1; stepperVal=1; zipLocation=null; savedSeconds=0;
  document.getElementById('summary-bar').innerHTML='';
  const ts=document.getElementById('time-saved');ts.classList.add('hidden');
  render();
}

initProgressDots();
render();
</script>
</body>
</html>
