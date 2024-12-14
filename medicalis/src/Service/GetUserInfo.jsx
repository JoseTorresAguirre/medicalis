import axios from "axios";

const API_URL = "http://localhost:5000/user-info";

const GetUserInfo = async (user) => {
  try {
    const response = await axios.post(API_URL, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // Error del servidor
      console.error("Error del servidor:", error.response.data);
      throw new Error(
        `Error del servidor: ${
          error.response.data.message || error.response.statusText
        }`
      );
    } else if (error.request) {
      // No hubo respuesta del servidor
      console.error("No hubo respuesta del servidor:", error.request);
      throw new Error("No hubo respuesta del servidor. Intenta más tarde.");
    } else {
      // Error en la configuración de la solicitud
      console.error("Error en la solicitud:", error.message);
      throw new Error(`Error en la solicitud: ${error.message}`);
    }
  }
};
export default GetUserInfo;
