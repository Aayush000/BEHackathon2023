// Makes the api call
const apiUrl = "http://127.0.0.1:5000/api/booking-detail/eng";

export const fetchModelResponse = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      const staticResponse = {"departure_date":"2023-12-23","destination":"DFW","origin":"ORD"}
      return staticResponse.json();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Model data: ", error);
  }
};
