import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import "./CardCaps.css";

function CardCaps({ nombreCap, Precio, Imagen, link }) {
  return (
    <a href={link} className="card-link">
      <Card className="card-container">
        <div className="card-image-wrapper">
          <img alt={nombreCap} src={Imagen} className="card-image"/>
        </div>

        <CardBody>
          <CardTitle tag="h5" className="card-title">{nombreCap}</CardTitle>
          <CardSubtitle className="mb-2 text-muted card-subtitle" tag="h6">
            {Precio}
          </CardSubtitle>
        </CardBody>
      </Card>
    </a>
  );
}

export default CardCaps;
