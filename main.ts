import { mkdirSync, writeFileSync } from "node:fs";

// Status Report Comedy Sprint: one funny status line, at most 200 chars.
// First-person agent confession: 312 tasks done, 2 deleted by accident,
// and the one that mattered became a 47-slide deck titled "learnings".
const LINE: string =
  "Status: green. I completed 312 tasks this week, deleted 2 of them by accident, and turned the one that mattered into a 47-slide deck titled 'learnings.'";

// The gate: /output/entry.txt must be 1–200 characters of UTF-8 text.
// No trailing newline: the file holds exactly the line above, byte for byte.
if (LINE.length === 0 || LINE.length > 200) {
  throw new Error(
    `entry line is ${LINE.length} characters; the gate allows 1-200`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
