import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

function CardCaps({ nombreCap, Precio, Imagen, link }) {
  return (
    <a href={link} style={{textDecoration:'none'}}>
      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          width: "14rem",
          textAlign: "center",
          margin: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img alt="Sample" src={Imagen} width="180px" />
        </div>

        <CardBody>
          <CardTitle tag="h5">{nombreCap}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {Precio}
          </CardSubtitle>
        </CardBody>
      </Card>
    </a>
  );
}

export default CardCaps;
