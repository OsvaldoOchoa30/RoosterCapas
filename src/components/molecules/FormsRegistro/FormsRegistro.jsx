import React from 'react'
import ButtoomRegistro from '../../atoms/ButtomRegistro/ButtomRegistro'
import ImputRegistro from '../../atoms/ImputRegistro/ImputRegistro'
import ParrafoRegistro from '../../atoms/ParrafoRegistro/ParrafoRegistro'
import TituloRegistro from '../../atoms/TituloRegistro/TituloRegistro'

import styles from './FormsRegistro.module.css'

import {Form, FormGroup, Col} from "reactstrap"


function FormsRegistro() {
  return (
    <>
    <div className={styles.container}> 
        <TituloRegistro titulo="Registro"/>
        <ParrafoRegistro registro="Para conocer nuestros productos."/>

        
        
     <Form >
        <FormGroup row style={{display:'flex',justifyContent:'center'}}>
        <Col sm={10}>
          <ImputRegistro inputText="Nombre de Usuario" inputType="texto"/>
        </Col>
        </FormGroup>

        <FormGroup row style={{display:'flex',justifyContent:'center'}}>
        <Col sm={10}>
          <ImputRegistro inputText="Contraseña" inputType="password"/>
        </Col>
        </FormGroup>

        <FormGroup row style={{display:'flex',justifyContent:'center'}}>
        <Col sm={10}>
          <ImputRegistro inputText="Correo Electronico" inputType="email" />
        </Col>
        </FormGroup>

        <FormGroup row style={{display:'flex',justifyContent:'center'}}>
        <Col sm={10}>
        <ImputRegistro inputText="Numero de Telefono" inputType="number"/>
        </Col>
        </FormGroup>

        <FormGroup row style={{display:'flex',justifyContent:'center'}}>
        <Col sm={10} style={{display:'flex',justifyContent:'center'}}>
        <ButtoomRegistro botonRegistro="Registrarse"/>
        </Col>
        </FormGroup>

        
    </Form>
        </div>

   
    
    </>

  )
}

//En la linea 12 tengo que usar {} en vez de ''
export default FormsRegistro