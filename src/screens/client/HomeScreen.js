import React from 'react'
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

export default function HomeScreen() {
  return (
    <div>
      <Nav />
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

          {/* <div style={styles.box}>
            <h2 style={styles.title}>Disposiciones Fiscales</h2>
            <p style={styles.text}>La fecha de emisión de la factura será la fecha que sea solicitada por el cliente.</p>
          </div>

          <div style={styles.box}>
            <h2 style={styles.title}>¡Importante!</h2>
            <p style={styles.text}>Ahora tienes 15 días para facturar después de la compra. Evita problemas y cumple con el plazo establecido. Utiliza nuestro sistema en línea para generar tu factura fácilmente.</p>
          </div>

          <div style={styles.box}>
            <h2 style={styles.title}>¡Atención!</h2>
            <p style={styles.text}>Solo se podrán facturar las compras realizadas dentro del restaurante. No se aceptarán solicitudes de facturación de cualquier otra compra</p>
          </div> */}

        </div>

      </div>

      <div style={styles.containerImg}>
        <a style={styles.link} href="https://jardinesdemexico.com/" ><img style={styles.img} src={jdm} alt="Jardines de México" /></a>
        <a style={styles.link} href="https://www.escueladejardineria.com.mx/" ><img style={styles.img} src={jdmEsc} alt="Jardines de México" /></a>
        <a style={styles.link} href="https://www.bodasjdm.com/" ><img style={styles.img} src={jdmBoda} alt="Jardines de México" /></a>
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
  container: {
    paddingTop: "2%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center"
  },
  saludos: {
    textAlign: "center",
    padding: "20px",
  },
  box: {
    width: "400px",
    height: "250px",
    backgroundColor: "#e3e3e3",
    margin: "20px",
    border: "3px solid rgb(137,161,239,1)",
    backgroundColor: "rgb(137,161,239,0.2)",
    borderRadius: "20px",
  },
  containerImg: {
    padingRight: "5%",
    paddingLeft: "5%",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "60px",
    paddingBottom: "80px",
  },
  img: {
    width: "50%",
    height: "10%",
  },
  link: {
    display: "flex",
    height: "100%",
    width: "100%",
  },
  text: {
    textAlign: "justify",
    margin: "20px 20px 20px 20px",
  },
  title: {
    textAlign: "center",
    marginTop: "20px",
  },

}
