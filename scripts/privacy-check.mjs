import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const outputDirectory = join(process.cwd(), 'dist');
const configuredTerms = (process.env.PRIVACY_AUDIT_TERMS ?? 'contact@example.com')
  .split(',')
  .map((term) => term.trim())
  .filter(Boolean);

if (!existsSync(outputDirectory)) {
  console.error('Privacy check requires a production build. Run npm run build first.');
  process.exit(1);
}

const files = [];
function walk(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) walk(path);
    else files.push(path);
  }
}
walk(outputDirectory);

const findings = [];
for (const file of files) {
  if (file.endsWith('.map')) findings.push(`${relative(outputDirectory, file)}: source map found`);
  if (!/\.(html|js|json|xml|txt|css)$/i.test(file)) continue;
  const body = readFileSync(file, 'utf8').toLowerCase();
  for (const term of configuredTerms) {
    if (body.includes(term.toLowerCase())) findings.push(`${relative(outputDirectory, file)}: found "${term}"`);
  }
}

if (findings.length) {
  console.error('Privacy review requires attention:\n' + findings.join('\n'));
  process.exit(1);
}

console.log(`Privacy check passed (${files.length} output files inspected).`);
