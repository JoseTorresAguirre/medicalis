import React, { useState } from "react";
import Eliminar from "../../../assets/image/eliminar.png";

const formatCitasToEvents = (citas) => {
  const events = {};
  citas.forEach((cita) => {
    const [date, time] = cita.fecha_hora.split(" "); // Divide en fecha y hora
    if (!events[date]) {
      events[date] = [];
    }
    events[date].push({
      hora: time, // Usa la hora como propiedad del objeto
      motivo: cita.motivo_consulta,
      estado: cita.estado,
      idCita: cita.id_cita,
    });
  });
  for (const date in events) {
    events[date].sort((a, b) => a.hora.localeCompare(b.hora));
  }

  return events;
};

const Calendar = ({ citas, deleteCita }) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  const [events, setEvents] = useState(formatCitasToEvents(citas));
  console.log("events", events);
  const generateCalendar = (year, month) => {
    const date = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = date.getDay();
    const weeks = [];
    let currentDay = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(null);
        } else if (currentDay <= daysInMonth) {
          week.push(currentDay);
          currentDay++;
        } else {
          week.push(null);
        }
      }
      weeks.push(week);
    }
    return weeks;
  };

  const calendar = generateCalendar(year, month);

  const goToNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const goToPreviousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <div className="p-4 w-9/12">
      <div className="flex justify-between items-center mb-4">
        <button onClick={goToPreviousMonth}>&lt; Anterior</button>
        <h2>{`${monthNames[month]} ${year}`}</h2>
        <button onClick={goToNextMonth}>Siguiente &gt;</button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 text-center">
        {calendar.map((week, weekIndex) => (
          <React.Fragment key={weekIndex}>
            {week.map((day, dayIndex) => {
              const dateKey = `${year}-${String(month + 1).padStart(
                2,
                "0"
              )}-${String(day).padStart(2, "0")}`;
              console.log("dateKey", dateKey, events[dateKey]);
              return (
                <div
                  key={dayIndex}
                  className={`p-2 ${day ? "bg-gray-100" : "bg-gray-200"}`}
                >
                  {day && <span>{day}</span>}
                  {events[dateKey] && (
                    <div className="mb-4">
                      {events[dateKey].map((event, index) => (
                        <div
                          key={index}
                          className="bg-green-200 text-left p-4 mt-4"
                        >
                          <div className="bg-blue-300 rounded">
                            {" "}
                            <span className="font-bold">Hora:</span>{" "}
                            {event.hora.substring(
                              0,
                              event.hora.lastIndexOf(":")
                            )}
                          </div>
                          <div>
                            {" "}
                            <span className="font-bold">Motivo:</span>{" "}
                            {event.motivo}
                          </div>
                          <div>
                            {" "}
                            <span className="font-bold">
                              Id de la cita:
                            </span>{" "}
                            {event.idCita}
                          </div>
                          <button
                            onClick={() => {
                              deleteCita(event.idCita);
                            }}
                            className="flex justify-center w-full mt-4 bg-blue-800 p-2 rounded-xl hover:bg-yellow-600 transition-colors duration-300 font-bold"
                          >
                            Eliminar <img src={Eliminar} className="ml-2" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
