import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

import Calendario from "../Calendario/Calendario";
import BottomRegistro from "../../atoms/ButtomRegistro/ButtomRegistro";

import React from "react";

function CardData({ usuario, fechaPedido, fechaEntrega, total, calendario }) {
  return (
    <>
      <Card
        color="light"
        style={{
          width: "60rem",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "50px",
            alignItems: "center",
          }}
        >
          <div>
            <CardSubtitle className="mb-2 text-muted" tag="h4">
              {usuario}
            </CardSubtitle>

            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {fechaPedido}
            </CardSubtitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {fechaEntrega}
            </CardSubtitle>
          </div>

          <div>
            <CardTitle tag="h3">{total}</CardTitle>
          </div>

         {calendario === "calendario" ? (
           <div>
           <Calendario />
         </div>
         ) : (
          <>
          <BottomRegistro botonRegistro="Ver Pedido"/>
          </>
         )} 

          
        </div>
      </Card>
    </>
  );
}

export default CardData;

/* 






    <div>
        <div>
            <ParrafoRegistro/>
            <ParrafoRegistro/>
            <ParrafoRegistro/>
        </div>
        <div>
            <TituloRegistro/>
        </div>
        <div>
            <BottomRegistro/>
        </div>
    </div>
*/
