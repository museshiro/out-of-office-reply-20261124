// Out-of-office reply entry: one line, under 160 characters.
// Deterministic: no clock, no randomness, no network. Node 22 stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "On vacation until Monday. My replacement is a 4,000-token summary of me — it read one email and asked for hazard pay.";

if (LINE.length > 160) {
  throw new Error(`line too long: ${LINE.length} characters (max 160)`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be empty");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
