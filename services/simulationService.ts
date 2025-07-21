import { TerminalLine, LineType } from '../types';
import {
  PROCESS_NAMES,
  API_ENDPOINTS,
  WARNING_MESSAGES,
  ERROR_MESSAGES,
  DOCKER_CONTAINERS,
  K8S_PODS,
  GIT_STATUS,
  BUILD_LOG_LINES
} from '../constants';

const createLine = (text: string, type: LineType = LineType.DEFAULT): TerminalLine => ({
  id: `${Date.now()}-${Math.random()}`,
  text,
  type,
});

const getRandom = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const randomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
const pad = (str: string | number, len: number): string => String(str).padEnd(len, ' ');

const generateTimestampLine = (): TerminalLine => {
  const time = new Date().toLocaleTimeString('en-US', { hour12: false });
  return createLine(`>>> Running analysis at ${time}`, LineType.HEADER);
};

const generateProcessList = (): TerminalLine[] => {
  const lines: TerminalLine[] = [
    createLine(`${pad('PID', 8)}${pad('CPU%', 8)}${pad('MEM%', 8)}${pad('COMMAND', 20)}`, LineType.DEFAULT)
  ];
  const processes = [...PROCESS_NAMES].sort(() => 0.5 - Math.random()).slice(0, 10);
  processes.forEach(name => {
    const pid = randomInt(1000, 99999);
    const cpu = (Math.random() * 15).toFixed(2);
    const mem = (Math.random() * 5).toFixed(2);
    lines.push(createLine(`${pad(pid, 8)}${pad(cpu, 8)}${pad(mem, 8)}${pad(name.slice(0, 30), 20)}`, LineType.DEFAULT));
  });
  return lines;
};

const generateApiQuery = (): TerminalLine[] => {
  const endpoint = getRandom(API_ENDPOINTS);
  const status = Math.random() < 0.9 ? 'active' : 'degraded';
  const response = {
    status,
    connections: randomInt(50, 500),
    latency: `${randomInt(5, 150)}ms`,
    region: getRandom(['us-east-1', 'us-west-2', 'eu-central-1']),
  };
  return [
    createLine(`[INFO] Querying backend API endpoint: ${endpoint}...`, LineType.INFO),
    createLine(JSON.stringify(response, null, 2), LineType.JSON),
  ];
};

const generateResourceSummary = (): TerminalLine[] => {
  const load = `${(Math.random() * 3).toFixed(2)}, ${(Math.random() * 2).toFixed(2)}, ${(Math.random() * 1.5).toFixed(2)}`;
  const tasks = randomInt(200, 500);
  const users = randomInt(1, 5);
  return [
    createLine(`top - ${new Date().toLocaleTimeString()} up ${randomInt(1, 30)} days, ${randomInt(1,23)}:${randomInt(10,59)}, ${users} users, load average: ${load}`, LineType.DEFAULT),
    createLine(`Tasks: ${tasks} total, ${randomInt(1,3)} running, ${tasks-3} sleeping, 0 stopped, 0 zombie`, LineType.DEFAULT),
    createLine(`%Cpu(s): ${(Math.random() * 20).toFixed(1)} us, ${(Math.random() * 5).toFixed(1)} sy, 0.0 ni, ${(80 - Math.random() * 10).toFixed(1)} id, 0.0 wa, 0.0 hi, 0.0 si, 0.0 st`, LineType.DEFAULT),
    createLine(`MiB Mem :  ${(65536.0).toFixed(1)} total, ${(Math.random() * 20000).toFixed(1)} free, ${(Math.random() * 40000).toFixed(1)} used, ${(Math.random() * 5000).toFixed(1)} buff/cache`, LineType.DEFAULT),
  ];
};

const generateLogSavingLine = (): TerminalLine => {
  return createLine('[SUCCESS] Saving operational logs to /var/log/system_ops.log...', LineType.SUCCESS);
};

const generateRandomAlert = (): TerminalLine | null => {
  const chance = Math.random();
  if (chance < 0.10) { // 10% chance of ERROR
    return createLine(`[ERROR] ${getRandom(ERROR_MESSAGES)}`, LineType.ERROR);
  }
  if (chance < 0.25) { // 15% chance of WARNING (total 25%)
    return createLine(`[WARN] ${getRandom(WARNING_MESSAGES)}`, LineType.WARN);
  }
  return null;
};

const generateBuildProcess = (): TerminalLine[] => {
    const buildCommand = Math.random() < 0.5 ? 'npm run build' : 'pnpm build';
    const lines: TerminalLine[] = [
        createLine(`$ ${buildCommand}`, LineType.COMMAND),
        createLine(`> my-webapp@0.1.0 build`, LineType.DEFAULT),
        createLine(`> tsc && vite build`, LineType.DEFAULT),
        createLine(' ', LineType.DEFAULT),
    ];
    BUILD_LOG_LINES.forEach(line => lines.push(createLine(line, LineType.DEFAULT)));
    lines.push(createLine(' ', LineType.DEFAULT));
    lines.push(createLine(`✨ Build complete in ${(Math.random() * 4 + 2).toFixed(2)}s.`, LineType.SUCCESS));
    return lines;
}

const generateBonusBlock = (): TerminalLine[] => {
    const chance = Math.random();
    if (chance < 0.35) {
        return generateBuildProcess();
    }
    if (chance < 0.70) {
        const lines: TerminalLine[] = [createLine('$ git status', LineType.COMMAND)];
        GIT_STATUS.forEach(line => lines.push(createLine(line, LineType.DEFAULT)));
        return lines;
    }
    if (chance < 0.85) { // docker ps
        const lines: TerminalLine[] = [createLine('$ docker ps', LineType.COMMAND)];
        lines.push(createLine(`${pad('CONTAINER ID', 16)}${pad('IMAGE', 20)}${pad('COMMAND', 15)}${pad('STATUS', 15)}NAME`, LineType.DEFAULT));
        DOCKER_CONTAINERS.forEach(c => {
            lines.push(createLine(`${pad(c.id, 16)}${pad(c.image, 20)}${pad('"..."', 15)}${pad(c.status, 15)}${c.name}`, LineType.DEFAULT));
        });
        return lines;
    }
    if (chance < 0.95) { // kubectl get pods
        const lines: TerminalLine[] = [createLine('$ kubectl get pods -n prod', LineType.COMMAND)];
        lines.push(createLine(`${pad('NAME', 35)}${pad('READY', 8)}${pad('STATUS', 12)}${pad('RESTARTS', 10)}AGE`, LineType.DEFAULT));
        K8S_PODS.forEach(p => {
            lines.push(createLine(`${pad(p.name, 35)}${pad(p.ready, 8)}${pad(p.status, 12)}${pad(String(p.restarts), 10)}${p.age}`, LineType.DEFAULT));
        });
        return lines;
    }
    return [];
};


export const generateCycleOutput = (): TerminalLine[] => {
  const output: TerminalLine[] = [generateTimestampLine()];

  output.push(createLine(' '));
  output.push(...generateResourceSummary());
  output.push(createLine(' '));
  output.push(...generateProcessList());
  output.push(createLine(' '));
  output.push(...generateApiQuery());
  output.push(createLine(' '));

  const bonusBlock = generateBonusBlock();
  if (bonusBlock.length > 0) {
      output.push(...bonusBlock);
      output.push(createLine(' '));
  }

  output.push(generateLogSavingLine());

  const alert = generateRandomAlert();
  if (alert) {
    output.push(alert);
  }
  
  return output;
};