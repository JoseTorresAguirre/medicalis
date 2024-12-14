import React, { useState } from "react";
import axios from "axios";
import "../../../assets/css/App.css";
const Agregardoctor = () => {
  const [formData, setFormData] = useState({
    nombres: "",
    paterno: "",
    materno: "",
    edad: "",
    genero: "",
    createID: "",
    email: "",
    celular: "",
  });
  const [imagen, setImagen] = useState(null); // Estado para la imagen

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setImagen(e.target.files[0]); // Guardar el archivo seleccionado
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un FormData para enviar los datos
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (imagen) {
      data.append("imagen", imagen); // Adjuntar la imagen
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/crear-doctor",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Importante para enviar archivos
          },
        }
      );
      alert(response.data.message); // Mensaje de éxito
      setFormData({
        nombres: "",
        paterno: "",
        materno: "",
        edad: "",
        genero: "",
        createID: "",
        email: "",
        celular: "",
      });
      setImagen(null); // Limpiar el archivo seleccionado
    } catch (error) {
      console.error("Error al crear el doctor:", error);
      alert("Hubo un error al crear el doctor");
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-100 p-4 shadow-lg">
        <div className="flex items-center mb-8">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt="Avatar"
            className="rounded-full mr-4 w-24 h-24 shadow-lg"
          />
          <div>
            <h2 className="text-xl font-bold text-gray-800">Vladimir Puquio</h2>
            <p className="text-gray-600">ADM</p>
          </div>
        </div>
        <nav>
          <h3 className="text-lg font-semibold mb-4 text-gray-bold-800 text-left">
            {" "}
            <a href="/Admin" className="text-600">
              Doctores
            </a>
          </h3>
          <ul>
            <li className="mb-2 border-b border-gray-400 py-2 pl-4">
              <a href="/Admindoctoresdash" className="text-gray-600">
                Doctores Dashboard
              </a>
            </li>
            <li className="mb-2 border-b border-gray-400 py-2 pl-4">
              <a href="/Doctoreslista" className="text-gray-600">
                Doctores Lista
              </a>
            </li>
            <li className="mb-2 border-b border-gray-400 py-2 pl-4">
              <a href="/Doctorescards" className="text-gray-600">
                Doctores Cards
              </a>
            </li>
            <li className="mb-2 border-b border-gray-400 py-2 pl-4">
              <a href="/Doctoresprofile" className="text-gray-600">
                Doctores Profile
              </a>
            </li>
            <li className="mb-2 border-b border-gray-400 py-2 pl-4">
              <a href="" className="text-gray-600">
                Agregar Doctor
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="w-3/4 h-full p-8 bg-gradient-to-r from-blue-200 to-blue-300">
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-blue-800">
            Crear Perfil de Doctor
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Formulario */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="nombres" className="block text-blue-700">
                  Nombres:
                </label>
                <input
                  type="text"
                  name="nombres"
                  value={formData.nombres}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="paterno" className="block text-blue-700">
                  Apellido Paterno:
                </label>
                <input
                  type="text"
                  name="paterno"
                  value={formData.paterno}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="materno" className="block text-blue-700">
                  Apellido Materno:
                </label>
                <input
                  type="text"
                  name="materno"
                  value={formData.materno}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="edad" className="block text-blue-700">
                  Edad:
                </label>
                <input
                  type="number"
                  name="edad"
                  value={formData.edad}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="genero" className="block text-blue-700">
                  Género:
                </label>
                <select
                  name="genero"
                  value={formData.genero}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Selecciona...</option>
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div>
                <label htmlFor="createID" className="block text-blue-700">
                  ID de Creación:
                </label>
                <input
                  type="text"
                  name="createID"
                  value={formData.createID}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-blue-700">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="celular" className="block text-blue-700">
                  Celular:
                </label>
                <input
                  type="text"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="imagen" className="block text-blue-700">
                Imagen del Doctor:
              </label>
              <input
                type="file"
                name="imagen"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-lg mt-6 transition-all duration-300 hover:bg-blue-600"
            >
              Crear Doctor
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Agregardoctor;
