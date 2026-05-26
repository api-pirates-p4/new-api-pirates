---
layout: post 
feedback: true
hide: true
show_reading_time: false
title: PVO Ml Solutions
permalink: /prescreener
---
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PVO — Find Your Support</title>
<link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;0,900;1,400&family=Source+Sans+3:wght@300;400;600;700&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --red:#b22234;--red-strong:#c94857;--red-light:rgba(178,34,52,0.16);
  --navy:#f4f7fb;--navy-mid:#c9a84c;
  --gold:#c9a84c;--gold-light:rgba(232,201,122,0.16);
  --green:#55d39b;--green-light:rgba(85,211,155,0.14);
  --bg:#08111f;--bg-2:#0d1728;--bg-3:#111c33;
  --surface:#111b2d;--surface-2:#17243a;--surface-3:#1a2744;--surface-4:#243460;
  --border:rgba(214,222,234,0.16);--border-strong:rgba(232,201,122,0.38);
  --text:#f4f7fb;--text-2:#c0cad8;--text-3:#8f9cb1;
  --radius:8px;--radius-lg:8px;--radius-xl:8px;
  --shadow:0 14px 36px rgba(0,0,0,0.26);
  --shadow-lg:0 24px 80px rgba(0,0,0,0.42);
  --ease:cubic-bezier(0.22,1,0.36,1);
}
html,body{height:100%;font-family:'Source Sans 3',sans-serif;background:#08111f;color:var(--text);overflow-x:hidden}
body::before{content:"";position:fixed;inset:0;pointer-events:none;opacity:0.32;background-image:linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);background-size:32px 32px;mask-image:linear-gradient(180deg, rgba(0,0,0,0.45), transparent 85%)}
.site-header{display:none!important}
.page-content{padding:0!important;overflow-x:hidden}
.page-content>.wrapper,.opencs_root,.post,.post-content.e-content{max-width:none!important;width:100%!important;margin:0!important;padding:0!important}
.post-header{display:none!important}
button,input{font:inherit}
:focus-visible{outline:2px solid rgba(232,201,122,0.9);outline-offset:3px}

/* ── Layout ── */
.shell{position:relative;min-height:100vh;display:flex;flex-direction:column;width:100vw;max-width:none;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);padding:1.5rem 2rem 4rem;background:#08111f}
header{background:#111c33;border-bottom:3px solid var(--gold);position:sticky;top:0;z-index:100;box-shadow:0 2px 18px rgba(0,0,0,0.35)}
.header-inner{max-width:1200px;margin:0 auto;padding:0.9rem 2rem;display:flex;align-items:center;flex-wrap:wrap;justify-content:space-between;gap:1.2rem 2rem;min-height:72px}
.logo-wrap{display:flex;align-items:center;gap:0.9rem;text-decoration:none}
.logo-emblem{width:46px;height:46px;background:linear-gradient(145deg,var(--gold) 0%,#e8c97a 50%,var(--gold) 100%);border-radius:50%;border:2px solid rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;font-size:0.58rem;font-weight:900;letter-spacing:0.04em;color:#111c33;text-align:center;line-height:1.2;flex-shrink:0}
.logo-text-main{font-family:'Merriweather',serif;font-size:0.95rem;font-weight:700;color:#fff;line-height:1.2;white-space:nowrap}
nav{display:flex;align-items:center;justify-content:flex-end;flex-wrap:wrap;gap:0.45rem;margin-left:auto}
nav a{color:rgba(255,255,255,0.82);text-decoration:none;font-size:0.83rem;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;padding:0.45rem 0.75rem;border:1px solid transparent;border-radius:999px;transition:color 0.18s,background 0.18s}
nav a:hover{color:#fff;background:rgba(255,255,255,0.08);border-color:rgba(255,255,255,0.1)}
.nav-cta{background:var(--red)!important;color:#fff!important;border-color:rgba(255,255,255,0.15)!important;border-radius:999px;padding:0.45rem 1rem!important;transition:background 0.18s!important}
.nav-cta:hover{background:#8c1a28!important}

/* ── Top frame ── */
.top-frame{position:sticky;top:0;z-index:30;width:min(1120px,100%);margin:0 auto 1.5rem;padding:1rem 1.25rem 1.15rem;background:linear-gradient(180deg, rgba(17,28,51,0.96), rgba(13,23,40,0.94));border:1px solid var(--border);border-bottom:3px solid var(--gold);border-radius:8px;box-shadow:var(--shadow);backdrop-filter:blur(18px)}
.topbar{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:0.95rem}
.brand-stack{display:flex;flex-direction:column;gap:0.3rem}
.brand-line{display:flex;align-items:center;gap:0.65rem}
.logo{font-family:'Merriweather',serif;font-size:1rem;font-weight:700;color:var(--text);letter-spacing:0;display:flex;align-items:center;gap:0.5rem}
.logo-badge{background:linear-gradient(145deg,var(--gold) 0%,#e8c97a 50%,var(--gold) 100%);color:#111c33;font-size:0.65rem;font-weight:800;letter-spacing:0.12em;padding:4px 8px;border-radius:999px;text-transform:uppercase}
.brand-sub{font-size:0.82rem;color:var(--text-2);line-height:1.4;max-width:420px}

/* ── Progress header ── */
.progress-section{display:grid;gap:0.75rem}
.progress-head{display:flex;justify-content:space-between;align-items:flex-start;gap:1rem}
.progress-copy{display:grid;gap:0.28rem}
.progress-kicker{display:inline-flex;align-items:center;gap:0.45rem;width:max-content;padding:0.32rem 0.65rem;border-radius:999px;background:rgba(255,255,255,0.05);border:1px solid var(--border);font-size:0.72rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--text-2)}
.progress-label{font-family:'Merriweather',serif;font-size:1rem;font-weight:700;color:var(--text);letter-spacing:0}
.progress-note{font-size:0.8rem;color:var(--text-3)}
.progress-pct-wrap{text-align:right;display:grid;gap:0.15rem}
.progress-pct{font-family:'Merriweather',serif;font-size:1.4rem;font-weight:700;color:var(--text)}
.progress-step{font-size:0.78rem;font-weight:600;color:var(--text-3)}
.progress-track{position:relative;height:12px;background:rgba(255,255,255,0.05);border-radius:999px;overflow:hidden;border:1px solid rgba(255,255,255,0.06)}
.progress-track::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(90deg, transparent 0, transparent calc(14.285% - 2px), rgba(255,255,255,0.09) calc(14.285% - 2px), rgba(255,255,255,0.09) 14.285%);opacity:0.7;pointer-events:none}
.progress-bar{position:relative;height:100%;background:linear-gradient(90deg,var(--red) 0%, var(--red-strong) 42%, var(--gold) 100%);border-radius:999px;transition:width 0.55s var(--ease);width:0%;box-shadow:0 0 22px rgba(178,34,52,0.45)}
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
.time-saved-num{font-family:'Merriweather',serif;font-size:0.85rem;font-weight:700;color:#fff}
.time-saved-wrap.hidden{opacity:0;pointer-events:none;height:0;padding:0;margin:0;border:none}

/* ── Stage ── */
.stage{flex:1;display:flex;flex-direction:column;align-items:center;width:min(860px,100%);margin:0 auto}

/* ── Question card ── */
.q-card{width:100%;background:linear-gradient(180deg, rgba(21,34,59,0.96), rgba(17,28,49,0.94));border-radius:var(--radius-xl);border:1px solid var(--border);box-shadow:var(--shadow);padding:2.15rem;animation:slideUp 0.4s var(--ease)}
@keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.q-card.exit{animation:slideOut 0.28s var(--ease) forwards}
@keyframes slideOut{to{opacity:0;transform:translateY(-16px)}}

.q-eyebrow{display:flex;align-items:center;gap:0.5rem;margin-bottom:1rem}
.step-pill{font-size:0.7rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;background:rgba(255,255,255,0.05);color:var(--text-2);padding:5px 10px;border-radius:99px;border:1px solid var(--border)}
.q-title{font-family:'Merriweather',serif;font-size:1.65rem;font-weight:700;line-height:1.15;letter-spacing:0;color:var(--text);margin-bottom:0.55rem}
.q-sub{font-size:0.88rem;color:var(--text-2);line-height:1.55;margin-bottom:1.5rem}

/* ── ZIP input ── */
.zip-input-wrap{position:relative;margin-bottom:0.75rem}
.zip-input{width:100%;font-family:'Merriweather',serif;font-size:2.3rem;font-weight:700;letter-spacing:0.12em;color:var(--text);background:rgba(255,255,255,0.04);border:2px solid var(--border);border-radius:var(--radius-lg);padding:1rem 1.25rem;text-align:center;outline:none;transition:border-color 0.2s, box-shadow 0.2s;-webkit-appearance:none;appearance:none}
.zip-input:focus{border-color:var(--navy-mid);box-shadow:0 0 0 5px rgba(232,201,122,0.12)}
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
.tile.selected{border-color:rgba(232,201,122,0.5);background:linear-gradient(135deg, rgba(232,201,122,0.12), rgba(178,34,52,0.1));box-shadow:0 0 0 1px rgba(232,201,122,0.3)}
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
.step-val{font-family:'Merriweather',serif;font-size:3rem;font-weight:700;color:var(--text);min-width:108px;text-align:center;letter-spacing:0;padding:0.6rem 1rem;border-radius:22px;background:rgba(255,255,255,0.04);border:1px solid var(--border)}
.step-sub{font-size:0.8rem;color:var(--text-3);text-align:center;margin-top:0.25rem;margin-bottom:1rem}

/* ── Continue button ── */
.continue-btn{width:100%;margin-top:1.25rem;padding:1rem 1.5rem;background:var(--red);color:#fff;border:none;border-radius:var(--radius-lg);font-family:'Source Sans 3',sans-serif;font-size:1rem;font-weight:800;letter-spacing:0.04em;text-transform:uppercase;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:0.5rem;opacity:0;pointer-events:none;transform:translateY(6px);transition:all 0.25s var(--ease);box-shadow:0 12px 30px rgba(178,34,52,0.28)}
.continue-btn.show{opacity:1;pointer-events:auto;transform:translateY(0)}
.continue-btn:hover{background:var(--red-strong);box-shadow:0 16px 36px rgba(178,34,52,0.34)}
.continue-btn:active{transform:scale(0.99)}
.continue-arrow{font-size:1.1rem;transition:transform 0.2s}
.continue-btn:hover .continue-arrow{transform:translateX(4px)}

/* ── Out of area wall ── */
.wall-card{width:100%;background:linear-gradient(180deg, rgba(21,34,59,0.98), rgba(17,28,49,0.96));border-radius:var(--radius-xl);border:1px solid var(--border);box-shadow:var(--shadow);padding:2.5rem 2rem;text-align:center;animation:slideUp 0.4s var(--ease)}
.wall-icon{width:72px;height:72px;border-radius:50%;background:var(--red-light);margin:0 auto 1.25rem;display:flex;align-items:center;justify-content:center;font-size:2rem}
.wall-title{font-family:'Merriweather',serif;font-size:1.4rem;font-weight:700;color:var(--text);margin-bottom:0.5rem}
.wall-desc{font-size:0.9rem;color:var(--text-2);line-height:1.6;max-width:360px;margin:0 auto 2rem}
.wall-partners{display:grid;gap:0.5rem;margin-bottom:1.75rem}
.partner-row{display:flex;align-items:center;gap:0.75rem;background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:var(--radius);padding:0.75rem 1rem;text-align:left}
.partner-dot{width:10px;height:10px;border-radius:50%;background:var(--gold);flex-shrink:0}
.partner-name{font-size:0.85rem;font-weight:600;color:var(--text)}
.partner-detail{font-size:0.75rem;color:var(--text-3)}
.wall-cta{display:block;width:100%;padding:0.95rem;background:var(--red);color:#fff;border:none;border-radius:var(--radius-lg);font-family:'Source Sans 3',sans-serif;font-size:0.95rem;font-weight:800;letter-spacing:0.04em;text-transform:uppercase;cursor:pointer;text-decoration:none;text-align:center;transition:all 0.2s}
.wall-cta:hover{background:var(--red-strong)}
.restart-sm{margin-top:0.75rem;width:100%;background:none;border:none;font-size:0.8rem;color:var(--text-3);text-decoration:underline;text-underline-offset:2px;cursor:pointer;font-family:'Source Sans 3',sans-serif}
.restart-sm:hover{color:var(--text-2)}

/* ── Achievement toast ── */
.toast{position:fixed;bottom:2rem;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(12,24,48,0.94);color:#fff;padding:0.65rem 1.1rem;border-radius:99px;font-size:0.82rem;font-weight:600;white-space:nowrap;opacity:0;pointer-events:none;transition:all 0.35s var(--ease);z-index:999;display:flex;align-items:center;gap:0.5rem;border:1px solid var(--border);box-shadow:var(--shadow)}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.toast-star{color:var(--gold)}

/* ── Milestone badges ── */
.milestone-burst{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);background:linear-gradient(180deg, rgba(21,34,59,0.98), rgba(17,28,49,0.96));border-radius:var(--radius-xl);padding:1.5rem 2rem;text-align:center;box-shadow:var(--shadow-lg);border:1px solid var(--border);z-index:998;pointer-events:none;transition:all 0.4s var(--ease);min-width:220px}
.milestone-burst.show{transform:translate(-50%,-50%) scale(1)}
.burst-emoji{font-size:2.5rem;display:block;margin-bottom:0.5rem}
.burst-title{font-family:'Merriweather',serif;font-size:1rem;font-weight:700;color:var(--text);margin-bottom:0.2rem}
.burst-sub{font-size:0.8rem;color:var(--text-3)}

/* ── Result screen ── */
.result-screen{width:100%;animation:slideUp 0.5s var(--ease)}
.result-header{background:linear-gradient(180deg, rgba(21,34,59,0.98), rgba(17,28,49,0.96));border-radius:var(--radius-xl);border:1px solid var(--border);box-shadow:var(--shadow);padding:2rem;text-align:center;margin-bottom:1rem}
.result-seal{width:80px;height:80px;border-radius:50%;margin:0 auto 1rem;display:flex;align-items:center;justify-content:center;font-size:2rem}
.result-seal.yes{background:var(--green-light);border:2px solid rgba(85,211,155,0.3)}
.result-seal.ref{background:var(--gold-light);border:2px solid rgba(241,182,92,0.3)}
.result-title{font-family:'Merriweather',serif;font-size:1.5rem;font-weight:700;letter-spacing:0;margin-bottom:0.5rem}
.result-title.yes{color:var(--green)}
.result-title.ref{color:var(--gold)}
.result-desc{font-size:0.88rem;color:var(--text-2);line-height:1.6;max-width:380px;margin:0 auto}

.prob-section{background:linear-gradient(180deg, rgba(21,34,59,0.98), rgba(17,28,49,0.96));border-radius:var(--radius-lg);border:1px solid var(--border);padding:1.25rem;margin-bottom:1rem}
.prob-row{margin-bottom:0.85rem}
.prob-row:last-child{margin-bottom:0}
.prob-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem}
.prob-name{font-size:0.82rem;font-weight:600;color:var(--text-2)}
.prob-pct{font-family:'Merriweather',serif;font-size:1.1rem;font-weight:700}
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

.cta-btn{display:block;width:100%;padding:1rem;background:var(--red);color:#fff;border:none;border-radius:var(--radius-lg);font-family:'Source Sans 3',sans-serif;font-size:1rem;font-weight:800;letter-spacing:0.04em;text-transform:uppercase;cursor:pointer;text-decoration:none;text-align:center;transition:all 0.2s;margin-bottom:0.75rem;box-shadow:0 12px 30px rgba(178,34,52,0.28)}
.cta-btn:hover{background:var(--red-strong);box-shadow:0 16px 34px rgba(178,34,52,0.34)}
.restart-link{display:block;width:100%;background:none;border:none;font-size:0.8rem;color:var(--text-3);text-decoration:underline;text-underline-offset:2px;cursor:pointer;font-family:'Source Sans 3',sans-serif;text-align:center}
.restart-link:hover{color:var(--text-2)}

/* ── Smart application flow ── */
.smart-stack{display:grid;gap:1rem}
.smart-panel{background:linear-gradient(180deg, rgba(21,34,59,0.98), rgba(17,28,49,0.96));border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.2rem;box-shadow:var(--shadow)}
.smart-panel-title{font-family:'Merriweather',serif;font-size:1rem;font-weight:700;color:var(--text);margin-bottom:0.3rem}
.smart-panel-sub{font-size:0.82rem;line-height:1.5;color:var(--text-2)}
.smart-guide-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0.75rem}
.smart-guide-card{background:rgba(255,255,255,0.035);border:1px solid var(--border);border-radius:var(--radius);padding:1rem}
.smart-guide-kicker{font-size:0.72rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--gold);margin-bottom:0.45rem}
.smart-guide-title{font-size:0.88rem;font-weight:700;color:var(--text);margin-bottom:0.22rem}
.smart-guide-copy{font-size:0.78rem;line-height:1.5;color:var(--text-2)}
.smart-banner{display:flex;align-items:flex-start;gap:0.75rem;padding:0.95rem 1rem;border-radius:var(--radius);background:rgba(241,182,92,0.08);border:1px solid rgba(241,182,92,0.22)}
.smart-banner-mark{width:30px;height:30px;border-radius:10px;background:rgba(241,182,92,0.16);display:flex;align-items:center;justify-content:center;color:var(--gold);font-weight:800;flex-shrink:0}
.smart-banner-copy{font-size:0.8rem;line-height:1.5;color:var(--text-2)}
.smart-actions{display:flex;gap:0.75rem;flex-wrap:wrap}
.subtle-btn{display:inline-flex;align-items:center;justify-content:center;gap:0.45rem;padding:0.95rem 1.15rem;border-radius:var(--radius-lg);border:1px solid var(--border);background:rgba(255,255,255,0.03);color:var(--text);font-family:'Merriweather',serif;font-size:0.92rem;font-weight:700;cursor:pointer;transition:all 0.2s var(--ease)}
.subtle-btn:hover{background:rgba(255,255,255,0.06);border-color:var(--border-strong)}
.smart-upload-grid{display:grid;grid-template-columns:1.15fr 0.85fr;gap:1rem}
.smart-upload-box{display:grid;gap:0.85rem}
.smart-upload-label{display:block;padding:1rem;border:1px dashed var(--border-strong);border-radius:var(--radius-lg);background:rgba(255,255,255,0.025);cursor:pointer;transition:all 0.2s var(--ease)}
.smart-upload-label:hover{border-color:rgba(241,182,92,0.45);background:rgba(255,255,255,0.04)}
.smart-upload-title{font-size:0.92rem;font-weight:700;color:var(--text);margin-bottom:0.25rem}
.smart-upload-copy{font-size:0.78rem;line-height:1.45;color:var(--text-2)}
.smart-file-meta{font-size:0.78rem;color:var(--text-3)}
.smart-textarea,.smart-input,.smart-select{width:100%;background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:14px;color:var(--text);padding:0.85rem 0.95rem;font-size:0.88rem;transition:border-color 0.2s, box-shadow 0.2s}
.smart-textarea{min-height:132px;resize:vertical}
.smart-textarea:focus,.smart-input:focus,.smart-select:focus{border-color:var(--navy-mid);box-shadow:0 0 0 4px rgba(232,201,122,0.12);outline:none}
.smart-doc-preview{border:1px solid var(--border);border-radius:var(--radius-lg);background:rgba(255,255,255,0.025);min-height:220px;display:flex;align-items:center;justify-content:center;overflow:hidden}
.smart-doc-empty{padding:1rem;text-align:center;font-size:0.8rem;line-height:1.5;color:var(--text-3)}
.smart-doc-img{display:block;width:100%;height:100%;object-fit:cover}
.smart-form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0.85rem}
.smart-field{display:grid;gap:0.35rem}
.smart-field.span-2{grid-column:span 2}
.smart-label{font-size:0.76rem;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:var(--text-3)}
.smart-helper{font-size:0.74rem;color:var(--text-3)}
.smart-checklist{display:grid;gap:0.55rem}
.smart-check{display:flex;justify-content:space-between;align-items:flex-start;gap:0.75rem;padding:0.85rem 0.95rem;border:1px solid var(--border);border-radius:var(--radius);background:rgba(255,255,255,0.025)}
.smart-check strong{display:block;font-size:0.84rem;color:var(--text)}
.smart-check span{display:block;font-size:0.77rem;line-height:1.45;color:var(--text-2);margin-top:0.16rem}
.smart-status{font-size:0.72rem;font-weight:700;border-radius:999px;padding:0.28rem 0.55rem;white-space:nowrap}
.smart-status.ready{background:var(--green-light);color:var(--green)}
.smart-status.missing{background:var(--red-light);color:var(--red)}
.smart-preview-list{display:grid;gap:0.7rem}
.smart-preview-row{display:flex;justify-content:space-between;gap:1rem;padding-bottom:0.65rem;border-bottom:1px solid rgba(255,255,255,0.06)}
.smart-preview-row:last-child{padding-bottom:0;border-bottom:none}
.smart-preview-key{font-size:0.76rem;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--text-3)}
.smart-preview-val{font-size:0.86rem;line-height:1.45;color:var(--text);text-align:right;max-width:60%}
.smart-pills{display:flex;flex-wrap:wrap;gap:0.45rem}
.smart-pill{display:inline-flex;align-items:center;gap:0.35rem;background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:999px;padding:0.45rem 0.7rem;font-size:0.75rem;color:var(--text-2)}
.smart-missing{display:grid;gap:0.35rem;font-size:0.8rem;color:var(--text-2)}

/* ── Summary chips ── */
.summary-bar{display:flex;flex-wrap:wrap;gap:0.45rem;width:min(860px,100%);margin:0 auto 1.25rem;min-height:0;transition:all 0.3s}
.summary-chip{display:inline-flex;align-items:center;gap:0.35rem;background:rgba(255,255,255,0.04);border:1px solid var(--border);border-radius:99px;padding:6px 11px;font-size:0.73rem;color:var(--text-2);animation:popIn 0.3s var(--ease)}
@keyframes popIn{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}
.chip-icon{font-size:0.75rem}

/* Confetti */
.confetti-p{position:fixed;animation:fall linear forwards;z-index:1000;pointer-events:none;border-radius:2px}
@keyframes fall{0%{opacity:1;transform:translateY(-10px) rotate(0)}100%{opacity:0;transform:translateY(100vh) rotate(540deg)}}

@media (max-width:640px){
  .shell{padding:0.75rem 0.75rem 2.5rem}
  .header-inner{padding:0.9rem 1rem 1rem;justify-content:center;text-align:center}
  .logo-wrap{flex-direction:column;text-align:center}
  nav{width:100%;margin-left:0;justify-content:center}
  nav a{width:100%;text-align:center}
  .top-frame{top:0.5rem;padding:0.9rem}
  .topbar,.progress-head,.progress-foot{flex-direction:column;align-items:stretch}
  .progress-pct-wrap{text-align:left}
  .q-card,.wall-card,.result-header,.prob-section,.steps-section{padding:1.4rem}
  .smart-panel{padding:1rem}
  .q-title{font-size:1.35rem}
  .zip-input{font-size:1.85rem}
  .tile-grid.cols-2{grid-template-columns:1fr}
  .smart-guide-grid,.smart-upload-grid,.smart-form-grid{grid-template-columns:1fr}
  .smart-field.span-2{grid-column:auto}
  .smart-preview-row{flex-direction:column}
  .smart-preview-val{max-width:none;text-align:left}
  .smart-actions > *{width:100%}
  .stepper-wrap{gap:0.75rem}
  .step-val{min-width:88px;font-size:2.4rem}
}
</style>
</head>
<body>
<header>
  <div class="header-inner">
    <a class="logo-wrap" href="https://pvo.opencodingsociety.com/">
      <div class="logo-emblem">PVO</div>
      <div>
        <div class="logo-text-main">Poway Veterans Organization</div>
      </div>
    </a>
    <nav>
      <a href="#tools">Platform Tools</a>
      <a href="#about">About</a>
      <a href="https://pvo.opencodingsociety.com/volunteer" target="_blank" rel="noopener">Volunteer</a>
      <a href="https://pvo.opencodingsociety.com/prescreener" target="_blank" rel="noopener" class="nav-cta">Check Eligibility</a>
    </nav>
  </div>
</header>
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
let smartDraft = null;

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

const PVO_NEED_MAP = {
  rent:'Other',
  utility:'Other',
  food:'Meals/food',
  transport:'Transportation',
  home_repair:'Home repairs',
  medical:'Medical',
  counseling:'Counseling',
  legal:'Legal',
  vehicle_reg:'Transportation',
  moving:'Other',
  storage:'Other',
  mental_health:'Counseling',
};

const NEED_TEXT = {
  rent:'rent or housing support',
  utility:'utility bill support',
  food:'food assistance',
  transport:'transportation support',
  home_repair:'home repair assistance',
  medical:'medical cost support',
  counseling:'counseling support',
  legal:'legal or VA benefits guidance',
  vehicle_reg:'vehicle registration help',
  moving:'moving or relocation help',
  storage:'storage fee assistance',
  mental_health:'PTSD / TBI support',
};

const EMPLOYMENT_TEXT = {
  employed:'currently working',
  unemployed:'currently between jobs',
  disabled:'currently disabled or unable to work',
};

const BRANCH_OPTIONS = ['Army','Navy','Air Force','Marine Corps','Coast Guard','Space Force'];
const SMART_REQUIRED_FIELDS = ['firstName','lastName','street','city','state','zip','cellPhone','email','branch','generalNeed','specificNeed','proofDocName'];

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

function setApplicationHeader(label,note,caption){
  document.getElementById('prog-bar').style.width='100%';
  document.getElementById('prog-pct').textContent='100%';
  document.getElementById('prog-label').textContent=label;
  document.getElementById('prog-step').textContent='PVO application prep';
  document.getElementById('prog-note').textContent=note;
  document.getElementById('prog-caption').textContent=caption;
  document.querySelectorAll('.progress-dot').forEach(dot => {
    dot.classList.remove('active');
    dot.classList.add('complete');
  });
}

function formatPhone(value){
  const digits = String(value || '').replace(/\D/g,'').slice(-10);
  if(digits.length !== 10) return value || '';
  return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
}

function titleCase(value){
  return String(value || '')
    .toLowerCase()
    .split(/[\s-]+/)
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function escapeHtml(value=''){
  return String(value)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

function splitName(fullName=''){
  const cleaned = fullName.replace(/\s+/g,' ').trim();
  if(!cleaned) return {firstName:'',lastName:''};
  const parts = cleaned.split(' ');
  return {firstName:parts.shift() || '', lastName:parts.join(' ') || ''};
}

function mapGeneralNeed(){
  return PVO_NEED_MAP[answers.need_type] || 'Other';
}

function buildSpecificNeedSummary(){
  const need = NEED_TEXT[answers.need_type] || 'support';
  const work = EMPLOYMENT_TEXT[answers.employment] || 'current employment information not provided';
  const household = answers.household_sz || 1;
  const housing = answers.housing_risk ? 'housing is currently at risk' : 'housing is currently stable';
  const va = answers.has_va_care ? 'already connected to VA services' : 'not yet connected to VA services';
  const area = answers.user_zip && SERVED_ZIPS[answers.user_zip] ? `${SERVED_ZIPS[answers.user_zip][0]} (${answers.user_zip})` : 'service area confirmed';
  return `Applicant is requesting ${need}. They report being ${work}, a household size of ${household}, and that ${housing}. Applicant is ${va}. Intake started from ${area}.`;
}

function createSmartDraft(){
  return {
    firstName:'',
    lastName:'',
    street:'',
    city:'',
    state:'CA',
    zip:answers.user_zip || '',
    homePhone:'',
    cellPhone:'',
    email:'',
    branch:'',
    generalNeed:mapGeneralNeed(),
    specificNeed:buildSpecificNeedSummary(),
    primaryDocName:'',
    primaryDocPreview:'',
    primaryDocText:'',
    proofDocName:'',
    proofDocPreview:'',
  };
}

function ensureSmartDraft(){
  if(!smartDraft) smartDraft = createSmartDraft();
  if(!smartDraft.generalNeed) smartDraft.generalNeed = mapGeneralNeed();
  if(!smartDraft.specificNeed) smartDraft.specificNeed = buildSpecificNeedSummary();
  if(!smartDraft.zip && answers.user_zip) smartDraft.zip = answers.user_zip;
  return smartDraft;
}

function parseDocumentText(rawText=''){
  const text = String(rawText || '').replace(/\r/g,'\n');
  const parsed = {};

  const email = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  if(email) parsed.email = email[0];

  const phones = [...text.matchAll(/(?:\+?1[\s.-]*)?(?:\(?(\d{3})\)?[\s.-]*)?(\d{3})[\s.-]*(\d{4})/g)]
    .map(match => formatPhone(`${match[1] || ''}${match[2]}${match[3]}`))
    .filter(Boolean);
  if(phones[0]) parsed.homePhone = phones[0];
  if(phones[1]) parsed.cellPhone = phones[1];
  else if(phones[0] && !parsed.cellPhone) parsed.cellPhone = phones[0];

  const branch = BRANCH_OPTIONS.find(option => new RegExp(`\\b${option.replace(/\s+/g,'\\s+')}\\b`, 'i').test(text));
  if(branch) parsed.branch = branch;

  const address = text.match(/\b\d{1,6}\s+[A-Za-z0-9.#'\- ]+\s(?:Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Lane|Ln|Drive|Dr|Court|Ct|Way|Place|Pl|Circle|Cir|Trail|Trl|Highway|Hwy)\b[^\n,]*/i);
  if(address) parsed.street = address[0].replace(/\s+/g,' ').trim();

  const cityStateZip = text.match(/([A-Za-z .'-]+),\s*(CA|California|[A-Z]{2})\s+(\d{5})(?:-\d{4})?/i);
  if(cityStateZip){
    parsed.city = titleCase(cityStateZip[1]);
    parsed.state = cityStateZip[2].length > 2 ? 'CA' : cityStateZip[2].toUpperCase();
    parsed.zip = cityStateZip[3];
  }

  const labelledName = text.match(/(?:name|member name|patient name|recipient)[:\s]+([A-Z][A-Za-z' -]+(?:\s+[A-Z][A-Za-z' -]+)+)/i);
  const allCapsName = text.match(/^([A-Z][A-Z' -]+,\s*[A-Z][A-Z' -]+)$/m);
  const plainName = text.match(/^([A-Z][a-z]+(?:\s+[A-Z][a-z]+){1,2})$/m);
  let fullName = '';
  if(labelledName) fullName = labelledName[1];
  else if(allCapsName) fullName = allCapsName[1].split(',').reverse().join(' ');
  else if(plainName) fullName = plainName[1];
  if(fullName){
    const split = splitName(titleCase(fullName.replace(',', ' ')));
    parsed.firstName = split.firstName;
    parsed.lastName = split.lastName;
  }

  return parsed;
}

function getMissingSmartFields(){
  const draft = ensureSmartDraft();
  const missing = [];
  if(!draft.firstName) missing.push('First name');
  if(!draft.lastName) missing.push('Last name');
  if(!draft.street) missing.push('Street address');
  if(!draft.city) missing.push('City');
  if(!draft.state) missing.push('State');
  if(!draft.zip) missing.push('ZIP code');
  if(!draft.cellPhone && !draft.homePhone) missing.push('Phone number');
  if(!draft.email) missing.push('Email');
  if(!draft.branch) missing.push('Branch of service');
  if(!draft.generalNeed) missing.push('General need');
  if(!draft.specificNeed) missing.push('Specific need details');
  if(!draft.proofDocName) missing.push('Proof of service upload');
  return missing;
}

function getPreviewValue(value, fallback='Not filled yet'){
  return escapeHtml(value && String(value).trim() ? value : fallback);
}

function updateUploadPreview(kind){
  const draft = ensureSmartDraft();
  const nameKey = kind === 'primary' ? 'primaryDocName' : 'proofDocName';
  const previewKey = kind === 'primary' ? 'primaryDocPreview' : 'proofDocPreview';
  const fileNameEl = document.getElementById(`${kind}-doc-name`);
  const previewEl = document.getElementById(`${kind}-doc-preview`);
  if(fileNameEl) fileNameEl.textContent = draft[nameKey] || 'No file selected yet';
  if(previewEl){
    previewEl.innerHTML = draft[previewKey]
      ? `<img class="smart-doc-img" src="${draft[previewKey]}" alt="${kind} document preview" />`
      : `<div class="smart-doc-empty">${kind === 'primary' ? 'Upload or capture a document for name, address, contact details, and service clues.' : 'Upload DD-214, military ID, or another proof-of-service file.'}</div>`;
  }
}

function handlePrimaryDoc(event){
  const draft = ensureSmartDraft();
  const file = event.target.files && event.target.files[0];
  draft.primaryDocName = file ? file.name : '';
  draft.primaryDocPreview = '';
  updateUploadPreview('primary');
  if(file && file.type.startsWith('image/')){
    const reader = new FileReader();
    reader.onload = () => {
      draft.primaryDocPreview = reader.result;
      updateUploadPreview('primary');
    };
    reader.readAsDataURL(file);
  }
}

function handleProofDoc(event){
  const draft = ensureSmartDraft();
  const file = event.target.files && event.target.files[0];
  draft.proofDocName = file ? file.name : '';
  draft.proofDocPreview = '';
  updateUploadPreview('proof');
  if(file && file.type.startsWith('image/')){
    const reader = new FileReader();
    reader.onload = () => {
      draft.proofDocPreview = reader.result;
      updateUploadPreview('proof');
    };
    reader.readAsDataURL(file);
  }
}

function handlePrimaryDocText(value){
  ensureSmartDraft().primaryDocText = value;
}

function syncDraftField(key, value){
  ensureSmartDraft()[key] = value;
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
  answers['user_zip'] = val;
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
  setApplicationHeader('Complete!','Your prescreener is complete. Review the best next step below.','Routing summary ready.');

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
    ${isPVO ? `<button class="cta-btn" onclick="startSmartApplication()">Start application →</button>` : ''}
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

function startSmartApplication(){
  const res = simulate(answers);
  const payload = {
    ...answers,
    pvo_direct: res.pvo_direct,
    refer_out: res.refer_out,
    confidence: res.confidence,
    generated_at: new Date().toISOString(),
  };
  localStorage.setItem('pvo_prescreener_context_v1', JSON.stringify(payload));
  localStorage.removeItem('pvo_application_draft_v1');
  window.location.href = '/pvo-application-assist';
}

function renderSmartCapture(){
  const draft = ensureSmartDraft();
  setApplicationHeader('Build your PVO application','Upload one intake document, then review the fields before proof-of-service upload.','Capture with your camera or upload an image/PDF.');
  const stage = document.getElementById('stage');
  stage.innerHTML = `<div class="result-screen smart-stack">
    <div class="result-header" style="text-align:left">
      <div class="steps-title">Smart Application Builder</div>
      <div class="result-title yes" style="margin-bottom:0.45rem">Start with one document we can learn from</div>
      <p class="result-desc" style="margin:0;max-width:none">There usually is not one document that fills every PVO field. The best combination is: an ID or address document for contact details, then DD-214 or military ID for proof of service.</p>
    </div>
    <div class="smart-guide-grid">
      <div class="smart-guide-card">
        <div class="smart-guide-kicker">Best for name + address</div>
        <div class="smart-guide-title">Driver's license or state ID</div>
        <div class="smart-guide-copy">Usually gives the cleanest name and mailing address for the application draft.</div>
      </div>
      <div class="smart-guide-card">
        <div class="smart-guide-kicker">Best for branch clues</div>
        <div class="smart-guide-title">VA letter or veteran ID</div>
        <div class="smart-guide-copy">Helpful when you want branch-of-service details to prefill before review.</div>
      </div>
      <div class="smart-guide-card">
        <div class="smart-guide-kicker">Required later</div>
        <div class="smart-guide-title">DD-214 or military ID</div>
        <div class="smart-guide-copy">PVO asks for proof of service. You will upload that in the final step.</div>
      </div>
    </div>
    <div class="smart-banner">
      <div class="smart-banner-mark">i</div>
      <div class="smart-banner-copy">Current version: the prescreener already pre-fills need-related answers. For contact details, upload a photo and paste any visible text from the document if you want the draft to pull more fields automatically before review.</div>
    </div>
    <div class="smart-upload-grid">
      <div class="smart-upload-box smart-panel">
        <div>
          <div class="smart-panel-title">1. Capture a primary document</div>
          <div class="smart-panel-sub">Use your camera or upload a file with the applicant's name and address. If you can copy text from the document, paste it below for best autofill.</div>
        </div>
        <label class="smart-upload-label">
          <input type="file" accept="image/*,.pdf" capture="environment" style="display:none" onchange="handlePrimaryDoc(event)">
          <div class="smart-upload-title">Upload or take a photo</div>
          <div class="smart-upload-copy">Accepted here for drafting: ID card, utility bill, VA letter, or similar intake document.</div>
        </label>
        <div class="smart-file-meta" id="primary-doc-name">${escapeHtml(draft.primaryDocName || 'No file selected yet')}</div>
        <div class="smart-field">
          <label class="smart-label" for="smart-ocr-text">Optional text from the document</label>
          <textarea id="smart-ocr-text" class="smart-textarea" placeholder="Paste any text you can copy from the photo or scanned document. We will use it to prefill name, address, phone, email, and branch when possible." oninput="handlePrimaryDocText(this.value)">${escapeHtml(draft.primaryDocText || '')}</textarea>
          <div class="smart-helper">This keeps the workflow reliable even before a full OCR service is connected.</div>
        </div>
      </div>
      <div class="smart-panel">
        <div class="smart-panel-title">Document preview</div>
        <div class="smart-panel-sub" style="margin-bottom:0.85rem">Preview is optional for PDFs. Image uploads show here immediately.</div>
        <div class="smart-doc-preview" id="primary-doc-preview"></div>
      </div>
    </div>
    <div class="smart-actions">
      <button class="subtle-btn" onclick="showResult()">Back to results</button>
      <button class="cta-btn" style="margin-bottom:0" onclick="prepareSmartReview()">Review extracted info →</button>
    </div>
  </div>`;
  updateUploadPreview('primary');
}

function prepareSmartReview(){
  const draft = ensureSmartDraft();
  const parsed = parseDocumentText(draft.primaryDocText || '');
  Object.entries(parsed).forEach(([key, value]) => {
    if(value && !draft[key]) draft[key] = value;
  });
  if(!draft.generalNeed) draft.generalNeed = mapGeneralNeed();
  if(!draft.specificNeed) draft.specificNeed = buildSpecificNeedSummary();
  renderSmartReview();
}

function renderSmartReview(){
  const draft = ensureSmartDraft();
  setApplicationHeader('Review your draft','Check every field before moving to proof of service.','Edit anything that looks off.');
  const stage = document.getElementById('stage');
  stage.innerHTML = `<div class="result-screen smart-stack">
    <div class="smart-panel">
      <div class="smart-panel-title">2. Review the PVO draft</div>
      <div class="smart-panel-sub">These fields mirror the PVO assistance form. The prescreener has already filled the need-related sections; your document can help fill the rest.</div>
    </div>
    <div class="smart-form-grid smart-panel">
      <div class="smart-field">
        <label class="smart-label">First name</label>
        <input class="smart-input" value="${escapeHtml(draft.firstName || '')}" oninput="syncDraftField('firstName', this.value)">
      </div>
      <div class="smart-field">
        <label class="smart-label">Last name</label>
        <input class="smart-input" value="${escapeHtml(draft.lastName || '')}" oninput="syncDraftField('lastName', this.value)">
      </div>
      <div class="smart-field span-2">
        <label class="smart-label">Street address</label>
        <input class="smart-input" value="${escapeHtml(draft.street || '')}" oninput="syncDraftField('street', this.value)">
      </div>
      <div class="smart-field">
        <label class="smart-label">City</label>
        <input class="smart-input" value="${escapeHtml(draft.city || '')}" oninput="syncDraftField('city', this.value)">
      </div>
      <div class="smart-field">
        <label class="smart-label">State</label>
        <input class="smart-input" value="${escapeHtml(draft.state || '')}" oninput="syncDraftField('state', this.value)">
      </div>
      <div class="smart-field">
        <label class="smart-label">ZIP code</label>
        <input class="smart-input" value="${escapeHtml(draft.zip || '')}" oninput="syncDraftField('zip', this.value)">
      </div>
      <div class="smart-field">
        <label class="smart-label">Home phone</label>
        <input class="smart-input" value="${escapeHtml(draft.homePhone || '')}" oninput="syncDraftField('homePhone', this.value)">
      </div>
      <div class="smart-field">
        <label class="smart-label">Cell phone</label>
        <input class="smart-input" value="${escapeHtml(draft.cellPhone || '')}" oninput="syncDraftField('cellPhone', this.value)">
      </div>
      <div class="smart-field">
        <label class="smart-label">Email</label>
        <input class="smart-input" value="${escapeHtml(draft.email || '')}" oninput="syncDraftField('email', this.value)">
      </div>
      <div class="smart-field">
        <label class="smart-label">Branch of service</label>
        <select class="smart-select" onchange="syncDraftField('branch', this.value)">
          <option value="">Select branch</option>
          ${BRANCH_OPTIONS.map(option => `<option value="${option}" ${draft.branch===option?'selected':''}>${option}</option>`).join('')}
        </select>
      </div>
      <div class="smart-field">
        <label class="smart-label">General need(s)</label>
        <select class="smart-select" onchange="syncDraftField('generalNeed', this.value)">
          ${['Home repairs','Medical','Counseling','Legal','Transportation','Family','Meals/food','Veterans Administration Services','Other'].map(option => `<option value="${option}" ${draft.generalNeed===option?'selected':''}>${option}</option>`).join('')}
        </select>
      </div>
      <div class="smart-field span-2">
        <label class="smart-label">Specific need(s)</label>
        <textarea class="smart-textarea" oninput="syncDraftField('specificNeed', this.value)">${escapeHtml(draft.specificNeed || '')}</textarea>
      </div>
    </div>
    <div class="smart-actions">
      <button class="subtle-btn" onclick="renderSmartCapture()">Back to document step</button>
      <button class="cta-btn" style="margin-bottom:0" onclick="renderSmartProof()">Continue to proof of service →</button>
    </div>
  </div>`;
}

function renderSmartProof(){
  const draft = ensureSmartDraft();
  setApplicationHeader('Add proof of service','PVO asks for proof of military service with the request.','Upload DD-214, military ID, or another acceptable proof document.');
  const stage = document.getElementById('stage');
  stage.innerHTML = `<div class="result-screen smart-stack">
    <div class="smart-panel">
      <div class="smart-panel-title">3. Add proof of service</div>
      <div class="smart-panel-sub">PVO lists DD-214 or a military ID as accepted examples. This step keeps that attachment paired with the draft before you open the live form.</div>
    </div>
    <div class="smart-upload-grid">
      <div class="smart-upload-box smart-panel">
        <label class="smart-upload-label">
          <input type="file" accept="image/*,.pdf,.doc,.txt" capture="environment" style="display:none" onchange="handleProofDoc(event)">
          <div class="smart-upload-title">Upload proof of service</div>
          <div class="smart-upload-copy">Examples: DD-214, military ID, or another file that clearly proves service status.</div>
        </label>
        <div class="smart-file-meta" id="proof-doc-name">${escapeHtml(draft.proofDocName || 'No proof document selected yet')}</div>
        <div class="smart-checklist">
          <div class="smart-check">
            <div><strong>Primary document</strong><span>${escapeHtml(draft.primaryDocName || 'Not uploaded yet')}</span></div>
            <div class="smart-status ${draft.primaryDocName ? 'ready' : 'missing'}">${draft.primaryDocName ? 'Ready' : 'Missing'}</div>
          </div>
          <div class="smart-check">
            <div><strong>Proof of service</strong><span>${escapeHtml(draft.proofDocName || 'Upload required for a complete packet')}</span></div>
            <div class="smart-status ${draft.proofDocName ? 'ready' : 'missing'}">${draft.proofDocName ? 'Ready' : 'Needed'}</div>
          </div>
        </div>
      </div>
      <div class="smart-panel">
        <div class="smart-panel-title">Proof preview</div>
        <div class="smart-panel-sub" style="margin-bottom:0.85rem">Image files preview here. PDFs and docs will still be tracked by file name.</div>
        <div class="smart-doc-preview" id="proof-doc-preview"></div>
      </div>
    </div>
    <div class="smart-actions">
      <button class="subtle-btn" onclick="renderSmartReview()">Back to review</button>
      <button class="cta-btn" style="margin-bottom:0" onclick="renderSmartFinal()">Show submission-ready form →</button>
    </div>
  </div>`;
  updateUploadPreview('proof');
}

function renderSmartFinal(){
  const draft = ensureSmartDraft();
  setApplicationHeader('Submission-ready preview','This is the PVO packet as currently prepared. Review any missing items before opening the live form.','Ready to transfer into the official PVO assistance form.');
  const missing = getMissingSmartFields();
  const stage = document.getElementById('stage');
  stage.innerHTML = `<div class="result-screen smart-stack">
    <div class="smart-panel">
      <div class="smart-panel-title">4. Submission-ready PVO preview</div>
      <div class="smart-panel-sub">This mirrors the live PVO assistance form at <code>powayveterans.org/request-assistance/</code> and shows what is already prepared.</div>
    </div>
    <div class="smart-panel">
      <div class="smart-preview-list">
        <div class="smart-preview-row"><div class="smart-preview-key">Name</div><div class="smart-preview-val">${getPreviewValue(`${draft.firstName} ${draft.lastName}`.trim())}</div></div>
        <div class="smart-preview-row"><div class="smart-preview-key">Address</div><div class="smart-preview-val">${getPreviewValue([draft.street,draft.city,draft.state,draft.zip].filter(Boolean).join(', '))}</div></div>
        <div class="smart-preview-row"><div class="smart-preview-key">Home phone</div><div class="smart-preview-val">${getPreviewValue(draft.homePhone)}</div></div>
        <div class="smart-preview-row"><div class="smart-preview-key">Cell phone</div><div class="smart-preview-val">${getPreviewValue(draft.cellPhone)}</div></div>
        <div class="smart-preview-row"><div class="smart-preview-key">Email</div><div class="smart-preview-val">${getPreviewValue(draft.email)}</div></div>
        <div class="smart-preview-row"><div class="smart-preview-key">Branch of service</div><div class="smart-preview-val">${getPreviewValue(draft.branch)}</div></div>
        <div class="smart-preview-row"><div class="smart-preview-key">General need(s)</div><div class="smart-preview-val">${getPreviewValue(draft.generalNeed)}</div></div>
        <div class="smart-preview-row"><div class="smart-preview-key">Specific need(s)</div><div class="smart-preview-val">${getPreviewValue(draft.specificNeed)}</div></div>
      </div>
    </div>
    <div class="smart-panel">
      <div class="smart-panel-title">Attached files</div>
      <div class="smart-pills">
        <span class="smart-pill">Primary intake: ${escapeHtml(draft.primaryDocName || 'Not added yet')}</span>
        <span class="smart-pill">Proof of service: ${escapeHtml(draft.proofDocName || 'Not added yet')}</span>
      </div>
    </div>
    <div class="smart-panel">
      <div class="smart-panel-title">Readiness check</div>
      ${missing.length ? `<div class="smart-missing">${missing.map(item => `<div>• ${item}</div>`).join('')}</div>` : `<div class="smart-banner"><div class="smart-banner-mark">✓</div><div class="smart-banner-copy">All major PVO fields in this draft are filled. Final step is transferring this packet into the live PVO form for submission.</div></div>`}
    </div>
    <div class="smart-actions">
      <button class="subtle-btn" onclick="renderSmartProof()">Back to proof step</button>
      <button class="subtle-btn" onclick="renderSmartReview()">Edit draft fields</button>
      <a class="cta-btn" style="margin-bottom:0" href="https://powayveterans.org/request-assistance/" target="_blank">Open live PVO form →</a>
    </div>
  </div>`;
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
  currentQ=-1; stepperVal=1; zipLocation=null; savedSeconds=0; smartDraft=null;
  document.getElementById('summary-bar').innerHTML='';
  const ts=document.getElementById('time-saved');ts.classList.add('hidden');
  render();
}

initProgressDots();
render();
</script>
</body>
</html>
