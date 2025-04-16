import React from "react";
import { BiHeartCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Filters({ filters, setFilters}) {


  return (
    <div className="flex flex-wrap gap-4 md:gap-6 p-4 bg-transparent dark:text-white">
     
      <div className="flex flex-col w-full sm:w-48">
        <label className="mb-1 font-medium text-sm text-gray-800 dark:text-gray-200">Name</label>
        <input
          className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
          placeholder="Search ...."
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
      </div>

    

     
    </div>
  );
}
