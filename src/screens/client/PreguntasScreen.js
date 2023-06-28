import React from 'react'
import Nav from '../../common/Nav'
import Footer from '../../common/Footer'

export default function PreguntasScreen() {
  return (
    <div>
      <Nav />

      <div style={{ marginLeft: "1%", marginTop: "1%" }}>
        <p style={styles.pregunta}>¿Qué necesito para facturar en línea?</p>
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
        <p style={styles.respuesta}>La factura se genera en formato PDF y formati xml.</p>
        <p style={styles.pregunta}>¿Tiene algun costo extra?</p>
        <p style={styles.respuesta}>No, la facturación es totalmente gratuita.</p>
        <p style={styles.pregunta}>¿Cuánto tiempo tardar el proceso?</p>
        <p style={styles.respuesta}>El proceso de facturación es inmediato, una vez que se ha completado el proceso de facturación, se te enviará un correo electrónico con la factura en formato PDF y xml.</p>
        <p style={styles.pregunta}>¿Qué sucede si perdi mi ticket?</p>
        <p style={styles.respuesta}>Si perdiste tu ticket, no podras facturar.</p>
        <p style={styles.pregunta}>¿Existe alguna guía para poder facturar en línea?</p>
        <p style={styles.respuesta}>Si, puedes consultar la guía de facturación en línea. <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Haciendo click aquí</a></p>

      </div>
      <Footer />
    </div >
  )
}

const styles = {
  pregunta: {
    fontSize: "30px",
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#000000",
  },
  respuesta: {
    fontSize: "20px",
    color: "#000000",
  }
}
