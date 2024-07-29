import React from "react";
import { DatePicker } from "@nextui-org/date-picker";
import BottomRegistro from "../../atoms/ButtomRegistro/ButtomRegistro";
import {getLocalTimeZone, today} from "@internationalized/date";

function Calendario() {
  return (
    <>
      <div>
        <DatePicker
          label="Selecciona la Fecha"
          className="max-w-[284px]"
          minValue={today(getLocalTimeZone())}
          defaultValue={today(getLocalTimeZone()).subtract({ days: 0 })}
        />
        <BottomRegistro botonRegistro="Asignar Fecha" />
        <a href="/verpedido">
        <BottomRegistro botonRegistro="Ver Pedido" />
        </a>
      </div>
    </>
  );
}

export default Calendario;
