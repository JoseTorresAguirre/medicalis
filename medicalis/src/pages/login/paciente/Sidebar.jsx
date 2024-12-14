import React from "react";

const Sidebar = ({ name, setPageSelected }) => {
  const handlePage = (page) => {
    setPageSelected(page);
  };
  return (
    <div className="h-screen w-96 bg-gray-600 text-white flex flex-col">
      {/* Logo */}
      <div className="flex items-center h-36 bg-blue-900 px-4 ">
        <div className="w-[45px] h-[45px] bg-white rounded-full  "></div>
        <div className=" w-10/12">
          <h1 className="text-md font-bold ml-4">{name}</h1>
        </div>
      </div>

      {/* Links de navegación */}
      <nav className="flex-1 bg-gray-300">
        <ul className="space-y-2 p-4">
          <li>
            <a
              href="#-resumen"
              onClick={() => handlePage("pacientes")}
              className="flex items-center p-2 text-gray-900 hover:bg-blue-700 hover:text-white rounded-md"
            >
              Pacientes Dashboard
            </a>
          </li>
          <li>
            <a
              href="#listado-pacientes"
              onClick={() => handlePage("lista")}
              className="flex items-center p-2 text-gray-900 hover:bg-blue-700 hover:text-white rounded-md"
            >
              Listado de Pacientes
            </a>
          </li>
          <li>
            <a
              href="#calendario"
              onClick={() => handlePage("config")}
              className="flex items-center p-2 text-gray-900 hover:bg-blue-700 hover:text-white rounded-md"
            >
              Ver Calendario
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
