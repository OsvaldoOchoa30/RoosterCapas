import React from 'react'

import Caracteristicas from '../../molecules/Caracteristicas/Caracteristicas'
import NavBarPrincipal from '../../molecules/NavBarPrincipal/NavBarPrincipal'
import Footer from '../../molecules/Footer/Footer'


function ProductoUnitalla() {
  const gorras = [
    {
      Imagen: "https://m.media-amazon.com/images/I/41KnKvrPGAL._AC_SY580_.jpg",
      Titulo: "Gorra Negra",
      Precio: 15.99,
      Descripcion: "Descubre la elegancia y el estilo único de la Gorra New Era de los Yankees con Rosas. Esta gorra es una combinación perfecta de pasión deportiva y un toque de delicadeza floral, ideal para los aficionados que desean destacar en cualquier ocasión."
    }
  ];

  return (
    <div>
        <NavBarPrincipal/>
        {gorras.map((gorras) => (
        <Caracteristicas
                  nombre={gorras.Titulo}
                  precio={gorras.Precio}
                  descripcion={gorras.Descripcion}
                  imagen={gorras.Imagen}
        />
        ))}
        <Footer/>
    </div>
  )
}

export default ProductoUnitalla