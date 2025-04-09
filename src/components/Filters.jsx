import React from "react";
import { BiHeartCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Filters({ filters, setFilters, fuel, sortOrder, setSortOrder }) {
  const wishlist = useSelector((state) => state.Cars.wishlist);

  return (
    <div className="flex flex-wrap gap-4 md:gap-6 p-4 bg-transparent dark:text-white">
      
      {/* My Wishlist Button */}
      <div className="w-full flex justify-end md:justify-start">
        <Link to="/my-fav">
          <button className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md font-semibold tracking-wide shadow hover:bg-red-600 dark:hover:bg-red-400 transition duration-300 relative">
            My Wishlist
            <BiHeartCircle size={20} />
            <span className="absolute -top-2 -right-2 w-5 h-5 text-xs flex items-center justify-center bg-red-300 text-black rounded-full">
              {wishlist.length}
            </span>
          </button>
        </Link>
      </div>

      {/* Brand Input */}
      <div className="flex flex-col w-full sm:w-48">
        <label className="mb-1 font-medium text-sm text-gray-800 dark:text-gray-200">Brand</label>
        <input
          className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
          placeholder="Make"
          value={filters.make}
          onChange={(e) => setFilters({ ...filters, make: e.target.value })}
        />
      </div>

      {/* Fuel Type Dropdown */}
      <div className="flex flex-col w-full sm:w-48">
        <label className="mb-1 font-medium text-sm text-gray-800 dark:text-gray-200">Fuel Type</label>
        <select
          className="bg-gray-100 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={filters.fuel}
          onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
        >
          <option value="">All</option>
          {fuel.map((a) => (
            <option
              key={a}
              value={a}
              className="bg-white dark:bg-gray-900 text-black dark:text-white"
            >
              {a}
            </option>
          ))}
        </select>
      </div>

      {/* Sort by Price */}
      <div className="flex flex-col w-full sm:w-48">
        <label className="mb-1 font-medium text-sm text-gray-800 dark:text-gray-200">Sort By</label>
        <select
          className="bg-gray-100 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">-- Select --</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Price Range */}
      <div className="flex flex-col w-full sm:w-[300px]">
        <label className="font-medium text-sm mb-2 text-gray-800 dark:text-gray-200">
          Price Range: ₹{filters.minPrice.toLocaleString()} - ₹{filters.maxPrice.toLocaleString()}
        </label>
        <div className="flex gap-4">
          <div className="flex flex-col w-full">
            <label className="text-xs text-gray-700 dark:text-gray-300">Min</label>
            <input
              type="range"
              min="0"
              max="100000"
              step="1000"
              value={filters.minPrice}
              onChange={(e) =>
                setFilters({ ...filters, minPrice: Number(e.target.value) })
              }
              className="w-full"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-xs text-gray-700 dark:text-gray-300">Max</label>
            <input
              type="range"
              min="0"
              max="100000"
              step="1000"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: Number(e.target.value) })
              }
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Year Input */}
      <div className="flex flex-col w-full sm:w-36">
        <label className="mb-1 font-medium text-sm text-gray-800 dark:text-gray-200">Year</label>
        <input
          type="number"
          inputMode="numeric"
          placeholder="Year"
      className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
          value={filters.year}
          onChange={(e) => setFilters({ ...filters, year: e.target.value })}
        />
      </div>
    </div>
  );
}
