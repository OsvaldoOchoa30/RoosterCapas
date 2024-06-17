import React from 'react'

import { Button } from 'reactstrap'

import styles from './ButtomRegistro.module.css'

function BottomRegistro({botonRegistro}) {
  return (
    <Button className={styles.button}>{botonRegistro}</Button>
  )
}

export default BottomRegistro