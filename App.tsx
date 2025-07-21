import React, { useState, useEffect, useCallback } from 'react';
import Terminal from './components/Terminal';
import { TerminalLine } from './types';
import { generateCycleOutput } from './services/simulationService';

const MAX_LINES = 500; // Keep the last 500 lines to prevent performance issues

const App: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  const runSimulationCycle = useCallback(() => {
    if (isPaused) {
      return;
    }
    const newLines = generateCycleOutput();
    // Append new lines and cap the total number of lines to maintain performance
    setLines(prevLines => [...prevLines, ...newLines].slice(-MAX_LINES));
  }, [isPaused]);

  useEffect(() => {
    // Run the first cycle immediately on load to populate the terminal
    runSimulationCycle();

    const intervalId = setInterval(runSimulationCycle, 2500); // Add a new block every 2.5 seconds

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [runSimulationCycle]);
  
  // Effect for handling keyboard controls
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && (event.key === 'c' || event.key === 'C')) {
        event.preventDefault(); // Prevent default copy behavior
        setIsPaused(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Empty dependency array to run only once

  return (
    <div className="relative w-full h-screen">
      <Terminal lines={lines} isPaused={isPaused} />
    </div>
  );
};

export default App;