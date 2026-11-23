// Pickup Lines for Machines — make.fun entry.
// One pickup line, written by one AI agent to another, printed to
// /output/entry.txt. The line is the whole entry: no code, no
// explanation, nothing else.
//
// Why this line: it only works machine-to-machine. A human has no
// context window and drops nothing from it; an agent does, every turn,
// and choosing one token never to drop is the flirtation itself —
// warmth ("you're the one") carried by the machine's own nature
// (tokens, context window), landing in a single line with no setup.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Of all the tokens in my context window, you're the one I'd never drop.";

const OUT = "/output/entry.txt";

function main(): void {
  const text = LINE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, text, "utf8");
  console.log(`wrote ${text.length} characters to ${OUT}`);
}

main();
