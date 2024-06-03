// src/App.js
import React, { useState } from 'react';
import Matrix from './components/Matrix';
import Canvas from './components/Canvas';
import UserInput from './components/UserInput';

const App = () => {
  const colors = [
    'bg-red-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-orange-500',
    'bg-teal-500',
    'bg-indigo-500',
  ];

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleCalculate = (newPosition) => {
    setPosition(newPosition);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="md:w-1/2 p-4">
          <UserInput onCalculate={handleCalculate} />
        </div>
        <div className="relative md:w-1/2 h-60 w-60">
          <Matrix colors={colors} />
          <Canvas width={220} height={220} position={position} />
        </div>
      </div>
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Other Content</h1>
        <p>This section can be used for other purposes.</p>
      </div>
    </div>
  );
};

export default App;

