import React from 'react'
import CardCaps from '../../molecules/CardCaps/CardCaps'
import NavBarGlobal from '../../molecules/NavBarGlobal/NavBarGlobal'
import { Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'


function HomeAdmin() {
    const gorras = [
        {
          Imagen: "https://http2.mlstatic.com/storage/developers-site-cms-admin/267001492404-pedidosporadelantado-head.jpg",
          Titulo: "Pedidos Nuevos",
          Precio: 15.99,
          Link:"/pedidosnuevos"
        },
        {
            Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyV-f6QCdR2SfflrGELWOfI28v3NtUiiI52Q&s",
            Titulo: "Pedidos en Proceso",
            Precio: 15.99,
            Link:'pedidosenproceso'
          },
          {
            Imagen: "https://images.prismic.io/simpliroute/YTAyMWQzYjktMGU1OC00YjgyLWI5NjEtMTI3MGUwYjVhNzAz_6263219f1c6e61e93bdfab02_preparaciocc81n-de-pedidos.jpg?auto=compress%2Cformat&rect=0%2C0%2C700%2C467&w=1920&fit=max&q=100",
            Titulo: "Pedidos Concluidos",
            Precio: 15.99,
            Link:"pedidoscompletados"
          },
    ]
  return (
    <>
    <NavBarGlobal/>
    <Container>
        <Row
        lg = "5"
        md="3"
        sm="2"
        xs="1"
        style={{ display: "flex", justifyContent: "center"}}
        >
              {gorras.map((gorra) => (
        <CardCaps
          nombreCap={gorra.Titulo}
          Precio={gorra.Precio}
          Imagen={gorra.Imagen}
          link={gorra.Link}
        />
      ))}    
        </Row>         
    </Container>
    </>

  )
}

export default HomeAdmin