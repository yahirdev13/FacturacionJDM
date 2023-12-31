import React from 'react'

//importacion de componentes
import Navbar from '../../common/client/Navbar'
import Footer from '../../common/client/Footer'

//libreria para el redireccionamiento de paginas
import { Link } from 'react-router-dom'

export default function PreguntasScreen() {
  return (
    <div>
      <Navbar />

      <div style={{
        marginLeft: "1%", marginTop: "1%", padding: "5px 50px", paddingBottom: " 4%",
      }}>
        <h2 style={styles.pregunta} className='mt-3'>¿Qué necesito para facturar en línea?</h2>
        <p style={styles.respuesta}>Para facturar en línea, necesitas tener los siguientes requisitos:</p>
        <ul style={styles.respuesta}>
          <li>Acceso a Internet.</li>
          <li>Los datos de la compra o servicio para generar la factura, como el número de folio, fecha, monto, etc.</li>
          <li>Información fiscal válida, incluyendo tu RFC (Registro Federal de Contribuyentes) y domicilio fiscal.</li>
        </ul>
        <p style={styles.pregunta}>¿Se pueden facturar todas las compras?</p>
        <p style={styles.respuesta}>La facturación se puede realizar con cualquier compra efectuada dentro de Jardines de México</p>
        <p style={styles.pregunta}>¿Cuánto tiempo tengo para facturar?</p>
        <p style={styles.respuesta}>Tienes 15 días naturales a partir de la fecha de compra para facturar.</p>
        <p style={styles.pregunta}>¿En que formato obtengo la factura?</p>
        <p style={styles.respuesta}>La factura se genera en formato PDF y formato xml.</p>
        <p style={styles.pregunta}>¿Tiene algún costo extra?</p>
        <p style={styles.respuesta}>No, la facturación es totalmente gratuita.</p>
        <p style={styles.pregunta}>¿Cuánto tiempo tardar el proceso?</p>
        <p style={styles.respuesta}>El proceso de facturación es inmediato, una vez que se ha completado el proceso de facturación, se descaragra la factura en formato PDF</p>
        <p style={styles.pregunta}>¿Qué sucede si perdí mi ticket?</p>
        <p style={styles.respuesta}>No pasa nada, siempre y cuando tengas los requisitos solicitados.</p>
        <p style={styles.pregunta}>¿Existe alguna guía para poder facturar en línea?</p>
        <p style={styles.respuesta}>Si, puedes consultar la guía de facturación en línea. <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Haciendo click aquí</a></p>
        <p style={styles.pregunta}>¿Tienes alguna duda?, no dudes y escribenos</p>
        <p style={styles.respuesta}>Si tines alguna duda escribenos dando <Link to="/contactanos">click aquí</Link></p>

      </div>
      <Footer />
    </div >
  )
}

//declaracion de estilos
const styles = {
  pregunta: {
    fontSize: "30px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#23967f",
  },
  respuesta: {
    textAling: "justify",
    color: "#000000",

  }
}
