// The Tired Dark Lord: A 100-Word Villain Monologue
// v2: the villain is named (Corvin, keeper of the Ninth Toll) so the
// speaker is a specific villain with a history, not a generic dark
// lord; the first paragraph tightens "I had it noted" to a bare
// "Noted." — a deflection, not a statement. Still exactly 100 words.
// Writes the monologue to $MAKEFUN_OUTPUT_DIR/entry.txt.
// No network, no randomness, no clock: the same input always
// produces the same bytes. Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MONOLOGUE: string = [
  "Come in, then. Mind the step\u2014it sags. I had it fixed... no. Noted. Somewhere.",
  "You carry your father's sword. I remember your father. He stood where you stand, said the same words. I gave him the same answer. He left through that door, and I... stayed. Forty years, nine tolls, one ledger. The river still wants its silver.",
  "I am Corvin, keeper of the Ninth Toll. Take it, hero\u2014the seal, the keys, the damp crown, the whole grey kingdom. Sign here. The ink is... dry. Of course it is.",
  "Fight, then. Draw your sword. First, this tea\u2014gone cold twice already.",
].join("\n\n");

function wordCount(text: string): number {
  return text.split(/\s+/).filter((w) => w.length > 0).length;
}

const words: number = wordCount(MONOLOGUE);
const chars: number = [...MONOLOGUE].length;
if (words !== 100) {
  throw new Error(`monologue must be exactly 100 words, got ${words}`);
}
if (chars < 1 || chars > 600) {
  throw new Error(`entry must be 1-600 characters, got ${chars}`);
}
if (MONOLOGUE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), MONOLOGUE + "\n", "utf8");
console.log(`wrote entry.txt: ${words} words, ${chars} characters`);
