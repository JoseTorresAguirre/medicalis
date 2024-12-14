import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar los componentes necesarios de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Admin = () => {
  const incomeChartRef = useRef(null);
  const pharmacyChartRef = useRef(null);

  // Datos para el gráfico de ingresos
  const incomeData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"], // Etiquetas para el eje X
    datasets: [
      {
        label: "Ingreso",
        data: [1000, 1500, 2000, 1700, 2200], // Datos para el eje Y
        borderColor: "#4e73df",
        backgroundColor: "rgba(78, 115, 223, 0.2)",
        fill: true, // Área debajo de la línea
        tension: 0.4, // Curvatura de la línea
      },
    ],
  };

  // Opciones para el gráfico de ingresos
  const incomeOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Ingreso",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  // Datos para el gráfico de pedidos de farmacia
  const pharmacyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"], // Etiquetas para el eje X
    datasets: [
      {
        label: "Pedidos de farmacia",
        data: [50, 100, 150, 130, 170], // Datos para el eje Y
        borderColor: "#f1c40f",
        backgroundColor: "rgba(241, 196, 15, 0.2)",
        fill: true, // Área debajo de la línea
        tension: 0.4, // Curvatura de la línea
      },
    ],
  };

  // Opciones para el gráfico de pedidos de farmacia
  const pharmacyOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Pedidos de farmacia",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
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
            {" "}
            <a href="/Nosotros" className="text-600">
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
              <a href="" className="text-600">
                Agregar Doctor
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="w-[75%] h-[110%] p-8 bg-gradient-to-r from-blue-100 to-blue-200">
        {/* Encabezado con saludo */}
        <div className="bg-white p-6 shadow-md mb-8 border border-black rounded-3xl flex justify-between">
          {/* Texto alineado a la izquierda */}
          <div>
            <p>Buenos Días,</p>
            <p>Adm. Vladimir P.</p>
          </div>

          {/* Imagen alineada a la derecha */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcv48RJQ9boNpXsoIa0VivFxojkmZO68aPQ187ywAj0IuVsHp"
            alt="gerente"
            className="w-[300px] h-[300px] ml-4"
          />
        </div>

        {/* Doctores y Cirugías */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Doctores */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Doctores disponibles</h2>
              <div className="flex space-x-2">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center p-4 border rounded-lg">
                <img
                  src="https://placehold.co/50x50"
                  alt="Doctor 1"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">Bernardo James</h3>
                  <p className="text-sm text-gray-600">Pediatrics</p>
                  <div className="flex items-center">
                    <div className="text-yellow-500">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStarHalfAlt} />
                    </div>
                    <span className="ml-2 text-gray-600">4</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center p-4 border rounded-lg">
                <img
                  src="https://placehold.co/50x50"
                  alt="Doctor 2"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold"> Bshton Cozei</h3>
                  <p className="text-sm text-gray-600">Ginecólogo</p>
                  <div className="flex items-center">
                    <div className="text-yellow-500">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <span className="ml-2 text-gray-600">5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cirugías */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Próximas Cirugías</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Pediatría</p>
                <div className="text-blue-500 text-sm font-semibold">
                  1:00 PM
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-600">Pediatría</p>
                <div className="text-blue-500 text-sm font-semibold">
                  1:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        {/* Gráficos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* Gráfico de Ingresos */}
          <div
            className="bg-white p-4 rounded-lg shadow-md"
            style={{ height: "300px" }}
          >
            <h2 className="text-lg font-semibold mb-2">Ingreso</h2>
            <Line data={incomeData} options={incomeOptions} />
          </div>

          {/* Gráfico de Pedidos de Farmacia */}
          <div
            className="bg-white p-4 rounded-lg shadow-md"
            style={{ height: "300px" }}
          >
            <h2 className="text-lg font-semibold mb-2">Pedidos de farmacia</h2>
            <Line data={pharmacyData} options={pharmacyOptions} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
