import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../../../assets/css/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Admindoctoresdash = () => {
  const patientsChartRef = useRef(null);
  const appointmentsChartRef = useRef(null);
  const typesOfPatientsChartRef = useRef(null); // Nueva referencia para el gráfico circular

  useEffect(() => {
    // Configuración del gráfico para "Patients"
    const patientsChart = new Chart(patientsChartRef.current, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Nuevos pacientes",
            data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160],
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            fill: true,
            tension: 0.4,
          },
          {
            label: "Pacientes que regresan",
            data: [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          tooltip: {
            mode: "index",
            intersect: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Configuración del gráfico para "Appointments"
    const appointmentsChart = new Chart(appointmentsChartRef.current, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Equipo",
            data: [20, 30, 45, 60, 80, 100, 110, 120, 130, 150, 160, 180],
            backgroundColor: "rgba(54, 162, 235, 0.8)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Configuración del gráfico para "Tipos de Pacientes"
    const typesOfPatientsChart = new Chart(typesOfPatientsChartRef.current, {
      type: "doughnut",
      data: {
        labels: ["Hombres", "Mujeres", "Niños"],
        datasets: [
          {
            data: [15, 30, 60],
            backgroundColor: ["#3498db", "#e74c3c", "#f1c40f"],
            hoverBackgroundColor: ["#2980b9", "#c0392b", "#f39c12"],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });

    // Limpieza de gráficos al desmontar
    return () => {
      patientsChart.destroy();
      appointmentsChart.destroy();
      typesOfPatientsChart.destroy();
    };
  }, []);

  return (
    <div className="flex h-[180vh] bg-gray-200">
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
      <main className="w-[75%] h-[180vh] p-8 bg-gradient-to-r from-blue-100 to-blue-200 pt-[5rem] ">
        {/* Encabezado con saludo */}
        <div className="container">
          <div className="profile-card">
            <img
              alt="Doctor's profile picture"
              height="100"
              src="https://static.vecteezy.com/system/resources/thumbnails/024/585/326/small_2x/3d-happy-cartoon-doctor-cartoon-doctor-on-transparent-background-generative-ai-png.png"
              width="100"
            />
            <div className="info">
              <p>Buenos dias,</p>
              <h2>Dr. Vladimir P.</h2>
              <p>Medicina general</p>
              <p>
                Tiene un total de
                <span className="appointments"> 18 Citas </span>
                hoy.
              </p>
              <div class="estrellas-resena">
                <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
              </div>
            </div>
          </div>
          <div className="stats-card">
            <div className="card">
              <div className="logo1">
                <img
                  className="img-logo"
                  src="https://res.cloudinary.com/dywerh4d2/image/upload/v1734105848/230x0w-_1_-removebg-preview_kyziss.png"
                  alt=""
                />
              </div>
              <h3 className="text-logo1">3809</h3>
              <p>Pacientes</p>
              <div className="percentage high">42% Alto</div>
            </div>

            <div className="card">
              <div className="logo2">
                <img
                  className="img-logo"
                  src="https://res.cloudinary.com/dywerh4d2/image/upload/v1734105758/lungs_13494704_jujniq.png"
                  alt=""
                />
              </div>
              <h3 className="text-logo2">906</h3>
              <p>Cirugías</p>
              <div className="percentage low">21% Bajo</div>
            </div>

            <div className="card">
              <div className="logo3">
                <img
                  className="img-logo"
                  src="https://res.cloudinary.com/dywerh4d2/image/upload/v1734106560/moneda-circulo-icono-dolar-color-verde_1076610-55162-removebg-preview_w83lql.png"
                  alt=""
                />
              </div>
              <h3 className="text-logo3">$986K</h3>
              <p>Ganancias</p>
              <div className="percentage medium">90% Alto</div>
            </div>
          </div>
        </div>

        {/* Gráficos */}
        <div className="charts">
          <div className="chart">
            <h3>Patients</h3>
            <canvas ref={patientsChartRef}></canvas>
            <p>20% Más alto que el año pasado.</p>
          </div>
          <div className="chart">
            <h3>Appointments</h3>
            <canvas ref={appointmentsChartRef}></canvas>
            <p>33% más alto que el año pasado.</p>
          </div>
        </div>
        <div class="contenedor-tablero">
          <div class="tarjeta">
            <h3 class="titulo-tarjeta">Reseñas de Pacientes</h3> <br />
            <div class="elemento-resena">
              <img
                class="avatar-resena"
                alt="Foto de perfil de Wendi Combs"
                src="https://storage.googleapis.com/a1aa/image/8euPmN1GWSxVWKkXdM0cjhJ3Avqw6r8kLxgOCL5ty81MjL9JA.jpg"
              />
              <div class="contenido-resena">
                <h4 class="nombre-resena">Wendi Combs</h4>
                <p class="texto-resena">
                  Tuve una muy buena experiencia aquí. Encontré un excelente
                  psiquiatra y terapeuta. Analizaron mi caso profundamente y sus
                  medicamentos me ayudaron mucho.
                </p>
                <div class="estrellas-resena">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
                </div>
              </div>
            </div>
            <div class="elemento-resena">
              <img
                class="avatar-resena"
                alt="Foto de perfil de Nick Morrow"
                src="https://storage.googleapis.com/a1aa/image/sQ0kasS2VXJfRqQojVCwNxQKbLjzm2HapfUYLcsStuAcGX6TA.jpg"
              />
              <div class="contenido-resena">
                <h4 class="nombre-resena">Nick Morrow</h4>
                <p class="texto-resena">
                  La Dra. Jessika escucha con mucha paciencia y te da tiempo
                  suficiente para explicar tus problemas. Diagnosticó
                  rápidamente y me recuperé pronto; además, me ayudó a cambiar
                  mis hábitos de vida.
                </p>
                <div class="estrellas-resena">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
                </div>
              </div>
            </div>
            <div class="elemento-resena">
              <img
                class="avatar-resena"
                alt="Foto de perfil de Carole Dodson"
                src="https://storage.googleapis.com/a1aa/image/HRtnnGnC7kqgIJM2ZFGJdes0sennHDTkE8L6ORoNmJJdGX6TA.jpg"
              />
              <div class="contenido-resena">
                <h4 class="nombre-resena">Carole Dodson</h4>
                <p class="texto-resena">
                  Es muy solidaria y da buenas sugerencias. Buena cirujana
                  conocida desde hace 10 años.
                </p>
                <div class="estrellas-resena">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
                  <FontAwesomeIcon icon={faStar} style={{ color: "#f39c12" }} />
                </div>
              </div>
            </div>
          </div>

          <div class="tarjeta">
            <h3 class="titulo-tarjeta">Tipos de Pacientes</h3>
            <div class="seccion-grafico">
              <canvas ref={typesOfPatientsChartRef}></canvas>
              <div class="estadisticas-grafico">
                <p>
                  <span>15%</span> menos pacientes hombres respecto al mes
                  pasado.
                </p>
                <p>
                  <span>30%</span> más pacientes mujeres respecto al mes pasado.
                </p>
                <p>
                  <span>60%</span> más pacientes niños respecto al mes pasado.
                </p>
              </div>
            </div>
          </div>

          <div class="tarjeta">
            <h3 class="titulo-tarjeta">Premios</h3>
            <div class="seccion-premios">
              <div class="slider">
                <img
                  className="img-tarjeta"
                  src="https://static.vecteezy.com/system/resources/previews/022/476/135/non_2x/illustration-with-a-cartoon-doctor-banner-for-national-doctor-s-day-celebration-medicine-flat-design-for-social-media-poster-banner-vector.jpg"
                  alt=""
                />
              </div>
              <div class="controles-premios">
                <i class="fas fa-chevron-left flecha-premio" id="prev"></i>
                <i class="fas fa-chevron-right flecha-premio" id="next"></i>
              </div>
              <div class="contador-premios">1 / 3</div>
              <p>Awards received in 2024.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admindoctoresdash;
