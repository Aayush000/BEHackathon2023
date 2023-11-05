import { fetchModelResponse } from "./fetchModelResponse";

// Makes the api call

const modelResponse = fetchModelResponse();
const departure_date = modelResponse.departure_date || "2023-12-23"
const destination = modelResponse.destination || "DFW"
const origin = modelResponse.origin || "ORD"

const apiUrl = `http://localhost:4000/flights?date=${departure_date}&destination=${destination}`;

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
