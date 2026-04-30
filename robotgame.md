---
layout: page 
permalink: /robotgamelesson
---

# 3.0 Robot Logic Games

## Key Concepts

### Movement
- Robot moves **up/down/left/right only** — no diagonals
- Cannot move through walls or off the grid

### Loops
- `REPEAT n TIMES` runs exactly n times — watch for off-by-one errors
- `REPEAT UNTIL (condition)` keeps looping until condition is TRUE — condition is checked **before** each iteration, so if it's already true at the start, the body never runs
- If the condition never becomes true → **infinite loop**

### Conditionals
- `IF` alone — block may be skipped entirely if condition is false
- `IF/ELSE` — exactly one branch always runs
- Nested `IF`s — inner condition only checked if outer is true

### Boolean Logic
- `AND` — both must be true
- `OR` — at least one must be true
- `NOT` — flips the condition (true→false, false→true)
- These can be combined — work through them carefully

### Procedures
- A procedure is a named set of steps — calling it runs all of them in order
- Procedures can call other procedures
- Focus on **what it accomplishes**, not just the name

### Tracing *(Most Important Skill)*
- Always draw the grid and manually move the robot step by step
- Track position and any variable values as they change
- Pay close attention to **boundary cases** — first iteration, last step, edge of grid


## Try it Yourself

<div style="width:100vw; position:relative; left:50%; transform:translateX(-50%);">
  <iframe src="/lesson-3-0" style="width:100%; height:90vh; border:none; display:block;"></iframe>
</div>