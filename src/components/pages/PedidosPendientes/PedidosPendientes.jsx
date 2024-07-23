import React from 'react'
import CardData from '../../molecules/CardData/CardData'
import NavBarGlobal from '../../molecules/NavBarGlobal/NavBarGlobal'

function PedidosPendientes() {
    const cartaInormacion = [
        {
            Usuario: "Osvaldo Ochoa",
            FechaPedido: "Fecha de Peidio: 20/06/2024",
            FechaEntrega: "Fecha de Entrega: Pendiente",
            Total: "$1,500.00",
        },
        {
            Usuario: "Fredy de la rosa",
            FechaPedido: "Fecha de Peidio: 20/06/2024",
            FechaEntrega: "Fecha de Entrega: Pendiente",
            Total: "$1,500.00",
            
        },
        {
            Usuario: "Osvaldo Ochoa",
            FechaPedido: "Fecha de Peidio: 20/06/2024",
            FechaEntrega: "Fecha de Entrega: Pendiente",
            Total: "$1,500.00",
        },
    ]

  return (
    <>
    <NavBarGlobal/>
    <div style={{
        display: "block",
        justifyContent:"center",
        flexDirection: "column"
    }}>
    {cartaInormacion.map((data) => (
        <div style={{
            display: "flex",
            justifyContent: "center",
            width: "100%"
        }}>
        <CardData
            usuario={data.Usuario}
          fechaPedido={data.FechaPedido}
          fechaEntrega={data.FechaEntrega}          
          total={data.Total}
          calendario="calendario"
          

        />
         </div>
      ))}
     
      </div>
    </>
  )
}

export default PedidosPendientes