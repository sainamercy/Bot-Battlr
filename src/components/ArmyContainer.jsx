import React from "react";
import ArmyList from "./ArmyList";

function ArmyContainer({ army, onDelete, onDischarge }) {
  return (
    <div className="h-full overflow-scroll w-5/12 bg-lime-300 p-6">
      <h2 className="text-3xl text-teal-800 text-center mt-2">
        {army.length < 6
          ? " Choose a team of six members from the bot collection, each from one of the six classes!!"
          : "Hurray 🎉🎉🎉 you are ready for the battle!!"}
      </h2>
      <div className="flex flex-wrap justify-center">
        {army.length > 0 ? (
          army.map((bot) => (
            <ArmyList
              key={bot.id}
              name={bot.name}
              image={bot.avatar_url}
              category={bot.bot_class}
              phrase={bot.catchphrase}
              damage={bot.damage}
              health={bot.health}
              armor={bot.armor}
              id={bot.id}
              onDelete={onDelete}
              onDischarge={onDischarge}
              botClass={bot.bot_class}
            />
          ))
        ) : (
          <h3 className="text-pink-800 mt-40 text-3xl">No Members yet!</h3>
        )}
      </div>
    </div>
  );
}
export default ArmyContainer;
