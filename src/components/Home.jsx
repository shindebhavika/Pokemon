import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import CarCard from "../components/CarCard";
import CarDetail from "../components/CarDetail";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, getCars, removeFromWishlist, setPage } from "../store/carSlice";

const CARS_PER_PAGE = 10;

function Home() {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    make: "",
    fuel: "",
    minPrice: 0,
    maxPrice: 100000,
    year: ""
  });

  const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"
  const [selectedCar, setSelectedCar] = useState(null);
  const [fuel, setFuel] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showExplorer, setShowExplorer] = useState(false);

  const { cars, status, page, wishlist } = useSelector((state) => state.Cars);

  // Fetch once
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  // Extract fuel types
  useEffect(() => {
    if (status === "succeeded") {
      const fuelTypes = [...new Set(cars.map((car) => car.fuelType))];
      setFuel(fuelTypes);
    }else if(status=="failed"){
      alert(status)
    }
  }, [status, cars]);

  // Persist wishlist
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Filter
  const filteredCars = cars.filter((car) => {
    return (
      (!filters.make || car.make.toLowerCase().includes(filters.make.toLowerCase())) &&
      (!filters.fuel || car.fuelType === filters.fuel) &&
      (!filters.year || car.year === parseInt(filters.year)) &&
      car.price >= filters.minPrice &&
      car.price <= filters.maxPrice
    );
  });

  // Sort filtered cars
  const sortedCars = [...filteredCars].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  // Pagination
  const startIndex = (page - 1) * CARS_PER_PAGE;
  const endIndex = startIndex + CARS_PER_PAGE;
  const carsToShow = sortedCars.slice(startIndex, endIndex);
  const totalPages = Math.ceil(sortedCars.length / CARS_PER_PAGE);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div className="p-8 font-sans relative">
      
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">🚗 Car Finder</h1>
     
      {!showExplorer && (
      <section className="relative  bg-transparent dark:to-gray-900 py-20 px-6 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
          Find Your Dream Car <span className="text-blue-600 dark:text-blue-400">Effortlessly</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Browse hundreds of cars. Compare prices, filter by preferences, and build your perfect wishlist.
        </p>

        {/* <Link to="#cars"> */}
          <button onClick={() => setShowExplorer(true) }className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-lg transition-all duration-300">
            🔍 Start Exploring
          </button>
        {/* </Link> */}
      </div>

      {/* Optional: Decorative background image */}
      <img
        src="https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2MDU5MTB8MHwxfGFsbHx8fHx8fHx8fDE3NDQyMDQ0MjF8&ixlib=rb-4.0.3&q=85"
        alt="Car Hero"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />
    </section>)}
      {/* Filters + Sort */}
      {showExplorer && (
  <>
    {/* Filters + Sort */}
    <Filters
      filters={filters}
      setFilters={setFilters}
      fuel={fuel}
      sortOrder={sortOrder}
      setSortOrder={setSortOrder}
    />

    {/* Car Cards */}
    <div className="flex flex-wrap gap-4 mt-4 min-h-[100px] w-full">
      {carsToShow.length > 0 ? (
        carsToShow.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            onClick={() => setSelectedCar(car)}
            onWishlist={() => {
              const isInWishlist = wishlist.some((w) => w.id === car.id);
              if (isInWishlist) {
                dispatch(removeFromWishlist(car.id));
                alert("Car removed from wishlist.");
              } else {
                dispatch(addToWishlist(car));
                alert("Car added to wishlist!");
              }
            }}
            isWishlisted={wishlist.some((w) => w.id === car.id)}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-300 text-lg w-full">
          🚫 No matching cars found.
        </p>
      )}
    </div>

    {/* Wishlist Floating Button */}
    <button
      onClick={() => setShowWishlist(true)}
      className="fixed bottom-8 right-8 bg-purple-600 text-white w-14 h-14 rounded-full shadow-lg text-xl flex items-center justify-center hover:bg-purple-700 transition"
      title="View Wishlist"
    >
      ❤️
    </button>

    {/* Wishlist Modal */}
    {showWishlist && (
      <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md relative max-h-[80vh] overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Your Wishlist</h2>
          {wishlist.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-300">No cars in wishlist.</p>
          ) : (
            wishlist.map((car) => (
              <div key={car.id} className="mb-3 border-b pb-2 border-gray-300 dark:border-gray-600">
                <strong className="text-gray-800 dark:text-white">
                  {car.make} {car.model}
                </strong>{" "}
                - ₹{car.price.toLocaleString()}
              </div>
            ))
          )}
          <button
            onClick={() => setShowWishlist(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-lg"
          >
            ✕
          </button>
        </div>
      </div>
    )}

    {/* Car Detail Modal */}
    {selectedCar && <CarDetail car={selectedCar} onClose={() => setSelectedCar(null)} />}

    {/* Pagination */}
    {totalPages > 1 && (
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    )}
  </>
)}

    </div>
  );
}

export default Home;
