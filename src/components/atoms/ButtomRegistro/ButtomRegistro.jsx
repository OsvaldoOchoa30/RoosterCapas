import React from 'react'

import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

import styles from './ButtomRegistro.module.css'

function BottomRegistro({botonRegistro, pagina}) {
  return (
    <Link to={pagina}>
    <Button className={styles.button}>{botonRegistro}</Button>
    </Link>
  )
}

export default BottomRegistro