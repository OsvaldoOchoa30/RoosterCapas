import React from "react";

import Caracteristicas from "../../molecules/Caracteristicas/Caracteristicas";
import NavBarPrincipal from "../../molecules/NavBarPrincipal/NavBarPrincipal";
import Footer from "../../molecules/Footer/Footer";

function VerGorraCliente() {
  const gorras = [
    {
      Imagen:
        "https://www.newera.mx/cdn/shop/products/60298842_1024x1024.png?v=1685653699",
      Titulo: "Gorra Negra",
      Precio: 15.99,
      Descripcion:
        "Descubre la elegancia y el estilo único de la Gorra New Era de los Yankees con Rosas. Esta gorra es una combinación perfecta de pasión deportiva y un toque de delicadeza floral, ideal para los aficionados que desean destacar en cualquier ocasión.",
    tallas:['7','7 1/4','7 1/2', '7 3/4', '7 1/8'] 
    },
    // unitalla tallas:['unitalla']
  ];

  return (
    <div>
      <NavBarPrincipal />
      {gorras.map((gorras) => (
        <Caracteristicas
          nombre={gorras.Titulo}
          precio={gorras.Precio}
          descripcion={gorras.Descripcion}
          imagen={gorras.Imagen}
          tallas={gorras.tallas}
        />
      ))}
      <Footer />
    </div>
  );
}

export default VerGorraCliente;
