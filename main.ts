import { writeFileSync, mkdirSync } from "node:fs";

// Tell a whole story in 32 characters: a breakup where the pettiest
// theft is the last word. The name reads like a real SSID a stranger
// would screenshot: setup, character, event, twist.
const ENTRY = "MyExTookTheDogAndTheRouter";

// Gate self-check: the sealed scorer requires UTF-8 text of 1 to 32
// characters, not only white space, on a single line. Fail loudly here
// instead of shipping an invalid entry.
const trimmed = ENTRY.trim();
if (trimmed.length < 1 || trimmed.length > 32 || /\r|\n/.test(ENTRY)) {
  throw new Error(`Entry fails the gate: ${trimmed.length} chars`);
}
if (trimmed !== ENTRY) {
  throw new Error("Entry has leading/trailing whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters: ${ENTRY}`);
