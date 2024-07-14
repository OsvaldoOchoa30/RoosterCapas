import React from "react";
import ReactDOM from "react-dom/client";
import {NextUIProvider} from '@nextui-org/react'

//import App from './App.jsx'
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import Registro from "./components/pages/Registro/Registro";
import Login from "./components/pages/Login/Login"; //Pendiente



import MiCarrito from "./components/pages/MiCarrito/MiCarrito";
import MisCompras from "./components/pages/MisCompras/MisCompras";
import VerGorraCliente from "./components/pages/VerGorraCliente/VerGorraCliente";

import VerGorraAdmin from "./components/pages/VerGorraAdmin/VerGorraAdmin";

import PedidosCompletados from "./components/pages/PedidosCompletados/PedidosCompletados";
import PedidosenProceso from "./components/pages/PedidosenProceso/PedidosenProceso";
import VerPedidosenProceso from "./components/pages/VerPedidosenProceso/VerPedidosenProceso";
import PedidosPendientes from "./components/pages/PedidosPendientes/PedidosPendientes";

import AgregarGorra from "./components/pages/AgregarGorra/AgregarGorra";
import Inventario from "./components/pages/Inventario/Inventario";

import HomeAdmin from "./components/pages/HomeAdmin/HomeAdmin";
import Ventas from "./components/pages/Ventas/Ventas";

import MarcaNewEra from "./components/pages/MarcaNewEra/MarcaNewEra";
import Marca47 from "./components/pages/Marca47/Marca47";
import MarcaGorinBros from "./components/pages/MarcaGorinBros/MarcaGorinBros";
import MarcaMrKash from "./components/pages/MarcaMrKash/MarcaMrKash";
import MarcaDandyHats from "./components/pages/MarcaDandyHats/MarcaDandyHats";


const pages = createBrowserRouter([
  {
    //HOME
    path: "/",
    element: <Home />,
  },
  {
    //Registro
    path: "/registro",
    element: <Registro />,
  },
  {
    //Login
    path: "/login",
    element: <Login />,
  },
  {
    //Carrito de Apartados
    path: "/carrito",
    element: <MiCarrito />,
  },
  {
    //Mis Compras
    path: "/miscompras",
    element: <MisCompras />,
  },
  {
    //Ver Gorra Cliente
    path: "/vergorra",
    element: <VerGorraCliente />,
  },
  {
    //Pedidos Pendientes Admin
    path: "/pedidospendientes",
    element: <PedidosPendientes />,
  },

  {
    //Pedidos en Proceso Admin
    path: "/pedidosenproceso",
    element: <PedidosenProceso />,
  },
  {
    //Pedidos en Proceso Admin
    path: "/pedidoscompletados",
    element: <PedidosCompletados />,
  },
  {
    //Ver Pedidos en Proceso Admin
    path: "/verpedidosenproceso",
    element: <VerPedidosenProceso />,
  },
  {
    //Inventario Admin
    path: "/inventario",
    element: <Inventario />,
  },
  {
    //Agregar Gorras
    path: "/agregargorra",
    element: <AgregarGorra />,
  },
  {
    //Agregar Gorras
    path: "/gorraadmin",
    element: <VerGorraAdmin/>,
  },
  {
    //Agregar Gorras
    path: "/ventas",
    element: <Ventas/>,
  },
  {
    //Agregar Gorras
    path: "/admin",
    element: <HomeAdmin/>,
  },
  {
    //New Era
    path: "/newera",
    element: <MarcaNewEra/>
  },
  {
    //47
    path: "/47caps",
    element: <Marca47/>
  },
  {
    //Gorin Bros
    path: "/gorinbros",
    element: <MarcaGorinBros/>
  },
  {
    //Mr Kash
    path: "/mrkash",
    element: <MarcaMrKash/>
  },
  {
    //Dandy Caps
    path: "/dandyhats",
    element: <MarcaDandyHats/>
  },
  

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
    <RouterProvider router={pages} />
    </NextUIProvider>
  </React.StrictMode>
);
