import { Card } from "reactstrap";
import ParrafoRegistro from "../../atoms/ParrafoRegistro/ParrafoRegistro";
import TituloRegistro from "../../atoms/TituloRegistro/TituloRegistro";
import ButtonDelete from "../../atoms/ButtonDelete/ButtonDelete";

import styles from "./CardInformation.module.css";

function CardInformation({Imagen,  Gorra, Talla, Precio, Cantidad  }) {
  return (
    <Card style={{ width: "60em", margin: "10px" }}>
      <div className={styles.contenedor}>
        <div className={styles.imagen}>
          <img
            src={Imagen}
            alt="Gorra XD"
            width="200px"
          />
        </div>

        <div className={styles.datos}>
          <ParrafoRegistro registro={Gorra} />
          <ParrafoRegistro registro={Talla} />
        </div>

        <div className={styles.cantidad}>
          {Cantidad === '0' ? <>
            <input className={styles.input} type="number" placeholder="Cantidad" />  
          </> : <>
          <h1>{Cantidad}</h1>
          </>}
        
        </div>

        <div className={styles.precio}>
          <TituloRegistro titulo={Precio} />
        </div>
        {Cantidad === '0' ? <>  <div className={styles.cantidad}>
          <ButtonDelete/>
        </div></> : <></>}
       
      </div>
    </Card>
  );
}

export default CardInformation;
