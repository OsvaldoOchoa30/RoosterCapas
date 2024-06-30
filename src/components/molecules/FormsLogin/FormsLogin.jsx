import React from "react";
import TituloRegistro from "../../atoms/TituloRegistro/TituloRegistro";
import ParrafoRegistro from "../../atoms/ParrafoRegistro/ParrafoRegistro";
import BottomRegistro from "../../atoms/ButtomRegistro/ButtomRegistro";
import ImputRegistro from "../../atoms/ImputRegistro/ImputRegistro";


import styles from "./FormsLogin.module.css";

import { Form, FormGroup, Col } from "reactstrap";

function FormsLogin() {
  return (
    <>
      <div className={styles.container}>
        <TituloRegistro titulo="Inicia de Sesion" />
        <ParrafoRegistro registro="Para conocer nuestros productos" />

        <Form>
          <FormGroup row style={{ display: "flex", justifyContent: "center" }}>
            <Col sm={10}>
              <ImputRegistro inputText="Nombre de Usuario" inputType="texto" />
            </Col>
          </FormGroup>

          <FormGroup row style={{ display: "flex", justifyContent: "center" }}>
            <Col sm={10}>
              <ImputRegistro inputText="Contraseña" inputType="password" />
            </Col>
          </FormGroup>

          <FormGroup row style={{ display: "flex", justifyContent: "center" }}>
            <Col sm={10} style={{ display: "flex", justifyContent: "center" }}>
              <BottomRegistro botonRegistro="Iniciar Sesion"  /> 
            </Col>
          </FormGroup>

          <ParrafoRegistro registro="Si no tienes cuenta, puedes crear una." />

          <FormGroup row style={{ display: "flex", justifyContent: "center" }}>
            <Col sm={10} style={{ display: "flex", justifyContent: "center" }}>
              <BottomRegistro botonRegistro="Registrarse" />
            </Col>
          </FormGroup>
        </Form>
      </div>
    </>
  );
}

export default FormsLogin;
