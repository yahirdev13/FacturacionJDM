import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';//yarn add react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';


//Pantallas
import LoginScreen from './screens/LoginScreen';


function App() {
  return (
    <Router>{/*se crea el router, el cual controla las rutas*/}
        <Routes> {/* se crea el espacio donde se van a colocar las rutas */} 
          <Route path={"/admin"} element={<LoginScreen/>}/>{/* se crea la ruta, la cual se va a mostrar en el path especificado y renderizara el elemento especificado */}
          <Route path={"/inicio"} element={<LoginScreen/>}/>
          
          <Route path='*' element={<Navigate to={"/"}/>}/>
        </Routes>
      </Router>
  );
}

export default App;
