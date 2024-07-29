import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import styles from "./CardCaps.module.css";  // Importa el archivo CSS como un módulo

function CardCaps({ nombreCap, Precio, Imagen, link }) {
  return (
    <a href={link} className={styles.cardLink}>
      <Card className={styles.cardContainer}>
        <div className={styles.cardImageWrapper}>
          <img alt={nombreCap} src={Imagen} className={styles.cardImage}/>
        </div>

        <CardBody>
          <CardTitle tag="h5" className={styles.cardTitle}>{nombreCap}</CardTitle>
          <CardSubtitle className={`mb-2 text-muted ${styles.cardSubtitle}`} tag="h6">
            {Precio}
          </CardSubtitle>
        </CardBody>
      </Card>
    </a>
  );
}

export default CardCaps;

