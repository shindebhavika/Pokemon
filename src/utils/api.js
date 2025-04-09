const UNSPLASH_API = 'https://api.unsplash.com/search/photos?query=car&per_page=50&client_id=hH3vVcrK6s-vKT45I2Cl1jlXJUioDnOAd9URP78IIGc';

export const fetchCars = async () => {
  try {
    // Step 1: Fetch cars
    const carRes = await fetch('https://www.freetestapi.com/api/v1/cars');
    if (!carRes.ok) throw new Error(`Car API error: ${carRes.status}`);
    const cars = await carRes.json();

    // Step 2: Fetch car images from Unsplash
    const imageRes = await fetch(UNSPLASH_API);
    if (!imageRes.ok) throw new Error(`Image API error: ${imageRes.status}`);
    const imageData = await imageRes.json();

    const imageUrls = imageData.results.map((img) => img.urls.regular);

    // Step 3: Replace each car's `image` one by one with a real image
    const updatedCars = cars.map((car, index) => ({
      ...car,
      image: imageUrls[index % imageUrls.length], // safely loop images
    }));

    console.log("✅ Updated Cars with Real Images:", updatedCars);

    return updatedCars;
  } catch (error) {
    console.error("❌ Failed to fetch cars with images:", error);
    return [];
  }
};
