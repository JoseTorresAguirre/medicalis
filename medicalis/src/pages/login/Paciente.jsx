import React, { useState, useEffect } from "react";
import CustomCard4 from "../../components/Utilities/CustomCard4";
import UserInfo from "../../components/UserInfo";
import { useNavigate } from "react-router-dom";

const Paciente = () => {
  const navigate = useNavigate(); // Usar useNavigate para redirigir
  const [alertVisible, setAlertVisible] = useState(false); // Para manejar la visibilidad de la alerta

  // Función para manejar la selección de la tarjeta
  const handleCardClick = (tittle) => {
    // Almacenar el tittle seleccionado en localStorage
    localStorage.setItem("selectedSpecialty", tittle);

    // Mostrar la alerta personalizada
    setAlertVisible(true);

    // Esperar 2 segundos antes de redirigir automáticamente
    setTimeout(() => {
      setAlertVisible(false); // Ocultar la alerta
      navigate("/agendar"); // Redirige a la página de agendar
    }, 2000); // 2000ms = 2 segundos
  };

  return (
    <div
      className="flex justify-center items-center bg-cover bg-no-repeat bg-center h-[80vh] w-[100%]  mb-[-15rem] -z-0"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dj3xwsle9/image/upload/v1731088481/banner_iniciar_znrqz7.png")`,
        backgroundPosition: "top center",
      }}
    >
      <div className="w-[90%]">
        <section className="flex justify-end mt-[-4rem]">
          <UserInfo />
        </section>
        <div className="text-[#274760] text-[3rem] text-center font-semibold mb-[5rem]">
          <h1>Escoga la Especialidad</h1>
        </div>
        <div className="flex flex-col justify-center relative z-10">
          <div className="flex space-x-8">
            <CustomCard4
              imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731084999/emergency_jbvb0t.png"
              tittle="Emergency Department"
              onClick={() => handleCardClick("Emergency Department")}
            />
            <CustomCard4
              imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085008/pediatric_sate7n.png"
              tittle="Pediatric Department"
              onClick={() => handleCardClick("Pediatric Department")}
            />
            <CustomCard4
              imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085001/gynecology_np4arl.png"
              tittle="Gynecology Department"
              onClick={() => handleCardClick("Gynecology Department")}
            />
            <CustomCard4
              imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731084998/cardiology_wk8gey.png"
              tittle="Cardiology Department"
              onClick={() => handleCardClick("Cardiology Department")}
            />
            <CustomCard4
              imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085006/neurology_gwcowu.png"
              tittle="Neurology Department"
              onClick={() => handleCardClick("Neurology Department")}
            />
          </div>
        </div>
      </div>

      {/* Notificación personalizada */}
      {alertVisible && (
        <div
          className="fixed top-0 left-0 right-0 bg-[#274760] text-white p-4 text-center font-semibold"
          style={{
            zIndex: 9999,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <p>Especialidad seleccionada. Redirigiendo...</p>
        </div>
      )}
    </div>
  );
};

export default Paciente;
