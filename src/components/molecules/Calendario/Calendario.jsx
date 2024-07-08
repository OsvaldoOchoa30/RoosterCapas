import React from "react";
import { DatePicker } from "@nextui-org/date-picker";
import BottomRegistro from "../../atoms/ButtomRegistro/ButtomRegistro";

function Calendario() {
  return (
    <>
    <div>
      <DatePicker label="Selecciona la Fehca" className="max-w-[284px]" />
      <BottomRegistro botonRegistro="Asignar Fecha"/>
      <BottomRegistro botonRegistro="Ver Pedido"/>
      </div>
    </>
  );
}

export default Calendario;
