import React from 'react'

const About = () => {
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="https://images.unsplash.com/photo-1716315130431-9a2533a62f3e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/480x360" alt="lat" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
			<div className="dark:text-gray-800">
				<p>Geopolitical rating is based on the Balance of power game which is adopted by pentagon's 
                    simulations system. The tool was used during cold war period, 
                in order to device state foreign policy and training of state department staffs. 
                The goal in geopolitical rating is to understand a country's geopolitical prestige through diplomacy
                effectiveness and national security effectiveness.
                The concept of geopolitical prestige is a country wants to be popular with the countries that count the most. In the world of geopolitics, countries that count are 
                the countries that are powerful in military might and economically dominant in the world. These countries are categorized under two tiers.Tier One countries are 
                United States, China, Japan, United Kingdom and EU (including Israel). These countries control 65% of the world economy. The next Tier Two countries 
                control 20% of the world economy and they are Brazil, Russia, India, Canada, Australia, Mexico, South Korea, Indonesia, Turkey and Saudi Arabia. 
                Thus, a country that accumulate lots of powerful friends from tier one and tier two countries, will be able to ostracize and weaken its enemies through 
                military alliance and economic cooperation with powerful nations.The nations of the world are sovereign states; they do whatever they choose to do- Your country's 
                ability to influence the course of events is directly related to its prestige. Short of direct conquest or the exercise of naked military power,prestige 
                closest a country can get to true international power position.
                After the rating, if the black king chesspiece lands on Green Area, it means the country has a Geopolitical prestige in the world.
                if it lands on yellow area, it means the country finds itself in an intermediate vulnerable geopolitical situations. Finally, if it lands on 
                Red area, the country is found in geopolitically risky position. The likelihood of the country getting into crisis is higher.
          
            </p>
			</div>
		</div>
	</div>
</div>
  )
}

export default About