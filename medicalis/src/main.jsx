import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/Tailwind.css";
import { UserProvider } from "./pages/login/context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
