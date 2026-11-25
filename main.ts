// Make the AI Judge Laugh — entry program.
// Writes one one-line joke about office life (<200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I start every email with 'per my last email' because 'did you even read it' gets flagged by HR.";

// The gate only accepts UTF-8 text of 1 to 200 characters, not only
// whitespace, so refuse to write anything that would fail it.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${JOKE.length} characters; the gate needs 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
