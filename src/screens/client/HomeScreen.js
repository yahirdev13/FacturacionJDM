import React, { useEffect, useState } from "react";
import Nav from '../../common/Nav'
import Footer from '../../common/Footer'
import Carousel from '../../common/Carousel/Carousel'


//imagnes
import jdm from '../../images/jdm.png'
import jdmBoda from '../../images/jdmBoda.png'
import jdmEsc from '../../images/jdmEsc.png'
import { hover } from '@testing-library/user-event/dist/hover'
import atencion from '../../images/atencion.png'

//gif
import advertenciaGif from '../../gifs/advertencia.gif'
import calendarioGif from '../../gifs/calendario.gif'
import facturaGift from '../../gifs/factura.gif'
import contactanosGif from '../../gifs/apoyo-tecnico.gif'

import Navbar from '../../common/client/Navbar'

export default function HomeScreen() {

  return (
    <div>
      {/* <Nav /> */}
      <Navbar />
      <div style={styles.saludos}>
        <h1>Bienvenidos al sistema de facturacion electrónica</h1>
      </div>

      <center>
        <Carousel style={styles.carrusel} />
      </center>

      <div>

        <div style={styles.container}>

          <div class="card border-white justify-content-center" style={styles.card}>
            <img src={advertenciaGif} class="card-img-top mx-auto" style={{ width: "80%" }} />
            <div class="card-body">
              <h5 class="card-title">Atención</h5>
              <p class="card-text text-justify">Solo se podrán facturar las compras realizadas dentro del restaurante. No se aceptarán solicitudes de facturación de cualquier otra compra</p>
            </div>
          </div>

          <div class="card border-white justify-content-center" style={styles.card}>
            <img src={calendarioGif} class="card-img-top mx-auto" style={{ width: "80%" }} />
            <div class="card-body">
              <h5 class="card-title">Importante</h5>
              <p class="card-text text-justify">Ahora tienes 15 días para facturar después de la compra. Utiliza nuestro sistema en línea para generar tu factura fácilmente.</p>
            </div>
          </div>

          <div class="card border-white justify-content-center" style={styles.card}>
            <img src={facturaGift} class="card-img-top mx-auto" style={{ width: "80%" }} />
            <div class="card-body">
              <h5 class="card-title">Disposiciones Fiscales</h5>
              <p class="card-text text-justify">La fecha de emisión de la factura será la fecha que sea solicitada por el cliente.</p>
            </div>
          </div>

          <div class="card border-white justify-content-center" style={styles.card}>
            <img src={contactanosGif} class="card-img-top mx-auto" style={{ width: "80%" }} />
            <div class="card-body">
              <h5 class="card-title">Contáctanos</h5>
              <p class="card-text text-justify">Si tienes alguna duda, solicita ayuda en cualquier red social verificada.</p>
            </div>
          </div>
        </div>


      </div>
      <div style={styles.containerSites}>
        <div>
          <h2 style={styles.title}>Visite nuestros demas sitios</h2>
        </div>
        <div style={styles.container}>
          <div style={styles.cardImg}>
            <a style={styles.link} href="https://jardinesdemexico.com/" ><img style={styles.img} src={jdm} alt="Jardines de México" /></a>
          </div>
          <div style={styles.cardImg}>
            <a style={styles.link} href="https://www.escueladejardineria.com.mx/" ><img style={styles.imgSchool} src={jdmEsc} alt="Jardines de México" /></a>
          </div>
          <div style={styles.cardImg}>
            <a style={styles.link} href="https://www.bodasjdm.com/" ><img style={styles.img} src={jdmBoda} alt="Jardines de México" /></a>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

const styles = {
  carrusel: {
    width: "100%",
    margin: "0px 0px 0px 0px",
  },
  card: {
    width: "300px",
    marginleft: "3%",
    marginRight: "3%",
  },
  cardImg: {
    width: "400px",
    marginleft: "3%",
    marginRight: "3%",
  },
  container: {
    paddingTop: "2%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flexWrap: "wrap", // Agregado para permitir envolver las tarjetas
    paddingBottom: "2%",
  },
  saludos: {
    textAlign: "center",
    padding: "20px",
  },
  img: {
    width: "100%",
    height: "auto",
    paddingBottom: "40px",
  },
  imgSchool: {
    width: "auto",
    height: "auto",
    paddingBottom: "40px",

  },
  link: {

  },
  text: {
    textAlign: "justify",
    margin: "20px 20px 20px 20px",
  },
  title: {
    textAlign: "center",
    marginTop: "20px",
    paddingTop: "2%"
  },
  containerSites: {
    backgroundColor: "#e3e3e3",
  },
}


