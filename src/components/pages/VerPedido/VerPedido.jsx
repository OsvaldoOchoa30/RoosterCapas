import React from "react";
import TituloLogo from "../../atoms/TituloLogo/TituloLogo";
import TituloRegistro from "../../atoms/TituloRegistro/TituloRegistro";
import CardInformation from "../../molecules/CardInformation/CardInformation";
import BottomRegistro from "../../atoms/ButtomRegistro/ButtomRegistro";
import styles from './VerPedido.module.css';

function VerPedido() {
  const pedidosPendientes = [
    {
      Imagen: "https://www.innovasport.com/medias/gorra-new-era-59fifty-cerrada-yankees-mlb-classics-is-11591122-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDYxNzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGI1L2hhMS8xMTQ2NzM1OTY0OTgyMi5qcGd8ODhiZWM4ZjRjY2E2MGZhZWMzN2NiZjFiMzQwNzQ1ZGNmMTFiYjIzOWI3MTk2ZTE2ZWVjOTU5ODBjZGRkNDIzMQ",
      Titulo: "Gorra Negra",
      Talla: "Unitalla",
      Cantidad: "2",
      Precio: 15.99,
    },
    {
      Imagen:
        "https://www.innovasport.com/medias/gorra-new-era-59fifty-cerrada-yankees-mlb-classics-is-11591122-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDYxNzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGI1L2hhMS8xMTQ2NzM1OTY0OTgyMi5qcGd8ODhiZWM4ZjRjY2E2MGZhZWMzN2NiZjFiMzQwNzQ1ZGNmMTFiYjIzOWI3MTk2ZTE2ZWVjOTU5ODBjZGRkNDIzMQ",
      Titulo: "Gorra Negra",
      Talla: "Unitalla",
      Cantidad: "1",
      Precio: 15.99,
    },
  ];

  return (
    <div className={styles.verPedido}>
      <TituloLogo titulo="Osvaldo Ochoa" />
      {pedidosPendientes.map((pedido, index) => (
        <CardInformation
          key={index}
          Gorra={pedido.Titulo}
          Talla={pedido.Talla}
          Precio={pedido.Precio}
          Imagen={pedido.Imagen}
          Cantidad={pedido.Cantidad}
        />
      ))}
      <TituloRegistro titulo="Total: $3500.00" />
      <div className={styles.btnGroup}>

      </div>
    </div>
  );
}

export default VerPedido;
