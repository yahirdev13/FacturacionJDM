import React from 'react'
import Navbar from '../../common/client/Navbar'
import Footer from '../../common/Footer'

export default function ContactanosScreen() {
  return (
    <div>
      <Navbar />

      <div className="saludocontacto">
        <h1>Contactanos</h1>
      </div>

      <br />

      <div className="containerimgbaner">
        <img className="img2" src="imagenes/baner.png" alt="baner" />
      </div>

      <div className="contacto">
        <h1>Contacto Facturación</h1>
        <br />
        <br />

        <div className="contenedorcontactanos">
          <a href="https://www.google.com/maps/place/Jardines+de+M%C3%A9xico/@18.6061902,-99.2899811,17z/data=!3m1!4b1!4m6!3m5!1s0x85cdd36602675007:0xc972fcd1047fb9ef!8m2!3d18.6061902!4d-99.2877924!16s%2Fg%2F11h0fh91j?hl=es-419&entry=ttu">
            <img className="img33" src="imagenes/ubicacion.png" alt="" />
            Km 129 de la Autopista México - Acapulco a la altura de
            Tequesquitengo, 62900 Tehuixtla, Mor.
          </a>

          <br />
          <br />
          <br />
          <br />
          <br />
          <a href="mailto:facturamos@jardinesdemexico.org">
            <img className="img33" src="imagenes/correito.png" alt="nosotros" />
            facturamos@jardinesdemexico.org
          </a>

          <br />
          <br />
          <br />
          <br />
          <br />

          <a href="https://www.facebook.com/jardinesdemexico/photos">
            <img className="img33" src="imagenes/telefonito.png" alt="nosotros" />
            ◉7771456935
            <br />
            ◉7774596325
          </a>
        </div>
      </div>

      <div className="containerimg"></div>

      <center>
        <style>
          {`
            .formulario label,
            .formulario input,
            .formulario textarea {
              font-size: 18px;
            }
          `}
        </style>

        <div className="containerformulario">
          <div className="formulario">
            <h2>Contacto</h2>
            <br />
            <label htmlFor="nombre">Nombre completo:</label>
            <br />
            <input type="text" id="nombre" name="nombre" required />
            <br />
            <label htmlFor="correo">Correo electrónico:</label>
            <br />
            <input type="email" id="correo" name="correo" required />
            <br />
            <label htmlFor="razon">Razón de contacto:</label>
            <br />
            <input type="text" id="razon" name="razon" required />
            <br />
            <label htmlFor="mensaje">Mensaje:</label>
            <br />
            <textarea id="mensaje" name="mensaje" required></textarea>
            <br />
            <button type="submit">Enviar</button>
          </div>
        </div>
      </center>

      <br />
      <br />
      <br />

      <div className="containerimg ">
        <img className="img1" src="imagenes/jdm.png" alt="Jardines" />
        <img className="img1" src="imagenes/escj.jpeg" alt="Escuela Jdm" />
        <img className="img1" src="imagenes/bds.png" alt="Bodas Jdm" />
      </div>
      <Footer />
    </div>
  )
}
