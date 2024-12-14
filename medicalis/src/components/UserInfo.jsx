import React, { useEffect, useState } from "react";
import axios from "axios";
import { LuUserRoundCheck } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../pages/login/context/UserContext";

const UserInfo = () => {
  const { isLoggedIn, setIsLoggedIn } = useUserContext(); // Acceder al contexto
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user-info", {
          withCredentials: true,
        });
        const { nombres, paterno, email } = response.data;
        setUsuario({ nombres, paterno, email });
      } catch (err) {
        setError(err.response?.data?.message || "Error al obtener los datos");
      }
    };

    fetchUsuario();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:5000/logout", {
        withCredentials: true,
      });
      console.log(response.data.message);

      // Cambiar el estado de isLoggedIn a false para reflejar que el usuario ha cerrado sesión
      setIsLoggedIn(false);

      // Redirigir al usuario a la página de inicio de sesión
      navigate("/iniciarsesion");
    } catch (err) {
      console.error("Error al hacer logout", err);
      setError("Error al cerrar sesión");
    }
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!usuario) {
    return <p>Cargando información del usuario...</p>;
  }

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <p className="flex justify-center items-center space-x-2">
        <LuUserRoundCheck className="h-8 w-8 text-green-500" />
        <span>
          {usuario.nombres} {usuario.paterno}
        </span>{" "}
        <span>{usuario.email}</span>
        <button onClick={handleLogout} className="ml-4 text-red-500">
          <IoIosLogOut className="h-8 w-8 text-red-500" />
        </button>
      </p>
    </div>
  );
};

export default UserInfo;
