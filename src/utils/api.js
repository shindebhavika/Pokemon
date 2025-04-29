

export const fetchCars = async () => {
  try {
    // Step 1: Fetch pokemons
    const carRes = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    if (!carRes.ok) throw new Error(`Car API error: ${carRes.status}`);
    const pokemons = await carRes.json();

    // Step 2: Fetch pokemon images from Unsplash
   

    

    // Step 3: Replace each pokemon's `image` one by one with a real image
    

    // console.log("✅ Updated Cars with Real Images:", updatedCars);

    return pokemons
  } catch (error) {
    console.error("❌ Failed to fetch pokemons with images:", error);
    return [];
  }
};
