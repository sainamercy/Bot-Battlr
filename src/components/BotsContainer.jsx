import React,{useEffect, useState} from "react";
import BotList from "./BotList";

function BotsContainer(){
    const [bots, setBots] = useState([])

    useEffect(()=>{
        fetch("https://api.jsonbin.io/v3/b/63cd2c91ace6f33a22c56765")
        .then(res=>res.json())
        .then(data=>{console.log(data.record.bots)
            setBots(data.record.bots)
        })
    }, [])

    return <div className="h-full overflow-scroll w-3/4 flex flex-wrap justify-center">
      {bots.map(bot =>   <BotList key={bot.id} name={bot.name} image={bot.avatar_url} category={bot.bot_class} phrase={bot.catchphrase} damage={bot.damage} health={bot.health} armor={bot.armor}/>)}
    </div>

}
export default BotsContainer