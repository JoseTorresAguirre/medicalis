import pacientes from "../../../assets/image/pacientes.png";
import paciented from "../../../assets/image/paciented.png";
import lab from "../../../assets/image/lab.png";
import opd from "../../../assets/image/OPD.png";
import citas from "../../../assets/image/citas.png";
import doctores from "../../../assets/image/doctores.png";
import staff from "../../../assets/image/staff.png";
import operaciones from "../../../assets/image/operaciones.png";
import admisiones from "../../../assets/image/admisiones.png";
import altas from "../../../assets/image/altas.png";
import flecha from "../../../assets/image/flecha-correcta.png";

// eslint-disable-next-line react/prop-types
export const DashboardResume = ({ setPage, cantPacientes, cantCitas }) => {
  console.log("PACIENTES CANTIADA", cantPacientes);
  const goToList = () => {
    setPage("lista");
  };
  const goToCalendar = () => {
    setPage("config");
  };

  return (
    <section className="bg-white rounded-3xl p-12 w-9/12 mt-16">
      <div className="grid grid-cols-4  gap-4">
        <div className="border-solid border-2 border-gray-400 rounded-xl p-4 ">
          <div className="grid grid-cols-2 gap-4">
            <div className=" h-48">
              <img src={pacientes} />
            </div>
            <div className="">
              <p className="text-4xl text-gray-800 font-bold mb-4">
                {cantPacientes}
              </p>
              <p className="text-[1rem] text-gray-500 font-semibold ">
                Pacientes
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-gray-100 hover:text-blue-600 hover:border border-blue-600 transition duration-300"
              onClick={goToCalendar}
            >
              Este mes
            </button>
            <button
              className="text-[0.8rem] flex  justify-center items-center px-4 py-2 bg-gray-100 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
              onClick={goToList}
            >
              Ver todos
              <img height={24} width={24} src={flecha} className="ml-2" />
            </button>
          </div>
        </div>
        <div className="border-solid border-2 border-gray-400 rounded-xl p-4 ">
          <div className="grid grid-cols-2 gap-4">
            <div className=" h-48">
              <img src={opd} />
            </div>
            <div className="">
              <p className="text-4xl text-gray-800 font-bold mb-4">30</p>
              <p className="text-[1rem] text-gray-500 font-semibold ">OPD</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-gray-100 hover:text-blue-600 hover:border border-blue-600 transition duration-300"
              onClick={goToCalendar}
            >
              Este mes
            </button>
            <button
              className="text-[0.8rem] flex  justify-center items-center px-4 py-2 bg-gray-100 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
              onClick={goToList}
            >
              Ver todos
              <img height={24} width={24} src={flecha} className="ml-2" />
            </button>
          </div>
        </div>
        <div className="border-solid border-2 border-gray-400 rounded-xl p-4 ">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-48">
              <img src={paciented} />
            </div>
            <div className="">
              <p className="text-4xl text-gray-800 font-bold mb-4">10</p>
              <p className="text-[1rem] text-gray-500 font-semibold ">CPU</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-gray-100 hover:text-blue-600 hover:border border-blue-600 transition duration-300"
              onClick={goToCalendar}
            >
              Este mes
            </button>
            <button
              className="text-[0.8rem] flex  justify-center items-center px-4 py-2 bg-gray-100 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
              onClick={goToList}
            >
              Ver todos
              <img height={24} width={24} src={flecha} className="ml-2" />
            </button>
          </div>
        </div>
        <div className="border-solid border-2 border-gray-400 rounded-xl p-4 ">
          <div className="grid grid-cols-2 gap-4">
            <div className=" h-48">
              <img src={lab} />
            </div>
            <div className="">
              <p className="text-4xl text-gray-800 font-bold mb-4">15</p>
              <p className="text-[1rem] text-gray-500 font-semibold ">Lab</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-gray-100 hover:text-blue-600 hover:border border-blue-600 transition duration-300"
              onClick={goToCalendar}
            >
              Este mes
            </button>
            <button
              className="text-[0.8rem] flex  justify-center items-center px-4 py-2 bg-gray-100 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
              onClick={goToList}
            >
              Ver todos
              <img height={24} width={24} src={flecha} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-6">
        <div className="flex  flex-col items-center justify-center border-solid border-2 border-gray-400 rounded-xl p-4 ">
          <div>
            <img height={110} width={110} src={citas} />
          </div>

          <p className="text-blue-900 font-semibold text-xl mt-2">Citas</p>
          <p className="text-blue-900 font-bold text-xl mt-2">{cantCitas}</p>
        </div>
        <div className="flex  flex-col items-center justify-center border-solid border-2 border-gray-400 rounded-xl p-4 ">
          <div>
            <img height={110} width={110} src={doctores} />
          </div>

          <p className="text-blue-900 font-semibold text-xl mt-2">Doctores</p>
          <p className="text-blue-900 font-bold text-xl mt-2">25</p>
        </div>
        <div className="flex  flex-col items-center justify-center border-solid border-2 border-gray-400 rounded-xl p-4 ">
          <div>
            <img height={110} width={110} src={staff} />
          </div>

          <p className="text-blue-900 font-semibold text-xl mt-2">Staff</p>
          <p className="text-blue-900 font-bold text-xl mt-2">35</p>
        </div>
        <div className="flex  flex-col items-center justify-center border-solid border-2 border-gray-400 rounded-xl p-4 ">
          <div>
            <img height={110} width={110} src={operaciones} />
          </div>

          <p className="text-blue-900 font-semibold text-xl mt-2">
            Operaciones
          </p>
          <p className="text-blue-900 font-bold text-xl mt-2">82</p>
        </div>
        <div className="flex  flex-col items-center justify-center border-solid border-2 border-gray-400 rounded-xl p-4 ">
          <div>
            <img height={110} width={110} src={admisiones} />
          </div>

          <p className="text-blue-900 font-semibold text-xl mt-2">Admisiones</p>
          <p className="text-blue-900 font-bold text-xl mt-2">182</p>
        </div>
        <div className="flex  flex-col items-center justify-center border-solid border-2 border-gray-400 rounded-xl p-4 ">
          <div>
            <img height={110} width={110} src={altas} />
          </div>

          <p className="text-blue-900 font-semibold text-xl mt-2">Altas</p>
          <p className="text-blue-900 font-bold text-xl mt-2">130</p>
        </div>
      </div>
    </section>
  );
};
