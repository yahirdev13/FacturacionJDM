import React from 'react'
import Navbar from '../../common/client/Navbar'
import Footer from '../../common/Footer'

//imagnes
import jdm from '../../images/jdm.png'
import jdmBoda from '../../images/jdmBoda.png'
import jdmEsc from '../../images/jdmEsc.png'

import facebook from '../../images/facebook.png'
import insta from '../../images/instagram.png'
import twitter from '../../images/twitter.png'
import correo from '../../images/gmail.png'
import youtube from '../../images/youtube.png'
import pinterest from '../../images/pinterest.png'

export default function NosotrosScreen() {
  return (
    <div>
      <Navbar />


      <div style={styles.entrada}>
        <h2 style={styles.title}>Propósito</h2>
        <p>
          El propósito de este sistema es realizar tu factura de los pagos
          realizados, para tener la justificación de los ingresos, acreditando el
          total del gasto, por lo que solicitar factura no solo es un derecho de
          los contribuyentes, sino una obligación de todos aquellos que deseen
          poner su granito de arena al desarrollo de nuestro país.
        </p>
        <h2 style={styles.title}>¿Por qué es importante facturar?</h2>
        <p>
          La facturación de alimentos y bebidas en México tiene una serie de
          requisitos legales y fiscales que deben ser cumplidos por los negocios
          que operan en esta industria. Entre estos requisitos se encuentran:
        </p>
        <p>1.- Contar con un Registro Federal de Contribuyentes (RFC).</p>
        <p>
          2.- Estar registrado en el padrón de contribuyentes del Servicio de
          Administración Tributaria (SAT).
        </p>
        <p>
          3.- Utilizar un software o plataforma autorizada por el SAT para la
          emisión de facturas electrónicas (CFDI)
        </p>

      </div>



      <center>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73998.59247746228!2d-99.34105614451926!3d18.7375554302578!2m3!1f0!2f0!3f0!
            3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdd36602675007%3A0xc972fcd1047fb9ef!2sJardines%20de%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1645631656113!5m2!1ses-419!2smx"
          width="90%"
          height="450"
          style={{ borderRadius: "20px", marginTop: "80px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </center>



      <h1 style={styles.title2}>Síguenos en nuestras redes sociales</h1>

      <div style={styles.container}>
        <div class="card border-white justify-content-center" style={styles.card}>
          <a href="https://www.facebook.com/jardinesdemexico/">
            <img src={facebook} class="card-img-top mx-auto" style={{ width: "128px", height: "128px" }} />
          </a>
          <div class="card-body">
            <h5 class="card-title">Facebook</h5>
          </div>
        </div>

        <div class="card border-white justify-content-center" style={styles.card}>
          <a href="https://www.instagram.com/jardinesdemexico/">
            <img src={insta} class="card-img-top mx-auto" style={{ width: "128px", height: "128px" }} />
          </a>
          <div class="card-body">
            <h5 class="card-title">instagram</h5>
          </div>
        </div>
        <div class="card border-white justify-content-center" style={styles.card}>
          <a href="https://www.twitter.com/jardinesdemex">
            <img src={twitter} class="card-img-top mx-auto" style={{ width: "128px", height: "128px" }} />
          </a>
          <div class="card-body">
            <h5 class="card-title">Twitter</h5>
          </div>
        </div>
        <div class="card border-white justify-content-center" style={styles.card}>
          <a href="https://www.youtube.com/@JardinesdeMexicoOrg" e>
            <img src={youtube} class="card-img-top mx-auto" style={{ width: "128px", height: "128px" }} />
          </a>
          <div class="card-body">
            <h5 class="card-title">YouTube</h5>
          </div>
        </div>
        <div class="card border-white justify-content-center" style={styles.card}>
          <a href="https://www.pinterest.com.mx/jardinesdemexico/">
            <img src={pinterest} class="card-img-top mx-auto" style={{ width: "128px", height: "128px" }} />
          </a>
          <div class="card-body">
            <h5 class="card-title">Pinterest</h5>
          </div>
        </div>
      </div>


      <div style={styles.containerSites}>
        <div>
          <h2 style={styles.title2}>Visite nuestros démas sitios</h2>
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

    </div >
  )
}

const styles = {
  entrada: {
    padding: "5px 50px",
    textAlign: "justify",
  },
  title: {
    color: "#23967f",
    fontFamily: "Roboto",
  },
  containerContactanos: {
    width: "50%",

  },
  containerSites: {
    backgroundColor: "  white",
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
  cardImg: {
    width: "400px",
    marginleft: "3%",
    marginRight: "3%",
  },
  title2: {
    textAlign: "center",
    marginTop: "20px",
    paddingTop: "2%"
  },
  container: {
    paddingTop: "2%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flexWrap: "wrap", // Agregado para permitir envolver las tarjetas
    paddingBottom: "2%",
  },
  card: {
    width: "300px",
    marginleft: "2%",
    marginRight: "2%",
  },
}
