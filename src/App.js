import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';//yarn add react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'typeface-roboto';
import Swal from 'sweetalert2';


//Pantallas admin
import LoginScreen from './screens/admin/LoginScreen';
import HomeAdminScreen from './screens/admin/HomeAdminScreen';
import UsersScreen from './screens/admin/UsersScreen';
import RolScreen from './screens/admin/RolScreen';
import ContactScreen from './screens/admin/ContactScreen';
import FacturaAdminScreen from './screens/admin/FacturaAdminScreen';

//Pantallas cliente
import HomeScreen from './screens/client/HomeScreen';
import FacturaScreen from './screens/client/FacturaScreen';
import ConsultaScreen from './screens/client/ConsultaScreen';
import NosotrosScreen from './screens/client/NosotrosScreen';
import ContactanosScreen from './screens/client/ContactanosScreen';
import PreguntasScreen from './screens/client/PreguntasScreen';

function App() {

  const token = localStorage.getItem('token');

  return (
    <Router>{/*se crea el router, el cual controla las rutas*/}
      <Routes> {/* se crea el espacio donde se van a colocar las rutas */}
        <Route path="/admin" element={token === null ? <LoginScreen /> : <Navigate to="/profile" />} />
        <Route path="/profile" element={token ? <HomeAdminScreen /> : <Navigate to="/admin" />} />

        {/* <Route path='/admin' exact>
          {token ? <Navigate to={"/profile"} /> : <Navigate to={"/admin"} />}
        </Route> */}


        {/* <Route path={"/profile"} element={<HomeAdminScreen />} /> */}
        <Route path="/users" element={token ? <UsersScreen /> : <Navigate to="/admin" />} />
        <Route path="/rol" element={token ? <RolScreen /> : <Navigate to="/admin" />} />
        <Route path="/mensajes" element={token ? <ContactScreen /> : <Navigate to="/admin" />} />
        <Route path="/facturaControl" element={token ? <FacturaAdminScreen /> : <Navigate to="/admin" />} />


        <Route path={"/inicio"} element={<HomeScreen />} />
        <Route path={"/factura"} element={<FacturaScreen />} />
        <Route path={"/consulta"} element={<ConsultaScreen />} />
        <Route path={"/nosotros"} element={<NosotrosScreen />} />
        <Route path={"/contactanos"} element={<ContactanosScreen />} />
        <Route path={"/preguntas"} element={<PreguntasScreen />} />

        {/* <Route path={"/pruebas"} element={<Pruebas />} /> */}

        <Route path='*' element={<Navigate to={"/admin"} />} />
      </Routes>
    </Router>
  );
}

export default App;
