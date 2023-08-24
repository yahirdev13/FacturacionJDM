import React, { useRef, useState } from 'react'

//importacion de componentes
import Navbar from '../../common/client/Navbar'
import Footer from '../../common/client/Footer'

//importacion de imagenes y gifs
import advertencia from '../../gifs/advertencia2.gif'
import logo from '../../images/logo-negro.png'

//libreria para la generacion del PDF
import jsPDF from 'jspdf';
import 'jspdf-autotable';



export default function FacturaScreen() {

  const inputName = useRef(null);
  const inputApellidos = useRef(null);
  const inputRFC = useRef(null);
  const inputEmail = useRef(null);
  const inputRazon = useRef(null);

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [rfc, setRFC] = useState('');
  const [razon, setRazon] = useState('');
  const [fecha, setFecha] = useState('');

  const f = new Date();

  // Validar el formulario de los datos que el cliente ingrese
  const validateForm = () => {
    const elementName = inputName.current;
    const elementApellidos = inputApellidos.current;
    const elementRFC = inputRFC.current;
    const elementEmail = inputEmail.current;
    const elementRazon = inputRazon.current;

    if (
      elementName.checkValidity() &&
      elementApellidos.checkValidity() &&
      elementEmail.checkValidity() &&
      elementRFC.checkValidity() &&
      elementRazon.checkValidity()
    ) {
      setIsValid(true);
      setShowFormModal(false);
      setShowInfoModal(true);
    } else {
      setIsValid(false);
    }
  };

  const closeInfoModal = () => {
    setShowInfoModal(false);
  };

  const [showFormModal, setShowFormModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [isValid, setIsValid] = useState(false);

  // Generar PDF con los datos
  const generatePDF = () => {
    const doc = new jsPDF();
    // Agregar contenido al PDF aquí
    doc.save('factura.pdf');
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

      <div className="modal fade" id="generarFactura" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" show={showFormModal} onHide={() => setShowFormModal(false)}>
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header lign-items-center justify-content-center">
              <h1 class="modal-title fs-5" >Datos Fiscales</h1>
            </div>
            <div class="modal-body">
              <form name='registrarUsuario' >
                <h4>Ingrese sus datos</h4>
                <div class="mb-3">
                  <label class="form-label">Fecha</label>
                  <input class="form-control" type="text"
                    placeholder={(f.getDate() + " / " + (f.getMonth() + 1) + " / " + f.getFullYear())}
                    aria-label="Disabled input example" disabled name='fecha' onChange={(e) => setFecha(e.target.value)} required />
                </div>
                <div class="mb-3">
                  <label class="form-label">Nombre/s</label>
                  <input ref={inputName} id='nombre' type="text" class="form-control" name='nombre' onChange={(e) => setNombre(e.target.value)} value={nombre} required />
                </div>
                <div class="mb-3">
                  <label class="form-label">Apellido/s</label>
                  <input ref={inputApellidos} id='apellidos' type="text" class="form-control" name='apellidos' onChange={(e) => setApellidos(e.target.value)} required />
                </div>
                <div class="mb-3">
                  <label class="form-label">RFC</label>
                  <input ref={inputRFC} style={styles.rfc} id='rfc' maxlength="13" type="text" class="form-control" name='rfc' onChange={(e) => setRFC(e.target.value)} required />
                </div>
                <div class="mb-3">
                  <label class="form-label">Correo Electrónico</label>
                  <input ref={inputEmail} id='correo' type="email" class="form-control" aria-describedby="emailHelp" name='correo' onChange={(e) => setCorreo(e.target.value)} required />
                </div>

                <div class="mb-3">
                  <label class="form-label">Razón social</label>
                  <select ref={inputRazon} class="form-select" name='razon' onChange={(e) => setRazon(e.target.value)} required>
                    <option selected value="">Seleccione una opción</option>
                    <option value="Persona Física">Persona Física</option>
                    <option value="Moral">Moral</option>
                  </select>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                  <button type="submit" class="btn btn-primary" data-bs-target="#confirmacion" onClick={validateForm}>Continuar</button>
                </div>
              </form>

            </div>

          </div>
        </div>
      </div>

      {/* modal para la confirmacion de datos para generar factura */}

      <div className="modal fade" id="confirmacion" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" show={showInfoModal} onHide={closeInfoModal}>
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
              <button type="button" class="btn btn-success" data-bs-dismiss="modal" >Facturar</button>
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
