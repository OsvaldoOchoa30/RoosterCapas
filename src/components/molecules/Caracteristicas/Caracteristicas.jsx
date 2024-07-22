import React, {useState, useEffect} from "react";

import TituloLogo from "../../atoms/TituloLogo/TituloLogo";
import TituloRegistro from "../../atoms/TituloRegistro/TituloRegistro";
import ParrafoRegistro from "../../atoms/ParrafoRegistro/ParrafoRegistro";
import ImputRegistro from "../../atoms/ImputRegistro/ImputRegistro";
import BottomRegistro from "../../atoms/ButtomRegistro/ButtomRegistro";

import styles from "./Caracteristicas.module.css";

function Caracteristicas({nombre, precio, descripcion, imagen, tallas}) {
  const [cantidad, setCantidad] = useState(1)
  const [total, setTotal] = useState(1)

  const handleCantidad = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) { // Solo números
      setCantidad(value);
    }
  }

  const stockGorra = 5

  const agregarAlCarrito = () => {
    if (cantidad === "") {
      alert("Cantidad de Gorra no Definida")
    } else if (cantidad === "0") {
      alert("No se permite el 0")
    } else if (cantidad > stockGorra) {
      alert("No se permite colocar un dato mayor al stock")
    } else{
      alert(`Cantidad agregada: ${cantidad}`);
      window.location.assign('/carrito');

    }
  };
  

  useEffect(() => {
    const proceso = cantidad * precio
    setTotal(proceso)
  }, [cantidad]);



  return (
    <>
      <div className={styles.principal}>
        <div className={styles.div1}>
          <img className={styles.img}
            src={imagen}
            alt=""
          />
          <div className={styles.description}>
            <ParrafoRegistro registro={descripcion} />
          </div>
        </div>

        <div className={styles.div2}>
          <TituloLogo titulo={nombre}/>
          <TituloRegistro titulo={total} />
          <div>
            <ParrafoRegistro 
              registro="TALLA" />
            {tallas.length >=1 ? <>
              {tallas.map((talla) =>(
                <BottomRegistro botonRegistro={talla} key={talla} />
              ))}
            </> : <>
              <p>Unitalla</p>
            </>}
          </div>

          <div>
            <ParrafoRegistro registro="CANTIDAD" />
            <ImputRegistro inputType="number" onChange={handleCantidad} value={cantidad} />
          </div>
          <BottomRegistro
            botonRegistro="AGREGAR CARRITO" 
            pagina="/carrito"
            color="dark"
            height="40px"
            width="390px"
            onClickF={agregarAlCarrito}
          />
        </div>
      </div>
    </>
  );
}

export default Caracteristicas;
