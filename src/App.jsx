import React, { useState } from "react";
import NavBar from "./components/NavBar";
import BotsContainer from "./components/BotsContainer";
import ArmyContainer from "./components/ArmyContainer";

function App() {
  const [army, setArmy] = useState([]);
  const [bots, setBots] = useState([]);
  const [botClasses, setBotClasses] = useState([]);

  function handleDelete(id, botClass) {
    const updatedBotClasses = botClasses.filter((bCl) => bCl !== botClass);
    setBotClasses(updatedBotClasses);
    const updatedArmy = army.filter((bot) => bot.id !== id);
    setArmy(updatedArmy);
  }

  function handleDischarge(id, botClass) {
    const updatedBotClasses = botClasses.filter((bCl) => bCl !== botClass);
    setBotClasses(updatedBotClasses);
    const updatedArmy = army.filter((bot) => bot.id !== id);
    setArmy(updatedArmy);

    army.map((bot) => {
      if (bot.id === id) {
        setBots([bot, ...bots]);
      }
    });
  }

  return (
    <div className="h-screen font-link w-screen">
      <NavBar />
      <div className="bg-stone-300 h-full w-full flex">
        <BotsContainer
          army={army}
          setArmy={setArmy}
          bots={bots}
          setBots={setBots}
          botClasses={botClasses}
          setBotClasses={setBotClasses}
        />
        <ArmyContainer
          army={army}
          onDelete={handleDelete}
          onDischarge={handleDischarge}
        />
      </div>
    </div>
  );
}

export default App;
