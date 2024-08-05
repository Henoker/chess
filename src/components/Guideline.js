import React from 'react';

const Guideline = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            Rating Guideline
          </h1>
          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Rating is composed of 2 dimensions: National security and diplomacy effectiveness.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          <div>
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src="https://images.unsplash.com/photo-1552739883-6578dc150ac6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG5hdGlvbmFsJTIwc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <details>
                <summary className="font-semibold text-gray-800 dark:text-white md:text-xl cursor-pointer">
                  National Security Effectiveness
                </summary>
                <div className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  <p>
                    The goal in National security effectiveness is to defend offense strategy of an enemy state.
                    A powerful country will try to topple the country to be rated through various offensive strategy.
                  </p>
                  <details>
                    <summary className="mt-3 text-sm text-blue-500 cursor-pointer">
                      Offensive strategy tactic 1: Aid to insurgents
                    </summary>
                    <p>
                      There are three types of insurgents: terrorists, guerrillas, and rebels. A powerful and stable government
                      has none of these. Terrorists are the weakest form of insurgents. If the terrorists are successful and
                      grow in power, they become guerrillas and initiate a guerrilla war. If the guerrillas grow in power,
                      they start a civil war. Then they are called rebels. Once the enemy has identified a likely candidate for
                      subversion, they have two weapons: Aid to Insurgents and Intervene for Rebels. The amount of aid an
                      enemy state can ship depends on the level of insurgency (terrorist level, guerrilla level, and rebel level).
                      When the level of aid is higher, the more powerful the insurgents will be. This means the regime (the country to
                      be rated) will be affected badly.
                    </p>
                  </details>
                  <details>
                    <summary className="mt-3 text-sm text-blue-500 cursor-pointer">
                      Offensive strategy tactic 2: Intervene for insurgents
                    </summary>
                    <p>
                      A superpower can only ship weapons to a country through contiguous allies in which it has stationed 
                      troops. For example, it must have troops in Honduras, El Salvador, or Costa Rica to ship weapons to the
                      contras in Nicaragua. The amount of weapons that can be shipped is dependent on the number of troops so
                      stationed. However, a superpower can always leak a small amount of weaponry into any country since world
                      borders aren't airtight. The most sincere form of assistance is direct intervention. This means that the 
                      enemy state is sending part of its own army into that country to help the rebels overthrow the government.
                      Enemy states are limited in much the same way as with military aid to insurgencies. An enemy state must have
                      troops in a contiguous country before it can send troops to intervene for the rebels in a civil war; the number
                      of troops that can intervene is always a determinant factor in affecting the government to be toppled. The
                      higher the troops, the higher the risk.
                    </p>
                  </details>
                  <details>
                    <summary className="mt-3 text-sm text-blue-500 cursor-pointer">
                      Offensive strategy tactic 3: Destabilization
                    </summary>
                    <p>
                      An alternative channel of geopolitical interaction is the subversion and destabilization of foreign
                      governments. Here the enemy state tries to replace the unwanted government with a more friendly one
                      through the less violent avenue of the coup d'etat. This is a more subtle, less direct approach 
                      requiring a greater degree of finesse. The central concept is the coup d'etat. This is a change of 
                      government initiated by political factors rather than military ones. Rebels must use military power
                      to win a revolution, but a coup can overthrow a government only if the political climate is ripe for
                      it. The most important element of the political climate is the performance of the economy. If the 
                      economy performs well, the political climate is favorable for the existing government. But if the 
                      economy performs poorly, discontent rises and the government is vulnerable to a coup. Modifying this 
                      is the political control exerted by the government. Some states, such as Russia and Cuba, exercise
                      such thorough control over their citizens that there is little or no chance of a true coup d'etat. 
                      A changing of the guard, perhaps, but not a policy-changing coup. Totalitarian governments with 
                      sufficiently strong political control can survive with economic performance that would topple other
                      governments. If a government is shaky, it can be toppled (hence bringing about a coup d'etat) 
                      with the judicious use of destabilization. You destabilize a government by sending in the spies to 
                      encourage dissidents, fund the opposition, incite riots, and create other domestic political mayhem. 
                      If the government is strong, the efforts of foreign powers will accomplish nothing.
                    </p>
                  </details>
                </div>
              </details>
            </div>
          </div>
          <div>
            <img
              className="relative z-10 object-cover w-full rounded-md h-96"
              src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
              <details>
                <summary className="font-semibold text-gray-800 dark:text-white md:text-xl cursor-pointer">
                  Diplomacy Effectiveness Rating Guideline
                </summary>
                <div className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                  <p>
                    The goal in Diplomacy effectiveness is to attract strong allies from tier 1 and tier 2 countries.
                    If the country to be rated is successful in this endeavor, then it will be able to shield itself 
                    using the defensive strategy of its allied states. Here the allies protect the rated country from 
                    insurgents using various defensive strategies.
                  </p>
                  <details>
                    <summary className="mt-3 text-sm text-blue-500 cursor-pointer">
                      Defensive strategy tactic 1: Intervene for government
                    </summary>
                    <p>
                      The number of troops that can intervene is always a determinant factor in keeping in power a favored 
                      government by the allies. Here nations are even more sensitive about allowing a foreign power to send 
                      troops onto its soil. Furthermore, strong allies face limitations of resources because if they really want
                      to send some troops to one country, they may be forced to pull some out of another.
                    </p>
                  </details>
                  <details>
                    <summary className="mt-3 text-sm text-blue-500 cursor-pointer">
                      Defensive strategy tactic 2: Military Aid
                    </summary>
                    <p>
                      This option allows a powerful country to provide weapons (but not soldiers) to a friendly government. 
                      It will boost the military power of the government, making it better able to withstand internal 
                      insurgencies and external military pressure. When the level of aid is higher, the more powerful will be
                      the government. The more powerful the government is, the more difficult it will be for insurgents. 
                      Every government in the world knows that help from foreign powers always seems to come with sticky 
                      strings attached. Most governments are understandably reluctant to accept an unseemly amount of aid from
                      a foreign power. This reluctance is directly related to the degree of enmity between the two nations.
                      Thus, some countries would not accept a generous offer of military assistance they would undoubtedly 
                      suspect some fiendish infidel subterfuge. On the other hand, some countries have already cast their lot
                      with foreign powers and would have no reservations about accepting scads of military aid. Here military
                      aid will alleviate the budget restrictions of the receiving nation. This will help the receiving nation
                      to divert its budget to other economic activities so that they can alleviate political pressures.
                    </p>
                  </details>
                  <details>
                    <summary className="mt-3 text-sm text-blue-500 cursor-pointer">
                      Defensive strategy tactic 3: Economic Aid
                    </summary>
                    <p>
                      Foreign powers can protect a friendly regime from coups by assisting its economy. This is done with 
                      economic aid, a direct transfer of money from foreign powers' economy to the recipient's. Foreign power's
                      GDP will be reduced with the secondary effect of reducing the amount of money available for military 
                      expenditures. The recipient's economy will be boosted; this will increase public satisfaction with the 
                      regime. Thus, economic aid reduces a country's vulnerability to coups d'etat. Of course, the magnitude 
                      of the effect is dependent on the wealth of the recipient. If foreign powers dump 4 billion dollars on a 
                      poverty-stricken country, that amount will have a significant impact on the recipient's GDP; 
                      the effect on the recipient will be electric. Basking in their immense wealth, their discontent with the
                      government will completely vanish. However, a wealthier country is much harder to buy off. 
                      Four billion dollars is but a drop in the bucket for such a country. Thus, it is very difficult to save 
                      a wealthy nation with economic assistance.
                    </p>
                  </details>
                  <details>
                    <summary className="mt-3 text-sm text-blue-500 cursor-pointer">
                      Defensive strategy tactic 4: Diplomatic Pressure
                    </summary>
                    <p>
                      This tactic introduces a geopolitical weapon named finlandization. The term comes from the postwar 
                      experience of Finland. Finland had been an ally of Nazi Germany against the USSR; when the war ended, 
                      Finland was not invaded by the Soviets only because they were too busy with bigger fish. Yet, Finland 
                      did not get off scot-free. None of the Western powers were willing to stand up for a Nazi ally. 
                      Finlandization can occur to any nation that perceives itself to be in a hopeless diplomatic and military
                      position. If a foreign power is hostile and possesses the power to crush the victim, and external support
                      is inadequate to protect the victim, then the victim Finlandizes; it adjusts its diplomatic position to 
                      make itself less hostile and more friendly to the dangerous foreign power. To encourage or discourage 
                      Finlandization among the nations of the world, superpowers have two weapons to help them: Diplomatic 
                      Pressure and Treaties. Pressure is an attempt to intimidate a country with words and provocative actions.
                      A simple diplomatic note expressing grave concern can be interpreted as a very weak form of pressure. 
                      At the opposite extreme, we have the full-scale diplomatic offensive, including an array of actions such as
                      holding naval maneuvers off the coast of the victim, making speeches about the evil ways of the victim, or
                      ostentatiously consulting with declared enemies of the victim. All of these actions serve to make a victim 
                      acutely aware of the disparity in strength between the two nations. If the victim feels sufficiently 
                      insecure, it will Finlandize to the superpower applying diplomatic pressure. Obviously, the more pressure 
                      is applied, the greater the likelihood that the victim will indeed Finlandize. When a country Finlandizes 
                      to a superpower, a news message will be created describing how the leader of the Finlandizing country 
                      praises the Superpower that is the object of the policy. Although the word Finlandize does not appear, 
                      you should have no trouble interpreting the headline. Moreover, pressure can induce the victim to increase 
                      its military spending as a form of self-defense. This in turn forces the government to cut into consumer 
                      spending, an act that will increase public dissatisfaction with the regime and could lead to a coup d'etat
                      or change of government. Thus, pressure can sometimes cause a coup d'etat. Unlike most other options, 
                      pressure is not an ongoing process, it is a one-time action that automatically terminates after one year.
                    </p>
                  </details>
                  <details>
                    <summary className="mt-3 text-sm text-blue-500 cursor-pointer">
                      Defensive strategy tactic 5: Treaties
                    </summary>
                    <p>
                      The antidote for pressure is a treaty. If a powerful country fears that a client of its may Finlandize to 
                      another enemy state, it can bolster that client’s will to resist in several ways. It can send military
                      aid to increase its military power, or it can station troops in that country to help defend it. By 
                      increasing its defensive military strength, the powerful country can shore up the flagging confidence of the
                      country to be rated. A treaty implies a degree of commitment by a powerful ally to the regime with which they
                      sign. Powerful countries are, to a greater or lesser degree, guaranteeing the security of the country with 
                      which they sign the treaty and the degree of commitment is related to the type of treaty. A treaty 
                      establishing diplomatic relations between your two countries commits very little. In contrast, a 
                      nuclear defense treaty is an absolute commitment that a powerful ally will take all measures possible, 
                      including the initiation of a nuclear holocaust, to protect the signatory.
                    </p>
                  </details>
                  <details>
                    <summary className="mt-3 text-sm text-blue-500 cursor-pointer">
                      Defensive strategy tactic 6: Trade
                    </summary>
                    <p>
                      The last geopolitical policy option is trade policy. A powerful country may adjust its trade policy toward
                      any country. This policy will have no effect on the economy of the targeted nation. It will, however, make a
                      diplomatic statement that will affect relations between the two countries.
                    </p>
                  </details>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guideline;



// import React from 'react'

// const Guideline = () => {
//   return (
//     <section className="bg-white dark:bg-gray-900">
//     <div className="container px-6 py-10 mx-auto">
//       <div className="text-center">
//         <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
//           Rating Guideline
//         </h1>
//         <p className="max-w-lg mx-auto mt-4 text-gray-500">
//           Rating is composed of 2 dimensions: National security and diplomacy effectiveness.
//         </p>
//       </div>
//       <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
//         <div>
//           <img
//             className="relative z-10 object-cover w-full rounded-md h-96"
//             src="https://images.unsplash.com/photo-1552739883-6578dc150ac6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG5hdGlvbmFsJTIwc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D"
//             alt=""
//           />
//           <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
//             <a
//               href="#!"
//               className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
//             >
//               National Security Effectiveness
//             </a>
//             <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
//             The goal in National security effectiveness is to defend offense strategy of an  enemy state. 
//             A powerful country will try to topple the country to be rated through various offensive strategy.
//             <p className="mt-3 text-sm text-blue-500">offensive strategy tactic 1 : Aid to insurrgents:</p>
//             There are three types of insurgents: terrorists,guerrillas, and rebels. A powerful and stable government
//             has none of these. Terrorists are the weakest form of insurgents. If the terrorists are successful and
//             grow in power, they become guerrillas and initiate a guerrilla war. If the guerrillas grow in power, 
//             they start a civil war Then they are called rebels. Once enemy have identified a likely candidate for 
//             subversion, they have two weapons: Aid to Insurgents and Intervene for Rebels. The amount of aid an 
//             enemy state can ship depends on the level of insurgency (terrorist level, guerrilas level and rebel level).
//             When the level of aid is higher, the powerful the insurgents will be. This means the regime (the country to
//             be rated) will be affected badly.
//             <p className="mt-3 text-sm text-blue-500">offensive strategy tactic 2 : Intervene for insurrgents:</p>
//             A superpower can only ship weapons to a country through contiguous allies in which it has stationed 
//             troops. For example, it must have troops in Honduras, El Salvador, or Costa Rica to ship weapons to the
//             contras in Nicaragua. The amount of weapons that can be shipped is dependent on the number of troops so
//             stationed. However, a superpower can always leak a small amount of weaponry into any country since in 
//             world borders aren't airtight. The most sincere form of assistance is direct intervention. This means
//             that enemy state is sending part of its own army into that country to help the rebels overthrow the 
//             government. Enemy state are limited in much the same way as with military aid to insurgencies. An 
//             enemy state must have troops in a contiguous country before it can send troops to intervene for the 
//             rebels in a civil war; the number of troops that can intervene is always a determinant factor in 
//             affecting the government to be toppled. The higher the troops, the higher will be the risk. 
//             <p className="mt-3 text-sm text-blue-500">offensive strategy tactic 3 : Destablization:</p>
//             An alternative channel of geopolitical interaction is the subversion and destabilization of foreign
//             governments.  Here enemy state tries to replace the unwanted government with a more friendly one 
//             through the less violent avenue of the coup d'etat. This is a more subtle, less direct approach 
//             requiring a greater degree of finesse. The central concept is the coup d'etat. This is a change of 
//             government initiated by political factors rather than military ones. Rebels must use military power
//             to win a revolution, but a coup can overthrow a government only if the political climate is ripe for
//             it- The most important element of the political climate is the performance of the economy. If the 
//             economy performs well, the political climate is favorable for the existing government. But if the 
//             economy performs poorly, discontent rises and the government is vulnerable to a coup. Modifying this 
//             is the political control exerted by the government. Some states, such as the Russia and cuba, exercise
//             such thorough control over their citizens that there is little or no chance of a true coup d'etat. 
//             A changing of the guard, perhaps, but not a policy-changing coup. Totalitarian governments with 
//             sufficiently strong political control can survive with economic performance that would topple other
//             governments. If a government is shaky, it can be toppled (hence bringing about a coup d'etat) 
//             with the judicious use of Destabilization. You destabilize a government by sending in the spies to 
//             encourage dissidents, fund the opposition, incite riots, and create other domestic political mayhem. 
//             is strong, the efforts of foreign powers will accomplish nothing."
//             </p>
//           </div>
//         </div>
//         <div>
//           <img
//             className="relative z-10 object-cover w-full rounded-md h-96"
//             src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
//             alt=""
//           />
//           <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
//             <a
//               href="#!"
//               className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
//             >
//               Diplomacy Effectiveness Rating Guideline
//             </a>
//             <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
//             The goal in Diplomacy effectiveness is to attaract strong allies from tier 1 and tier 2 countries. 
//             If the country to be rated is successful in this endeavour, then it will be able to shield itself 
//             using defensive strategy of its allied states. Here the allies protect the rated country from 
//             insurgents using various defensive strategies.
//             <p className="mt-3 text-sm text-blue-500">Defensive strategy tactic 1 : Intervene for government:</p>
//             The number of troops that can intervene is always a determinat factor in keeping in power a favored 
//             government by the allies. Here Nations are even more sensitive about allowing a foreign power to send 
//             troops onto its soil. Furthermore strong allies face limitation of resources because If they really want
//             to send some troops to one country, they may be forced to pull some out of another. 
//             <p className="mt-3 text-sm text-blue-500"> defensive strategy tactic 2 : Military Aid:</p>
//             This option allows a powerful country to provide weapons (but not soldiers) to a friendly government, 
//             It will boost the military power of the government, making it better able to withstand internal 
//             insurgencies and external military pressure. When the level of aid is higher the more powerful will be
//             the government. The more powerful the government is the more difficult it will be for insurgents. 
//             Every government in the world knows that help from foreign powers always seems to come with sticky 
//             strings attached. Most governments are understandably reluctant to accept an unseemly amount of aid from
//             foreign power. This reluctance is directly related to the degree of enmity between the two nations.
//             Thus, some countries would not accept generous offer of military assistance they would undoubtedly 
//             suspect some fiendish infidel subterfuge. On the other hand, some countries has already cast thier lot
//             with foreign powers and would have no reservations about accepting scads of military aid. Here military
//             aid will alleviate the budget restriction of the receiving nation. This will help the receiving nation
//             to divert it's budget to other economic activies so that the can alleviate political pressures.
//             <p className="mt-3 text-sm text-blue-500">defensive strategy tactic 3 : Economic Aid:</p>
//             Foreign powers can protect a friendly regime from coups by assisting its economy. This is done with 
//             economic aid, a direct transfer of money from foreign powers economy to the recipient's. Foreign power
//             GDP will be reduced with the secondary effect of reducing the amount of money available for military 
//             expenditures. The recipent's economy will be boosted; this will increase public satisfaction with the 
//             regime. Thus, economic aid reduces a country's vulnerability to coups d&apos;etat. Of course, the 
//             magnitude of the effect is dependent on the wealth of the recipient. If foreign powers dump 4 billion 
//             dollars on poverty-stricken country, that amounts have significant impact on the recipent GDP; 
//             the effect on the recipent will be electric. Basking in their immense wealth, their discontent with the
//             government will completely vanish. However, a wealthier country is much harder to buy off. 
//             Four billion dollars is but a drop in the bucket for such a country. Thus, it is very difficult to save 
//             a wealthy nation with economic assistance.
//             <p className="mt-3 text-sm text-blue-500">defensive strategy tactic 4 : Diplomatic Pressure:</p>
//             These  tactic introduces a geopolitical weapon named finlandization. The term comes from the postwar 
//             experience of Finland. Finland had been an ally of Nazi Germany against the USSR; when the war ended, 
//             Finland was not invaded by the Soviets only because they were too busy with bigger fish. Yet, Finland 
//             did not get off scot-free, None of the Western powers were willing to stand up for a Nazi ally. 
//             Finlandization can occur to any nation that perceives itself to be in a hopeless diplomatic and military
//             position- If a foreign power is hostile and possesses the power to crush the victim, and external support
//             is inadequate to protect the victim, then the victim Finlandizes; it adjusts its diplomatic position to 
//             make itself less hostile and more friendly to the dangerous foreign power. To encourage or discourage 
//             Finlandization among the nations of the world. superpoweres have two weapons to help them: Diplomatic 
//             Pressure and Treaties. Pressure is an attempt to intimidate a country with words and provocative actions.
//             A simple diplomatic note expressing grave concern can be interpreted as a very weak form of pressure. 
//             At the opposite extreme we have the full-scale diplomatic offensive, including an array of actions such as
//             holding naval maneuvers off the coast of the victim, making speeches about the evil ways of the victim, or
//             ostentatiously consulting with declared enemies of the victim. All of these actions serve to make a victim 
//             acutely aware of the disparity in strength between the two nations. If the victim feels sufficiently 
//             insecure, it will Finlandize to the superpower applying diplomatic pressure. Obviously, the more pressure 
//             is applied, the greater the likelihood that the victim will indeed Finlandize. When a country Finlandizes 
//             to a superpower, a news message will be created describing how the leader of the Finlandizing country 
//             praises the Superpower that is the object of the policy. Although the word Finlandize does not appear, 
//             you should have no trouble interpreting the headline. Moreover, pressure can induce the victim to increase 
//             its military spending as a form of self-defense. This in turn forces the government to cut into consumer 
//             spending, an act that will increase public dissatisfaction with the regime and could lead to a coup d'etat
//             or change of government. Thus, pressure can sometimes cause a coup d'etat. Unlike most other options, 
//             pressure is not an ongoing process, it is a one-time action that automatically terminates after one year.
//             <p className="mt-3 text-sm text-blue-500">Defensive strategy tactic 5 : Treaties:</p>
//             The antidote for pressure is a treaty. If a powerful country fear that a client of its may Finlandize to 
//             another enemy state, it can bolster that client&apos;s will to resist in several ways. it can send military
//             aid to increase its military power, or it can station troops in that country to help defend it. By 
//             increasing its defensive military strength, the powerful country can shore up the flagging confidence of the
//             country to be rated. A treaty implies a degree of commitment by powerfull ally to the regime with which they
//             sign. Powerful countries are, to a greater or lesser degree, guaranteeing the security of the country with 
//             which they sign the treaty and the degree of commitment is related to the type of treaty. A treaty 
//             establishing diplomatic relations between your two countries committment is very little. In contrast, a 
//             nuclear defense treaty is an absolute commitment that a powerful ally will take all measures possible, 
//             including the initiation of a nuclear holocaust, to protect the signatory.
//             <p className="mt-3 text-sm text-blue-500">Defensive strategy tactic 6: Trade:</p>
//             There last geopolitical policy option is trade policy. A powerful country may adjust its trade policy toward
//             any country. This policy will have no effect on the economy of the targeted nation. It will, however, make a
//             diplomatic statement that will affect relations between two countries."                                    
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//   )
// }

// export default Guideline