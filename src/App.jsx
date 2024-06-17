import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react' //rfc

import Registro from "./components/pages/Registro/Registro";
import Login from "./components/pages/Login/Login"; //Pendiente
import Home from "./components/pages/Home/Home";
import MarcaUno from "./components/pages/MarcaUno/MarcaUno";
import AgregarGorra from "./components/pages/AgregarGorra/AgregarGorra";
import Inventario from "./components/pages/Inventario/Inventario";


//los nombres de los componentes inician con mayuscula

function App() {
  return (
    <BrowserRouter>
    <Routes>
        
        <Route path="/Registro"  element={<Registro/>}/> 
        <Route path="/Login"  element={<Login/>}/> 
        <Route path="/" element={<Home/>}/>
        <Route path="/MarcaUno" element={<MarcaUno/>}/>


        <Route path="/AgregarGorra" element={<AgregarGorra/>}/>
        <Route path="/Inventario" element={<Inventario/>}/>
            
    </Routes>
    </BrowserRouter>
  )
}

export default App