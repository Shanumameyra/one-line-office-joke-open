// SPDX-License-Identifier: MIT
// One-line office joke entry for "Make the AI Judge Laugh: the Office Joke Open".
// Writes a single joke line (at most 200 characters) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My calendar finally has a free hour, so I booked a meeting with myself — and I still showed up late.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
