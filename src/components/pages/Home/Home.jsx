import NavBarPrincipal from "../../molecules/NavBarPrincipal/NavBarPrincipal";
import CardCaps from "../../molecules/CardCaps/CardCaps";
import Footer from "../../molecules/Footer/Footer";
import Carrusel from "../../molecules/Carrusel/Carrusel";



import { Container, Row } from "reactstrap";

function Home() {
  const gorras = [
    {
      Imagen: "https://i.pinimg.com/474x/df/5e/20/df5e203e14f6c20586bde4ed9fb54474.jpg",
      Titulo: "New Era",
    },
    {
      Imagen: "https://www.ameshop.com.mx/medias/AS-13822254-1.jpg?context=bWFzdGVyfGltYWdlc3wxMjA4MjV8aW1hZ2UvanBlZ3xpbWFnZXMvaDhkL2g1ZS8xMjMxODI1MTY0NzAwNi5qcGd8MDIzZTNjY2MxZGIyMWM2NjYxYzZiNTg0NTU2M2U5Y2VmNWI5NTUxZTc4MWQzNWU4MDk1ODI0MTM3ZGRlNWY3OA",
      Titulo: "47",
    },    {
      Imagen: "https://www.innovasport.com/medias/gorra-new-era-59fifty-cerrada-yankees-mlb-classics-is-11591122-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDYxNzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGI1L2hhMS8xMTQ2NzM1OTY0OTgyMi5qcGd8ODhiZWM4ZjRjY2E2MGZhZWMzN2NiZjFiMzQwNzQ1ZGNmMTFiYjIzOWI3MTk2ZTE2ZWVjOTU5ODBjZGRkNDIzMQ",
      Titulo: "Goorin Bros.",
    },
    {
      Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXCuvlIiWc-nZ5-sS5bAQi8BPjWTfmlMD0bQ&s",
      Titulo: "Mr. Crossbow",
    },    {
      Imagen: "https://www.innovasport.com/medias/gorra-new-era-59fifty-cerrada-yankees-mlb-classics-is-11591122-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDYxNzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGI1L2hhMS8xMTQ2NzM1OTY0OTgyMi5qcGd8ODhiZWM4ZjRjY2E2MGZhZWMzN2NiZjFiMzQwNzQ1ZGNmMTFiYjIzOWI3MTk2ZTE2ZWVjOTU5ODBjZGRkNDIzMQ",
      Titulo: "Dandy Hats",
    },
    {
      Imagen: "https://www.ameshop.com.mx/medias/AS-13822254-1.jpg?context=bWFzdGVyfGltYWdlc3wxMjA4MjV8aW1hZ2UvanBlZ3xpbWFnZXMvaDhkL2g1ZS8xMjMxODI1MTY0NzAwNi5qcGd8MDIzZTNjY2MxZGIyMWM2NjYxYzZiNTg0NTU2M2U5Y2VmNWI5NTUxZTc4MWQzNWU4MDk1ODI0MTM3ZGRlNWY3OA",
      Titulo: "Planas",
    },
    {
      Imagen: "https://www.newera.mx/cdn/shop/products/60420084_59FIFTY_WAVE_BOSCEL_OTC_3QL_1024x1024.png?v=1687383266",
      Titulo: "Curvas",
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
