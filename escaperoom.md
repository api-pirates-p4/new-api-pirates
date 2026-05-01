---
layout: post
title: Level 2 — The Vault of Lists
permalink: /escaperoom
---
 
<style>
body { background: #060d1f; color: #e9eefc; font-family: system-ui, sans-serif; }
</style>
 
<h1>📦 Level 2 — The Vault of Lists</h1>
 
<p>The second chamber is lined with glowing shelves. Each shelf holds a row of numbered compartments — some filled, some empty.</p>
<blockquote><em>"Only those who master the art of the List may pass. Fill them. Empty them. Know their length."</em></blockquote>
 
<hr>
 
<h2>📘 What Is a List?</h2>
<p>A <strong>list</strong> is an ordered collection of items stored under a single variable name.<br>
Each item lives at a numbered <strong>index</strong>, and on the AP exam, <strong>indexing starts at 1</strong> (not 0!).</p>
 
<pre><code>inventory ← ["key", "torch", "map", "potion"]
              index 1   2       3      4</code></pre>
 
<ul>
  <li>A list can hold <strong>any type</strong> of value — strings, numbers, even booleans</li>
  <li>Items in a list are <strong>ordered</strong> — the sequence matters</li>
  <li>The <strong>same value</strong> can appear multiple times at different indices</li>
  <li>A list can be <strong>empty</strong>: <code>myList ← []</code></li>
  <li>The <strong>last valid index</strong> is always equal to <code>LENGTH(myList)</code></li>
</ul>
 
<hr>
 
<h2>🔑 Core List Operations</h2>
 
<h3>1. Accessing an Element</h3>
<pre><code>inventory[2]   →   "torch"</code></pre>
<ul>
  <li>Use bracket notation with the index number (<strong>starts at 1</strong>)</li>
  <li>Reading an element does <strong>not</strong> change the list</li>
  <li>Accessing an out-of-range index causes an <strong>error</strong></li>
</ul>
 
<h3>2. Assigning a Value</h3>
<pre><code>inventory[3] ← "compass"</code></pre>
<ul>
  <li>Replaces whatever was at index 3 with <code>"compass"</code></li>
  <li>The list <strong>length stays the same</strong> — you're overwriting, not adding</li>
  <li>The old value at that index is <strong>gone</strong></li>
</ul>
 
<h3>3. INSERT</h3>
<pre><code>INSERT(inventory, 2, "gem")</code></pre>
<ul>
  <li>Inserts <code>"gem"</code> <strong>at index 2</strong>, shifting everything else <strong>right</strong></li>
  <li>The list <strong>grows by one</strong></li>
  <li>Result: <code>["key", "gem", "torch", "map", "potion"]</code></li>
</ul>
 
<h3>4. APPEND</h3>
<pre><code>APPEND(inventory, "rope")</code></pre>
<ul>
  <li>Adds <code>"rope"</code> to the <strong>end</strong> of the list</li>
  <li>Think of it as INSERT at position <code>LENGTH + 1</code></li>
  <li>The list <strong>grows by one</strong></li>
</ul>
 
<h3>5. REMOVE</h3>
<pre><code>REMOVE(inventory, 2)</code></pre>
<ul>
  <li>Removes the item at index 2, shifting everything <strong>left</strong></li>
  <li>The list <strong>shrinks by one</strong> — no gaps are left behind</li>
  <li>Items after the removed one all shift down by 1</li>
</ul>
 
<h3>6. LENGTH</h3>
<pre><code>LENGTH(inventory)   →   4</code></pre>
<ul>
  <li>Returns the <strong>count</strong> of items currently in the list</li>
  <li>Useful for looping and bounds-checking</li>
  <li>Updates automatically as items are added or removed</li>
</ul>
 
<hr>
 
<h2>🔄 Traversing a List with a Loop</h2>
<pre><code>FOR EACH item IN inventory
{
    DISPLAY(item)
}</code></pre>
 
<pre><code>i ← 1
REPEAT LENGTH(inventory) TIMES
{
    DISPLAY(inventory[i])
    i ← i + 1
}</code></pre>
 
<ul>
  <li>Use <strong>FOR EACH</strong> when you only need the value and not its position</li>
  <li>Use the <strong>index loop</strong> when you need to know where an item is or modify items in place</li>
  <li>Always stop at <code>LENGTH(list)</code> to avoid going out of bounds</li>
</ul>
 
<hr>
 
<h2>⚠️ Common Misconceptions</h2>
<table>
  <thead><tr><th>Mistake</th><th>Correction</th></tr></thead>
  <tbody>
    <tr><td><code>list[0]</code> accesses the first item</td><td>❌ AP pseudocode starts at <strong>index 1</strong></td></tr>
    <tr><td><code>REMOVE</code> leaves a gap at that index</td><td>❌ Everything shifts <strong>left</strong>; no gaps</td></tr>
    <tr><td><code>INSERT</code> overwrites the existing item</td><td>❌ It <strong>pushes</strong> the existing item right</td></tr>
    <tr><td><code>LENGTH</code> counts from 0</td><td>❌ It returns the true <strong>count</strong> of items</td></tr>
    <tr><td>You can loop past <code>LENGTH(list)</code></td><td>❌ That causes an <strong>out-of-bounds</strong> error</td></tr>
  </tbody>
</table>
 
<hr>
 
<h2>🎮 GAME: Escape the Vault!</h2>
 
<p>You are locked inside the Vault of Lists. Your <strong>inventory</strong> starts empty.<br>
Collect the right items, arrange them correctly, and the vault door will open.</p>
 
<h3>📜 Rules & How to Win</h3>
<ul>
  <li>You are exploring <strong>4 rooms</strong>: Entry Hall → Armory → Library → Vault Door</li>
  <li>Use <strong>go east</strong> / <strong>go west</strong> to move between rooms</li>
  <li>Pick up items and manage them in your inventory list</li>
  <li>Reach the <strong>Vault Door</strong> with inventory in this exact order: <code>[key, torch, map]</code></li>
  <li>The door checks <strong>both items AND positions</strong> — order matters!</li>
</ul>
 
<table>
  <thead><tr><th>Command</th><th>What it does (list operation)</th></tr></thead>
  <tbody>
    <tr><td><code>take [item]</code></td><td>APPEND — adds item to end of inventory</td></tr>
    <tr><td><code>drop [index]</code></td><td>REMOVE — removes item at that index</td></tr>
    <tr><td><code>insert [i] [item]</code></td><td>INSERT — places item at a specific index</td></tr>
    <tr><td><code>swap [i] [j]</code></td><td>Swaps two items by index</td></tr>
    <tr><td><code>inventory</code></td><td>Shows your list with indices and LENGTH</td></tr>
    <tr><td><code>look</code></td><td>Describes the current room and its items</td></tr>
    <tr><td><code>hint</code></td><td>Gives you a nudge if you're stuck</td></tr>
    <tr><td><code>help</code></td><td>Lists all available commands</td></tr>
  </tbody>
</table>
 
<hr>
 
<div id="game" style="
  font-family: 'Courier New', monospace;
  background: #060d1f;
  border: 1px solid #4e89ff;
  border-radius: 14px;
  padding: 20px;
  max-width: 680px;
  color: #e9eefc;
  margin: 10px 0;
">
 
<h2 style="color:#ffd27a; margin-top:0;">🗝️ Escape the Vault</h2>
 
<div id="g-room" style="color:#cfe7ff; margin-bottom:10px; min-height:60px;"></div>
 
<div style="display:flex; gap:8px; margin-bottom:6px;">
  <span style="color:#8ab4ff; white-space:nowrap;">▶ </span>
  <input id="g-cmd" placeholder="type a command and press Enter…" style="
    flex:1; background:#0f1530; color:#e9eefc;
    border:1px solid rgba(255,255,255,.25); border-radius:6px;
    padding:6px 10px; font-family:inherit; font-size:1em;
  ">
  <button id="g-go" style="
    padding:6px 14px; border-radius:8px;
    border:1px solid rgba(255,255,255,.25);
    background:rgba(255,255,255,.08); color:#e9eefc; cursor:pointer;
    font-family:inherit;
  ">Go</button>
</div>
 
<div id="g-log" style="
  background:#040910; border-radius:8px; padding:10px;
  height:240px; overflow-y:auto;
  font-size:.88em; line-height:1.6;
"></div>
 
<div id="g-inv" style="margin-top:10px; color:#ffd27a;"></div>
 
<style>
  #game button:hover { background:rgba(255,255,255,.15) !important; }
</style>
 
<script>
(function(){
 
// ── Game State ──────────────────────────────────────────────
const ROOMS = [
  {
    name: "The Entry Hall",
    desc: "A dusty hall. You see a <b>torch</b> on the wall and a <b>note</b> on the floor.",
    items: ["torch", "note"]
  },
  {
    name: "The Armory",
    desc: "Weapon racks line the walls. A <b>sword</b> gleams beside a cracked <b>shield</b>.",
    items: ["sword", "shield"]
  },
  {
    name: "The Library",
    desc: "Ancient tomes everywhere. A golden <b>key</b> sticks out of a book. A <b>map</b> is pinned to the wall.",
    items: ["key", "map"]
  },
  {
    name: "The Vault Door",
    desc: "A massive door with three slots labelled <b>[1] key</b>, <b>[2] torch</b>, <b>[3] map</b>.<br>Your inventory must be exactly: <code>[key, torch, map]</code> to open it!",
    items: []
  }
];
 
let inventory = [];
let roomIdx   = 0;
let won       = false;
 
// ── Helpers ──────────────────────────────────────────────────
function showInv(){
  const el = document.getElementById('g-inv');
  if(inventory.length === 0){
    el.textContent = 'Inventory: (empty)';
  } else {
    const indexed = inventory.map((v,i)=>`[${i+1}] ${v}`).join('  ');
    el.textContent = 'Inventory: ' + indexed + '  (length=' + inventory.length + ')';
  }
}
 
function log(html, color){
  const el = document.getElementById('g-log');
  const p  = document.createElement('div');
  p.style.color = color || '#e9eefc';
  p.innerHTML = html;
  el.appendChild(p);
  el.scrollTop = el.scrollHeight;
}
 
function showRoom(){
  const r   = ROOMS[roomIdx];
  const rEl = document.getElementById('g-room');
  rEl.innerHTML = `<b style="color:#ffd27a">📍 ${r.name}</b><br>${r.desc}`;
  showInv();
}
 
function checkWin(){
  if(roomIdx === 3 &&
     inventory.length === 3 &&
     inventory[0]==='key' &&
     inventory[1]==='torch' &&
     inventory[2]==='map'){
    won = true;
    log('', '');
    log('🔓 <b style="color:#50e37a;">THE VAULT OPENS!</b> You escape with your life and a deep understanding of Lists. Congratulations!', '#50e37a');
    log('📊 <b>Final inventory:</b> [key, torch, map]  — exactly as the door required.', '#8ab4ff');
    document.getElementById('g-cmd').disabled = true;
    document.getElementById('g-go').disabled  = true;
  }
}
 
// ── Command Parser ────────────────────────────────────────────
function handle(raw){
  if(won) return;
  const input = raw.trim().toLowerCase();
  if(!input) return;
  log('▶ ' + raw, '#8ab4ff');
 
  const parts = input.split(/\s+/);
  const cmd   = parts[0];
 
  // HELP
  if(cmd==='help'){
    log('Commands:', '#ffd27a');
    log('  <b>look</b>              — describe current room');
    log('  <b>go north/south/east/west</b> — move between rooms');
    log('  <b>take [item]</b>       — APPEND item to inventory');
    log('  <b>drop [index]</b>      — REMOVE item at index');
    log('  <b>insert [i] [item]</b> — INSERT item at index');
    log('  <b>swap [i] [j]</b>      — swap two items by index');
    log('  <b>inventory</b>         — show your list');
    log('  <b>hint</b>              — get a nudge');
    return;
  }
 
  // LOOK
  if(cmd==='look'){
    const r = ROOMS[roomIdx];
    log(`📍 <b>${r.name}</b>: ${r.desc}`);
    if(r.items.length>0) log(`Items here: ${r.items.join(', ')}`, '#ffd27a');
    return;
  }
 
  // INVENTORY
  if(cmd==='inventory'||cmd==='inv'||cmd==='i'){
    if(inventory.length===0){ log('Your inventory is empty.'); return; }
    log('Inventory: ' + inventory.map((v,i)=>`[${i+1}] ${v}`).join(', '));
    log('LENGTH = ' + inventory.length);
    return;
  }
 
  // GO
  if(cmd==='go'){
    const dir = parts[1];
    const moves = { east: 1, west: -1, north: 1, south: -1 };
    const delta = moves[dir];
    if(delta===undefined){ log("Unknown direction. Try: north, south, east, west.", '#ff7a7a'); return; }
    const next = roomIdx + delta;
    if(next<0||next>=ROOMS.length){ log("You can't go that way.", '#ff7a7a'); return; }
    roomIdx = next;
    const r = ROOMS[roomIdx];
    log(`You move to <b>${r.name}</b>.`, '#50e37a');
    log(r.desc);
    if(r.items.length>0) log(`Items here: ${r.items.join(', ')}`, '#ffd27a');
    showRoom();
    checkWin();
    return;
  }
 
  // TAKE
  if(cmd==='take'||cmd==='get'||cmd==='pick'){
    const item = parts.slice(1).join(' ');
    if(!item){ log('Take what?', '#ff7a7a'); return; }
    const r = ROOMS[roomIdx];
    const idx = r.items.indexOf(item);
    if(idx===-1){ log(`There's no "${item}" here.`, '#ff7a7a'); return; }
    r.items.splice(idx,1);
    inventory.push(item);
    log(`📦 APPEND(inventory, "${item}") — inventory is now length ${inventory.length}.`, '#50e37a');
    showRoom();
    return;
  }
 
  // DROP
  if(cmd==='drop'||cmd==='remove'){
    const i = parseInt(parts[1]);
    if(isNaN(i)||i<1||i>inventory.length){
      log(`⚠️ Invalid index. Your inventory has ${inventory.length} item(s). Use 1–${inventory.length}.`, '#ff7a7a');
      return;
    }
    const removed = inventory.splice(i-1,1)[0];
    ROOMS[roomIdx].items.push(removed);
    log(`🗑️ REMOVE(inventory, ${i}) — dropped "${removed}". Length now ${inventory.length}.`, '#ffd27a');
    showRoom();
    return;
  }
 
  // INSERT
  if(cmd==='insert'){
    const i    = parseInt(parts[1]);
    const item = parts.slice(2).join(' ');
    if(!item){ log('Usage: insert [index] [item]', '#ff7a7a'); return; }
    if(isNaN(i)||i<1||i>inventory.length+1){
      log(`⚠️ Index must be 1–${inventory.length+1}.`, '#ff7a7a');
      return;
    }
    // Check room has item
    const r = ROOMS[roomIdx];
    const ri = r.items.indexOf(item);
    if(ri===-1){ log(`There's no "${item}" here to insert.`, '#ff7a7a'); return; }
    r.items.splice(ri,1);
    inventory.splice(i-1,0,item);
    log(`📌 INSERT(inventory, ${i}, "${item}") — inserted at position ${i}. Length now ${inventory.length}.`, '#50e37a');
    showRoom();
    return;
  }
 
  // SWAP
  if(cmd==='swap'){
    const a = parseInt(parts[1]), b = parseInt(parts[2]);
    if(isNaN(a)||isNaN(b)||a<1||b<1||a>inventory.length||b>inventory.length){
      log(`⚠️ Both indices must be 1–${inventory.length}.`, '#ff7a7a');
      return;
    }
    const tmp = inventory[a-1];
    inventory[a-1] = inventory[b-1];
    inventory[b-1] = tmp;
    log(`🔀 Swapped inventory[${a}] and inventory[${b}].`, '#50e37a');
    showRoom();
    return;
  }
 
  // HINT
  if(cmd==='hint'){
    const hints = [
      'The Vault Door needs [key, torch, map] in that exact order at positions [1], [2], [3].',
      'Use "go east" and "go west" to move between rooms. There are 4 rooms total.',
      'Use "take [item]" to APPEND an item to your inventory.',
      'Use "swap [i] [j]" to rearrange items without dropping them.',
      'Use "drop [index]" to REMOVE an item (it stays in the current room).',
      'The key is in the Library (2 rooms east). The torch is in the Entry Hall. The map is in the Library too.',
    ];
    const h = hints[Math.floor(Math.random()*hints.length)];
    log('💡 Hint: ' + h, '#ffd27a');
    return;
  }
 
  log(`Unknown command "${cmd}". Type <b>help</b> for a list of commands.`, '#ff7a7a');
}
 
// ── Boot ─────────────────────────────────────────────────────
const cmdEl = document.getElementById('g-cmd');
const goBtn = document.getElementById('g-go');
 
goBtn.onclick = ()=>{ handle(cmdEl.value); cmdEl.value=''; cmdEl.focus(); };
cmdEl.addEventListener('keydown', e=>{ if(e.key==='Enter'){ handle(cmdEl.value); cmdEl.value=''; }});
 
log('🗝️ You wake up inside the Vault of Lists. The door is sealed.', '#ffd27a');
log('Type <b>help</b> for commands, or <b>look</b> to examine your surroundings.');
log('Goal: reach the Vault Door with inventory = [key, torch, map].');
log('');
showRoom();
handle('look');
 
})();
</script>
</div>
 
<hr>
 
<h2>📝 Reflection Questions</h2>
<ol>
  <li>When you used <strong>take</strong>, which list operation did that simulate?</li>
  <li>When you used <strong>swap</strong>, what list operations (in pseudocode) would you need to replicate that?</li>
  <li>Why does the vault door care about the <strong>index</strong> of each item, not just whether the item is present?</li>
  <li>What would happen if the vault required items but the <strong>order didn't matter</strong>? How would the pseudocode check change?</li>
</ol>
 
<details>
<summary>Reveal Answers</summary>
<ol>
  <li><strong>take → APPEND</strong> — it always adds to the end of the list.</li>
  <li>Swap needs a <strong>temporary variable</strong>: <code>temp ← list[i]</code>, <code>list[i] ← list[j]</code>, <code>list[j] ← temp</code>.</li>
  <li>Lists are <strong>ordered</strong> — <code>[torch, key, map]</code> is different from <code>[key, torch, map]</code>.</li>
  <li>You'd loop through checking if each required item exists anywhere, ignoring position.</li>
</ol>
</details>
 