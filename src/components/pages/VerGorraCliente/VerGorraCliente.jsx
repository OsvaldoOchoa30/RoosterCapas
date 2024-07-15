import React from "react";

import Caracteristicas from "../../molecules/Caracteristicas/Caracteristicas";
import NavBarPrincipal from "../../molecules/NavBarPrincipal/NavBarPrincipal";
import Footer from "../../molecules/Footer/Footer";

function VerGorraCliente() {
  const gorras = [
    {
      Imagen:
        "https://www.newera.mx/cdn/shop/files/60571871_59FIFTY_5950DAY595021803_CHIBUL_HGR_3QL_720x.png?v=1715043025",
      Titulo: "Chicago Bulls NBA 70th Anniversary",
      Precio: 15.99,
      Descripcion:
        "Descubre la elegancia y el estilo único de la Gorra New Era de los Yankees con Rosas. Esta gorra es una combinación perfecta de pasión deportiva y un toque de delicadeza floral, ideal para los aficionados que desean destacar en cualquier ocasión.",
    tallas:['7','7 1/4','7 1/2', '7 3/4', '7 1/8'] 
    },
    // unitalla tallas:['unitalla']
  ];

  return (
    <div>
      <div>
      <NavBarPrincipal />
      </div>

      <div>
      {gorras.map((gorras) => (
        <Caracteristicas
          nombre={gorras.Titulo}
          precio={gorras.Precio}
          descripcion={gorras.Descripcion}
          imagen={gorras.Imagen}
          tallas={gorras.tallas}
        />
      ))}
      </div>
      <Footer />
    </div>
  );
}

export default VerGorraCliente;
