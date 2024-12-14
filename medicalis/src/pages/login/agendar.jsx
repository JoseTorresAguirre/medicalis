import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserInfo from "./../../components/UserInfo";
import StorageViewer from "./../../components/StorageViewer";
import Calendar from "react-calendar"; // Importa react-calendar
import "react-calendar/dist/Calendar.css"; // Importa los estilos de react-calendar

const Agendar = () => {
  const navigate = useNavigate();
  const doctors = [
    {
      name: "Dr.Pawan",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjyBHQWQJQhF3eKXfAC_EQ9QEqgr8yP81bX-gn7Dlz9psCtSOE",
      day: 4,
      times: ["10:00 AM", "11:00 AM", "12:00 PM"],
    },
    {
      name: "Dr.Wanitha",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjyBHQWQJQhF3eKXfAC_EQ9QEqgr8yP81bX-gn7Dlz9psCtSOE",
      day: 7,
      times: ["9:00 AM", "10:00 AM", "11:00 AM"],
    },
    {
      name: "Dr.Udara",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjyBHQWQJQhF3eKXfAC_EQ9QEqgr8yP81bX-gn7Dlz9psCtSOE",
      day: 10,
      times: ["1:00 PM", "2:00 PM", "3:00 PM"],
    },
    {
      name: "Dr.Santos",
      img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQjyBHQWQJQhF3eKXfAC_EQ9QEqgr8yP81bX-gn7Dlz9psCtSOE",
      day: 15,
      times: ["8:00 AM", "9:00 AM", "10:00 AM"],
    },
  ];

  const [selectedDoctor, setSelectedDoctor] = useState(
    doctors && doctors.length > 0 ? doctors[0] : null
  );
  const [selectedTime, setSelectedTime] = useState(
    selectedDoctor ? selectedDoctor.times[0] : ""
  );
  const [selectedDate, setSelectedDate] = useState(null); // Estado para la fecha seleccionada
  const [showModal, setShowModal] = useState(false);

  const consultationTypes = [
    { type: "Consulta General", price: 50 },
    { type: "Consulta Especialista", price: 80 },
    { type: "Consulta de Emergencia", price: 120 },
  ];

  const [selectedConsultation, setSelectedConsultation] = useState(
    consultationTypes[0]
  );

  const handleConsultationChange = (e) => {
    const selectedType = consultationTypes.find(
      (consultation) => consultation.type === e.target.value
    );
    setSelectedConsultation(selectedType);
    localStorage.setItem("selectedConsultation", JSON.stringify(selectedType));
  };

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    localStorage.setItem("selectedDoctor", JSON.stringify(doctor));
  };

  // Definición de la función handleDateChange
  const handleDateChange = (date) => {
    setSelectedDate(date); // Establecer la fecha seleccionada
    localStorage.setItem("selectedDate", date); // Guardar la fecha en el localStorage
  };

  // Maneja el cambio de hora
  const handleTimeChange = (e) => {
    const time = e.target.value;
    setSelectedTime(time); // Actualiza el estado con la hora seleccionada
    localStorage.setItem("selectedTime", time); // Guarda la hora en localStorage
  };

  useEffect(() => {
    const storedDoctor = localStorage.getItem("selectedDoctor");
    if (storedDoctor) {
      setSelectedDoctor(JSON.parse(storedDoctor));
    }
    const storedDate = localStorage.getItem("selectedDate");
    if (storedDate) {
      setSelectedDate(new Date(storedDate)); // Cargar la fecha desde localStorage
    }
    const storedTime = localStorage.getItem("selectedTime");
    if (storedTime) {
      setSelectedTime(storedTime); // Cargar la hora desde localStorage
    }
    const storedConsultation = localStorage.getItem("selectedConsultation");
    if (storedConsultation) {
      setSelectedConsultation(JSON.parse(storedConsultation));
    }
  }, []);

  useEffect(() => {
    if (selectedDoctor) {
      setSelectedTime(selectedDoctor.times[0]); // Asegura que se asigna un valor para selectedTime
    }
  }, [selectedDoctor]);

  if (!doctors || doctors.length === 0) {
    return <p>No hay doctores disponibles.</p>;
  }

  return (
    <div
      className="flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center h-[100%] w-[100%] mb-[-15rem] -z-0"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dj3xwsle9/image/upload/v1731088481/banner_iniciar_znrqz7.png")`,
        backgroundPosition: "top center",
      }}
    >
      <div className="w-[90%] flex flex-row items-start justify-between">
        <div className="flex flex-col justify-center items-center h-[150vw] p-4 mt-[-30rem] w-[70%]">
          <div className="bg-white/0 p-8 rounded-lg shadow-lg flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8 w-full max-w-full">
            <div className="flex items-start">
              <div>
                <h2 className="text-[#274760] text-[1.5rem] text-center font-semibold mb-[5rem]">
                  Escoja al especialista de su preferencia
                </h2>
                <div className="space-y-4 w-full">
                  {doctors && doctors.length > 0 ? (
                    doctors.map((doctor, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-white p-4 rounded-lg shadow"
                      >
                        <img
                          src={doctor.img}
                          alt={`Doctor ${doctor.name}`}
                          className="rounded-full mr-4"
                        />
                        <div>
                          <h3
                            onClick={() => handleDoctorClick(doctor)}
                            className="text-[#274760] text-[1.3rem] font-semibold mb-[1rem] cursor-pointer"
                          >
                            {doctor.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus lacinia odio vitae vestibulum.
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No hay doctores disponibles en este momento.</p>
                  )}
                </div>
              </div>
            </div>
            <div className="w-[30%] mt-8">
              {/* Calendario */}
              <div>
                <h1 className="text-2xl text-[#274760] mb-4 text-center pb-[4rem]">
                  Calendario
                </h1>
                <Calendar
                  onChange={handleDateChange} // Usa handleDateChange aquí
                  value={selectedDate}
                  minDate={new Date()} // Evita seleccionar fechas pasadas
                />
              </div>
              {/* Selector de Hora */}
              <div className="mt-4">
                <h2 className="text-xl text-[#274760] text-center mb-4">
                  Elige una Hora
                </h2>
                <select
                  value={selectedTime}
                  onChange={handleTimeChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {selectedDoctor &&
                    selectedDoctor.times.map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))}
                </select>
              </div>
              <div className="mt-4">
                <h2 className="text-xl text-[#274760] text-center mb-4">
                  Tipo de Consulta
                </h2>
                <select
                  value={selectedConsultation.type}
                  onChange={handleConsultationChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {consultationTypes.map((consultation, index) => (
                    <option key={index} value={consultation.type}>
                      {`${consultation.type} - $${consultation.price}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <section className="flex flex-col justify-start items-start space-y-8 mt-8 w-[30%] sticky top-0">
          <div className="w-full">
            <UserInfo />
          </div>
          <div className="w-full">
            <StorageViewer />
          </div>
          {/* Botón para confirmar la selección */}
          <div className="w-full mt-4">
            <button
              onClick={() => navigate("/pagar")} // Asegúrate de poner la ruta correcta aquí
              className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
            >
              Confirmar Selección
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Agendar;
