import React, { useState } from "react";
import ImputRegistro from "../../atoms/ImputRegistro/ImputRegistro";
import BottomRegistro from "../../atoms/ButtomRegistro/ButtomRegistro";

import TallasCap from "../../molecules/TallasCap/TallasCap";
import Unitalla from "../../molecules/UnitallaCap/Unitalla";

import { Form, FormGroup, Col, Label, Input } from "reactstrap";

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

        <FormGroup>
          <Label for="exampleSelect">Select</Label>
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
          {selectTalla === "multitalla" ? ( //Operadores Ternarios
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
