import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo-nav.png'

export default function Navbar() {

    return (
        <div>
            <header className='header'>
                <nav class="navbar navbar-expand-lg" style={styles.nav}>
                    <div class="container-fluid">
                        <div>
                            <Link class="navbar-brand" to="/inicio" style={{ color: "white", fontFamily: "Roboto" }}>
                                <img src={logo} alt="Bootstrap" width="30" height="30" style={{ marginRight: "15px" }} />
                                Facturación JDM
                            </Link>
                        </div>

                        <button style={{ borderColor: "white" }} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="navbar-collapse collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/inicio" style={styles.link}>Inicio</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/factura" style={styles.link}>Facturar</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/consulta" style={styles.link}>Consulta tu ticket</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/nosotros" style={styles.link}>Nosotros</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/contactanos" style={styles.link}>Contáctanos</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to="/preguntas" style={styles.link}>Preguntas frecuentes</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

const styles = {
    nav: {
        backgroundColor: '#2c497f',
    },
    link: {
        color: '#ffffff',
        fontSize: '20px',
        fontFamily: 'Roboto',
    },

}
