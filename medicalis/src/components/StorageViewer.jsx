import React, { useEffect, useState } from "react";

const StorageViewer = () => {
  const [specialty, setSpecialty] = useState(null);
  const [doctor, setDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null); // Estado para la fecha seleccionada
  const [selectedTime, setSelectedTime] = useState(null); // Estado para la hora seleccionada
  const [selectedConsultation, setSelectedConsultation] = useState(null); // Estado para el tipo de consulta

  useEffect(() => {
    // Función para actualizar el estado con los datos del localStorage
    const updateDataFromLocalStorage = () => {
      const storedSpecialty = localStorage.getItem("selectedSpecialty");
      const storedDoctor = localStorage.getItem("selectedDoctor");
      const storedDate = localStorage.getItem("selectedDate");
      const storedTime = localStorage.getItem("selectedTime"); // Cargar la hora desde localStorage
      const storedConsultation = localStorage.getItem("selectedConsultation"); // Cargar el tipo de consulta desde localStorage

      if (storedSpecialty) {
        setSpecialty(storedSpecialty);
      }
      if (storedDoctor) {
        const doctorObj = JSON.parse(storedDoctor);
        setDoctor(doctorObj);
      }
      if (storedDate) {
        setSelectedDate(new Date(storedDate)); // Cargar la fecha desde localStorage
      }
      if (storedTime) {
        setSelectedTime(storedTime); // Cargar la hora desde localStorage
      }
      if (storedConsultation) {
        setSelectedConsultation(JSON.parse(storedConsultation)); // Parsear el tipo de consulta
      }
    };

    // Llamar a la función una vez al cargar el componente
    updateDataFromLocalStorage();

    // Establecer un intervalo para verificar cambios en localStorage
    const interval = setInterval(updateDataFromLocalStorage, 1000); // Verificar cada 1 segundo

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Datos Seleccionados
      </h2>
      <div className="bg-white p-4 shadow-md rounded-lg">
        {specialty && doctor ? (
          <div>
            <p>
              <strong>Especialidad Seleccionada:</strong> {specialty}
            </p>
            <p>
              <strong>Nombre del Doctor:</strong> {doctor.name}
            </p>
            {selectedDate ? (
              <p>
                <strong>Fecha Seleccionada:</strong>{" "}
                {selectedDate.toLocaleDateString()}
              </p>
            ) : (
              <p>No se ha seleccionado una fecha aún.</p>
            )}
            {selectedTime ? (
              <p>
                <strong>Hora Seleccionada:</strong> {selectedTime}
              </p>
            ) : (
              <p>No se ha seleccionado una hora aún.</p>
            )}
            {selectedConsultation ? (
              <p>
                <strong>Tipo de Consulta:</strong> {selectedConsultation.type}{" "}
                <br />
                <strong>Precio:</strong> ${selectedConsultation.price}
              </p>
            ) : (
              <p>No se ha seleccionado un tipo de consulta aún.</p>
            )}
          </div>
        ) : (
          <p>No se ha seleccionado una especialidad o doctor aún.</p>
        )}
      </div>
    </div>
  );
};

export default StorageViewer;
