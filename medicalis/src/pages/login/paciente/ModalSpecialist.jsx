/* eslint-disable react/prop-types */
import { useState } from "react";

const ModalSpecialist = ({ dataUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const logoUrl =
    "https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085006/logo_k76c4y.png";
  const closeModal = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <div className="flex w-full ">
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 h-[110vh]">
          <div className="bg-white p-6 rounded-xl shadow-xg text-right">
            <button
              onClick={closeModal}
              className="text-blue-700 font-semibold hover:text-blue-900"
            >
              Cerrar
            </button>
            <div className="text-center bg-white p-8 rounded-md shadow  mx-4   ">
              <img
                src={logoUrl}
                alt="Logo"
                className="w-16 h-16 mx-auto mb-2"
              />
              <h1 className="text-[1rem] font-bold text-blue-600">
                Bienvenido Doctor (a) - {dataUser.nombres}
              </h1>

              <div className="mt-1">
                <p className="text-gray-700 italic text-[0.8rem]">
                  {" "}
                  &quot;El mejor doctor es el que más esperanza inspira.&quot; -
                  Samuel Taylor Coleridge
                </p>
              </div>

              <div className="mt-2 bg-gray-200 p-4 rounded">
                <h2 className="text-[1rem] text-blue-500 font-semibold mb-1">
                  Agenda de Hoy
                </h2>
                <ul className="list-disc list-inside text-[0.8rem]">
                  <li>9:00 AM - Consulta con Pedro Pérez</li>
                  <li>11:00 AM - Revisión médica de Ana García</li>
                  <li>2:00 PM - Consulta con María López</li>
                </ul>
              </div>

              <div className="mt-4 bg-gray-300 p-4 rounded">
                <h2 className="text-[1rem]  text-blue-500 font-semibold mb-2">
                  Información de Contacto
                </h2>
                <p className="text-[0.8rem]">Email: {dataUser.email}</p>
                <p className="text-[0.8rem]">Teléfono: {dataUser.celular}</p>
              </div>

              <div className="mt-8 bg-gray-200 p-4 rounded">
                <h2 className="text-[1rem]  text-blue-500 font-semibold mb-2">
                  Últimas Noticias
                </h2>
                <p className="text-[0.8rem]">
                  Se ha lanzado una nueva actualización de la aplicación.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalSpecialist;
