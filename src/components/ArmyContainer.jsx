import React from "react";
import ArmyList from "./ArmyList";

function ArmyContainer({army}){

if(army.length === 0) return <div className="h-full overflow-scroll w-2/6 flex flex-col items center justify-evenly">
    <h2 className="text-3xl text-teal-800 text-center mt-2">Choose a team of six members from each of the six classes!!</h2>
    <h3 className="text-3xl text-stone-800 text-center mt-2">No members yet!</h3>
</div>
    return <div className="h-full overflow-scroll w-2/6 bg-lime-300">
        <h2 className="text-3xl text-teal-800 text-center mt-2">Choose a team of six members from each of the six classes!!</h2>
      <div className="flex flex-wrap justify-center">
      {army.map(bot =><ArmyList key={bot.id} name={bot.name} image={bot.avatar_url} category={bot.bot_class} phrase={bot.catchphrase} damage={bot.damage} health={bot.health} armor={bot.armor}/>)}
      </div>
    </div>
  
}
export default ArmyContainer