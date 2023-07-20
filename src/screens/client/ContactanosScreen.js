import React from 'react';
import Navbar from '../../common/client/Navbar'
import Footer from '../../common/Footer'
import Swal from 'sweetalert2';

import './styleCliente.css'



import img from '../../images/banner.png'



export default function ContactanosScreen() {

  const showAlert = () => {

    Swal.fire({
      title: 'Mensaje enviado!',
      icon: 'success',
      timer: 2000, // Duración de la alerta en milisegundos (5 segundos en este caso)
      showConfirmButton: false, // No mostrar el botón de confirmación
      timerProgressBar: true,
    });
  };

  return (
    <div>
      <Navbar />
      <div style={styles.banner} className="banner">
        <div style={styles.title}>Contactanos</div>
        <img clas="img-response" src={img} alt="banner" style={styles.img} />
      </div>

      <div style={styles.container}>

        <div class="card border-white justify-content-center" style={styles.card}>
          <div class="card-body">
            <h5 class="card-title">Formulario</h5>
            <div style={styles.form}>
              <form>
                <div class="mb-3">
                  <label class="form-label">Nombre</label>
                  <input type="text" class="form-control" placeholder="Nombre completo" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Telefono</label>
                  <input type="text" class="form-control" placeholder="Teléfono" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Correo Electrónico</label>
                  <input type="email" class="form-control" placeholder="Correo Electrónico" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Asunto</label>
                  <input type="text" class="form-control" placeholder="Asunto" />
                </div>
                <div class="mb-3">
                  <label class="form-label text-start">Mensaje</label>
                  <textarea type="text-area" class="form-control" placeholder="Mensaje" style={{ height: "150px" }} />
                </div>
                <div class="text-end">
                  <button type="button" class="btn" onClick={showAlert} style={{ width: "150px", backgroundColor: "#2c497f", color: "white" }}>Enviar</button>
                </div>

              </form>
            </div>

          </div>
        </div>

        <div class="card border-white justify-content-center" style={styles.card2}>
          <div class="card-body">
            <div class=" justify-content-center" style={styles.icons}>
              <a class="color-bg-2c497f" href="https://www.facebook.com/jardinesdemexico/" style={styles.icon}>
                <i class="bi bi-facebook" style={styles.icon}></i>
              </a>
              <a href="https://www.instagram.com/jardinesdemexico/" style={styles.icon}>
                <i class="bi bi-instagram" style={styles.icon}></i>
              </a>
              <a href="https://www.twitter.com/jardinesdemex" style={styles.icon}>
                <i class="bi bi-twitter" style={styles.icon}></i>
              </a>
              <a href="https://www.youtube.com/@JardinesdeMexicoOrg" style={styles.icon}>
                <i class="bi bi-youtube" style={styles.icon}></i>
              </a>

            </div>
            <div>
              <h4>Jardines de México</h4>
              <h5>Dirección</h5>
              <p><iAutopista class="bi bi-geo-alt-fill" /><a href='https://www.google.com/maps/dir/18.6198907,-99.2881415/jardines+de+mexico/@18.6346211,-99.3260737,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x85cdd36602675007:0xc972fcd1047fb9ef!2m2!1d-99.2877924!2d18.6061902?entry' style={styles.link}>Autopista México -Acapulco  Km 129, Tehuixtla, Mor.</a></p>
              <h5>Correo Electrónico</h5>
              <p><i class="bi bi-envelope-fill" /><a href='mailto:contacto@jardinesdemexico.org' style={styles.link}> contacto@jardinesdemexico.org</a></p>
              <h5>Teléfono</h5>
              <p><i class="bi bi-telephone-fill" /><a href='tel:+527773330141' style={styles.link}> 777 333 0141</a></p>
              <h5>Horario</h5>
              <p><i class="bi bi-calendar3" /> Martes a Domingo</p>
              <p><i class="bi bi-clock-fill" /> 9:00 AM a 18:00 PM</p>


            </div>
          </div>
        </div>

      </div >
      <div>


      </div>
      <Footer />
    </div >
  )
}


const styles = {
  banner: {
    width: "100%",
    height: "auto",
    position: "relative",
    display: "inline-block",
    tetxtAling: "center",

  },
  img: {
    width: "100%",
    height: "auto",
  },
  title: {
    color: "white",
    fontSize: "300%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  form: {
    width: "auto",
  },
  card: {
    width: "600px",
    marginleft: "3%",
    marginRight: "2%",
  },
  card2: {
    width: "300px",
    marginleft: "3%",
    marginRight: "2%",
    border: "solid red 1px"
  },
  container: {
    paddingTop: "2%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap", // Agregado para permitir envolver las tarjetas
    paddingBottom: "2%",
  },
  icon: {
    fontSize: "180%",
    marginRight: "5%",
    TextDecoration: "none",
    color: "#2c497f"
  },
  icons: {
    marginRight: "2%",
    display: "flex",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    color: "black"
  }
}