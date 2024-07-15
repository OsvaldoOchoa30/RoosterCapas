import React from 'react'
import CardInformation from '../../molecules/CardInformation/CardInformation'
import NavBarPrincipal from '../../molecules/NavBarPrincipal/NavBarPrincipal';
import Footer from '../../molecules/Footer/Footer';
import TituloLogo from '../../atoms/TituloLogo/TituloLogo';
import styles from "./Compras.module.css"

function MisCompras() {

  const caps = [
    {
      Imagen: "https://www.innovasport.com/medias/gorra-new-era-59fifty-cerrada-yankees-mlb-classics-is-11591122-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDYxNzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGI1L2hhMS8xMTQ2NzM1OTY0OTgyMi5qcGd8ODhiZWM4ZjRjY2E2MGZhZWMzN2NiZjFiMzQwNzQ1ZGNmMTFiYjIzOWI3MTk2ZTE2ZWVjOTU5ODBjZGRkNDIzMQ",
      Titulo: "Gorra Negra",
      Talla: "Unitalla",
      Cantidad: "4",
      Precio: 15.99,
    },
    {
      Imagen: "https://www.innovasport.com/medias/gorra-new-era-59fifty-cerrada-yankees-mlb-classics-is-11591122-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDYxNzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGI1L2hhMS8xMTQ2NzM1OTY0OTgyMi5qcGd8ODhiZWM4ZjRjY2E2MGZhZWMzN2NiZjFiMzQwNzQ1ZGNmMTFiYjIzOWI3MTk2ZTE2ZWVjOTU5ODBjZGRkNDIzMQ",
      Titulo: "Gorra Negra",
      Talla: "Unitalla",
      Cantidad: "4",
      Precio: 15.99,
    },
    {
      Imagen: "https://www.innovasport.com/medias/gorra-new-era-59fifty-cerrada-yankees-mlb-classics-is-11591122-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDYxNzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGI1L2hhMS8xMTQ2NzM1OTY0OTgyMi5qcGd8ODhiZWM4ZjRjY2E2MGZhZWMzN2NiZjFiMzQwNzQ1ZGNmMTFiYjIzOWI3MTk2ZTE2ZWVjOTU5ODBjZGRkNDIzMQ",
      Titulo: "Gorra Negra",
      Talla: "Unitalla",
      Cantidad: "4",
      Precio: 15.99,
    },
    {
      Imagen: "https://www.innovasport.com/medias/gorra-new-era-59fifty-cerrada-yankees-mlb-classics-is-11591122-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDYxNzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGI1L2hhMS8xMTQ2NzM1OTY0OTgyMi5qcGd8ODhiZWM4ZjRjY2E2MGZhZWMzN2NiZjFiMzQwNzQ1ZGNmMTFiYjIzOWI3MTk2ZTE2ZWVjOTU5ODBjZGRkNDIzMQ",
      Titulo: "Gorra Negra",
      Talla: "Unitalla",
      Cantidad: "4",
      Precio: 15.99,
    },
    {
      Imagen: "https://www.innovasport.com/medias/gorra-new-era-59fifty-cerrada-yankees-mlb-classics-is-11591122-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDYxNzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGI1L2hhMS8xMTQ2NzM1OTY0OTgyMi5qcGd8ODhiZWM4ZjRjY2E2MGZhZWMzN2NiZjFiMzQwNzQ1ZGNmMTFiYjIzOWI3MTk2ZTE2ZWVjOTU5ODBjZGRkNDIzMQ",
      Titulo: "Gorra Negra",
      Talla: "Unitalla",
      Cantidad: "4",
      Precio: 15.99,
    },
    {
      Imagen: "https://www.innovasport.com/medias/gorra-new-era-59fifty-cerrada-yankees-mlb-classics-is-11591122-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDYxNzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGI1L2hhMS8xMTQ2NzM1OTY0OTgyMi5qcGd8ODhiZWM4ZjRjY2E2MGZhZWMzN2NiZjFiMzQwNzQ1ZGNmMTFiYjIzOWI3MTk2ZTE2ZWVjOTU5ODBjZGRkNDIzMQ",
      Titulo: "Gorra Negra",
      Talla: "Unitalla",
      Cantidad: "4",
      Precio: 15.99,
    },
  ];


  return (
    <>
      <div className={styles.principal}>
    <NavBarPrincipal/>
    </div>

<div className={styles.titulo}>
    <TituloLogo titulo="Mis Compras"/>
    </div>

    <div className={styles.principal}>
    {caps.map((cap) => (
      <div className={styles.secundario}> 
      <CardInformation
        Gorra={cap.Titulo}
        Talla={cap.Talla}
        Precio={cap.Precio}
        Imagen={cap.Imagen}
        Cantidad={cap.Cantidad}
        
      />
      </div>
    ))}
    </div>
    <Footer/>
    </>
  )
}

export default MisCompras