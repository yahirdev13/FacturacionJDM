import React from 'react';
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


  return (
    <Router>{/*se crea el router, el cual controla las rutas*/}
      <Routes> {/* se crea el espacio donde se van a colocar las rutas */}
        <Route path={"/admin"} element={<LoginScreen />} />{/* se crea la ruta, la cual se va a mostrar en el path especificado y renderizara el elemento especificado */}
        <Route path={"/profile"} element={<HomeAdminScreen />} />
        <Route path={"/users"} element={<UsersScreen />} />
        <Route path={"/rol"} element={<RolScreen />} />
        <Route path={"/mensajes"} element={<ContactScreen />} />
        <Route path={"/facturaControl"} element={<FacturaAdminScreen />} />


        <Route path={"/inicio"} element={<HomeScreen />} />
        <Route path={"/factura"} element={<FacturaScreen />} />
        <Route path={"/consulta"} element={<ConsultaScreen />} />
        <Route path={"/nosotros"} element={<NosotrosScreen />} />
        <Route path={"/contactanos"} element={<ContactanosScreen />} />
        <Route path={"/preguntas"} element={<PreguntasScreen />} />

        {/* <Route path={"/pruebas"} element={<Pruebas />} /> */}

        <Route path='*' element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  );
}

export default App;
