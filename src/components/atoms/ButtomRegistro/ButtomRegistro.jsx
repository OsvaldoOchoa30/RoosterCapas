import React from 'react'

import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'



function BottomRegistro({botonRegistro, pagina, color, height, width }) {
  return (
    
    <Link to={pagina}>
    <Button
    style={{height, width}}
    color={color}
    >{botonRegistro}</Button>
    </Link>
  )
}

export default BottomRegistro