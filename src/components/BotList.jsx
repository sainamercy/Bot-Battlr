import React from "react";

function BotList({name, category, image, phrase, damage, health, armor }){
 return <div className="flex justify-center p-3 mt-4">
 <div className="rounded-lg shadow-lg bg-lime-100 w-60">
   <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
     <img className="rounded-t-lg" src={image} alt={name}/>
   </a>
   <div className="p-4">
     <div className="text-gray-900 mb-2 font-medium">
     <h5 className="text-2xl">{name}</h5>
     <h6 className="text-xl">"{category}"</h6>
     </div>
     <p className="text-gray-700 mb-4 break-words">{phrase}</p>
     <div className="flex justify-between">
        <p>💔: {damage}</p>
        <p>⚡: {health}</p>
        <p>🛡️: {armor}</p>
     </div>
   </div>
 </div>
</div>
}

export default BotList