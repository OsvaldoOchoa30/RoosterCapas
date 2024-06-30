import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
  } from "reactstrap";

import React from 'react'

function CardData({usuario, fechaPedido, fechaEntrega, total, boton}) {
  return (
    <>
    
<Card
  color="light"
  style={{
    width: '60rem',
    display: 'flex',
    justifyContent: 'center',
    textAlign: "center",
    marginTop: "40px", 
   

    
  
    

  }}
>
  <div style={{
    display: "flex",
    justifyContent:"space-between",
    padding: "50px",
    alignItems: 'center',

  }}>
    <div>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h4"
    >
      {usuario}
    </CardSubtitle>

    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {fechaPedido}
    </CardSubtitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {fechaEntrega}
    </CardSubtitle>
    </div>

    <div>
    <CardTitle tag="h3">
      {total}
    </CardTitle>
    </div>

    <div>
    <Button>
      {boton}
    </Button>
    </div>
  </div>
</Card>
    
    </>

  )
}

export default CardData

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