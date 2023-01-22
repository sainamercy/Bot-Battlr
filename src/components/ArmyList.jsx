import React from "react";

function ArmyList({name, category, image, damage, health, armor}){
    return <div className="flex justify-center p-3 hover:scale-105 h-64">
    <div className="rounded-lg shadow-lg bg-yellow-100 w-40">
      <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img className="rounded-t-lg h-2/6" src={image} alt={name}/>
      </a>
      <div className="p-4">
        <div className="text-gray-900 mb-2 font-medium">
        <h5 className="text-2xl">{name}</h5>
        <h6 className="text-xl">"{category}"</h6>
        </div>
        {/* <p className="text-gray-700 mb-4 break-words">{phrase}</p> */}
        <div className="flex justify-between">
           <p>💔: {damage}</p>
           <p>⚡: {health}</p>
           <p>🛡️: {armor}</p>
        </div>
      </div>
    </div>
   </div>
}
export default ArmyList