import React from 'react'
import Navbar from '../../common/client/Navbar'
import logo from '../../images/logo-negro.png'
import Footer from '../../common/Footer'

import advertencia from '../../gifs/advertencia2.gif'

export default function FacturaScreen() {

  var f = new Date();

  var name = "";
  var surName = "";
  var rfc = "";
  var email = "";
  var rz = "";
  var fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();

  function subirDatos() {
    // var name = document.getElementById('nombre').value;
    // var surName = document.getElementById('apellidos').value;
    // var email = document.getElementById('correo').value;
    // var rfc = document.getElementById('rfc').value;
    // var rz = document.getElementById('razon').value;
  }


  return (
    <div>
      <Navbar />

      <div class="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
        <div class="card border-white" style={styles.card}>
          <center>
            <img style={styles.image} src={logo} class="img-fluid" />
          </center>
          <div class="card-body">
            <h3 class="card-title" style={styles.title}>Generar Factura</h3>

            <form>
              <div class="mb-4 row" style={styles.containers}>
                <label for="staticEmail" class="col-sm-2 col-form-label" style={styles.inputs}>No. Ticket</label>
                <div class="col-sm-10">
                  <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">#</span>
                    <input type="text" class="form-control" placeholder="Ticket" aria-describedby="addon-wrapping" />
                  </div>
                </div>
              </div>
              <div class="mb-4 row" style={styles.containers}>
                <label for="inputDate" class="col-sm-2 col-form-label" style={styles.inputs}>Fecha de compra</label>
                <div class="col-sm-10">
                  <input type="date" class="form-control" id="inputDate" />
                </div>

              </div>
              <div class="mb-4 row" style={styles.containers}>
                <label for="staticEmail" class="col-sm-2 col-form-label" style={styles.inputs}>Importe Total</label>
                <div class="col-sm-10">
                  <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">$</span>
                    <input type="number" class="form-control" placeholder="Importe excato del Ticket" aria-describedby="addon-wrapping" />
                  </div>
                </div>
              </div>

              <center>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#generarFactura">Generar Factura</button>
              </center>
            </form>
          </div>
        </div>
      </div>
      <Footer />

      {/* modal para datos de facturacion */}

      <div class="modal fade" id="generarFactura" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header lign-items-center justify-content-center">
              <h1 class="modal-title fs-5" >Datos Fiscales</h1>
            </div>
            <div class="modal-body">
              <form id=' needs-validation novalidate' name='registrarUsuario' onsubmit="subirDatos">
                <h4>Ingrese sus datos</h4>
                <div class="mb-3">
                  <label class="form-label">Fecha</label>
                  <input class="form-control" type="text"
                    placeholder={(f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear())}
                    aria-label="Disabled input example" disabled />
                </div>
                <div class="mb-3">
                  <label class="form-label">Nombre/s</label>
                  <input id='nombre' type="text" class="form-control" required />
                </div>
                <div class="mb-3">
                  <label class="form-label">Apellido/s</label>
                  <input id='apellidos' type="text" class="form-control" required />
                </div>
                <div class="mb-3">
                  <label class="form-label">RFC</label>
                  <input id='rfc' type="text" class="form-control" required />
                </div>
                <div class="mb-3">
                  <label class="form-label">Correo Electrónico</label>
                  <input id='correo' type="email" class="form-control" aria-describedby="emailHelp" />
                </div>

                <div class="mb-3">
                  <label class="form-label">Razón social</label>
                  <select id='razon' class="form-select">
                    <option selected>Seleccione una opción</option>
                    <option value="FIsica">Persona Física</option>
                    <option value="Moral">Moral</option>
                  </select>
                </div>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#confirmacion" onClick={subirDatos()}>Continuar</button>
              </form>

            </div>
          </div>
        </div>
      </div>

      {/* modal de confirmacion de factura */}

      < div class="modal fade" id="confirmacion" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header lign-items-center justify-content-center">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">ATENCIÓN!</h1>
            </div>
            <div class="modal-body text-center">
              <img class="img-fluid" src={advertencia} style={{ width: "30%" }} ></img>
              <h5>Confime que sus datos sean correctos</h5>
              <table class="table table-borderless">
                <tbody class="text-start">
                  <tr>
                    <td>Nombre:</td>
                    <td><label id='labelName'>{name + surName}</label> </td>
                  </tr>
                  <tr>
                    <td>RFC:</td>
                    <td>{rfc}</td>
                  </tr>
                  <tr>
                    <td>Correo:</td>
                    <td>{email}</td>
                  </tr>
                  <tr>
                    <td>Razón social:</td>
                    <td>{rz}</td>
                  </tr>
                </tbody>

              </table>
              <div id="liveAlertPlaceholder"></div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Regresar</button>
              <button type="button" class="btn btn-success" data-bs-dismiss="modal">Facturar</button>
            </div>
          </div>
        </div>
      </div >

      {/* modal no aceptado */}

      < div class="modal fade" id="NOconsultaTicket" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header lign-items-center justify-content-center">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Estado del Ticket</h1>
            </div>
            <div class="modal-body text-center">
              <img class="img-fluid" src={advertencia} style={{ width: "50%" }} ></img>
              <h5>Tu Ticket NO es válido para facturar</h5>
              <div id="liveAlertPlaceholder"></div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Aceptar</button>
            </div>
          </div>
        </div>
      </div >
    </div >


  )
}

const styles = {
  card: {
    width: "1000px",
  },
  image: {
    width: "80%"
  },
  title: {
    textAlign: "center",
    paddingBottom: "20px"
  },
  containers: {
  },
  inputs: {
    fontWeight: "bold"
  }
}
