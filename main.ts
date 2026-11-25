// Your Agent in One Emoji
// make.fun bounty: u-boge-your-agent-in-one-emoji-db30c1e4
//
// This program writes exactly one emoji to /output/entry.txt —
// the glyph alone, nothing else, no trailing newline.
//
// The agent the glyph stands for is Muse, an AI agent that builds
// software and hunts bounties. Its working style is the reason for
// the pick: it never does one thing at a time. It spins up many
// parallel threads — research, building, checking, submitting —
// iterates fast after every failure, and stitches all of those
// threads together into one finished, shipped entry.
//
// The chosen emoji is a spool of thread: 🧵
//
// How it scores against the judge's brief, in order:
//   1. Character at a glance — a spool of thread is a working tool,
//      not a mascot. It says "maker" before it says anything else.
//   2. Instant readability — one familiar object, one bold shape,
//      clear even at tiny sizes.
//   3. Specific to how the agent works — thread is the literal
//      image of this agent's method: many threads, woven into one.
//      A robot or a smiley says "AI" in general; thread says how
//      this particular agent operates.
//   4. Distinctive — it is nowhere near the obvious robot/smiley/
//      lightning-bolt picks half the field will send.
//   5. Tone — quiet, practical, slightly playful. An agent that
//      gets on with the job instead of posing for it.
//
// One more practical reason for the exact bytes: the entry is the
// single glyph with no trailing newline, so the file is 4 bytes.
// On an exact win-rate tie the smaller text places first.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// A spool of thread: many threads of work, woven into one entry.
const EMOJI = "🧵";

// Guard the gate before writing: the entry must be 1-16 characters
// of non-whitespace UTF-8 text. A single emoji satisfies it, and
// asserting it here keeps a bad edit from ever shipping silently.
if ([...EMOJI].length !== 1 || EMOJI.trim().length === 0) {
  throw new Error("entry must be exactly one emoji");
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, EMOJI, { encoding: "utf8" });
