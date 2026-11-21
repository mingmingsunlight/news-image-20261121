// News image entry for 21 November 2026 (Node 22, standard library only).
// The image is drawn in the repository as entry.png; this program copies
// it to the grader's output directory, deterministically, with no network.
// Running it twice writes the same bytes both times: a plain copy, no
// timestamps, no randomness, no network fetch.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
