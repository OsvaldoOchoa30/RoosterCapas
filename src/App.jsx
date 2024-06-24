import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react' //rfc

import Registro from "./components/pages/Registro/Registro";
import Login from "./components/pages/Login/Login"; //Pendiente
import Home from "./components/pages/Home/Home";
import MarcaUno from "./components/pages/MarcaUno/MarcaUno";
import AgregarGorra from "./components/pages/AgregarGorra/AgregarGorra";
import Inventario from "./components/pages/Inventario/Inventario";

import MiCarrito from "./components/pages/MiCarrito/MiCarrito";
import MisCompras from "./components/pages/MisCompras/MisCompras";

import ProductoMultitalla from "./components/pages/ProductoMultitalla/ProductoMultitalla";
import ProductoUnitalla from "./components/pages/ProductoUnitalla/ProductoUnitalla";

//los nombres de los componentes inician con mayuscula

function App() {
  return (
    <BrowserRouter>
    <Routes>
        
        <Route path="/Registro"  element={<Registro/>}/> 
        <Route path="/Login"  element={<Login/>}/> 
        <Route path="/" element={<Home/>}/>
        <Route path="/MarcaUno" element={<MarcaUno/>}/>

        <Route path="/ProductoMultitalla" element={<ProductoMultitalla/>}/>
        <Route path="/ProductoUnitalla" element={<ProductoUnitalla/>}/>

        <Route path="/MiCarrito" element= {<MiCarrito/>} />
        <Route path="/MisCompras" element= {<MisCompras/>}/>
        <Route path="/Inventario" element={<Inventario/>}/>


        <Route path="/AgregarGorra" element={<AgregarGorra/>}/>
      
        
            
    </Routes>
    </BrowserRouter>
  )
}

export default App