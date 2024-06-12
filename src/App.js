// src/App.js
import React, { useState } from 'react';
// import Matrix from './components/Matrix';
import Canvas from './components/Canvas';
import UserInput from './components/UserInput';

const App = () => {
  // const colors = [
  //   'bg-yellow-500',
  //   'bg-green-500',
  //   'bg-green-500',
  //   'bg-red-500',
  //   'bg-yellow-500',
  //   'bg-green-500',
  //   'bg-red-500',
  //   'bg-red-500',
  //   'bg-yellow-500',
  // ];

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleCalculate = (newPosition) => {
    setPosition(newPosition);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 dark:via-gray-800 dark:to-gray-900 text-white flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="md:w-1/2 p-4">
          <UserInput onCalculate={handleCalculate} />
        </div>
        <div
          className="relative md:w-1/2 flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: 'url(https://raw.githubusercontent.com/Henoker/GeoPolitics/master/Matrix%20BOP2.PNG)', width: 580, height: 580 }}
        >
          {/* <Matrix colors={colors} /> */}
          <Canvas width={580} height={580} position={position} />
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

