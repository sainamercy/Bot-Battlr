import React,{useEffect, useState} from "react";
import BotList from "./BotList";

function BotsContainer({army, setArmy, bots, setBots}){
    const [botClasses, setBotClasses] = useState([])
    
    useEffect(()=>{
        fetch("https://api.jsonbin.io/v3/b/63cd2c91ace6f33a22c56765")
        .then(res=>res.json())
        .then(data=>{
            setBots(data.record.bots)
        })
    }, [])

    function handleClick(id, botClass){
        if(army.length>=6){
            alert("You have reached maximum number of members")
        }else{
            if(botClasses.includes(botClass)){
                alert(`member from ${botClass} exits, please find a member from a different class`)
            }else{
                bots.map(bot=>{
                    if(bot.id===id){
                        setArmy([...army, bot])
                        setBotClasses([...botClasses, bot.bot_class])
                    }else{
                        const updatedBots = bots.filter(bot=>bot.id !==id)
                        setBots(updatedBots)
                    }
                   })
            }
            }
            
    }

    return <div className="h-full overflow-scroll w-7/12 bg-pink-200">
        <h2 className="text-4xl text-teal-800 text-center mt-2">Bot Collection: {bots.length} Members available</h2>
      <div className="flex flex-wrap justify-center">
      {bots.map(bot =>   <BotList key={bot.id} name={bot.name} image={bot.avatar_url} category={bot.bot_class} phrase={bot.catchphrase} damage={bot.damage} health={bot.health} armor={bot.armor} botClass={bot.bot_class} id={bot.id} onBotClick={handleClick}/>)}
      </div>
    </div>

}
export default BotsContainer