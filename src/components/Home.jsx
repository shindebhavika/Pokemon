import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import CarCard from "../components/CarCard";

import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../store/carSlice";

function Home() {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    name: "",
  });

  const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"

  const { cars, status, page, wishlist } = useSelector((state) => state.Cars);

  // Fetch once
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  // Filter
  const filteredCars = cars.filter((pokemon) => {
    return (
      !filters.name ||
      pokemon.name.toLowerCase().includes(filters.name.toLowerCase())
    );
  });

  return (
    <div className="p-8 font-sans relative">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Search Your Fav Pokemon
      </h1>

      <Filters
        filters={filters}
        setFilters={setFilters}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <div className="flex flex-wrap gap-4 mt-4 min-h-[100px] w-full">
        {filteredCars?.map((pokemon, index) => (
          <CarCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default Home;
