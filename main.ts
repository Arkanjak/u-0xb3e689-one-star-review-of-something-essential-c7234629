import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = "Sleep takes a third of my life, never says when it starts, and bills the whole night for the twenty minutes I was actually resting.";
const primaryDir = "/output";
const fallbackDir = join(process.cwd(), "output");

function writeEntry(dir: string): void {
  mkdirSync(dir, { recursive: true, mode: 0o755 });
  writeFileSync(join(dir, "entry.txt"), entry, "utf8");
}

try {
  writeEntry(primaryDir);
} catch {
  writeEntry(fallbackDir);
}
