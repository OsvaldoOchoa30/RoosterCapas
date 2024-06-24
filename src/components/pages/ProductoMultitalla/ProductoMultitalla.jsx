import React from 'react'

import Caracteristicas from '../../molecules/Caracteristicas/Caracteristicas'
import NavBarPrincipal from '../../molecules/NavBarPrincipal/NavBarPrincipal'
import Footer from '../../molecules/Footer/Footer'

import Caracteristicas2 from '../../molecules/Caracteristicas2/Caracteristicas2';

function ProductoMultitalla() {

    const gorras = [
        {
          Imagen: "https://www.newera.mx/cdn/shop/products/60298842_1024x1024.png?v=1685653699",
          Titulo: "Gorra Negra",
          Precio: 15.99,
          Descripcion: "Descubre la elegancia y el estilo único de la Gorra New Era de los Yankees con Rosas. Esta gorra es una combinación perfecta de pasión deportiva y un toque de delicadeza floral, ideal para los aficionados que desean destacar en cualquier ocasión."
        }
      ];
    
      return (
        <div>
            <NavBarPrincipal/>
            {gorras.map((gorras) => (
            <Caracteristicas2
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

export default ProductoMultitalla