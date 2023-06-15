import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';//yarn add react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto';

//pantallas admin
import LoginScreen from './screens/admin/LoginScreen';
import HomeAdminScreen from './screens/admin/HomeAdminScreen';

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
          <Route path={"/admin"} element={<LoginScreen/>}/>{/* se crea la ruta, la cual se va a mostrar en el path especificado y renderizara el elemento especificado */}
          <Route path={"/adminHome"} element={<HomeAdminScreen/>}/>
          <Route path={"/inicio"} element={<HomeScreen/>}/>
          <Route path={"/factura"} element={<FacturaScreen/>}/>
          <Route path={"/consulta"} element={<ConsultaScreen/>}/>
          <Route path={"/nosotros"} element={<NosotrosScreen/>}/>
          <Route path={"/contactanos"} element={<ContactanosScreen/>}/>
          <Route path={"/preguntas"} element={<PreguntasScreen/>}/>
          
          <Route path='*' element={<Navigate to={"/"}/>}/>
        </Routes>
      </Router>
  );
}

export default App;
