import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

function CarCard({ pokemon }) {
  const navigate = useNavigate();
  const [images, setImages] = useState();
  const [data, setData] = useState({});
  useEffect(() => {
    async function getData() {
      const data = await (await fetch(pokemon.url)).json();
      setData(data);
      console.log(data.sprites);
      const img = Object.entries(data.sprites)
        .filter(
          ([key, value]) =>
            ["back_default", "front_default"].includes(key) && value
        )
        .map(([_, value]) => value); // Just get the URLs

      setImages(img); // If you want to set state

      console.log(img, "img");
      setImages(img);
    }
    getData();
  }, [pokemon]);
  console.log(data, "im");
  return (
    <div
      className="cursor-pointer hover:underline p-2  bg-transparent rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white shadow hover:shadow-lg transition duration-300 w-80 "
      style={{ width: "19rem" }}
      onClick={() => navigate("/my-fav", { state: { data, images } })}
    >
      <div class="group relative h-96 w-72 [perspective:1000px]">
        <div class="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
          <div class="absolute w-full h-full rounded-xl bg-gradient-to-br from-violet-400 to-indigo-600 p-6 text-white [backface-visibility:hidden]">
            <div class="flex flex-col h-full">
              <div class="flex justify-between items-start">
                <div class="text-3xl font-bold"> {pokemon.name} </div>
                <div class="text-5xl">🌟</div>
              </div>
              <div class="mt-4">
                <img
                  src={images?.[1]}
                  className="rounded-t-xl w-full h-40 object-cover"
                  // alt={`Image of ${pokemon.model}`}
                />
                <p class="text-lg">
                  <strong>Height</strong>: {data.height}
                </p>
                <p class="text-lg">
                  <strong>Weight</strong>: {data.weight}
                </p>
                <p class="text-lg">
                  <strong>Order</strong>: {data.order}
                </p>
              </div>
              <div class="mt-auto">
                <p class="text-sm opacity-75">Hover to flip!</p>
              </div>
            </div>
          </div>

          <div class="absolute w-full h-full rounded-xl bg-gradient-to-br from-pink-400 to-purple-600 p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]">
            <div class="flex flex-col h-full">
              <div class="text-2xl font-bold mb-4">Back Side</div>
              <div class="flex-grow">
                <img
                  src={images?.[0]}
                  className="rounded-t-xl w-full h-40 object-cover"
                  alt={`Image of ${pokemon.name}`}
                />
                <strong>Ability</strong>
                <p class="text-lg">{data.abilities?.[0].ability.name}</p>
              </div>
              <div class="flex justify-between items-center mt-auto">
                <button class="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                  Action
                </button>
                <span class="text-3xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default CarCard;
