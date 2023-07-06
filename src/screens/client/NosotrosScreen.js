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

        <h2 style={styles.title}>¿Quiénes somos?</h2>
        <p>En Jardines de México, nos enorgullece presentarles un lugar donde la naturaleza y la
          belleza se fusionan en un escenario impresionante. Somos un destino turístico único en su clase,
          ubicado en el corazón de México, donde los jardines más espectaculares del país se combinan con
          una amplia gama de servicios y actividades para brindar una experiencia inolvidable.</p>

        <p> Nuestra misión es cautivar y sorprender a nuestros visitantes a través de la exuberancia y
          la armonía de nuestros jardines temáticos. Con una extensión de más de 170 hectáreas,
          nuestros jardines cuentan con una variedad inigualable de flora y fauna, así como con esculturas y
          elementos arquitectónicos únicos que complementan la belleza natural.

          En Jardines de México, hemos creado espacios diseñados para inspirar y deleitar a todos nuestros visitantes.
          Ya sea que estés buscando un lugar para relajarte y conectarte con la naturaleza, celebrar una ocasión especial o
          llevar a cabo un evento corporativo, nuestras instalaciones versátiles y nuestro equipo altamente capacitado están listos para hacer realidad tus sueños.</p>
        <h2 style={styles.title}>Propósito</h2>
        <p>
          El propósito de este sistema es realizar tu factura de los pagos
          realizados, para tener la justificación de los ingresos, acreditando el
          total del gasto, por lo que solicitar factura no solo es un derecho de
          los contribuyentes, sino una obligación de todos aquellos que deseen
          poner su granito de arena al desarrollo de nuestro país.
        </p>

      </div>


      <h1 style={styles.title2}>Ubicación</h1>
      <center>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73998.59247746228!2d-99.34105614451926!3d18.7375554302578!2m3!1f0!2f0!3f0!
            3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdd36602675007%3A0xc972fcd1047fb9ef!2sJardines%20de%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1645631656113!5m2!1ses-419!2smx"
          width="90%"
          height="450"
          style={{ borderRadius: "20px", marginTop: "40px" }}
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
    paddingTop: "40px",
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
