import React from "react";
import CustomLink from "./Utilities/CustomLink";
import CustomButton from "./Utilities/CustomButton";
import { useUserContext } from "../pages/login/context/UserContext";

const Navbar = () => {
  const { isLoggedIn } = useUserContext();

  return (
    <div className="bg-white  h-[5rem] w-[100%] overflow-hidden flex items-center justify-center z-50 sticky top-0  shadow-md">
      <nav className="w-[90%] flex items-center justify-between px-1">
        <div className="flex-shrink-0">
          <CustomLink
            to="/"
            tittle="Medicalis"
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085006/logo_k76c4y.png"
            tittleClass="text-xl ml-[1rem]  text-[#307bc4] hover:text-blue-300 flex items-center font-extrabold"
            imgClass="w-15 h-15 mr-4 ml-12"
          ></CustomLink>
        </div>

        <div className="space-x-20 flex text-[#8395a4] font-semibold text-[1rem]">
          <CustomLink
            to="/"
            tittle="Inicio"
            tittleClass="hover:text-blue-300"
          ></CustomLink>
          <CustomLink
            to="/nosotros"
            tittle="Sobre Nosotros"
            tittleClass="hover:text-blue-300"
          ></CustomLink>
          <CustomLink
            to="/especialidades"
            tittle="Especialidades"
            tittleClass="hover:text-blue-300"
          ></CustomLink>
          <CustomLink
            to="/contacto"
            tittle="Contacto"
            tittleClass="hover:text-blue-300"
          ></CustomLink>
        </div>

        {/* Mostrar el ícono de login solo si no está logueado */}
        {!isLoggedIn && (
          <div className="flex items-center space-x-4 ">
            <CustomLink
              to="/iniciarsesion"
              imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731087963/user_f1vfe6.png"
              imgClass="w-14 h-14"
            ></CustomLink>

            <CustomButton
              to="/agendar"
              tittle="Agendar mi cita"
              imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085888/arrow-right_kubz4k.png"
              tittleClass="flex items-center px-4 py-1 bg-[#2e72b2] text-white hover:text-blue-300 h-12 w-60 rounded-2xl font-semibold  justify-center"
            ></CustomButton>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
