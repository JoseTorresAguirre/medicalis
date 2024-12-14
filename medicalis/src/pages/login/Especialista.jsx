import { useState, useEffect } from "react";
import Sidebar from "./paciente/Sidebar";
import ModalSpecialist from "./paciente/ModalSpecialist";
import equipomedico from "../../assets/image/equipo-medico.png";
import examen from "../../assets/image/examen.png";
import cirugia from "../../assets/image/cirugia-plastica.png";
import paciente from "../../assets/image/paciente.png";
import TablaResponsive from "./paciente/Table";
import Calendar from "./paciente/Calendar";
import { DashboardResume } from "./paciente/DashboardResume";
import GetPacientes from "../../service/GetPacientes";
import GetCitas from "../../service/GetCitas";
import DeleteCitas from "../../Service/DeleteCitas";

const Especialista = () => {
  const [pageSelected, setPageSelected] = useState("pacientes");
  const [pacientesArr, setPacientesArr] = useState([]);
  const [citasArr, setCitasArr] = useState([]);
  const [citasPendientes, setCitasPendientes] = useState(0);
  const [resultDeleteCita, setResultDeleteCita] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dataUser = sessionStorage.getItem("dataUser");
  const boyOrGirl = dataUser.genero === "M" ? "Dr." : "Dra.";

  const fetchPacientes = async () => {
    try {
      const data = await GetPacientes();
      setPacientesArr(data.pacientes);
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchCitas = async () => {
    try {
      const data = await GetCitas(dataUser.id_usuario);
      setCitasArr(data.citas);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    setIsModalOpen(true);
    fetchPacientes();
    fetchCitas();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (resultDeleteCita !== "") {
      setIsLoading(true); // Indicar que se está recargando
      Promise.all([fetchPacientes(), fetchCitas()]).then(() =>
        setIsLoading(false)
      );
    }
  }, [resultDeleteCita]);

  const deleteCita = async (idCita) => {
    try {
      const data = await DeleteCitas(idCita);
      console.log("data delete cita", data);
      setResultDeleteCita(data.message); // Actualizar el mensaje de éxito
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    // Verifica si necesitas cambiar el estado de pageSelected
    if (pacientesArr.length === 0) {
      setPageSelected("pacientes");
    }
  }, [pacientesArr]);
  useEffect(() => {
    // Verifica si necesitas cambiar el estado de pageSelected
    if (citasArr.length !== 0) {
      setCitasPendientes(
        citasArr.filter((elem) => elem.estado === "pendiente").length
      );
    }
  }, [citasArr]);

  if (isLoading) {
    return (
      <div className="bg-blue-200 w-full h-screen flex flex-col justify-center items-center">
        <Spinner size="36" />
        <div className="text-3xl w-2/4 ml-4 mt-4 text-[#17248e] text-center">
          Cargando datos...
        </div>
      </div>
    );
  }

  if (citasArr.length === 0 || pacientesArr.length === 0) {
    return (
      <div className="flex w-full">
        {/* Sidebar */}
        <Sidebar
          name={`${dataUser.nombres} ${dataUser.paterno} ${dataUser.materno}`}
          setPageSelected={setPageSelected}
        />

        {/* Contenido principal */}
        <div className="flex flex-col items-center h-[170vh] bg-blue-200 w-full pb-[10rem]">
          <div className="flex text-left bg-gray-100 h-[100%] shadow mt-12 mx-4  w-9/12 p-12 rounded-3xl ">
            <div className="w-8/12 text-xl">
              <div className="mb-12">
                <p>Buenos días</p>
                <p>{`${boyOrGirl} ${dataUser.nombres} ${dataUser.paterno} ${dataUser.materno}`}</p>
                <p>Citas programadas para hoy.</p>
              </div>
              <div className="flex h-36">
                <div className="w-36 flex flex-col items-center">
                  <div className=" w-[70px] h-[70px]">
                    <img src={paciente} />
                  </div>
                  <p className="text-[1rem]">{pacientesArr.length}</p>
                  <p className="text-[1rem]">Pacientes</p>
                </div>
                <div className="w-36 flex flex-col items-center">
                  <div className=" w-[70px] h-[70px] ">
                    <img src={cirugia} />
                  </div>
                  <p className="text-[1rem]">{citasArr.length}</p>
                  <p className="text-[1rem]">Citas</p>
                </div>
                <div className="w-36 flex flex-col items-center">
                  <div className=" w-[70px] h-[70px] ">
                    <img src={examen} />
                  </div>
                  <p className="text-center text-[1rem]">x</p>
                  <p className="text-center text-[1rem]">Revisiones</p>
                </div>
              </div>
            </div>
            <div className="flex  flex-row-reverse w-4/12">
              <div className="w-5-12">
                <img
                  src={equipomedico}
                  className="w-[10rem] h-[10rem] object-cover"
                />
              </div>
            </div>
          </div>

          <ModalSpecialist
            dataUser={dataUser}
            setIsModalOpen={setIsModalOpen}
            isModalOpen={isModalOpen}
          />
          {pageSelected === "pacientes" && (
            <DashboardResume
              setPage={setPageSelected}
              cantPacientes={pacientesArr.length}
              cantCitas={citasArr.length}
            />
          )}
          {pageSelected === "lista" && (
            <TablaResponsive
              dataTable={pacientesArr}
              setDataTable={setPacientesArr}
            />
          )}
          {pageSelected === "config" && (
            <Calendar citas={citasArr} deleteCita={deleteCita} />
          )}
        </div>
      </div>
    );
  }
};

export default Especialista;
