import React from 'react';
import CardCaps from '../../molecules/CardCaps/CardCaps';
import NavBarGlobal from '../../molecules/NavBarGlobal/NavBarGlobal';
import { Container, Row } from 'reactstrap';
import styles from './Inventario.module.css';  // Importa el archivo CSS como un módulo

function Inventario() {
    const gorras = [
        {
            Imagen: "https://www.innovasport.com/medias/gorra-new-era-59fifty-cerrada-yankees-mlb-classics-is-11591122-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDYxNzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGI1L2hhMS8xMTQ2NzM1OTY0OTgyMi5qcGd8ODhiZWM4ZjRjY2E2MGZhZWMzN2NiZjFiMzQwNzQ1ZGNmMTFiYjIzOWI3MTk2ZTE2ZWVjOTU5ODBjZGRkNDIzMQ",
            Titulo: "Gorra Negra",
            Precio: 15.99,
            Link: "/gorraadmin",
        },
        {
            Imagen: "https://www.ameshop.com.mx/medias/AS-13822254-1.jpg?context=bWFzdGVyfGltYWdlc3wxMjA4MjV8aW1hZ2UvanBlZ3xpbWFnZXMvaDhkL2g1ZS8xMjMxODI1MTY0NzAwNi5qcGd8MDIzZTNjY2MxZGIyMWM2NjYxYzZiNTg0NTU2M2U5Y2VmNWI5NTUxZTc4MWQzNWU4MDk1ODI0MTM3ZGRlNWY3OA",
            Titulo: "Gorra Roja",
            Precio: 12.99,
            Link: "/gorraadmin",
        },
        {
            Imagen: "https://images.footballfanatics.com/dallas-mavericks/mens-new-era-gray/blue-dallas-mavericks-tip-off-two-tone-59fifty-fitted-hat_ss5_p-200026091+pv-1+u-hwelw8ei7j6dljgghra0+v-xhnn4cvzf1pbuzsjh3bj.jpg?_hv=2&w=900",
            Titulo: "Gorra Negra",
            Precio: 15.99,
            Link: "/gorraadmin",
        },
        {
            Imagen: "https://www.ameshop.com.mx/medias/AS-13822254-1.jpg?context=bWFzdGVyfGltYWdlc3wxMjA4MjV8aW1hZ2UvanBlZ3xpbWFnZXMvaDhkL2g1ZS8xMjMxODI1MTY0NzAwNi5qcGd8MDIzZTNjY2MxZGIyMWM2NjYxYzZiNTg0NTU2M2U5Y2VmNWI5NTUxZTc4MWQzNWU4MDk1ODI0MTM3ZGRlNWY3OA",
            Titulo: "Gorra Roja",
            Precio: 12.99,
            Link: "/gorraadmin",
        },
        {
            Imagen: "https://www.innovasport.com/medias/gorra-new-era-59fifty-cerrada-yankees-mlb-classics-is-11591122-1.jpg?context=bWFzdGVyfGltYWdlc3wxMDYxNzR8aW1hZ2UvanBlZ3xpbWFnZXMvaGI1L2hhMS8xMTQ2NzM1OTY0OTgyMi5qcGd8ODhiZWM4ZjRjY2E2MGZhZWMzN2NiZjFiMzQwNzQ1ZGNmMTFiYjIzOWI3MTk2ZTE2ZWVjOTU5ODBjZGRkNDIzMQ",
            Titulo: "Gorra Negra",
            Precio: 15.99,
            Link: "/gorraadmin",
        },
        {
            Imagen: "https://www.newera.mx/cdn/shop/products/60298842_1024x1024.png?v=1685653699",
            Titulo: "Gorra New Era Floral",
            Precio: 16.99,
            Link: "/gorraadmin"
        },
    ];

    return (
        <>
            <NavBarGlobal />
            <h1 className={styles.title}>INVENTARIO ROOSTER CAPS</h1>
            <Container>
                <Row
                    lg="5"
                    md="3"
                    sm="2"
                    xs="1"
                    style={{ display: "flex", justifyContent: "center" }}
                >
                    {gorras.map((gorra, index) => (
                        <CardCaps
                            key={index}
                            nombreCap={gorra.Titulo}
                            Precio={gorra.Precio}
                            Imagen={gorra.Imagen}
                            link={gorra.Link}
                        />
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Inventario;
