import React, { useState } from 'react';
import HelpModal from './HelpModal';

const UserInput = ({ onCalculate }) => {
  const [categoryA, setCategoryA] = useState(Array(3).fill(0));
  const [categoryB, setCategoryB] = useState(Array(6).fill(0));
  const [visibleModal, setVisibleModal] = useState(null);

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

  const explanationsA = [
    'offensive strategy tactic 1 : Aid to insurrgents: There are three types of insurgents: terrorists, guerrillas, and rebels. A powerful and stable government has none of these. Terrorists are the weakest form of insurgents. If the terrorists are successful and grow in power, they become guerrillas and initiate a guerrilla war. If the guerrillas grow in power, they start a civil war Then they are called rebels. Once enemy have identified a likely candidate for subversion,they have two weapons: Aid to Insurgents and Intervene for Rebels. The amount of aid a enemy state can ship depends on the level of insurgency (terrorist level, guerrilas level and rebel level). When the level of aid is higher, the powerful the insurgents will be. This means the regime (the country to be rated) will be affected badly.',
    'Explanation for Destabilize',
    'Explanation for Intervene for Rebels'
  ];

  const explanationsB = [
    'Explanation for Treaty',
    'Explanation for Intervene for Government',
    'Explanation for Military Aid',
    'Explanation for Economic Aid',
    'Explanation for Trade Policy',
    'Explanation for Diplomatic Pressure'
  ];

  const toggleModal = (category, index) => {
    const modalId = `${category}-${index}`;
    setVisibleModal(visibleModal === modalId ? null : modalId);
  };

  const closeModal = () => {
    setVisibleModal(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center font-bold">GeoPolitics Rating Tool</h1>
      
      <h2 className="text-xl font-bold mb-2">National Security Effectiveness</h2>
      {['Financial Aid to Insurgents', 'Destabilize', 'Intervene for Rebels'].map((question, index) => (
        <div key={index} className="mb-2 flex items-center">
          <label className="mr-2 w-2/3">{question}:</label>
          <div className="relative inline-block">
            <button 
              className="text-gray-600 transition-colors duration-200 focus:outline-none dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
              onClick={() => toggleModal('A', index)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
            </button>
            <HelpModal
              isVisible={visibleModal === `A-${index}`}
              onClose={closeModal}
              content={explanationsA[index]}
            />
          </div>
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
      <h2 className="text-xl font-bold mb-2">Diplomacy Effectiveness</h2>
      {['Treaty', 'Intervene for Government', 'Military Aid', 'Economic Aid', 'Trade Policy', 'Diplomatic Pressure'].map((question, index) => (
        <div key={index} className="mb-2 flex items-center">
          <label className="mr-2 w-2/3">{question}:</label>
          <div className="relative inline-block">
            <button 
              className="text-gray-600 transition-colors duration-200 focus:outline-none dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
              onClick={() => toggleModal('B', index)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
            </button>
            <HelpModal
              isVisible={visibleModal === `B-${index}`}
              onClose={closeModal}
              content={explanationsB[index]}
            />
          </div>
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
