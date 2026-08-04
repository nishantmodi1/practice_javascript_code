# JavaScript Practice Exercises

This repository contains my JavaScript practice programs for building confidence with core syntax, problem solving, and loop-based logic. Each `p*.js` file is a small, standalone exercise that can be run from the command line.

## What I practised

- Basic JavaScript: user input, arithmetic, conditionals, number operations, arrays, nested arrays, recursion, prototypes, and a debounce function.
- Math problems: integer-to-Roman and Roman-to-integer conversion, integer division, and string multiplication.
- Logic building with loops: `while`, `do...while`, `for`, nested loops, `break`/`continue`, mathematical series, mixed number problems, and star/number/alphabet patterns.

## Project structure

```text
Practice_js/
├── basic/                         # 44 foundational JavaScript exercises
├── math/                          # Math and array-focused problems
│   └── logic_phase/               # Additional array and object practice
├── logic_building_wiht_loop/      # Loop exercises organised by learning phase
│   ├── phase1_while_loop/
│   ├── phase2_do_while_loop/
│   ├── phase3_for_loop/
│   ├── phase4_nested_logic_loop/
│   ├── phase5_break_continue_logic/
│   ├── phase6_mathematical_series/
│   ├── phase7_mixed_logical_loop_problem/
│   └── phase8_star_pattern_printing/
└── LOGIC BUILDING WITH LOOPS.pdf   # Loop-practice reference material
```

## Run an exercise

1. Install [Node.js](https://nodejs.org/).
2. For exercises that request keyboard input, install dependencies in the relevant folder (for example, `Practice_js/basic`):

   ```bash
   npm install
   ```

3. Run a file with Node:

   ```bash
   node Practice_js/basic/p1.js
   node Practice_js/logic_building_wiht_loop/phase1_while_loop/p1.js
   ```

Many programs use `prompt-sync`, so they will ask for values in the terminal. Others use built-in sample data and print the result directly.

## Notes

- These are learning exercises, not one combined application.
- File names use `p1.js`, `p2.js`, and so on; the nearby folder and source comments describe each problem.
- The folder name `logic_building_wiht_loop` is kept as it appears in the existing project.
