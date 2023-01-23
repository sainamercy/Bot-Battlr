import React, { useState } from "react";

function Sort({ onSort }) {
  function handleSort(e) {
    const value = e.target.value;
    onSort(value);
  }
  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <select
          onChange={handleSort}
          value=""
          className="form-select appearance-none
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        >
          <option>Sort by class</option>
          <option value="All">All</option>
          <option value="Captain">Captain</option>
          <option value="Medic">Medic</option>
          <option value="Support">Support</option>
          <option value="Assault">Assault</option>
          <option value="Defender">Defender</option>
          <option value="Witch">Witch</option>
        </select>
      </div>
    </div>
  );
}
export default Sort;
