import NavBarPrincipal from "../../molecules/NavBarPrincipal/NavBarPrincipal";
import CardCaps from "../../molecules/CardCaps/CardCaps";
import Footer from "../../molecules/Footer/Footer";
import Carrusel from "../../molecules/Carrusel/Carrusel";

import cardNewEra from '../../../assets/logonew.png'
import card47 from '../../../assets/logo47.png'
import cardGorin from '../../../assets/logogorin.png'
import cardRanch from '../../../assets/logoranch.png'
import cardMr from '../../../assets/logomr.png'

import cardCurva from '../../..//assets/curva.png'
import CardPlana from '../../../assets/plana.png'



import { Container, Row } from "reactstrap";

function Home() {
  const gorras = [
    {
      Imagen: cardNewEra,
      Titulo: "New Era",
      Link: "/newera"
      
    },
    {
      Imagen: cardRanch,
      Titulo: "Ranch & Corral",
      Link: "/dandyhats"
    },
    {
      Imagen: cardGorin,
      Titulo: "Goorin Bros.",
      Link: "/goorinbros"
    },  
    {
      Imagen: cardMr,
      Titulo: "Mr. Kash",
      Link: "/mrkash"
    }, 
 


    {
      Imagen: card47,
      Titulo: "47",
      Link: "/47caps"
    },   

    {
      Imagen: cardCurva,
      Titulo: "Curvas",
      Link: "/curvas"
    },
    {
      Imagen: CardPlana,
      Titulo: "Planas",
      Link: "/planas"
    },
    


  ];
  return (
    <>
      <NavBarPrincipal />
      <Carrusel/>
      <h1 style={{textAlign: "center", marginBottom:"40px"}}>NUESTROS PRODUCTOS</h1>
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
          color="dark"
        />
      ))}
      </Row>
      </Container>

      <Footer/>

    </>
  );
}

export default Home;
