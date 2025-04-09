import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function CarCard({ car, onClick, onWishlist, isWishlisted }) {
  return (
    <div
      className="cursor-pointer hover:underline p-2  bg-transparent rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white shadow hover:shadow-lg transition duration-300"
      style={{ width: '18rem' }}
      onClick={onClick}
    >
      <img
        src={car.image}
        className="rounded-t-xl w-full h-40 object-cover"
        alt={`Image of ${car.model}`}
      />

      <div className="p-3">
        <p className="text-lg font-semibold dark:text-gray-300"><b>Model</b>:{car.model} ({car.year})</p>
        <p className="text-sm text-gray-600 dark:text-gray-300"><b>Make</b>:{car.make}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300"><b>Fuel Type:</b>{car.fuelType}</p>
        <p className="text-md text-blue-700 dark:text-blue-400 font-bold">
          ₹{car.price.toLocaleString()}
        </p>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering card click
          onWishlist();
        
        }}
        aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        className="top-2 right-2 text-red-500 text-xl"
      >
        {isWishlisted ? <FaHeart /> : <FaRegHeart />} 
      </button>
    
    </div>
  );
}

export default CarCard;
