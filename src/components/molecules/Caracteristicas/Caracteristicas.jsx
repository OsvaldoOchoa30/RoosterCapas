import React from "react";

import TituloLogo from "../../atoms/TituloLogo/TituloLogo";
import TituloRegistro from "../../atoms/TituloRegistro/TituloRegistro";
import ParrafoRegistro from "../../atoms/ParrafoRegistro/ParrafoRegistro";
import ImputRegistro from "../../atoms/ImputRegistro/ImputRegistro";
import BottomRegistro from "../../atoms/ButtomRegistro/ButtomRegistro";

import styles from "./Caracteristicas.module.css";

function Caracteristicas({nombre, precio, descripcion, imagen,tallas} ) {
  
  return (
    <>
      <div className={styles.principal}>
        <div className={styles.div1}>
          <img
            src={imagen}
            alt=""
          />
          <ParrafoRegistro registro= {descripcion} />
        </div>

        <div className={styles.div1}>
          <TituloLogo titulo={nombre}/>
          <TituloRegistro titulo={precio} />
          <ParrafoRegistro registro="TALLA" />
            {tallas.length >=1 ? <>
            {tallas.map((talla) =>(
              <BottomRegistro botonRegistro={talla} />
            ))}
            </> : <>
            <p>unitalla</p>
            </>}

          <ParrafoRegistro registro="CANTIDAD" />
          <ImputRegistro inputText="0" inputType="number" />
          <BottomRegistro botonRegistro="AGREGAR CARRITO" />
        </div>
      </div>
    </>
  );
}

export default Caracteristicas;
