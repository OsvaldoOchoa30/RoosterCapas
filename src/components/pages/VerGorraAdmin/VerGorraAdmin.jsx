import React, { useState } from "react";
import ImputRegistro from "../../atoms/ImputRegistro/ImputRegistro";
import BottomRegistro from "../../atoms/ButtomRegistro/ButtomRegistro";
import Imagen from "../../atoms/Imagen/Imagen";
import TallasCap from "../../molecules/TallasCap/TallasCap";
import Unitalla from "../../molecules/UnitallaCap/Unitalla";
import { Form, FormGroup, Col, Label, Input, FormText } from "reactstrap";

function VerGorraAdmin() {
  const [selectTalla, setSelectTalla] = useState(""); // State para el select de tipo de gorra
  const [selectMarca, setSelectMarca] = useState(""); // State para el select de marcas
  const [selectType, setSelectType] = useState("");

  const escojerTalla = (event) => {
    setSelectTalla(event.target.value);
  };

  const escogerTipo = (event) => {
    setSelectType(event.target.value);
  }

  const escojerMarca = (event) => {
    setSelectMarca(event.target.value);
  };

  const tipos = ['Curva', 'Plana'];
  const marcas = ['New Era', '47', 'GOORIN BROS.', 'MR. CROOSBOW', 'DANDY HATS'];
  const tallas = ['Unitalla', 'Multitalla'];

  const mycap = [
    {
      Name: "Dallas Maverics Road to the Final",
      Price: "19.00",
      Description: "Gorra edicion especial de la final NBA 2024",
      Image: "https://www.newera.mx/cdn/shop/products/60298842_1024x1024.png?v=1685653699",
      Type: "Plana",
      Brand: "New Era",
      Talla: "unitalla"
    },
  ];



  return (
    <>
      {mycap.map((cap) => {
        const marcasFiltradas = marcas.filter(marca => marca !== cap.Brand);
        const tiposFiltrados = tipos.filter(tipo => tipo !== cap.Type);

        return (
            <>
        <Imagen imagenOficial={cap.Image}/>
          <Form>
            <FormGroup row style={{ display: "flex", justifyContent: "center" }}>
              <Col sm={10}>
                <ImputRegistro inputText={cap.Name} inputType="texto" />
              </Col>
            </FormGroup>

            <FormGroup row style={{ display: "flex", justifyContent: "center" }}>
              <Col sm={10}>
                <ImputRegistro inputText={cap.Price} inputType="number" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label for="exampleText"></Label>
              <Input
                id="exampleText"
                name="text"
                type="textarea"
                placeholder={cap.Description}
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleSelect">TIPO DE GORRA</Label>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
                value={selectType}
                onChange={escogerTipo}
              >
               <option>{cap.Type}</option>
                {tiposFiltrados.map((tipo, index) => (
                  <option key={index}>{tipo}</option>
                ))}
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="exampleSelect">MARCA</Label>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
                value={selectMarca}
                onChange={escojerMarca}
              >
                <option>{cap.Brand}</option>
                {marcasFiltradas.map((marca, index) => (
                  <option key={index}>{marca}</option>
                ))}
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="exampleFile">FOTO</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Este apartado es actualizar la foto actual.</FormText>
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

              {selectTalla === "unitalla" ? (
                <Unitalla />
              ) : (
                <TallasCap />
              )}
            </FormGroup>

            <FormGroup row style={{ display: "flex", justifyContent: "center" }}>
              <Col sm={10} style={{ display: "flex", justifyContent: "center" }}>
                <BottomRegistro botonRegistro="Modificar" />
                <BottomRegistro botonRegistro="Eliminar" />
              </Col>
            </FormGroup>
          </Form>
          </>
        );
      })}
    </>
  );
}

export default VerGorraAdmin;
