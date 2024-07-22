import React, {useState} from "react";
import TituloRegistro from "../../atoms/TituloRegistro/TituloRegistro";
import ParrafoRegistro from "../../atoms/ParrafoRegistro/ParrafoRegistro";
import BottomRegistro from "../../atoms/ButtomRegistro/ButtomRegistro";
import ImputRegistro from "../../atoms/ImputRegistro/ImputRegistro";

import styles from "./FormsLogin.module.css";
import { Form, FormGroup, Col } from "reactstrap";

function FormsLogin() {
  const [nombre, setNombre] = useState('')
  const [password, setPassword] = useState("")

  const handleNombre = (e) =>{
    setNombre(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const validar = () => {

    const status = "user";
    
    if(nombre === ""){
      alert("Espacio de usuario vacio")
    } else if(password === ""){
      alert("Espacio de password vacio")
    } else if(status === "user"){
      alert("Inicio de Sesion Exitoso")
      window.location.assign('/');
    } else{
      window.location.assign('/admin');
    }
    }

    const handleRegistro = () => {
      window.location.assign('/registro');
    };
  
    
  

  return (
    <>
      <div className={styles.container}>
        <TituloRegistro titulo="Inicia de Sesion" />
        <ParrafoRegistro registro="Para conocer nuestros productos" />

        <Form>
          <FormGroup row style={{ display: "flex", justifyContent: "center" }}>
            <Col sm={10}>
              <ImputRegistro inputText="Nombre de Usuario" inputType="texto" onChange={handleNombre}/>
            </Col>
          </FormGroup>

          <FormGroup row style={{ display: "flex", justifyContent: "center" }}>
            <Col sm={10}>
              <ImputRegistro inputText="Contraseña" inputType="password" onChange={handlePassword} />
            </Col>
          </FormGroup>

          <FormGroup row style={{ display: "flex", justifyContent: "center" }}>
            <Col sm={10} style={{ display: "flex", justifyContent: "center" }}>
              <BottomRegistro 
              botonRegistro="Iniciar Sesion"  
              onClickF={validar}
              /> 
            </Col>
          </FormGroup>

          <ParrafoRegistro registro="Si no tienes cuenta, puedes crear una." />

          <FormGroup row style={{ display: "flex", justifyContent: "center" }}>
            <Col sm={10} style={{ display: "flex", justifyContent: "center" }}>
              <BottomRegistro 
              botonRegistro="Registrarse"
              onClickF={handleRegistro}
              
            
              />
              
            </Col>
          </FormGroup>
        </Form>
      </div>
    </>
  );
}

export default FormsLogin;
