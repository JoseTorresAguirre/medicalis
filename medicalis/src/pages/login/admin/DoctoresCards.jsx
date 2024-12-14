import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para la redirección
import { motion } from "framer-motion"; // Para las animaciones
import "../../../assets/css/App.css";

const Doctorescards = () => {
  const [doctores, setDoctores] = useState([]);
  const navigate = useNavigate(); // Instanciamos useNavigate

  // Cargar la lista de doctores cuando se monta el componente
  useEffect(() => {
    const fetchDoctores = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/doctores");
        setDoctores(response.data); // 'response.data' ya contiene los doctores
      } catch (error) {
        console.error("Error al obtener la lista de doctores:", error);
        alert("Hubo un error al obtener la lista de doctores.");
      }
    };

    fetchDoctores();
  }, []);

  const handleEliminar = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/eliminar-doctor/${id}`);
      setDoctores(doctores.filter((doctor) => doctor.id !== id));
      alert("Doctor eliminado con éxito");
    } catch (error) {
      console.error("Error al eliminar el doctor:", error);
      alert("Hubo un error al eliminar el doctor.");
    }
  };

  const handleEditar = (id) => {
    // Redirigir a la página de edición del doctor
    navigate(`/editar-doctor/${id}`);
  };

  const handleVer = (id) => {
    // Redirigir a la página de ver detalles del doctor
    alert(`Ver detalles del doctor con ID: ${id}`);
  };

  return (
    <div className="flex h-[100%] bg-gray-200">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-100 p-4">
        <div className="flex items-center mb-8">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt="Avatar"
            className="rounded-full mr-4 w-24 h-24"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">Vladimir Puquio</h2>
            <p className="text-900">ADM</p>
          </div>
        </div>
        <nav>
          <h3 className="text-lg font-semibold mb-4 text-gray-bold-800 text-left">
            <a href="/Admin" className="text-600">
              Doctores
            </a>
          </h3>
          <ul>
            <li className="mb-2 border-b border-gray-400 py-2 pl-4">
              <a href="/Admindoctoresdash" className="text-600">
                Doctores Dashboard
              </a>
            </li>
            <li className="mb-2 border-b border-gray-400 py-2 pl-4">
              <a href="/Doctoreslista" className="text-600">
                Doctores Lista
              </a>
            </li>
            <li className="mb-2 border-b border-gray-400 py-2 pl-4">
              <a href="/Doctorescards" className="text-600">
                Doctores Cards
              </a>
            </li>
            <li className="mb-2 border-b border-gray-400 py-2 pl-4">
              <a href="/Doctoresprofile" className="text-600">
                Doctores Profile
              </a>
            </li>
            <li className="mb-2 border-b border-gray-400 py-2 pl-4">
              <a href="/Agregardoctor" className="text-600">
                Agregar Doctor
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="w-[75%] h-[130%] p-8 bg-gradient-to-r from-blue-100 to-blue-200">
        <div className="flex flex-wrap justify-center gap-6 p-6">
          {/* Cards con la información de los doctores */}
          {doctores.map((doctor) => (
            <motion.div
              key={doctor.id}
              className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://via.placeholder.com/300x200"
                alt="Avatar"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800">
                  {doctor.nombres} {doctor.paterno} {doctor.materno}
                </h3>
                <p className="text-gray-600">Edad: {doctor.edad}</p>
                <p className="text-gray-600">Género: {doctor.genero}</p>
                <p className="text-gray-600">Email: {doctor.email}</p>
                <p className="text-gray-600">Celular: {doctor.celular}</p>
                <div className="mt-4 flex items-center justify-between">
                  {/* Rating (puedes personalizarlo más según tus necesidades) */}
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500">⭐</span>
                    <span>{doctor.calificacion || "N/A"}</span>
                  </div>

                  {/* Botones de acciones */}
                  <div className="space-x-2">
                    <button
                      onClick={() => handleVer(doctor.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
                    >
                      Ver
                    </button>
                    <button
                      onClick={() => handleEditar(doctor.id)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-all duration-300"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleEliminar(doctor.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Doctorescards;
