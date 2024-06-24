import React from "react";

import TituloLogo from "../../atoms/TituloLogo/TituloLogo";
import TituloRegistro from "../../atoms/TituloRegistro/TituloRegistro";
import ParrafoRegistro from "../../atoms/ParrafoRegistro/ParrafoRegistro";
import ImputRegistro from "../../atoms/ImputRegistro/ImputRegistro";
import BottomRegistro from "../../atoms/ButtomRegistro/ButtomRegistro";

import styles from "./Caracteristicas2.module.css";

function Caracteristicas2({nombre, precio, descripcion, imagen} ) {
    return (
      <>
        <div className={styles.principal}>
          <div className={styles.div1}>
            <img
              src={imagen}
              alt=""
              height="500px"
            />
            <ParrafoRegistro registro= {descripcion} />
          </div>
  
          <div className={styles.div1}>
            <TituloLogo titulo={nombre}/>
            <TituloRegistro titulo={precio} />
            <ParrafoRegistro registro="TALLA" />
            <BottomRegistro />
            <BottomRegistro />
            <BottomRegistro />
            <BottomRegistro />
            <BottomRegistro />

  
            <ParrafoRegistro registro="CANTIDAD" />
            <ImputRegistro inputText="0" inputType="number" />
            <BottomRegistro botonRegistro="AGREGAR CARRITO" />
          </div>
        </div>
      </>
    );
  }
  
  export default Caracteristicas2;
  