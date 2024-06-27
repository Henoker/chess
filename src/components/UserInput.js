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
    'offensive strategy tactic 2 : Intervene for insurrgents: A superpower can only ship weapons to a country through contiguous allies in which it has stationed troops. For example, it must have troops in Honduras, El Salvador, or Costa Rica to ship weapons to the contras in Nicaragua. The amount of weapons that can be shipped is dependent on the number of troops so stationed. However, a superpower can always leak a small amount of weaponry into any country since in world borders are not airtight. The most sincere form of assistance is direct intervention. This means that enemy state is sending part of its own army into that country to help the rebels overthrow the government. Enemy state are limited in much the same way as with military aid to insurgencies. An enemy state must have troops in a contiguous country before it can send troops to intervene for the rebels in a civil war; the number of troops that can intervene is always a determinant factor in affecting the government to be toppled. The higher the troops, the higher will be the risk.',
    'offensive strategy tactic 3 : Destablization: An alternative channel of geopolitical interaction is the subversion and destabilization of foreign governments. Here enemy state tries to replace the unwanted government with a more friendly one through the less violent avenue of the coup detat. This is a more subtle, less direct approach requiring a greater degree of finesse. The central concept is the coup detat. This is a change of government initiated by political factors rather than military ones. Rebels must use military power to win a revolution, but a coup can overthrow a government only if the political climate is ripe for it- The most important element of the political climate is the performance of the economy. If the economy performs well, the political climate is favorable for the existing government. But if the economy performs poorly, discontent rises and the government is vulnerable to a coup. Modifying this is the political control exerted by the government. Some states, such as the Russia and cuba, exercise such thorough control over their citizens that there is little or no chance of a true coup detat. A changing of the guard, perhaps, but not a policy-changing coup. Totalitarian governments with sufficiently strong political control can survive with economic performance that would topple other governments. If a government is shaky, it can be toppled (hence bringing about a coup detat) with the judicious use of Destabilization. You destabilize a government by sending in the spies to encourage dissidents, fund the opposition, incite riots, and create other domestic political mayhem. If the government is already weak, this might be enough to push it over the edge. If the government is strong, the efforts of foreign powers will accomplish nothing.'
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
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="1">2</option>
            <option value="1">1</option>
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
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="1">2</option>
            <option value="1">1</option>
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
