

export const fetchCars = async () => {
  try {
  
    const carRes = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
    if (!carRes.ok) throw new Error(`Car API error: ${carRes.status}`);
    const pokemons = await carRes.json();
    return pokemons
  } catch (error) {
    console.error("❌ Failed to fetch pokemons with images:", error);
    return [];
  }
};
