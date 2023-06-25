import React from 'react'
import Nav from '../../common/Nav'
import '../client/HomeStyle.css'
import Footer from '../../common/Footer'

import Carousel from '../../common/Carousel/Carousel'

//imagnes
import jdm from '../../images/jdm.png'
import jdmBoda from '../../images/jdmBoda.png'
import jdmEsc from '../../images/jdmEsc.png'


export default function HomeScreen() {
  return (
    <div>
      <Nav />
      <div class="saludos">
        <h1>Bienvenidos al sistema de facturacion electrónica</h1>
      </div>
      
      <center>
        <Carousel />
      </center>

      <div>
        <div class="container">
          <div class="box">
            <h2>Disposiciones Fiscales</h2>
            <p>La fecha de emisión de la factura será la fecha que sea solicitada por el cliente.</p>

          </div>
          <div style={{display:'flex'}} class="box">
            <h2>¡Importante!</h2>
            <p style={{textAlign:'justify', margin:"20px 15px 15px 15px" }}>Ahora tienes 15 días para facturar después de la compra. Evita problemas y cumple con el plazo establecido. Utiliza nuestro sistema en línea para generar tu factura fácilmente.</p>

          </div>
          <div class="box">
            <h2>¡Atención!</h2>
            <p>Solo se podrán facturar las compras realizadas dentro del restaurante. No se aceptarán solicitudes de facturación de cualquier otra compra</p>
          </div>

        </div>

      </div>

      <div class="containerimg ">
        <img class="img1" src={jdm} alt="Jardines de México" />
        <img class="img1" src={jdmEsc} alt="Escuela de Jardinería" />
        <img class="img1" src={jdmBoda} alt="Jardines de México Bodas" />
      </div>
      <Footer />
    </div>
  )
}
