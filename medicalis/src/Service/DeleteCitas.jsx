import axios from "axios";

const API_URL = "http://localhost:5000/delete-cita";

const DeleteCitas = async (idCita) => {
  try {
    const response = await axios.post(`${API_URL}/${idCita}`);
    return response.data;
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
};
export default DeleteCitas;
