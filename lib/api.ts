const BASE_URL = "https://drl-backend-wlz1.onrender.com/api/lab";

// 🔥 common fetch wrapper
async function fetchData(url: string) {
  try {
    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch: " + res.status);
    }

    return res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

// EVENTS
export const getEvents = () => fetchData(`${BASE_URL}/events/getall`);

// TRAINING
export const getTraining = () => fetchData(`${BASE_URL}/training`);

// GALLERY
export const getGallery = () => fetchData(`${BASE_URL}/gallery`);

// MOU
export const getMou = () => fetchData(`${BASE_URL}/mou`);