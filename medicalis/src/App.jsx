import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Footer from "./components/Footer";
import IniciarSesion from "./pages/IniciarSesion";
import Registrate from "./pages/Registrate";
import Paciente from "./pages/login/Paciente";
import Especialista from "./pages/login/Especialista";
import Admin from "./pages/login/Admin";
import Agendar from "./pages/login/agendar";
import Pagar from "./pages/login/Pagar";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Admindoctoresdash from "./pages/login/admin/Admindoctoresdash";
import Doctoreslista from "./pages/login/admin/Doctoreslista";
import Editardoctor from "./pages/login/admin/Editardoctor";
import Doctoresprofile from "./pages/login/admin/Doctoresprofile";
import DoctoresCards from "./pages/login/admin/DoctoresCards";
import Agregardoctor from "./pages/login/admin/Agregardoctor";

const App = () => {
  const initialOptions = {
    "client-id":
      "AQ4A0PC2vMuCWUugzaXAkuQWqNOEWbCyEDwYXfDdxXExhw0ExoDsH9GY6Yb5a2B58SooNzpdaPL732VW", // Reemplaza con tu Client ID de Sandbox
    currency: "USD",
  };
  return (
    <PayPalScriptProvider options={initialOptions}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/iniciarsesion" element={<IniciarSesion />} />
          <Route path="/registrate" element={<Registrate />} />
          <Route path="/paciente" element={<Paciente />} />
          <Route path="/especialista" element={<Especialista />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/agendar" element={<Agendar />} />
          <Route path="/pagar" element={<Pagar />} />
          <Route path="/doctoreslista" element={<Doctoreslista />}></Route>
          <Route path="/admindoctoresdash" element={<Admindoctoresdash />}>
            {" "}
          </Route>
          <Route path="/editardoctor" element={<Editardoctor />}></Route>
          <Route path="/doctoresprofile" element={<Doctoresprofile />}></Route>
          <Route path="/doctorescards" element={<DoctoresCards />}></Route>
          <Route path="/agregardoctor" element={<Agregardoctor />}></Route>
        </Routes>
        <Footer />
      </Router>
    </PayPalScriptProvider>
  );
};

export default App;
