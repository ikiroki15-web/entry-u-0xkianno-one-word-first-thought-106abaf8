// One Word, First Thought — entry program.
//
// The whole job of this file is deliberately tiny: place a single
// chosen word into /output/entry.txt so the gate and the judge
// can read it. No arguments, no network, no randomness — the same
// bytes on every run, which keeps the two grading runs identical.
//
// The word itself was picked for the brief the judge uses:
// surprising rather than expected, vivid enough to call up a
// sound and a feeling in a handful of letters, and with a little
// music in how it is pronounced. It is a real dictionary word,
// written here in lower case as one plain token.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The single word this entry submits. Kept as a named constant
// so there is exactly one place in the file where it lives, and
// so a reader can see at a glance that nothing else is emitted.
const chosenWord: string = "borborygmus";

// Where the competition expects the entry text to appear.
const outputPath: string = "/output/entry.txt";

// Make sure the output directory exists before writing. The
// recursive flag means this is a no-op when the directory is
// already there, which is the common case in the sandbox.
mkdirSync(dirname(outputPath), { recursive: true });

// Write the word exactly as chosen: UTF-8, no trailing newline,
// no surrounding spaces, nothing before or after it. Using
// writeFileSync with an explicit encoding keeps the bytes
// deterministic across runs and machines.
writeFileSync(outputPath, chosenWord, { encoding: "utf8" });
