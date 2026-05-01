---
layout: page
title: Level 2 — The Vault of Lists
permalink: /escaperoom
---
# 📦 Level 2 — The Vault of Lists (Pseudocode)
 
The second chamber is lined with glowing shelves. Each shelf holds a row of numbered compartments — some filled, some empty.
A voice echoes:
 
> *"Only those who master the art of the List may pass. Fill them. Empty them. Know their length."*
 
---
 
## 📘 What Is a List?
 
A **list** is an ordered collection of items stored under a single variable name.  
Each item lives at a numbered **index**, and on the AP exam, **indexing starts at 1** (not 0!).
 
```
inventory ← ["key", "torch", "map", "potion"]
              index 1   2       3      4
```
 
**Key things to remember:**
- A list can hold **any type** of value — strings, numbers, even booleans
- Items in a list are **ordered** — the sequence matters
- The **same value** can appear multiple times at different indices
- A list can be **empty**: `myList ← []`
- The **last valid index** is always equal to `LENGTH(myList)`
You can store **any type** of value — numbers, strings, even other lists.
 
 
## 🔑 Core List Operations
 
### 1. Accessing an Element
```
inventory[2]   →   "torch"
```
- Use bracket notation with the index number (**starts at 1**)
- Reading an element does **not** change the list
- Accessing an out-of-range index causes an **error**
---
 
### 2. Assigning a Value
```
inventory[3] ← "compass"
```
- Replaces whatever was at index 3 with `"compass"`
- The list **length stays the same** — you're overwriting, not adding
- The old value at that index is **gone**
---
 
### 3. INSERT
```
INSERT(inventory, 2, "gem")
```
- Inserts `"gem"` **at index 2**, shifting everything else **right**
- The list **grows by one**
- Result: `["key", "gem", "torch", "map", "potion"]`
---
 
### 4. APPEND
```
APPEND(inventory, "rope")
```
- Adds `"rope"` to the **end** of the list
- Think of it as INSERT at position `LENGTH + 1`
- The list **grows by one**
---
 
### 5. REMOVE
```
REMOVE(inventory, 2)
```
- Removes the item at index 2, shifting everything **left**
- The list **shrinks by one** — no gaps are left behind
- Items after the removed one all shift down by 1
---
 
### 6. LENGTH
```
LENGTH(inventory)   →   4
```
- Returns the **count** of items currently in the list
- Useful for looping and bounds-checking
- Updates automatically as items are added or removed
## 🔄 Traversing a List with a Loop
 
The most common list pattern on the exam: visit every item one by one.
 
```
FOR EACH item IN inventory
{
    DISPLAY(item)
}
```
 
Or using an index:
 
```
i ← 1
REPEAT LENGTH(inventory) TIMES
{
    DISPLAY(inventory[i])
    i ← i + 1
}
```
 
**When to use each style:**
- Use **FOR EACH** when you only need the *value* and not its position
- Use the **index loop** when you need to know *where* an item is or modify items in place
- Both loops visit every element — neither skips or repeats
- Always stop at `LENGTH(list)` to avoid going out of bounds
## ✍️ Trace Practice
 
Follow the pseudocode below. What does `loot` look like at each step?
 
```
loot ← ["gold", "silver", "bronze"]
APPEND(loot, "diamond")
REMOVE(loot, 2)
INSERT(loot, 1, "ruby")
loot[3] ← "emerald"
DISPLAY(loot)
```
 
Work it out on paper, then expand the answer below.
 
<details>
<summary>👁️ Reveal Answer</summary>
| Step | List State |
|------|------------|
| Start | `["gold", "silver", "bronze"]` |
| APPEND(loot, "diamond") | `["gold", "silver", "bronze", "diamond"]` |
| REMOVE(loot, 2) | `["gold", "bronze", "diamond"]` |
| INSERT(loot, 1, "ruby") | `["ruby", "gold", "bronze", "diamond"]` |
| loot[3] ← "emerald" | `["ruby", "gold", "emerald", "diamond"]` |
 
**DISPLAY output:** `["ruby", "gold", "emerald", "diamond"]`
 
</details>
---
 
## ⚠️ Common Misconceptions
 
| Mistake | Correction |
|---------|------------|
| `list[0]` accesses the first item | ❌ AP pseudocode starts at **index 1** |
| `REMOVE` leaves a gap at that index | ❌ Everything shifts **left**; no gaps |
| `INSERT` overwrites the existing item | ❌ It **pushes** the existing item right |
| `LENGTH` counts from 0 | ❌ It returns the true **count** of items |
| You can loop past `LENGTH(list)` | ❌ That causes an **out-of-bounds** error |
 
---
 
---
# 🎮 GAME: Escape the Vault!
 
You are locked inside the Vault of Lists. Your **inventory** starts empty.  
Collect the right items, arrange them correctly, and the vault door will open.
 
**How to play:** Run the cell below, then type commands into the text box.
 
---
 
### 📜 Rules & How to Win
 
- You are exploring **4 rooms**: Entry Hall → Armory → Library → Vault Door
- Use **`go east`** / **`go west`** to move between rooms
- **Pick up items** from each room and manage them in your inventory list
- Your goal is to reach the **Vault Door** with your inventory in this **exact order**:
```
inventory = [key, torch, map]
```
 
- The door checks **both the items AND their positions** — order matters!
- **Commands you can use:**
| Command | What it does (list operation) |
|---------|-------------------------------|
| `take [item]` | **APPEND** — adds item to the end of your inventory |
| `drop [index]` | **REMOVE** — removes item at that index; it drops to the floor |
| `insert [i] [item]` | **INSERT** — places item at a specific index, shifting others right |
| `swap [i] [j]` | Swaps two items by index (uses a temp variable behind the scenes) |
| `inventory` | Shows your current list with indices and LENGTH |
| `look` | Describes the current room and its items |
| `hint` | Gives you a nudge if you're stuck |
| `help` | Lists all available commands |
 
- You may need to **rearrange** your inventory before reaching the Vault Door
- Items dropped in a room stay there — you can come back for them
---
 
 
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
---
## 📝 Reflection Questions
 
After playing the game, think about these:
 
1. When you used **`take`**, which list operation did that simulate?
2. When you used **`swap`**, what list operations (in pseudocode) would you need to replicate that?
3. Why does the vault door care about the **index** of each item, not just *whether* the item is present?
4. What would happen if the vault required items in the list but the **order didn't matter**? How would the pseudocode check change?
<details>
<summary> Reveal Answers</summary>
1. **`take` → `APPEND`** — it always adds to the end of the list.
2. Swap needs a **temporary variable**: `temp ← list[i]`, `list[i] ← list[j]`, `list[j] ← temp`.
3. Lists are **ordered** — `[torch, key, map]` is different from `[key, torch, map]`. The index is what distinguishes them.
4. You'd loop through the list checking if each required item exists *anywhere* (`FOR EACH` + a found flag), ignoring position.
</details>
---
 
<div style="margin-top:2rem; text-align:center;">
  <span style="
    display:inline-block;
    padding:10px 18px;
    background:#1a2148;
    color:#e9eefc;
    border-radius:12px;
    box-shadow:0 4px 10px rgba(0,0,0,.3);
  ">⬅️ Back to Lobby &nbsp;|&nbsp; Level 3 — Procedures ➡️</span>
</div>
 
 