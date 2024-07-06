import React from 'react'
import CardData from '../../molecules/CardData/CardData'
import NavBarGlobal from '../../molecules/NavBarGlobal/NavBarGlobal'


function PedidosCompletados() {
    const cartaInormacion = [
        {
            Usuario: "Osvaldo Ochoa",
            FechaPedido: "Fecha de Peidio: 20/06/2024",
            FechaEntrega: "Fecha de Entrega: 27/06/2024",
            Total: "Completado",
            
        },
        {
            Usuario: "Fredy de la rosa",
            FechaPedido: "Fecha de Peidio: 20/06/2024",
            FechaEntrega: "Fecha de Entrega: 24/06/2024",
            Total: "Cancelado",
            
        },
        {
            Usuario: "Bruno Blanco",
            FechaPedido: "Fecha de Peidio: 20/06/2024",
            FechaEntrega: "Fecha de Entrega: 25/06/2024",
            Total: "Cancelado",
            
        },
    ]

  return (
    <>
    <NavBarGlobal/>
    <div style={{
        display: "block",
        justifyContent:"center",
        flexDirection: "column",
        marginTop: "80px"
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
          boton="Ver Mas"
        />
         </div>
      ))}
     
      </div>
    </>
  )
}


export default PedidosCompletados