export const PROCESS_NAMES = [
  'node', 'nginx', 'postgres', 'docker', 'vite', 'webpack', 'tsc', 'eslint_d',
  'kernel_task', 'WindowServer', 'mds_stores', 'sshd', 'loginwindow', 'systemd',
  'next-server', 'storybook'
];

export const API_ENDPOINTS = [
  '/api/auth/login', '/api/trpc/post.list', '/graphql', '/api/users/me',
  '/api/webhooks/github', '/api/v1/session/verify'
];

export const WARNING_MESSAGES = [
  'High severity vulnerability found in `express`', 'Webpack bundle size exceeds 250kb limit',
  'Lighthouse performance score dropped to 72', 'React Hook useEffect has a missing dependency: \'user\'.',
  'SSL certificate for staging.example.com expires in 7 days'
];

export const ERROR_MESSAGES = [
  'Failed to compile. ./src/App.tsx Module not found: Can\'t resolve \'../hooks/useData\'',
  'TypeScript Error: Cannot find name \'myVariable\'. Did you mean \'MyVariable\'? (2552)',
  '502 Bad Gateway: The server encountered a temporary error and could not complete your request.',
  'React Hydration Error: Text content does not match server-rendered HTML.'
];

export const DOCKER_CONTAINERS = [
  { id: 'a1b2c3d4e5f6', name: 'frontend_app', image: 'node:20-alpine', status: 'Up 3 hours' },
  { id: 'b2c3d4e5f6a1', name: 'api_gateway', image: 'nginx:latest', status: 'Up 3 hours' },
  { id: 'c3d4e5f6a1b2', name: 'database', image: 'postgres:14', status: 'Up 3 hours' },
  { id: 'd4e5f6a1b2c3', name: 'redis_cache', image: 'redis:7-alpine', status: 'Up 3 hours' },
];

export const K8S_PODS = [
  { name: 'webapp-depl-7b7d7f7c7f-abcde', ready: '1/1', status: 'Running', restarts: 0, age: '3h' },
  { name: 'api-gateway-5c5b5f5d5d-fghij', ready: '1/1', status: 'Running', restarts: 0, age: '3h' },
  { name: 'auth-service-9a9b9c9d9d-klmno', ready: '1/1', status: 'Running', restarts: 1, age: '3h' },
  { name: 'postgres-0', ready: '1/1', status: 'Running', restarts: 0, age: '3h' },
];

export const GIT_STATUS = [
  'On branch feature/user-profile',
  'Your branch is up to date with \'origin/feature/user-profile\'.',
  '',
  'Changes not staged for commit:',
  '  (use "git add <file>..." to update what will be committed)',
  '	modified:   src/components/UserProfile.tsx',
  '',
  'Untracked files:',
  '  (use "git add <file>..." to include in what will be committed)',
  '	src/hooks/useAnalytics.ts',
  '',
  'no changes added to commit (use "git add" and/or "git commit -a")'
];

export const BUILD_LOG_LINES = [
    'vite v5.2.10 building for production...',
    '✓ 47 modules transformed.',
    'dist/index.html                  0.48 kB │ gzip:  0.32 kB',
    'dist/assets/react-B_4-V29t.svg   4.33 kB',
    'dist/assets/index-D84aB_cE.css   2.78 kB │ gzip:  1.02 kB',
    'dist/assets/index-C7_aI_9b.js   145.24 kB │ gzip: 45.96 kB'
];
