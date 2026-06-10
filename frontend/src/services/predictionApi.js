import axios from "axios";

<<<<<<< HEAD
const API_URL = "https://car-price-api-tqnv.onrender.com";
=======
const API_URL = "https://car-price-api-tqnv.onrender.com/";
>>>>>>> f5ceb74b532d6109b89ce13311a2193f21c6e721

export const predictPrice = async (data) => {
  const response = await axios.post(
    `${API_URL}/predict`,
    data
  );

  return response.data;
};
