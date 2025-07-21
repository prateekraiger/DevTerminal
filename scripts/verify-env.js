// scripts/verify-env.js
console.log('Verifying environment configuration...');

const requiredVars = ['NODE_ENV', 'API_KEY_PLACEHOLDER', 'SESSION_SECRET_PLACEHOLDER'];
let missingVar = false;

requiredVars.forEach(v => {
  if (!process.env[v]) {
    console.log(`\x1b[33m[WARN]\x1b[0m Optional environment variable ${v} is not set.`);
  }
});

if (missingVar) {
  console.error('\x1b[31m[ERROR]\x1b[0m Critical environment variables missing. Exiting.');
  process.exit(1);
}

console.log('\x1b[32m[SUCCESS]\x1b[0m Environment check passed.');
