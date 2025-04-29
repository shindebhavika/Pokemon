import React from "react";
import { useNavigate } from "react-router-dom";

function CarCard({ pokemon, images, types }) {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer hover:underline p-1 bg-transparent rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white shadow hover:shadow-lg transition duration-300 w-80"
      style={{ width: "19rem" }}
      onClick={() => navigate("/my-fav", { state: { pokemon, images , types} })}
    >
      <div className="group relative h-96 w-72 [perspective:1000px]">
        <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
          {/* Front Side */}
          <div className="absolute w-full h-full rounded-xl bg-gradient-to-br  from-violet-700 to-indigo-300 p-4 p-4 text-white [backface-visibility:hidden]">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start">
                <div className="text-2xl font-bold text-[#ededa4]">
                  {pokemon.name.toUpperCase()}
                </div>
                <div className="text-2xl">🌟</div>
              </div>
              <div className="mt-2">
                <img
                  src={images?.[2]}
                  alt={`Image of ${pokemon.name}`}
                  className="rounded-t-xl w-full h-40 object-cover"
                />
                <p className="text-lg">
                  <strong>ID</strong>: {pokemon.id}
                </p>
                <p className="text-lg">
                  <strong>Weight</strong>: {pokemon.weight}
                </p>
                <strong>Types</strong>
                <ul className="flex space-x-2">
                  {types?.map((type, index) => (
                    <li key={index} className="flex items-center space-x-1">
                      <span>•</span>
                      <span>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <p className="text-sm opacity-75">Hover to flip!</p>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-pink-400 to-purple-600 p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]">
            <div className="flex flex-col h-full">
              <div className="text-2xl font-bold mb-4">Back Side</div>
              <div className="flex-grow">
                <img
                  src={images?.[0]}
                  alt={`Image of ${pokemon.name}`}
                  className="rounded-t-xl w-full h-40 object-cover"
                />
                <strong>Abilities</strong>
                <ul className="flex space-x-2">
                  {pokemon?.abilities?.map((item, index) => (
                    <li key={index} className="flex items-center space-x-1">
                      <span>•</span>
                      <span>{item.ability.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center mt-auto">
                <button className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                  Action
                </button>
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
