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
    const sumA = categoryA.reduce((a, b) => a + b, 0)*3 / 15;
    const sumB = categoryB.reduce((a, b) => a + b, 0)*3 / 30;
    console.log(sumA, sumB);

    let x = 0;
    let y = 0;
    if (sumA <= 1 && sumB <= 1) { //low low
      x = 37;
      y = 180;
    } else if (sumA <= 1 && sumB <= 2) {//low medium
      x = 114;
      y = 195;
    } else if (sumA <= 1 && sumB > 2) {//low high
      x = 180;
      y = 193;
    } else if (sumA <= 2 && sumB <= 1) {//medium low
        x = 37;
        y = 118;
    } else if (sumA <= 2 && sumB <= 2) {//medium medium
        x = 115;
        y = 110;
    } else if (sumA <= 2 && sumB > 2) {//medium high
        x = 196;
        y = 110;
    } else if (sumA > 2 && sumB <= 1) {//high low
        x = 37;
        y = 37;
    } else if (sumA > 2 && sumB <= 2) {//high medium
        x = 195;
        y = 115;
    } else if (sumA > 2 && sumB > 2) {//high high
        x = 200;
        y = 40;
    }

    onCalculate({ x, y });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Category A</h2>
      {[...Array(3)].map((_, index) => (
        <div key={index} className="mb-2">
          <label className="mr-2">Question {index + 1}:</label>
          <select
            onChange={(e) => handleSelection('A', index, e.target.value)}
            className="border p-1"
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
      {[...Array(6)].map((_, index) => (
        <div key={index} className="mb-2">
          <label className="mr-2">Question {index + 1}:</label>
          <select
            onChange={(e) => handleSelection('B', index, e.target.value)}
            className="border p-1"
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

