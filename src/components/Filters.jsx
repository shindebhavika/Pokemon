import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Filters({ filters, setFilters }) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    async function fetchTypes() {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
        const fetchedTypes = response.data.results
          .map((type) => type.name)
          .filter((name) => name !== "shadow" && name !== "unknown"); // remove unwanted types
        setTypes(fetchedTypes);
      } catch (error) {
        console.error("Error fetching types:", error);
      }
    }

    fetchTypes();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 md:gap-6 p-4 bg-transparent dark:text-white">
      {/* Name Search */}
      <div className="flex flex-col w-full sm:w-48">
        <label className="mb-1 font-medium text-sm text-gray-800 dark:text-gray-200">
          Name
        </label>
        <input
          className="bg-gray-100 dark:bg-gray-800  dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
          placeholder="Search by Name..."
          value={filters.name}
          onChange={(e) => setFilters({ ...filters, name: e.target.value })}
        />
      </div>

      {/* Type Filter */}
      <div className="flex flex-col w-full sm:w-48 ">
        <label className="mb-1 font-medium text-sm text-gray-800 dark:text-gray-200">
          Type
        </label>
        <select
        className="bg-gray-100 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        >
          <option value="" >All Types</option>
          {types.map((type, index) => (
            <option key={index} value={type}  >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
