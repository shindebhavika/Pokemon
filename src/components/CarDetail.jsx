import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function CarDetail() {
  const location = useLocation();
  const pokemon = location.state?.pokemon;

  if (!pokemon) return <div className="text-center mt-10 text-red-500">No data found.</div>;

  return (
    <div className="max-w-2xl mx-auto my-10 bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden font-[Poppins] animate-fade-in">
      <div className="border-b border-gray-300 dark:border-gray-700 p-2 flex items-center justify-between bg-gray-50 dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white capitalize text-center">{pokemon.name}</h2>
      </div>

      <img
        src={
          location.state.images?.[2] ||
          "https://thumbs.dreamstime.com/b/red-generic-sedan-pokemon-white-background-perspective-view-isolated-path-red-generic-sedan-pokemon-white-background-123481287.jpg"
        }
        alt={pokemon.model}
        className="w-1/2 h-60 object-cover"
      />
    
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 text-base">
 
          <p><strong>Weight:</strong> {pokemon.weight}</p>
     
        </div>

        {pokemon.abilities?.length > 0 && (
          <div className="mt-2">
            <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">Features:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
              {pokemon.abilities.map((feature, index) => (
                <li key={index}>{feature.ability.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="px-6 pb-6 text-right">
        <Link to="/">
          <button
            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition"
          >
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}
