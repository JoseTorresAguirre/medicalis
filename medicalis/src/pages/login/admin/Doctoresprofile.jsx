import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../../../assets/css/App.css";

const Doctoresprofile = () => {
  return (
    <div className="flex h-screen bg-gray-200">
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
      <main className="w-[75%] h-[130%] p-8 bg-gradient-to-r from-blue-100 to-blue-200"></main>
    </div>
  );
};

export default Doctoresprofile;
