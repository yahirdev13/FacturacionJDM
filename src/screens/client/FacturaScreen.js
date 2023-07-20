import React, { useState } from 'react'

//importacion de componentes
import Navbar from '../../common/client/Navbar'
import Footer from '../../common/client/Footer'

//importacion de imagenes y gifs
import advertencia from '../../gifs/advertencia2.gif'
import logo from '../../images/logo-negro.png'

//libreria para las alertas
import Swal from 'sweetalert2';

export default function FacturaScreen() {

  var f = new Date();

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [rfc, setRFC] = useState('');
  const [razon, setRazon] = useState('');
  const [fecha, setFecha] = useState('');

  const showAlert = () => {

    Swal.fire({
      title: 'Datos enviados correctamente', // Titulo de la alerta
      icon: 'success', // Icono de la alerta
      timer: 2000, // Duración de la alerta en milisegundos (2 segundos en este caso)
      showConfirmButton: false, // No mostrar el botón de confirmación
      timerProgressBar: true, // Muestra la barra de tiempo
    });
  };



  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <div class="d-flex justify-content-center align-items-center">
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
                <button type="button" class="btn btn-lg" data-bs-toggle="modal" data-bs-target="#generarFactura" style={{ backgroundColor: "#2c497f", color: "white" }}>Generar Factura</button>
              </center>
            </form>
          </div>
        </div>
      </div>


      {/* modal para ingresar datos de facturacion */}

      <div class="modal fade" id="generarFactura" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header lign-items-center justify-content-center">
              <h1 class="modal-title fs-5" >Datos Fiscales</h1>
            </div>
            <div class="modal-body">
              <form id=' needs-validation novalidate' name='registrarUsuario'>
                <h4>Ingrese sus datos</h4>
                <div class="mb-3">
                  <label class="form-label">Fecha</label>
                  <input class="form-control" type="text"
                    placeholder={(f.getDate() + " / " + (f.getMonth() + 1) + " / " + f.getFullYear())}
                    aria-label="Disabled input example" disabled name='fecha' onChange={ev => setFecha(ev.target.value)} />
                </div>
                <div class="mb-3">
                  <label class="form-label">Nombre/s</label>
                  <input id='nombre' type="text" class="form-control" required name='nombre' onChange={ev => setNombre(ev.target.value)} />
                </div>
                <div class="mb-3">
                  <label class="form-label">Apellido/s</label>
                  <input id='apellidos' type="text" class="form-control" required name='apellidos' onChange={ev => setApellidos(ev.target.value)} />
                </div>
                <div class="mb-3">
                  <label class="form-label">RFC</label>
                  <input style={styles.rfc} id='rfc' maxlength="13" required type="text" class="form-control" name='rfc' onChange={ev => setRFC(ev.target.value)} />
                </div>
                <div class="mb-3">
                  <label class="form-label">Correo Electrónico</label>
                  <input id='correo' type="email" class="form-control" required aria-describedby="emailHelp" name='correo' onChange={ev => setCorreo(ev.target.value)} />
                </div>

                <div class="mb-3">
                  <label class="form-label">Razón social</label>
                  <select class="form-select" name='razon' required onChange={ev => setRazon(ev.target.value)}>
                    <option selected>Seleccione una opción</option>
                    <option value="Persona Física">Persona Física</option>
                    <option value="Moral">Moral</option>
                  </select>
                </div>
              </form>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#confirmacion" >Continuar</button>
            </div>
          </div>
        </div>
      </div>

      {/* modal para la confirmacion de datos para generar factura */}

      < div class="modal fade" id="confirmacion" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header lign-items-center justify-content-center">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">ATENCIÓN!</h1>
            </div>
            <div class="modal-body text-center">
              <img class="img-fluid" src={advertencia} style={{ width: "30%" }} ></img>
              <h5>Confirme que sus datos sean correctos</h5>
              <table class="table table-borderless">
                <tbody class="text-start">
                  <tr>
                    <td>Fecha:</td>
                    <td><label>{(f.getDate() + " / " + (f.getMonth() + 1) + " / " + f.getFullYear())}</label> </td>
                  </tr>
                  <tr>
                    <td>Nombre:</td>
                    <td><label>{nombre + " " + apellidos}</label> </td>
                  </tr>
                  <tr>
                    <td>RFC:</td>
                    <td><label style={styles.rfc}>{rfc}</label></td>
                  </tr>
                  <tr>
                    <td>Correo:</td>
                    <td>{correo}</td>
                  </tr>
                  <tr>
                    <td>Razón social:</td>
                    <td>{razon}</td>
                  </tr>
                </tbody>

              </table>
              <div id="liveAlertPlaceholder"></div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#generarFactura">Regresar</button>
              <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={showAlert}>Facturar</button>
            </div>
          </div>
        </div>
      </div >

      {/* modal ticket no valido */}

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
      <Footer />
    </div >


  )
}

//declaracion de estilos
const styles = {
  card: {
    width: "1000px",
    height: "600px",
    marginBottom: "0",
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
  },
  rfc: {
    textTransform: "uppercase"
  }
}
