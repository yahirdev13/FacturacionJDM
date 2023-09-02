import React, { useEffect, useState, useRef } from 'react';

//importacion de estilos
import './styleCliente.css'

//importacion de componentes
import Navbar from '../../common/client/Navbar'
import Footer from '../../common/client/Footer'

//importacion de imagenes
import img from '../../images/banner.png'

//libreria para alertas
import Swal from 'sweetalert2';



export default function ContactanosScreen() {

  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const registrarMensaje = (e) => {
    e.preventDefault();
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('http://localhost:8080/api-jdm/contactanos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: nombre,
            telefono: telefono,
            correo: correo,
            asunto: asunto,
            mensaje: mensaje,
            fechaEnvio: '',
          })
        });
        const data = await response.json();
        if (data.error === false) {
          Swal.fire({
            title: 'Datos enviados',
            text: data.message,
            icon: 'success',
            timer: 2000,
            showConfirmButton: false,
            timerProgressBar: true,
          });
          resolve(true);

          //Recargar a pagina despues de 2 segundos
          setTimeout(() => {
            window.location.reload();
          }, 2000);

        } else {
          Swal.fire({
            title: 'Datos NO enviados',
            text: data.message,
            icon: 'error',
            timer: 2000,
            showConfirmButton: false,
            timerProgressBar: true,
          });
          resolve(false);
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  //validacion del formulario
  const inputName = useRef(null);
  const inputPhone = useRef(null);
  const inputEmail = useRef(null);
  const inputAsunto = useRef(null);
  const inputMensaje = useRef(null);

  const validateForm = () => {

    const elementName = inputName.current;
    const elementPhone = inputPhone.current;
    const elementEmail = inputEmail.current;
    const elementAsunto = inputAsunto.current;
    const elementMensaje = inputMensaje.current;


    const isPhoneValid = elementPhone.value.length === 10;

    if (!isPhoneValid) {
      elementPhone.setCustomValidity("El teléfono debe tener 10 dígitos");
    } else {
      elementPhone.setCustomValidity("");
    }

    if (elementName.checkValidity() && elementPhone.checkValidity() && elementEmail.checkValidity() && elementAsunto.checkValidity() && elementMensaje.checkValidity()) {
      console.log("Formulario de mensaje validado");
      // Aquí puedes realizar la acción correspondiente al envío del formulario
    } else {
      console.log("Formulario de mensaje no validado");
    }
  }


  return (
    <div>
      <Navbar />
      <div style={styles.banner} className="banner">
        <div style={styles.title}>Contáctanos</div>
        <img clas="img-response" src={img} alt="banner" style={styles.img} />
      </div>

      <div style={styles.container}>

        <div class="card border-white justify-content-center" style={styles.card}>
          <div class="card-body">
            <h5 class="card-title">Formulario</h5>
            <div style={styles.form}>
              <form name='enviarMensaje' onSubmit={registrarMensaje}>
                <div class="mb-3">
                  <label class="form-label">Nombre</label>
                  <input ref={inputName} id='inputNombre' type="text" class="form-control" placeholder="Nombre completo" onChange={(e) => setNombre(e.target.value)} required />
                </div>
                <div class="mb-3">
                  <label class="form-label">Telefono</label>
                  <input ref={inputPhone} type="number" class="form-control" placeholder="Teléfono" maxLength={10} onChange={(e) => setTelefono(e.target.value)} required />
                </div>
                <div class="mb-3">
                  <label class="form-label">Correo Electrónico</label>
                  <input ref={inputEmail} type="email" class="form-control" placeholder="Correo Electrónico" onChange={(e) => setCorreo(e.target.value)} required />
                </div>
                <div class="mb-3">
                  <label class="form-label">Asunto</label>
                  <input ref={inputAsunto} type="text" class="form-control" placeholder="Asunto" onChange={(e) => setAsunto(e.target.value)} required />
                </div>
                <div class="mb-3">
                  <label class="form-label text-start">Mensaje</label>
                  <textarea ref={inputMensaje} type="text-area" class="form-control" placeholder="Mensaje" style={{ height: "150px" }} onChange={(e) => setMensaje(e.target.value)} required />
                </div>
                <div class="text-end">
                  <button type="submit" class="btn" style={{ width: "150px", backgroundColor: "#2c497f", color: "white" }} onClick={validateForm}>Enviar</button>
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
              <p><iAutopista class="bi bi-geo-alt-fill" /><a href='https://www.google.com/maps/dir/18.6198907,-99.2881415/jardines+de+mexico/@18.6346211,-99.3260737,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x85cdd36602675007:0xc972fcd1047fb9ef!2m2!1d-99.2877924!2d18.6061902?entry' style={styles.link}>Autopista México-Acapulco  Km 129, Tehuixtla, Mor.</a></p>
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

//declaracion de estilos
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
    textShadow: "2px 2px 4px #000000",
    familyFont: "Arial",
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