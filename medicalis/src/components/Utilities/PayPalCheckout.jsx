import React, { useEffect, useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalCheckout = () => {
  const [price, setPrice] = useState(null); // Inicializamos como null hasta que se cargue el precio

  // Usamos useEffect para leer el precio desde el localStorage cuando el componente se monta
  useEffect(() => {
    const storedConsultation = localStorage.getItem("selectedConsultation");
    if (storedConsultation) {
      const consultation = JSON.parse(storedConsultation);
      setPrice(consultation.price); // Si existe, lo guardamos en el estado
    }
  }, []);

  // Si el precio aún no se ha cargado, mostramos un mensaje de carga
  if (price === null) {
    return <div>Cargando el precio...</div>;
  }

  return (
    <div
      className="flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center min-h-screen w-full"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dj3xwsle9/image/upload/v1731088481/banner_iniciar_znrqz7.png")`,
        backgroundPosition: "top center",
      }}
    >
      <div className="flex justify-center items-center flex-1">
        <div className="max-w-lg w-full p-6 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Realiza tu pago
          </h2>

          <p className="text-gray-600 mb-4 text-center">
            Estás a punto de realizar un pago de{" "}
            <strong>${price.toFixed(2)}</strong>. Haz clic en el botón de abajo
            para completar tu pago.
          </p>

          {/* Contenedor para el botón de PayPal */}
          <div className="flex justify-center w-full mb-4">
            <PayPalButtons
              className="w-[50vw] z-10" // Establecer un tamaño de ancho para el botón
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: price.toFixed(2), // Usamos el precio que viene del estado
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  alert(`Pago completado por ${details.payer.name.given_name}`);
                  // Redirigimos al inicio después del pago exitoso
                  window.location.href = "/"; // Aquí puedes poner la URL de tu página de inicio
                });
              }}
              onError={(err) => {
                console.error("Error en el pago:", err);
              }}
            />
          </div>

          <div className="mt-4 text-center text-gray-500">
            <p>Tu pago está protegido por PayPal.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayPalCheckout;
