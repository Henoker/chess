// src/components/UserInput.js
import React, { useState } from 'react';

const UserInput = ({ onCalculate }) => {
  const [categoryA, setCategoryA] = useState(Array(3).fill(0));
  const [categoryB, setCategoryB] = useState(Array(6).fill(0));

  const handleSelection = (category, index, value) => {
    const mark = parseInt(value, 10);
    if (category === 'A') {
      const newCategoryA = [...categoryA];
      newCategoryA[index] = mark;
      setCategoryA(newCategoryA);
    } else if (category === 'B') {
      const newCategoryB = [...categoryB];
      newCategoryB[index] = mark;
      setCategoryB(newCategoryB);
    }
  };

  const calculatePosition = () => {
    const sumA = categoryA.reduce((a, b) => a + b, 0) * 3 / 15;
    const sumB = categoryB.reduce((a, b) => a + b, 0) * 3 / 30;
    console.log(sumA, sumB);

    let x = 0;
    let y = 0;
    if (sumA <= 1 && sumB <= 1) { // low low
      x = 125;
      y = 344;
    } else if (sumA <= 1 && sumB <= 2) { // low medium
      x = 120;
      y = 210;
    } else if (sumA <= 1 && sumB > 2) { // low high
      x = 128;
      y = 85;
    } else if (sumA <= 2 && sumB <= 1) { // medium low
      x = 126;
      y = 210;
    } else if (sumA <= 2 && sumB <= 2) { // medium medium
      x = 221;
      y = 218;
    } else if (sumA <= 2 && sumB > 2) { // medium high
      x = 221;
      y = 95;
    } else if (sumA > 2 && sumB <= 1) { // high low
      x = 307;
      y = 341;
    } else if (sumA > 2 && sumB <= 2) { // high medium
      x = 218;
      y = 97;
    } else if (sumA > 2 && sumB > 2) { // high high
      x = 311;
      y = 98;
    }

    onCalculate({ x, y });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Category A</h2>
      {['Financial Aid to Insurgents', 'Destabilize', 'Intervene for Rebels'].map((question, index) => (
        <div key={index} className="mb-2 flex items-center">
          <label className="mr-2 w-2/3">{question}:</label>
          <select
            onChange={(e) => handleSelection('A', index, e.target.value)}
            className="border p-1 w-1/3"
          >
            <option value="0">Select</option>
            <option value="5">A</option>
            <option value="4">B</option>
            <option value="3">C</option>
            <option value="1">D</option>
            <option value="1">E</option>
          </select>
          <span className="ml-2">{categoryA[index]}</span>
        </div>
      ))}
      <h2 className="text-xl font-bold mb-2">Category B</h2>
      {['Treaty', 'Intervene for Government', 'Military Aid', 'Economic Aid', 'Trade Policy', 'Diplomatic Pressure'].map((question, index) => (
        <div key={index} className="mb-2 flex items-center">
          <label className="mr-2 w-2/3">{question}:</label>
          <select
            onChange={(e) => handleSelection('B', index, e.target.value)}
            className="border p-1 w-1/3"
          >
            <option value="0">Select</option>
            <option value="5">A</option>
            <option value="4">B</option>
            <option value="3">C</option>
            <option value="1">D</option>
            <option value="1">E</option>
          </select>
          <span className="ml-2">{categoryB[index]}</span>
        </div>
      ))}
      <button onClick={calculatePosition} className="mt-4 p-2 bg-blue-500 text-white">
        Calculate Position
      </button>
    </div>
  );
};

export default UserInput;


