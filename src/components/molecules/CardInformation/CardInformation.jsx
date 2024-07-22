import React, { useState, useEffect } from "react";
import { Card } from "reactstrap";
import ParrafoRegistro from "../../atoms/ParrafoRegistro/ParrafoRegistro";
import TituloRegistro from "../../atoms/TituloRegistro/TituloRegistro";
import ButtonDelete from "../../atoms/ButtonDelete/ButtonDelete";

import styles from "./CardInformation.module.css";

function CardInformation({ Imagen, Gorra, Talla, Precio, Cantidad, carrito, OnDataChange }) {
  const [cantidadCarrito, setCantidadCarrito] = useState(Cantidad);
  const [precioTotal, setPrecioTotal] = useState(Precio);


  const handleCantidadCarrito = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) { // Solo números
      setCantidadCarrito(value);
    }
  };

  useEffect(() => {
    const proceso = cantidadCarrito * Precio
    setPrecioTotal(proceso)
  }, [cantidadCarrito]);

  return (
    <Card style={{ width: "60em", margin: "10px" }}>
      <div className={styles.contenedor}>
        <div className={styles.imagen}>
          <a href="vergorra">
            <img src={Imagen} alt="Gorra XD" width="200px" />
          </a>
        </div>

        <div className={styles.datos}>
          <ParrafoRegistro registro={Gorra} />
          <ParrafoRegistro registro={Talla} />
        </div>

        <div className={styles.cantidad}>
          {carrito === "carrito" ? (
            <>
              <input
                className={styles.input}
                type="number"
                placeholder={cantidadCarrito}
                onChange={handleCantidadCarrito}
                value={cantidadCarrito}
              />
            </>
          ) : (
            <>
              {Cantidad === "0" ? (
                <input
                  className={styles.input}
                  type="number"
                  placeholder="Cantidad"
                />
              ) : (
                <h1>{Cantidad}</h1>
              )}
            </>
          )}
        </div>

        <div className={styles.precio}>
          <TituloRegistro titulo={`Total: $${precioTotal}`} />
        </div>
        
        {(Cantidad === "0" || carrito === "carrito") && (
          <div className={styles.cantidad}>
            <ButtonDelete />
          </div>
        )}
      </div>
    </Card>
  );
}

export default CardInformation;
