import React, { useState } from "react";
import Ordenar from "../../../assets/image/ordenar.png";
import Eliminar from "../../../assets/image/eliminar.png";

const TablaResponsive = ({ dataTable, setDataTable }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState({
    column: "num",
    direction: "asc",
  });

  const handleDelete = (numdni) => {
    setDataTable(dataTable.filter((item) => item.dni !== numdni));
  };

  const handleSort = (column) => {
    const direction =
      sortOrder.column === column && sortOrder.direction === "asc"
        ? "desc"
        : "asc";
    setSortOrder({ column, direction });

    const sortedData = [...dataTable].sort((a, b) => {
      if (a[column] < b[column]) return direction === "asc" ? -1 : 1;
      if (a[column] > b[column]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setDataTable(sortedData);
  };

  const filteredData = dataTable.filter(
    (item) =>
      item.nombres.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.paterno.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="overflow-x-auto w-9/12 mt-12 bg-gray-300 p-12">
      <div className="mb-4">
        <h4 className="text-2xl font-bold mb-8">Listado de pacientes</h4>
        <input
          type="text"
          placeholder="Buscar por nombre ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg p-4">
        <thead>
          <tr className="bg-gray-100">
            <th
              className=" cursor-pointer p-2 text-left text-sm font-semibold"
              onClick={() => handleSort("num")}
            >
              <div className="flex">
                DNI
                <img src={Ordenar} />
              </div>
            </th>
            <th
              className="cursor-pointer p-2 text-left text-sm font-semibold"
              onClick={() => handleSort("nombre")}
            >
              <div className="flex">
                Nombre
                <img src={Ordenar} />
              </div>
            </th>
            <th
              className="cursor-pointer p-2 text-left text-sm font-semibold"
              onClick={() => handleSort("edad")}
            >
              <div className="flex">
                Fecha nacimiento
                <img src={Ordenar} />
              </div>
            </th>
            <th
              className="cursor-pointer p-2 text-left text-sm font-semibold"
              onClick={() => handleSort("especialidad")}
            >
              <div className="flex">
                Celular
                <img src={Ordenar} />
              </div>
            </th>
            <th
              className="cursor-pointer p-2 text-left text-sm font-semibold"
              onClick={() => handleSort("doctor")}
            >
              <div className="flex">
                Genero
                <img src={Ordenar} />
              </div>
            </th>
            <th
              className="cursor-pointer p-2 text-left text-sm font-semibold"
              onClick={() => handleSort("fecha")}
            >
              <div className="flex">
                Fecha y Hora Cita
                <img src={Ordenar} />
              </div>
            </th>
            <th className="p-2 text-left text-sm font-semibold">Acción</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr
              key={item.dni + item.name}
              className="border-b hover:bg-gray-50"
            >
              <td className="p-2 text-sm">{item.dni}</td>
              <td className="p-2 text-sm">
                {item.nombres + " " + item.paterno}
              </td>
              <td className="p-2 text-sm">{item.fnac}</td>
              <td className="p-2 text-sm">{item.celular}</td>
              <td className="p-2 text-sm">{item.genero}</td>
              <td className="p-2 text-sm">{item.fecha_registro}</td>
              <td className="p-2 text-sm">
                <button
                  onClick={() => handleDelete(item.dni)}
                  className=" w-[46px] h-[46px]  bg-red-500 pr-1 pb-1 rounded-full flex  justify-center items-center hover:bg-red-600"
                >
                  <img src={Eliminar} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaResponsive;
