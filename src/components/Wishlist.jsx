import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../store/carSlice';
import { RiDeleteBinLine } from "react-icons/ri";

function Wishlist() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.Cars.wishlist);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-9  bg-transparent  text-black  dark:text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4 col-span-full dark:text-gray-300">Favorites</h2>

      {wishlist.length === 0 ? (
        <p className="col-span-full text-center dark:text-gray-300">
          No favorites added yet.
        </p>
      ) : (
        wishlist.map((car) => (
          <div
            key={car.id}
            className="border border-gray-300 dark:border-gray-700  rounded shadow hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold dark:text-white ">{car.title || `${car.make} ${car.model}`}</h3>
              <button
                onClick={() => dispatch(removeFromWishlist(car.id))}
                className="text-red-500 hover:text-red-700"
                title="Remove from wishlist"
              >
                <RiDeleteBinLine size={20} />
              </button>
            </div>

            <img
              src={car.image || "https://thumbs.dreamstime.com/b/red-generic-sedan-car-white-background-perspective-view-isolated-path-red-generic-sedan-car-white-background-123481287.jpg"}
              alt={car.model}
              className="w-full h-48 object-cover"
            />

<div style={{ padding: "1rem" }}>
          
          <p style={{ marginBottom: "0.8rem", fontSize: "1.1rem", color: "#4CAF50" }}>
            <strong>RS.{car.price.toLocaleString()}</strong>
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            // gap: "0.8rem",
            fontSize: "0.95rem",
            color: "#555"
          }}>
            {/* <p><strong>Color:</strong> {car.color}</p> */}
            <p className='dark:text-gray-300'><strong>Make:</strong> {car.make || "N/A"}</p>
            <p className='dark:text-gray-300'><strong>Mileage:</strong> {car.mileage.toLocaleString()} miles</p>
            <p className='dark:text-gray-300'><strong>Fuel:</strong> {car.fuelType}</p>
            {/* <p><strong>Transmission:</strong> {car.transmission}</p>
            <p><strong>Engine:</strong> {car.engine}</p>
            <p><strong>Horsepower:</strong> {car.horsepower} hp</p>
            // <p><strong>Model:</strong> {car.model || "N/A"}</p>
            <p><strong>Make:</strong> {car.make || "N/A"}</p>
            <p><strong>Owners:</strong> {car.owners}</p> */}
          </div>

          {/* Features */}
          {car.features?.length > 0 && (
            <div style={{ marginTop: "1.2rem" }}>
              <strong  className='dark:text-gray-300'>Features:</strong>
              <ul style={{ paddingLeft: "1.2rem", marginTop: "0.4rem", color: "#555" }}>
                {car.features.map((feature, index) => (
                  <li className='dark:text-gray-300' key={index} style={{ marginBottom: "0.3rem" }}>
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

         
        </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;
