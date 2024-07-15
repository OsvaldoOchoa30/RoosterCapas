import NavBarPrincipal from "../../molecules/NavBarPrincipal/NavBarPrincipal";
import CardCaps from "../../molecules/CardCaps/CardCaps";
import Footer from "../../molecules/Footer/Footer";
import TituloLogo from "../../atoms/TituloLogo/TituloLogo";

import { Container, Row } from "reactstrap";

import styles from './MarcaNewEra.module.css'
import { Link } from "react-router-dom";

function MarcaNewEra() {
  const gorras = [
    {
      Imagen: "https://www.innovasport.com/medias/gorra-new-era-59fifty-cerrada-yankees-mlb-classics-is-11591122-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDYxNzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGI1L2hhMS8xMTQ2NzM1OTY0OTgyMi5qcGd8ODhiZWM4ZjRjY2E2MGZhZWMzN2NiZjFiMzQwNzQ1ZGNmMTFiYjIzOWI3MTk2ZTE2ZWVjOTU5ODBjZGRkNDIzMQ",
      Titulo: "Gorra Negra",
      Precio: 15.99,
      Link: "/vergorra"
    },

  ];
  return (
    <>
    <div className={styles.nav}>
      <NavBarPrincipal/>
      </div>
      <div className={styles.title}>
      <TituloLogo titulo="New Era"/>
      </div>
      <Container>
      <Row
      lg='5'
      md="3"
      sm="2"
      xs="1"
      style={{ display: "flex", justifyContent: "center"}}
      >
      
      {gorras.map((gorra) => (
        <CardCaps
          nombreCap={gorra.Titulo}
          Precio={gorra.Precio}
          Imagen={gorra.Imagen}
          link={gorra.Link}
        />
      ))}
      </Row>
      </Container>

      <Footer/>

    </>
  );
}

export default MarcaNewEra;
