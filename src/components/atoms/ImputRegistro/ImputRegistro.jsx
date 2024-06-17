import React from 'react'

import {Input} from "reactstrap"

import styles from './ImputRegistro.module.css'

function ImputRegistro({inputText, inputType}) {
  return (
    <Input className={styles.input} type ={inputType} placeholder={inputText} />
  )
}

export default ImputRegistro