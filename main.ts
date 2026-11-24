import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: exactly one word, the first that comes to mind.
const WORD = "borborygmus";

// A valid entry is a single token: no spaces, only lowercase letters.
if (!/^[a-z]+$/.test(WORD)) {
  throw new Error(`Invalid entry word: ${JSON.stringify(WORD)}`);
}
if (WORD.length < 1 || WORD.length > 24) {
  throw new Error(`Entry word must be 1-24 characters, got ${WORD.length}`);
}

const OUTPUT_PATH = "/output/entry.txt";
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
// Write exactly the word — no trailing newline, no extra text.
writeFileSync(OUTPUT_PATH, WORD, "utf8");
// Read back and verify byte-exact content before reporting success.
if (readFileSync(OUTPUT_PATH, "utf8") !== WORD) {
  throw new Error(`Verification failed: ${OUTPUT_PATH} does not contain exactly the entry word`);
}
console.log(`Wrote entry to ${OUTPUT_PATH}`);
