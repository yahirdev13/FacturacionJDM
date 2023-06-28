import React from 'react'
// import '../common/NavStyle.css'
import logo from '../images/logo-nav.png'
import { Link } from 'react-router-dom'

export default function Nav() {

  // Función para manejar el evento cuando el cursor entra al enlace
  const handleHover = (event) => {
    // Aplica los estilos deseados para aumentar el tamaño de la letra
    event.target.style.fontSize = "27px";
  }

  // Función para manejar el evento cuando el cursor sale del enlace
  const handleHoverOut = (event) => {
    // Restaura los estilos originales de la letra
    event.target.style.fontSize = "20px";
  }

  const handleOnClick = (event) => {
    event.target.style.textDecoration = "underline";
  }


  return (
    <nav style={styles.nav}>
      <switch>
        <a href="#"><img src={logo} aling="right" width="50" height="50" /></a>
        <Link style={styles.link} to="/inicio" onMouseEnter={handleHover} onMouseLeave={handleHoverOut} >Inicio</Link>
        <Link style={styles.link} to="/factura" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>Factura</Link>
        <Link style={styles.link} to="/consulta" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>Consulta</Link>
        <Link style={styles.link} to="/nosotros" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>Nosotros</Link>
        <Link style={styles.link} to="/contactanos" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>Contáctanos</Link>
        <Link style={styles.link} to="/preguntas" onMouseEnter={handleHover} onMouseLeave={handleHoverOut}>Preguntas frecuentes</Link>
      </switch>
    </nav>
  )
}

const styles = {
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '20px',
    margin: '10px',
    padding: '10px',
    fontFamily: 'Roboto',
  },
  nav: {
    backgroundColor: '#2c497f',
    height: "auto",
    padding: '20px',
    fontFamily: 'Roboto',
    boxShadow: '0px 2px 8px rgba(0,0,0,0.75)',
  }
}
