import React from 'react';
import { TerminalLine, LineType } from '../types';

interface TerminalLineProps {
  line: TerminalLine;
}

const getLineColor = (type: LineType): string => {
  switch (type) {
    case LineType.INFO:
      return 'text-blue';
    case LineType.SUCCESS:
      return 'text-green';
    case LineType.WARN:
      return 'text-yellow';
    case LineType.ERROR:
      return 'text-red';
    case LineType.HEADER:
      return 'text-mauve font-bold';
    case LineType.COMMAND:
      return 'text-cyan';
    case LineType.JSON:
      return 'text-teal whitespace-pre';
    default:
      return 'text-subtext0';
  }
};

const TerminalLineComponent: React.FC<TerminalLineProps> = ({ line }) => {
  const colorClass = getLineColor(line.type);
  
  if (line.type === LineType.JSON) {
      return (
          <pre className={`text-sm ${colorClass}`}>
              {line.text}
          </pre>
      );
  }

  return (
    <div className={`text-sm whitespace-pre-wrap ${colorClass}`}>
      {line.text}
    </div>
  );
};

export default TerminalLineComponent;