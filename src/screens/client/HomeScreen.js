import React from 'react'
import Nav from '../../common/Nav'


export default function HomeScreen() {
  return (
    <div>
      <Nav/>
      <div class="saludos">
        <h1>Bienvenidos al sistema de facturacion electronica</h1>
      </div>
      <div>x``
        <div class="container">
          <div class="box">
            <h2>Disposiciones Fiscales</h2>
            <p>La fecha de emisión de la factura será la fecha que sea solicitada por el cliente.</p>

          </div>
          <div class="box">
            <h2>¡Importante!</h2>
            <p>Ahora tienes 15 días para facturar después de la compra. Evita problemas y cumple con el plazo establecido. Utiliza nuestro sistema en línea para generar tu factura fácilmente.</p>


          </div>
          <div class="box">
            <h2>¡Atención!</h2>
            <p>Solo se podrán facturar las compras realizadas dentro del restaurante. No se aceptarán solicitudes de facturación de cualquier otra compra</p>


          </div>

        </div>

      </div>

      <div class="containerimg ">
        <img class="img1" src="imagenes/jdm.png" alt="Jardines"/>
          <img class="img1" src="imagenes/escj.jpeg" alt="Escuela Jdm"/>
            <img class="img1" src="imagenes/bds.png" alt="Bodas Jdm"/>
            </div>

          </div>
          )
}
