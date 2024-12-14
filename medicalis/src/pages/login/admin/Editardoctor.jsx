import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Importamos useParams para obtener el id desde la URL

const Editardoctor = () => {
  const { id } = useParams(); // Obtenemos el id de la URL
  const [doctor, setDoctor] = useState(null); // Estado para guardar los datos del doctor
  const [loading, setLoading] = useState(true); // Estado para manejar la carga de datos

  // Cargar los detalles del doctor cuando el componente se monta
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/actualizar-doctor/${id}`
        );
        setDoctor(response.data);
        setLoading(false); // Datos cargados, dejamos de mostrar el estado de carga
      } catch (error) {
        console.error("Error al obtener los detalles del doctor:", error);
        alert("Hubo un error al obtener los detalles del doctor.");
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]); // Dependencia de 'id' para recargar cuando cambie

  if (loading) {
    return <div>Cargando...</div>; // Mientras se cargan los datos
  }

  if (!doctor) {
    return <div>No se encontró el doctor.</div>; // Si no se encuentra el doctor
  }

  // El formulario para editar los datos del doctor (este es un ejemplo básico)
  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4">Editar Doctor</h3>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Nombre</label>
          <input
            type="text"
            value={`${doctor.nombres} ${doctor.paterno} ${doctor.materno}`}
            className="border p-2 w-full"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Edad</label>
          <input
            type="number"
            value={doctor.edad}
            className="border p-2 w-full"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={doctor.email}
            className="border p-2 w-full"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Celular</label>
          <input
            type="text"
            value={doctor.celular}
            className="border p-2 w-full"
            readOnly
          />
        </div>
        {/* Aquí puedes agregar más campos para editar */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default Editardoctor;
