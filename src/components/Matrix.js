// src/components/Matrix.js
import React from 'react';

const Square = ({ color }) => {
  return (
    <div className={`w-20 h-20 ${color} border-2 border-black`}></div>
  );
};

const Matrix = ({ colors }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 w-60 h-60 absolute z-10">
      {colors.map((color, index) => (
        <Square key={index} color={color} />
      ))}
    </div>
  );
};

export default Matrix;



