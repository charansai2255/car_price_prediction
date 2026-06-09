import axios from "axios";

const API_URL = "https://car-price-api-tqnv.onrender.com/";

export const predictPrice = async (data) => {
  const response = await axios.post(
    `${API_URL}/predict`,
    data
  );

  return response.data;
};
