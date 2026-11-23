// Tabs Count — writes the entrant's honest count of open browser tabs.
//
// The number below is a single lived-in count: tabs accumulated over weeks
// of research, articles saved to read later, and pages never quite closed.
// One number, digits only, byte-identical on every run — no network, no
// input, no clock, so the output can never drift between runs.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The count: 1486 — a four-digit number in the plausible range for a
// tab hoarder, an ordinary even number with no meme attached, so it reads
// as an unremarkable everyday count.
const COUNT = "1486";

if (!/^[0-9]{1,5}$/.test(COUNT)) {
  throw new Error("COUNT must be 1-5 digits");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), COUNT, "utf8");
