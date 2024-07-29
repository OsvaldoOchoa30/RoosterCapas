import React, { useState } from "react";
import ImputRegistro from "../../atoms/ImputRegistro/ImputRegistro";
import BottomRegistro from "../../atoms/ButtomRegistro/ButtomRegistro";
import Imagen from "../../atoms/Imagen/Imagen";
import TallasCap from "../../molecules/TallasCap/TallasCap";
import Unitalla from "../../molecules/UnitallaCap/Unitalla";
import NavBarGlobal from "../../molecules/NavBarGlobal/NavBarGlobal";
import { Form, FormGroup, Col, Label, Input, FormText } from "reactstrap";
import styles from './VerGorraAdmin.module.css';

function VerGorraAdmin() {
  const [nombre, setNombre] = useState('');
  const [selectTalla, setSelectTalla] = useState("");
  const [selectMarca, setSelectMarca] = useState("");
  const [selectType, setSelectType] = useState("");

  const handleName = (e) => {
    setNombre(e.target.value);
  };

  const escojerTalla = (event) => {
    setSelectTalla(event.target.value);
  };

  const escogerTipo = (event) => {
    setSelectType(event.target.value);
  };

  const escojerMarca = (event) => {
    setSelectMarca(event.target.value);
  };

  const tipos = ["Curva", "Plana"];
  const marcas = [
    "New Era",
    "47",
    "Goorin Bros.",
    "Mr. Kash",
    "Ranch & Corral",
  ];

  const mycap = [
    {
      Name: "Dallas Mavericks Road to the Final",
      Price: "19.00",
      Description: "Gorra edición especial de la final NBA 2024",
      Image: "https://www.newera.mx/cdn/shop/products/60298842_1024x1024.png?v=1685653699",
      Type: "Curva",
      Brand: "New Era",
      Talla: "multitalla",
      Cantidad: [10, 24, 12, 2, 3],
    },
  ];

  return (
    <>
      <NavBarGlobal />
      <div className={styles.verGorraAdmin}>
        {mycap.map((cap) => {
          const marcasFiltradas = marcas.filter((marca) => marca !== cap.Brand);
          const tiposFiltrados = tipos.filter((tipo) => tipo !== cap.Type);

          return (
            <React.Fragment key={cap.Name}>
              <div className={styles.imagenOficial}>
                <Imagen imagenOficial={cap.Image} />
              </div>
              <Form className={styles.rightColumn}>
                <FormGroup className={styles.formGroup}>
                  <Col sm={10}>
                    <ImputRegistro inputText={cap.Name} inputType="text" onChange={handleName} />
                  </Col>
                </FormGroup>

                <FormGroup className={styles.formGroup}>
                  <Col sm={10}>
                    <ImputRegistro inputText={cap.Price} inputType="number" />
                  </Col>
                </FormGroup>

                <FormGroup className={styles.formGroup}>
                  <Col sm={10}>
                    <Label for="exampleText"></Label>
                    <Input
                      id="exampleText"
                      name="text"
                      type="textarea"
                      placeholder={cap.Description}
                    />
                  </Col>
                </FormGroup>

                <FormGroup className={styles.formGroup}>
                  <Col sm={10}>
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
                  </Col>
                </FormGroup>

                <FormGroup className={styles.formGroup}>
                  <Col sm={10}>
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
                  </Col>
                </FormGroup>

                <FormGroup className={styles.formGroup}>
                  <Col sm={10}>
                    <Label for="exampleFile">FOTO</Label>
                    <Input id="exampleFile" name="file" type="file" />
                    <FormText>Este apartado es actualizar la foto actual.</FormText>
                  </Col>
                </FormGroup>

                <FormGroup className={styles.formGroup}>
                  <Col sm={10}>
                    <Label for="exampleSelect">ESTILO DE TALLA</Label>
                    <Input
                      id="exampleSelect"
                      name="select"
                      type="select"
                      value={selectTalla}
                      onChange={escojerTalla}
                    >
                      <option value="unitalla">Unitalla</option>
                      <option value="multitalla">Multitalla</option>
                    </Input>
                  </Col>
                </FormGroup>

                {selectTalla === "" ? (
                  <>
                    {cap.Talla === "unitalla" ? (
                      <TallasCap
                        q1={cap.Cantidad[0]}
                        q2={cap.Cantidad[1]}
                        q3={cap.Cantidad[2]}
                        q4={cap.Cantidad[3]}
                        q5={cap.Cantidad[4]}
                      />
                    ) : (
                      <Unitalla quantity={cap.Cantidad[0]} />
                    )}
                  </>
                ) : (
                  <FormGroup className={styles.formGroup}>
                    <Col sm={10}>
                      {selectTalla === "unitalla" ? <TallasCap /> : <Unitalla />}
                    </Col>
                  </FormGroup>
                )}

                <FormGroup className={styles.formGroup}>
                  <Col sm={10}>
                    <div className={styles.btnGroup}>
                      <BottomRegistro botonRegistro="Modificar" className={styles.modifyButton} />
                      <BottomRegistro botonRegistro="Eliminar" className={styles.deleteButton} />
                    </div>
                  </Col>
                </FormGroup>
              </Form>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default VerGorraAdmin;
