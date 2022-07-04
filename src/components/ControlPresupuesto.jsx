import React from "react";
import NumberFormat from "react-number-format";

const ControlPresupuesto = ({ presupuesto }) => {
  const formatearCantidad = (cantidad) => {
    return Number(cantidad).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span>{formatearCantidad(0)}
        </p>
        <p>
          <span>Gastado: </span>{formatearCantidad(0)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;