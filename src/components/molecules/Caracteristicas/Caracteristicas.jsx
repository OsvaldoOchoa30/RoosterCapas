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
          <img className={styles.img}
            src={imagen}
            alt=""
          />
          <div className={styles.description}>
          <ParrafoRegistro registro= {descripcion} />
          </div>
        </div>

        <div className={styles.div2}>
          <TituloLogo titulo={nombre}/>
          <TituloRegistro titulo={precio} />
          <div>
          <ParrafoRegistro 
           registro="TALLA" />
            {tallas.length >=1 ? <>
            {tallas.map((talla) =>(
              <BottomRegistro botonRegistro={talla} />
            ))}
            </> : <>
            <p>Unitalla</p>
            </>}
            </div>

<div>
          <ParrafoRegistro registro="CANTIDAD" />
          <ImputRegistro inputText="0" inputType="number" />
          </div>
          <BottomRegistro
          botonRegistro="AGREGAR CARRITO" 
          pagina="/carrito"
          color="dark"
          height="40px"
          width="390px"
          
          />
        </div>
      </div>
    </>
  );
}

export default Caracteristicas;
