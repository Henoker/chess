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
    if (sumA === 0 && sumB === 0) { // low low
      x = 0;
      y = 0;
    } else if (sumA <= 1 && sumB <= 1){
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
    'defensive strategy tactic 1 : Treaties: The antidote for pressure is a treaty. If a powerful country fear that a client of its may Finlandize to another enemy state, it can bolster that client&apos;s will to resist in several ways. it can send military aid to increase its military power, or it can station troops in that country to help defend it. By increasing its defensive military strength, the powerful country can shore up the flagging confidence of the country to be rated. A treaty implies a degree of commitment by powerfull ally to the regime with which they sign. Powerful countries are, to a greater or lesser degree, guaranteeing the security of the country with which they sign the treaty and the degree of commitment is related to the type of treaty. A treaty establishing diplomatic relations between your two countries committment is very little. In contrast, a nuclear defense treaty is an absolute commitment that  a powerful ally will take all measures possible, including the initiation of a nuclear holocaust, to protect the signatory.',
    'defensive strategy tactic 2 : Intervene for government: the number of troops that can intervene is always a determinat factor in keeping in power a favored government by the allies. Here Nations are even more sensitive about allowing a foreign power to send troops onto its soil. Furthermore strong allies face limitation of resources because If they really want to send some troops to one country, they may be forced to pull some out of another.',
    'defensive strategy tactic 3 : Military Aid: This option allows a powerful country to provide weapons (but not soldiers) to a friendly government, It will boost the military power of the government, making it better able to withstand internal insurgencies and external military pressure. When the level of aid is higher the more powerful will be the government. The more powerful the government is the more difficult it will be for insurgents. Every government in the world knows that help from foreign powers always seems to come with sticky strings attached. Most governments are understandably reluctant to accept an unseemly amount of aid from foreign power.This reluctance is directly related to the degree of enmity between the two nations. Thus, some countries would not accept generous offer of military assistance they would undoubtedly suspect some fiendish infidel subterfuge. On the other hand, some countries has already cast thier lot with foreign powers and would have no reservations about accepting scads of military aid. Here military aid will alleviate the budget restriction of the receiving nation. This will help the receiving nation to divert it&apos;s budget to other economic activies so that the can alleviate political pressures.',
    'defensive strategy tactic 4 : Economic Aid: Foreign powers can protect a friendly regime from coups by assisting its economy. This is done with economic aid, a direct transfer of money from foreign powers economy to the recipient&apos;s. Foreign power GDP will be reduced with the secondary effect of reducing the amount of money available for military expenditures. The recipent&apos;s economy will be boosted; this will increase public satisfaction with the regime. Thus, economic aid reduces a country&apos;s vulnerability to coups d&apos;etat. Of course, the magnitude of the effect is dependent on the wealth of the recipient. If foreign powers dump 4 billion dollars on poverty-stricken country, that amounts have significant impact on the recipent GDP; the effect on the recipent will be electric. Basking in their immense wealth, their discontent with the government will completely vanish. However, a wealthier country is much harder to buy off. Four billion dollars is but a drop in the bucket for such a country. Thus, it is very difficult to save a wealthy nation with economic assistance.',
    'defensive strategy tactic 5 : Trade: A powerful country may adjust its trade policy toward any country. This policy will have no effect on the economy of the targeted nation. It will, however, make a diplomatic statement that will affect relations between two countries.',                                 
    'defensive strategy tactic 6 : Finlandization, a geopolitical tactic, emerged from Finland&apos;s postwar experience as an ally of Nazi Germany. Despite not being invaded by the USSR due to Soviet preoccupations, Finland faced significant diplomatic challenges as the West did not support a former Nazi ally. Finlandization occurs when a nation, feeling vulnerable and lacking external support, adjusts its stance to appease a powerful, hostile foreign power. Superpowers use Diplomatic Pressure and Treaties to influence nations. Pressure involves intimidation through actions like naval maneuvers or critical speeches, highlighting the power disparity. This can lead a nation to Finlandize, praising the superpower and increasing military spending at the expense of consumer welfare, potentially causing public unrest or a coup. Unlike continuous tactics, pressure is a one-time action lasting a year.'
    ];


    const optionsA = [
      ['More than 1 billion', 'up to 500 million', 'up to 100 million', 'Up to 20 million', 'None',    ],
      ['Provoke assasination or Coup detat', 'Incite riots', 'Fund opposition', 'Encourage Dissidents', 'None'],
      ['More than 20,000 troops', 'up to 20000 troops', 'up to 5000 troops', 'up to 1000 troops', 'None',]
      
    ];
  
    const optionsB = [
      ['None or diplomatic relations', 'trade relations', 'military base', 'conventinal weapons', 'nuclear deal'],
      ['None', 'up to 1000 troops', 'up to 5000 troops', 'up to 20000 troops', 'More than 20000 troops'],
      ['None', 'Up to 20 million', 'up to 100 million', 'Up to 500 million', 'More than 500000'],
      ['None', 'Up to 20 million', 'up to 100 million', 'Up to 500 million', 'More than 500000'],
      ['Trade or tech emabargo', 'stiff quota', 'Trade Quota', 'Normal Trade','Favorable Trade'],
      ['Offensive diplomacy', 'Intense pressure', 'Moderate Pressure', 'public posturing', 'None or quiet diplomacy']
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
          <label className="mr-2 w-2/3">{question}:
          <button 
              className="text-gray-600 transition-colors duration-200 focus:outline-none dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
              onClick={() => toggleModal('A', index)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
            </button>
          </label>
       
          <div className="relative inline-block">
            
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
            {optionsA[index].map((option, i) => (
              <option key={i} value={i + 1}>{option}</option>
            ))}
          </select>
          <span className="ml-2">{categoryA[index]}</span>
        </div>
      ))}
      <h2 className="text-xl font-bold mb-2">Diplomacy Effectiveness</h2>
      {['Treaty', 'Intervene for Government', 'Military Aid', 'Economic Aid', 'Trade Policy', 'Diplomatic Pressure'].map((question, index) => (
        <div key={index} className="mb-2 flex items-center">
          <label className="mr-2 w-2/3">{question}:
          <button 
              className="text-gray-600 transition-colors duration-200 focus:outline-none dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
              onClick={() => toggleModal('B', index)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
            </button>
          </label>
          <div className="relative inline-block">
            
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
            {optionsB[index].map((option, i) => (
              <option key={i} value={i + 1}>{option}</option>
            ))}
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
