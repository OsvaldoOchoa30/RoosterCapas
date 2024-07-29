import React, { useState } from "react";
import ImputRegistro from "../../atoms/ImputRegistro/ImputRegistro";
import BottomRegistro from "../../atoms/ButtomRegistro/ButtomRegistro";
import TallasCap from "../../molecules/TallasCap/TallasCap";
import Unitalla from "../../molecules/UnitallaCap/Unitalla";
import { Form, FormGroup, Col, Label, Input, FormText } from "reactstrap";
import styles from './FormsAddCap.module.css';  // Importa el archivo CSS como un módulo

function FormsAddCap() {
    const [nombreGorra, setNombreGorra] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tipo, setTipo] = useState('');
    const [marca, setMarca] = useState('');
    const [foto, setFoto] = useState(null);

    const [selectTalla, setSelectTalla] = useState('');
    const [cantidadMulti, setCantidadMulti] = useState('');
    const [cantidadUni1, setCantidadUni1] = useState('');
    const [cantidadUni2, setCantidadUni2] = useState('');
    const [cantidadUni3, setCantidadUni3] = useState('');
    const [cantidadUni4, setCantidadUni4] = useState('');
    const [cantidadUni5, setCantidadUni5] = useState('');

    const handleNombreGorra = (e) => setNombreGorra(e.target.value);
    const handlePrecio = (e) => setPrecio(e.target.value);
    const handleDescripcion = (e) => setDescripcion(e.target.value);
    const handleType = (e) => setTipo(e.target.value);
    const handleBrand = (e) => setMarca(e.target.value);
    const escojerTalla = (event) => setSelectTalla(event.target.value);
    const handleCantidadMulti = (e) => setCantidadMulti(e.target.value);
    const handleCantidadUni1 = (e) => setCantidadUni1(e.target.value);
    const handleCantidadUni2 = (e) => setCantidadUni2(e.target.value);
    const handleCantidadUni3 = (e) => setCantidadUni3(e.target.value);
    const handleCantidadUni4 = (e) => setCantidadUni4(e.target.value);
    const handleCantidadUni5 = (e) => setCantidadUni5(e.target.value);

    const validar = () => {
        if (nombreGorra === '') {
            alert("Nombre de la gorra no definido");
        } else if (precio === '') {
            alert("El Precio no está definido");
        } else if (descripcion === '') {
            alert("La descripción no está definida");
        } else if (tipo === '') {
            alert("No se ha seleccionado el Tipo de Gorra");
        } else if (marca === '') {
            alert("La marca no ha sido definida");
        } else if (
            (cantidadMulti === '') &&
            (cantidadUni1 === '' || cantidadUni2 === '' || cantidadUni3 === '' || cantidadUni4 === '' || cantidadUni5 === '')
        ) {
            alert("Espacios de la(s) Talla(s)");
        } else if (!foto) {
            alert("No se ha cargado una foto");
        } else {
            alert("¡Ya chingamos!");
        }
    };

    return (
        <Form className={styles.formsAddCap}>
            <FormGroup row className={styles.formGroup}>
                <Col sm={12}>
                    <ImputRegistro 
                        inputText="Gorra" 
                        inputType="text" 
                        onChange={handleNombreGorra}
                        className={styles.inputField}  // Aplica la clase para campos de entrada
                    />
                </Col>
            </FormGroup>

            <FormGroup row className={styles.formGroup}>
                <Col sm={12}>
                    <ImputRegistro 
                        inputText="Precio" 
                        inputType="number" 
                        onChange={handlePrecio}
                        className={styles.inputField}  // Aplica la clase para campos de entrada
                    />
                </Col>
            </FormGroup>

            <FormGroup row className={styles.formGroup}>
                <Col sm={12}>
                    <ImputRegistro 
                        inputText="Descripcion" 
                        inputType="textarea" 
                        onChange={handleDescripcion}
                        className={`${styles.inputField} ${styles.textarea}`}  // Aplica la clase para campos de entrada y textarea
                    />
                </Col>
            </FormGroup>

            <FormGroup>
                <Label for="exampleSelect" className={styles.label}>TIPO DE GORRA</Label>
                <Input 
                    id="exampleSelect" 
                    name="select" 
                    type="select" 
                    value={tipo} 
                    onChange={handleType}
                    className={styles.inputField}  // Aplica la clase para campos de entrada
                >
                    <option value="" disabled>Tipo de Gorra</option>
                    <option>PLANA</option>
                    <option>CURVA</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="exampleSelect" className={styles.label}>MARCA</Label>
                <Input 
                    id="exampleSelect" 
                    name="select" 
                    type="select" 
                    value={marca} 
                    onChange={handleBrand}
                    className={styles.inputField}  // Aplica la clase para campos de entrada
                >
                    <option value="" disabled>Marca</option>
                    <option>New Era</option>
                    <option>47</option>
                    <option>Goorin Bros.</option>
                    <option>Mr. Kash</option>
                    <option>Ranch & Corral</option>
                </Input>
            </FormGroup>

            <FormGroup>
                <Label for="exampleFile" className={styles.label}>FOTO</Label>
                <Input 
                    id="exampleFile" 
                    name="file" 
                    type="file" 
                    className={`${styles.inputField} ${styles.fileInput}`}  // Aplica la clase para campos de entrada y archivo
                    onChange={(e) => setFoto(e.target.files[0])} 
                />
                <FormText>Este apartado es para subir la foto de tu producto.</FormText>
            </FormGroup>

            <FormGroup>
                <Label for="exampleSelect" className={styles.label}>ESTILO DE TALLA</Label>
                <Input 
                    id="exampleSelect" 
                    name="select" 
                    type="select" 
                    value={selectTalla} 
                    onChange={escojerTalla}
                    className={styles.inputField}  // Aplica la clase para campos de entrada
                >
                    <option value="" disabled>Tipo de Talla</option>
                    <option value="multitalla">Multitalla</option>
                    <option value="unitalla">Unitalla</option>
                </Input>
            </FormGroup>

            <FormGroup className={styles.textCenter}>
                {selectTalla === "" ? (
                    <h3>Selecciona un tipo de Talla</h3>
                ) : selectTalla === "unitalla" ? (
                    <TallasCap
                        q1={handleCantidadUni1}
                        q2={handleCantidadUni2}
                        q3={handleCantidadUni3}
                        q4={handleCantidadUni4}
                        q5={handleCantidadUni5}
                    />
                ) : (
                    <Unitalla onChange={handleCantidadMulti} />
                )}
            </FormGroup>

            <FormGroup row className={styles.textCenter}>
                <Col sm={12}>
                    <BottomRegistro botonRegistro="Agregar" onClickF={validar} />
                </Col>
            </FormGroup>
        </Form>
    );
}

export default FormsAddCap;
