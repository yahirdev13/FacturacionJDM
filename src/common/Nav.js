import React from 'react'
import '../common/NavStyle.css'
import logo from '../images/logo-nav.png'
import { Link } from 'react-router-dom'



export default function Nav() {
  return (
    <nav id="nav-3">
      <switch>
        <a class="" href="#"><img src={logo} aling="right" width="50" height="50" /></a>
        <Link id="inicio" class="link-3" to="/inicio">Inicio</Link>
        <Link class="link-3" to="/factura">Factura</Link>
        <Link class="link-3" to="/consulta">Consulta</Link>
        <Link class="link-3" to="/nosotros">Nosotros</Link>
        <Link class="link-3" to="/contactanos">Contáctanos</Link>
        <Link class="link-3" to="/preguntas">Preguntas frecuentes</Link>

      </switch>

    </nav>
  )
}
