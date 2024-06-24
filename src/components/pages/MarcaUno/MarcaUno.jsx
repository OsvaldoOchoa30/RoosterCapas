import NavBarPrincipal from "../../molecules/NavBarPrincipal/NavBarPrincipal";
import CardCaps from "../../molecules/CardCaps/CardCaps";
import Footer from "../../molecules/Footer/Footer";

import { Container, Row } from "reactstrap";

function Home() {
  const gorras = [
    {
      Imagen: "https://www.innovasport.com/medias/gorra-new-era-59fifty-cerrada-yankees-mlb-classics-is-11591122-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDYxNzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGI1L2hhMS8xMTQ2NzM1OTY0OTgyMi5qcGd8ODhiZWM4ZjRjY2E2MGZhZWMzN2NiZjFiMzQwNzQ1ZGNmMTFiYjIzOWI3MTk2ZTE2ZWVjOTU5ODBjZGRkNDIzMQ",
      Titulo: "Gorra Negra",
      Precio: 15.99,
    },
    {
      Imagen: "https://www.ameshop.com.mx/medias/AS-13822254-1.jpg?context=bWFzdGVyfGltYWdlc3wxMjA4MjV8aW1hZ2UvanBlZ3xpbWFnZXMvaDhkL2g1ZS8xMjMxODI1MTY0NzAwNi5qcGd8MDIzZTNjY2MxZGIyMWM2NjYxYzZiNTg0NTU2M2U5Y2VmNWI5NTUxZTc4MWQzNWU4MDk1ODI0MTM3ZGRlNWY3OA",
      Titulo: "Gorra Roja",
      Precio: 12.99,
    },    {
      Imagen: "https://www.innovasport.com/medias/gorra-new-era-59fifty-cerrada-yankees-mlb-classics-is-11591122-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDYxNzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGI1L2hhMS8xMTQ2NzM1OTY0OTgyMi5qcGd8ODhiZWM4ZjRjY2E2MGZhZWMzN2NiZjFiMzQwNzQ1ZGNmMTFiYjIzOWI3MTk2ZTE2ZWVjOTU5ODBjZGRkNDIzMQ",
      Titulo: "Gorra Negra",
      Precio: 15.99,
    },
    {
      Imagen: "https://www.ameshop.com.mx/medias/AS-13822254-1.jpg?context=bWFzdGVyfGltYWdlc3wxMjA4MjV8aW1hZ2UvanBlZ3xpbWFnZXMvaDhkL2g1ZS8xMjMxODI1MTY0NzAwNi5qcGd8MDIzZTNjY2MxZGIyMWM2NjYxYzZiNTg0NTU2M2U5Y2VmNWI5NTUxZTc4MWQzNWU4MDk1ODI0MTM3ZGRlNWY3OA",
      Titulo: "Gorra Roja",
      Precio: 12.99,
    },    {
      Imagen: "https://www.innovasport.com/medias/gorra-new-era-59fifty-cerrada-yankees-mlb-classics-is-11591122-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDYxNzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGI1L2hhMS8xMTQ2NzM1OTY0OTgyMi5qcGd8ODhiZWM4ZjRjY2E2MGZhZWMzN2NiZjFiMzQwNzQ1ZGNmMTFiYjIzOWI3MTk2ZTE2ZWVjOTU5ODBjZGRkNDIzMQ",
      Titulo: "Gorra Negra",
      Precio: 15.99,
    },
    {
      Imagen: "https://www.ameshop.com.mx/medias/AS-13822254-1.jpg?context=bWFzdGVyfGltYWdlc3wxMjA4MjV8aW1hZ2UvanBlZ3xpbWFnZXMvaDhkL2g1ZS8xMjMxODI1MTY0NzAwNi5qcGd8MDIzZTNjY2MxZGIyMWM2NjYxYzZiNTg0NTU2M2U5Y2VmNWI5NTUxZTc4MWQzNWU4MDk1ODI0MTM3ZGRlNWY3OA",
      Titulo: "Gorra Roja",
      Precio: 12.99,
    },

  ];
  return (
    <>
      <NavBarPrincipal/>
      <h1>NEW ERA</h1>
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
        />
      ))}
      </Row>
      </Container>

      <Footer/>

    </>
  );
}

export default Home;
