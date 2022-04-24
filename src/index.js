import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import OdontologoMenu from "./components/odontologo/obsolete/odontologoMenu"
import ListarOdontologos from "./components/odontologo/listarOdontologos"
import BuscarOdontologo from "./components/odontologo/buscarOdontologo"
import EliminarOdontologo from "./components/odontologo/eliminarOdontologo"
import CrearOdontologo from "./components/odontologo/crearOdontologo"


import PacienteMenu from "./components/paciente/obsolete/pacienteMenu"
import BuscarPaciente from "./components/paciente/buscarPaciente"
import CargarLista from "./components/paciente/listarPacientes"
import CrearPaciente from "./components/paciente/crearPaciente"
import EliminarPaciente from './components/paciente/eliminarPaciente';


import CrearDomicilio from "./components/domicilio/crearDomicilio"
import AsignarTurno from './components/turno/asignarTurno';

import 'antd/dist/antd.css';
import HomeMenu from "./components/homeMenu"

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
                <Routes>
                  <Route path="/" element={<App/>}/>
                  <Route path='/home' element={<HomeMenu/>}></Route>
                  <Route path='home/odontologo/CargarLista' element={<ListarOdontologos/>}/>
                  <Route path="home/odontologo/BuscarPorID" element={<BuscarOdontologo/>}/>
                  <Route path="home/odontologo/EliminarOdontologo" element={<EliminarOdontologo/>}/>
                  <Route path="home/odontologo/CrearOdontologo" element={<CrearOdontologo/>}/>


                  <Route path="home/paciente/BuscarPorID" element={<BuscarPaciente/>}/>
                  <Route path="home/paciente/CargarLista" element={<CargarLista/>}/>
                  <Route path="home/paciente/CrearPaciente" element={<CrearPaciente/>}/>
                  <Route path="home/paciente/EliminarPaciente" element={<EliminarPaciente/>}/>        

                  <Route path="/domicilio/CrearDomicilio" element={<CrearDomicilio/>}/>
                  <Route path="home/asignarTurno" element={<AsignarTurno/>}></Route>
              </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
