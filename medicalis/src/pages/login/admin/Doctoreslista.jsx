import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para la redirección
import "../../../assets/css/App.css";

const Doctoreslista = () => {
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
    navigate(`/editardoctor/${id}`);
  };

  const handleVer = (id) => {
    // Redirigir a la página de ver detalles del doctor
    alert(`Ver detalles del doctor con ID: ${id}`);
  };

  return (
    <div className="flex h-screen bg-gray-200">
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
        <div className="p-6">
          <h3 className="text-xl font-bold mb-4">Lista de Doctores</h3>
          <table className="table-auto w-full border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">ID</th>
                <th className="border p-2">Nombre</th>
                <th className="border p-2">Edad</th>
                <th className="border p-2">Género</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Celular</th>
                <th className="border p-2">Acciones</th>{" "}
                {/* Columna para los botones */}
              </tr>
            </thead>
            <tbody>
              {doctores.map((doctor) => (
                <tr key={doctor.id}>
                  <td className="border p-2">{doctor.id}</td>
                  <td className="border p-2">
                    {doctor.nombres} {doctor.paterno} {doctor.materno}
                  </td>
                  <td className="border p-2">{doctor.edad}</td>
                  <td className="border p-2">{doctor.genero}</td>
                  <td className="border p-2">{doctor.email}</td>
                  <td className="border p-2">{doctor.celular}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => handleVer(doctor.id)}
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Ver
                    </button>
                    <button
                      onClick={() => handleEditar(doctor.id)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleEliminar(doctor.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Doctoreslista;
