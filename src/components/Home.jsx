import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import CarCard from "../components/CarCard";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "../store/carSlice";

function Home() {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    name: "",
    type: "",
  });
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of cars per page

  const { cars, status } = useSelector((state) => state.Cars);
  console.log(cars, "cars");

  // Extract all unique types from cars
  const allTypes = Array.from(
    new Set(cars.flatMap((car) => car.types?.map((t) => t.type.name)))
  ).map((name) => ({ name }));

  // Fetch cars when the component mounts
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  // Filter cars based on user input
  const filteredCars = cars.filter((pokemon) => {
    const matchesName = pokemon.name.toLowerCase().includes(filters.name.toLowerCase());
    const matchesType = filters.type === "" || pokemon.types?.some((t) => t.type.name === filters.type);
    return matchesName && matchesType;
  });

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredCars.length / itemsPerPage);

  // Get the cars for the current page
  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-8 font-sans relative">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Search Your Fav Pokemon
      </h1>

      <Filters filters={filters} setFilters={setFilters} types={allTypes} />

      {/* Loading State */}
      {status === "loading" && (
        <div className="text-center text-xl text-gray-600 mt-8">Loading Pokémon...</div>
      )}

      {/* Empty State */}
      {status === "succeeded" && filteredCars.length === 0 && (
        <div className="text-center text-xl text-gray-600 mt-8">No Pokémon found!</div>
      )}

      {/* Cards */}
      <div className="flex flex-wrap gap-4 mt-4 min-h-[100px] w-full">
        {paginatedCars.map((pokemon, index) => {
          const images = pokemon.sprites ? Object.values(pokemon.sprites).filter(Boolean) : [];
          const types = pokemon.types ? pokemon.types.map((t) => t.type.name) : [];

          return (
            <CarCard key={index} pokemon={pokemon} images={images} types={types} />
          );
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <button
            className="px-4 py-2 bg-[#39bef3]  text-white rounded-lg mx-2"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="text-lg my-auto  dark:text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="px-4 py-2 bg-[#39bef3]  text-white rounded-lg mx-2"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
