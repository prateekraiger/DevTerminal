export enum LineType {
  DEFAULT = 'DEFAULT',
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARN = 'WARN',
  ERROR = 'ERROR',
  HEADER = 'HEADER',
  COMMAND = 'COMMAND',
  JSON = 'JSON',
}

export interface TerminalLine {
  id: string;
  text: string;
  type: LineType;
}
