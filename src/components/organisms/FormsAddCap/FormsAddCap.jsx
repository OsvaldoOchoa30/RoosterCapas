import React, { useState } from "react";
import ImputRegistro from "../../atoms/ImputRegistro/ImputRegistro";
import BottomRegistro from "../../atoms/ButtomRegistro/ButtomRegistro";

import TallasCap from "../../molecules/TallasCap/TallasCap";
import Unitalla from "../../molecules/UnitallaCap/Unitalla";

import { Form, FormGroup, Col, Label, Input, FormText} from "reactstrap";


function FormsAddCap() {
  const [selectTalla, setSelectTalla] = useState(""); //states

  const escojerTalla = (event) => {
    setSelectTalla(event.target.value);
  };
  return (
    <>
      <Form>
        <FormGroup row style={{ display: "flex", justifyContent: "center" }}>
          <Col sm={10}>
            <ImputRegistro inputText="Gorra" inputType="texto" />
          </Col>
        </FormGroup>

        <FormGroup row style={{ display: "flex", justifyContent: "center" }}>
          <Col sm={10}>
            <ImputRegistro inputText="Precio" inputType="number" />
          </Col>
        </FormGroup>

      
        <FormGroup row style={{ display: "flex", justifyContent: "center" }}>
          <Col sm={10}>
            <ImputRegistro inputText="Descripcion" inputType="text" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">TIPO DE GORRA</Label>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            value={selectTalla}
            onChange={escojerTalla}
          >
            <option>PLANA</option>
            <option>CURVA</option>

          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">MARCA</Label>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            value={selectTalla}
            onChange={escojerTalla}
          >
            <option>New Era</option>
            <option>47</option>
            <option>GOORIN BROS.</option>
            <option>MR. CROOSBOW</option>
            <option>DANDY HATS</option>
          </Input>
        </FormGroup>

        <FormGroup>
    <Label for="exampleFile">
      FOTO
    </Label>
    <Input
      id="exampleFile"
      name="file"
      type="file"
    />
    <FormText>
      Este apartado es para subir la foto de tu producto.
    </FormText>
  </FormGroup>


        <FormGroup>
          <Label for="exampleSelect">ESTILO DE TALLA</Label>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            value={selectTalla}
            onChange={escojerTalla}
          >
            <option value="multitalla">Multitalla</option>
            <option value="unitalla">Unitalla</option>
          </Input>
        </FormGroup>

        <FormGroup> 
          {selectTalla === "unitalla" ? ( //Operadores Ternarios
            <>
              <TallasCap />
            </>
          ) : (
            <>
              <Unitalla />
            </>
          )}
        </FormGroup>

        <FormGroup row style={{ display: "flex", justifyContent: "center" }}>
          <Col sm={10} style={{ display: "flex", justifyContent: "center" }}>
            <BottomRegistro botonRegistro="Agregar" />
          </Col>
        </FormGroup>
      </Form>
    </>
  );
}

export default FormsAddCap;
