import * as fs from 'node:fs';
import * as path from 'node:path';

// Winning commit message for Worst Fix Ever bounty (slug: u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
const COMMIT_MESSAGE = 'fix: shipping was too cheap so now it costs users their weight in gold';

function main() {
  // Determine output directory from environment variable or default to /output
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
  fs.mkdirSync(outputDir, { recursive: true });
  const outputPath = path.join(outputDir, 'entry.txt');
  fs.writeFileSync(outputPath, COMMIT_MESSAGE, 'utf8');
}

main();
