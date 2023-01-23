import React from "react";

function ArmyList({
  name,
  category,
  image,
  damage,
  health,
  armor,
  onDelete,
  onDischarge,
  id,
  botClass,
}) {
  function handleDischarge() {
    onDischarge(id, botClass);
  }
  function handleDelete() {
    onDelete(id, botClass);
  }
  return (
    <div className="flex justify-center p-3 hover:scale-105 h-80">
      <div className="rounded-lg shadow-lg bg-yellow-100 w-44">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img className="rounded-t-lg h-1/3" src={image} alt={name} />
        </a>
        <div className="p-4">
          <div className="text-gray-900 mb-2 font-medium">
            <h5 className="text-2xl">{name}</h5>
            <h6 className="text-xl">"{category}"</h6>
          </div>
          <div className="flex justify-between">
            <p>💔: {damage}</p>
            <p>⚡: {health}</p>
            <p>🛡️: {armor}</p>
          </div>
          <div className="flex flex-col justify-center">
            <button
              onClick={handleDischarge}
              type="button"
              className="inline-block px-6 py-2 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-2"
            >
              Discharge
            </button>
            <button
              onClick={handleDelete}
              type="button"
              className="inline-block px-6 py-2 bg-rose-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-900 hover:shadow-lg focus:bg-rose-900 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-2"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArmyList;
