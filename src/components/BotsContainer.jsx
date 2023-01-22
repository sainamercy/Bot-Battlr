import React,{useEffect, useState} from "react";
import BotList from "./BotList";

function BotsContainer({army, setArmy}){
    const [bots, setBots] = useState([])


    useEffect(()=>{
        fetch("https://api.jsonbin.io/v3/b/63cd2c91ace6f33a22c56765")
        .then(res=>res.json())
        .then(data=>{console.log(data.record.bots)
            setBots(data.record.bots)
        })
    }, [])

    function handleClick(id){
        
       bots.map(bot=>{
        if(bot.id===id){
            setArmy([...army, bot])
        } 
       })
    }
    console.log(army);

    return <div className="h-full overflow-scroll w-8/12 bg-pink-200">
        <h2 className="text-4xl text-teal-800 text-center mt-2">Select your Team !!</h2>
      <div className="flex flex-wrap justify-center">
      {bots.map(bot =>   <BotList key={bot.id} name={bot.name} image={bot.avatar_url} category={bot.bot_class} phrase={bot.catchphrase} damage={bot.damage} health={bot.health} armor={bot.armor} id={bot.id} onBotClick={handleClick}/>)}
      </div>
    </div>

}
export default BotsContainer