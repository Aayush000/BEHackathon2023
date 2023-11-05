// Makes the api call
const apiUrl = "http://localhost:4000/flights?date=2023-11-23&destination=DFW";

export const getFlightData = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching flight data: ", error);
  }
};
