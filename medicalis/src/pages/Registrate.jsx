import React, { useState } from "react";
import CustomButton2 from "../components/Utilities/CustomButton2";
import RegistroService from "../service/RegistroService";
import { toast, ToastContainer } from "react-toastify";
import { MdError } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Registrate = () => {
  const [formData, setFormData] = useState({
    tdni: "",
    dni: "",
    paterno: "",
    materno: "",
    nombres: "",
    fnac: "",
    genero: "",
    celular: "",
    pais: "",
    departamento: "",
    provincia: "",
    distrito: "",
    email: "",
  });

  const navigate = useNavigate(); // Usar useNavigate para redirigir

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const user = {
      tdni: formData.tdni,
      dni: formData.dni,
      paterno: formData.paterno,
      materno: formData.materno,
      nombres: formData.nombres,
      fnac: formData.fnac,
      genero: formData.genero,
      celular: formData.celular,
      pais: formData.pais,
      departamento: formData.departamento,
      provincia: formData.provincia,
      distrito: formData.distrito,
      email: formData.email,
    };

    console.log("Datos a enviar al backend:", user);

    try {
      const result = await RegistroService(user);

      toast.success(
        "¡Usuario registrado con éxito!",
        {
          icon: (
            <IoIosCheckmarkCircle className="text-green-500 text-[8rem] mx-auto" />
          ),
          className: "bg-black text-white font-bold rounded-[2rem] ",
          bodyClassName: "text-sm pt-4", // Cambia el tamaño del texto
          iconClassName: "text-xs", // Cambia el tamaño del icono
        },
        result,
        // Redirigir al login después de 5 segundos (5000ms)
        setTimeout(() => {
          navigate("/iniciarsesion"); // Redirige a la página de login
        }, 3000) // 5000ms = 5 segundos
      );
    } catch (error) {
      toast.error(
        `Fallo en el registro: ${error.message}`,
        {
          icon: <MdError className="text-red-500 text-[8rem] mx-auto" />,
          className: "bg-black text-white font-bold rounded-[2rem] ",
          bodyClassName: "text-sm pt-4", // Cambia el tamaño del texto
          iconClassName: "text-xs", // Cambia el tamaño del icono
          autoClose: 3000, //no funciona
        },

        setTimeout(() => {
          window.location.reload(); // Recarga la página como si presionaras F5
        }, 3000) // 5000ms = 5 segundos);
      );
    }
  };
  return (
    <div
      className=" flex justify-center items-center bg-cover bg-no-repeat bg-center h-[120vh] w-[100%]  mb-[-15rem] -z-0"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dj3xwsle9/image/upload/v1731088481/banner_iniciar_znrqz7.png")`,
        backgroundPosition: "top center", // Asegura que la parte superior de la imagen se alinee al contenedor
      }}
    >
      <div className="bg-[rgba(169,207,243,0.8)] w-[100%]  absolute z-30"></div>
      <div className="bg-white w-[60vw] h-[85%] mt-[-14rem]  rounded-[2rem] absolute z-40">
        <ToastContainer
          autoClose={3000} // Asegúrate de definir autoClose globalmente
          hideProgressBar={false}
          position="top-center"
          closeOnClick
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[100px] text-center"
        />
        <div className="w-[90%] mx-auto">
          <h1 className="text-[#274760] text-[1.5rem] font-semibold mt-[2rem]">
            Nuevo Registro
          </h1>
          <hr />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="w-[85%] mx-auto space-y-4">
            <div className="flex">
              <div className="w-[50%]">
                <div className="flex flex-col w-[90%]">
                  <label className="text-[#307bc4] text-[0.8rem] font-medium">
                    Tipo de Documento
                  </label>
                  <select
                    className="w-[100%] p-2 border border-[#307bc4] rounded-md focus:border-red-500 focus:outline-none"
                    required
                    name="tdni"
                    onChange={handleChange}
                    value={formData.tdni}
                  >
                    <option value="">
                      --Selecciona el Tipo de Documento--
                    </option>
                    <option value="dni">dni</option>
                  </select>
                </div>
              </div>
              <div className="w-[50%]">
                <div className="flex flex-col w-[90%]">
                  <label className="text-[#307bc4] text-[0.8rem] font-medium">
                    Documento:
                  </label>
                  <input
                    type="text"
                    placeholder="71859652"
                    name="dni"
                    value={formData.dni}
                    onChange={handleChange}
                    maxLength="8"
                    className="w-[100%] p-2 border border-[#307bc4] rounded-md focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-[50%]">
                <div className="flex flex-col w-[90%]">
                  <label className="text-[#307bc4] text-[0.8rem] font-medium">
                    Apellido Paterno:
                  </label>
                  <input
                    type="text"
                    placeholder="Ramos"
                    name="paterno"
                    alue={formData.paterno}
                    onChange={handleChange}
                    maxLength="8"
                    className="w-[100%] p-2 border border-[#307bc4] rounded-md focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-[50%]">
                <div className="flex flex-col w-[90%]">
                  <label className="text-[#307bc4] text-[0.8rem] font-medium">
                    Apellido Materno:
                  </label>
                  <input
                    type="text"
                    placeholder="Zevallos"
                    name="materno"
                    value={formData.materno}
                    onChange={handleChange}
                    maxLength="20"
                    className="w-[100%] p-2 border border-[#307bc4] rounded-md focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="w-[100%]">
                <div className="flex flex-col w-[95%]">
                  <label className="text-[#307bc4] text-[0.8rem] font-medium">
                    Nombres:
                  </label>
                  <input
                    type="text"
                    placeholder="Danna Marcela"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                    maxLength="20"
                    className="w-[100%] p-2 border border-[#307bc4] rounded-md focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-[50%]">
                <div className="flex flex-col w-[90%]">
                  <label className="text-[#307bc4] text-[0.8rem] font-medium">
                    Fecha de Nacimiento:
                  </label>
                  <input
                    type="date"
                    name="fnac"
                    value={formData.fnac}
                    onChange={handleChange}
                    maxLength="50"
                    className="w-[100%] p-2 border border-[#307bc4] rounded-md focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-[50%]">
                <div className="flex flex-col w-[90%]">
                  <label className="text-[#307bc4] text-[0.8rem] font-medium">
                    Genero:
                  </label>
                  <select
                    className="w-[100%] p-2 border border-[#307bc4] rounded-md focus:border-red-500 focus:outline-none"
                    required
                    name="genero"
                    onChange={handleChange}
                    value={formData.genero}
                  >
                    <option className="text-gray-300" value="">
                      --Selecciona tu Genero--
                    </option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                    <option value="O">Otros</option>
                  </select>
                </div>
              </div>
              <div className="w-[50%]">
                <div className="flex flex-col w-[90%]">
                  <label className="text-[#307bc4] text-[0.8rem] font-medium">
                    Celular:
                  </label>
                  <input
                    type="text"
                    placeholder="999888777"
                    name="celular"
                    value={formData.celular}
                    onChange={handleChange}
                    maxLength="9"
                    className="w-[100%] p-2 border border-[#307bc4] rounded-md focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-[50%]">
                <div className="flex flex-col w-[90%]">
                  <label className="text-[#307bc4] text-[0.8rem] font-medium">
                    Pais:
                  </label>
                  <select
                    className="w-[100%] p-2 border border-[#307bc4] rounded-md focus:border-red-500 focus:outline-none"
                    required
                    name="pais"
                    onChange={handleChange}
                    value={formData.pais}
                  >
                    <option className="text-gray-300" value="">
                      --Selecciona tu Pais--
                    </option>
                    <option value="Peru">Peru</option>
                  </select>
                </div>
              </div>
              <div className="w-[50%]">
                <div className="flex flex-col w-[90%]">
                  <label className="text-[#307bc4] text-[0.8rem] font-medium">
                    Departamento:
                  </label>
                  <select
                    className="w-[100%] p-2 border border-[#307bc4] rounded-md focus:border-red-500 focus:outline-none"
                    required
                    name="departamento"
                    onChange={handleChange}
                    value={formData.departamento}
                  >
                    <option className="text-gray-300" value="">
                      --Selecciona tu Departamento--
                    </option>
                    <option value="Lima">Lima</option>
                    <option value="Arequipa">Arequipa</option>
                    <option value="Ica">Ica</option>
                  </select>
                </div>
              </div>
              <div className="w-[50%]">
                <div className="flex flex-col w-[90%]">
                  <label className="text-[#307bc4] text-[0.8rem] font-medium">
                    Provincia:
                  </label>
                  <select
                    className="w-[100%] p-2 border border-[#307bc4] rounded-md focus:border-red-500 focus:outline-none"
                    required
                    name="provincia"
                    onChange={handleChange}
                    value={formData.provincia}
                  >
                    <option className="text-gray-300" value="">
                      --Selecciona tu Provincia--
                    </option>
                    <option value="Lima">Lima</option>
                    <option value="Callao">Callao</option>
                    <option value="Los Olivos">Los Olivos</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="w-[50%]">
                <div className="flex flex-col w-[90%]">
                  <label className="text-[#307bc4] text-[0.8rem] font-medium">
                    Distrito:
                  </label>
                  <select
                    className="w-[100%] p-2 border border-[#307bc4] rounded-md focus:border-red-500 focus:outline-none"
                    required
                    name="distrito"
                    onChange={handleChange}
                    value={formData.distrito}
                  >
                    <option className="text-gray-300" value="">
                      --Selecciona tu Distrito--
                    </option>
                    <option value="Lima">Lima</option>
                    <option value="Callao">Callao</option>
                    <option vvalue="Los Olivos">Los Olivos</option>
                  </select>
                </div>
              </div>
              <div className="w-[50%]">
                <div className="flex flex-col w-[90%]">
                  <label className="text-[#307bc4] text-[0.8rem] font-medium">
                    Correo Electronico:
                  </label>
                  <input
                    type="email"
                    placeholder="example@example.com"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    maxLength="50"
                    className="w-[100%] p-2 border border-[#307bc4] rounded-md focus:border-red-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="text-end">
              <CustomButton2
                type="submit"
                tittle="Registrarse"
                bottonClass="bg-[#274760] text-white text-[1.5rem] font-semibold mt-[1rem] py-1 px-8 rounded-[1rem]"
              ></CustomButton2>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registrate;
