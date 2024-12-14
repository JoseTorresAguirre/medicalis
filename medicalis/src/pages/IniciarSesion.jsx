import React, { useState } from "react";
import CustomInput from "../components/Utilities/CustomInput.jsx";
import CustomButton2 from "../components/Utilities/CustomButton2";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import { useUserContext } from "./login/context/UserContext.jsx";

const IniciarSesion = () => {
  const { setIsLoggedIn } = useUserContext();
  // Definir el estado para los inputs de correo y contraseña
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Para manejar errores
  const navigate = useNavigate(); // Usamos useNavigate para la redirección

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Enviar la solicitud de login al backend
      const response = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password,
        },
        {
          withCredentials: true, // Asegura que las cookies se envíen
        }
      );
      console.log("Login exitoso", response.data);
      // Si la respuesta es exitosa, redirigir al usuario según su rol
      if (response.data.message === "Login exitoso") {
        setIsLoggedIn(true); // Cambia el estado global al iniciar sesión
        const userRole = response.data.role; // Aquí debes recibir el rol del usuario desde el backend

        sessionStorage.setItem("dataUser", JSON.stringify(response.data.info));
        // Dependiendo del rol, redirigir al usuario a diferentes páginas
        if (userRole === "admin") {
          navigate("/admin"); // Redirigir al dashboard de admin
        } else if (userRole === "especialista") {
          navigate("/especialista"); // Redirigir al dashboard del especialista
        } else if (userRole === "paciente") {
          navigate("/paciente"); // Redirigir al dashboard del paciente
        }
      } else {
        setError("Credenciales incorrectas"); // Mostrar error si la autenticación falla
      }
    } catch (err) {
      setError("Hubo un error al intentar iniciar sesión");
      console.error("Error al hacer login", err);
    }
  };

  return (
    <div
      className="flex justify-center items-center bg-cover bg-no-repeat bg-center h-[120vh] w-[100%] mb-[-15rem] -z-0"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dj3xwsle9/image/upload/v1731088481/banner_iniciar_znrqz7.png")`,
        backgroundPosition: "top center",
      }}
    >
      <div className="bg-white w-[30vw] h-[80vh]  rounded-[2rem] mt-[-4rem] mb-[13rem]">
        <div className="flex flex-col items-center my-8">
          <img
            src="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085006/logo_k76c4y.png"
            alt="img"
            className="w-[4rem] h-[4rem]"
          />
          <h1 className="text-[#307bc4] text-[2rem] font-semibold">
            Medicalis
          </h1>
          <h2 className="text-[#307bc4] text-[0.8rem] font-semibold">
            Ingrese sus datos.
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="w-[90%]  flex flex-col items-center mx-auto space-y-4 mt-[2rem]">
            <CustomInput
              containerClass="flex flex-col w-[90%]"
              tittle="Correo Electronico:"
              tittleClass="flex justify-start text-[#307bc4] text-[1rem] font-medium"
              type="email"
              placeholder="example@example.com"
              inputClass="flex justify-center w-[100%] p-2 border border-[#307bc4] rounded-md focus:border-red-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomInput
              containerClass="flex flex-col w-[90%]"
              tittle="Contraseña:"
              tittleClass="flex justify-start text-[#307bc4] text-[1rem] font-medium"
              type="password"
              placeholder="******"
              inputClass="flex justify-center w-[100%] p-2 border border-[#307bc4] rounded-md focus:border-red-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="text-red-500 text-center my-4">{error}</div>
          )}

          <div className="my-[2rem] w-[90%] flex flex-col items-center mx-auto space-y-4">
            <CustomButton2
              type="submit"
              tittle="Ingresar"
              bottonClass="bg-[#307bc4] py-2 text-white text-[1.2rem] font-semibold w-[100%] rounded-[2rem] text-center"
            />
            <CustomButton2
              to="/registrate"
              tittle="Registrate"
              bottonClass="bg-[#18A218] py-2 text-white text-[1.2rem] font-semibold w-[100%] rounded-[2rem] text-center"
            />
          </div>

          <div className="w-[90%]">
            <h1 className="text-[#307bc4] hover:text-red-500 text-[0.8rem] text-end cursor-pointer">
              Recuperar Contraseña
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IniciarSesion;
