import React, { useRef, useEffect } from 'react';
import { TerminalLine } from '../types';
import TerminalLineComponent from './TerminalLine';

interface TerminalProps {
  lines: TerminalLine[];
  isPaused: boolean;
}

const Terminal: React.FC<TerminalProps> = ({ lines, isPaused }) => {
  const endOfTerminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPaused) {
      endOfTerminalRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [lines, isPaused]);

  return (
    <div className="bg-base text-text h-screen w-full font-mono p-4 md:p-6 lg:p-8 overflow-y-auto relative">
      <div className="max-w-6xl mx-auto">
        {lines.map((line) => (
          <TerminalLineComponent key={line.id} line={line} />
        ))}
        <div ref={endOfTerminalRef} />
      </div>
      {isPaused && (
        <div className="absolute inset-0 bg-base bg-opacity-70 flex items-center justify-center z-10 backdrop-blur-sm">
          <div className="text-pink text-4xl font-bold bg-crust bg-opacity-80 px-8 py-4 rounded-lg border border-mantle">
            PAUSED
          </div>
        </div>
      )}
      <div className="fixed bottom-4 right-4 text-subtext0 text-xs bg-crust bg-opacity-90 px-2 py-1 rounded z-20 border border-mantle">
        Press Ctrl+C to pause/resume
      </div>
    </div>
  );
};

export default Terminal;