import React, { useRef, useState } from 'react'

//importacion de componentes
import Navbar from '../../common/client/Navbar'
import Footer from '../../common/client/Footer'

//importacion de imagenes y gifs
import advertencia from '../../gifs/advertencia2.gif'
import logo from '../../images/logo-negro.png'
import JDM from '../../images/jdm.png'

//libreria para la generacion del PDF
import jsPDF from 'jspdf';
import 'jspdf-autotable';

//libreria para alertas
import Swal from 'sweetalert2';
import { set } from 'date-fns'



export default function FacturaScreen() {

  const [ticket, setTicket] = useState('');
  const [fechaCompra, setFechaCompra] = useState('');
  const [monto, setMonto] = useState('')


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

  const [numTicket, setNumTicket] = useState('');
  const [fechaC, setFechaC] = useState('');
  const [importe, setImporte] = useState('');
  const [productos, setProductos] = useState([]);


  const f = new Date();

  const [factura, setFactura] = useState('');

  const btnCancel = useRef(null);
  const btnCancel2 = useRef(null)

  //vaalidar el formualrio para saber si es valido el ticket
  const validateTicket = (e) => {
    e.preventDefault();
    return new Promise(async (resolve, reject) => {
      try {
        const respose = await fetch('http://localhost:8080/api-jdm/tickets', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            numTicket: numTicket,
            fecha: fechaC,
            total: importe
          })
        });
        const data = await respose.json();
        if (data.error === false) {
          console.log('Ticket valido')
          Swal.fire({
            title: 'Ticket valido', // Titulo de la alerta
            text: 'Ingrese sus datos fiscales', // Texto de la alerta
            icon: 'success', // Icono de la alerta
            timer: 2000, // Duración de la alerta en milisegundos (3 segundos en este caso)
            showConfirmButton: false, // No mostrar el botón de confirmación
            timerProgressBar: true, // Muestra la barra de tiempo
          });
          btnCancel.current.click();
          resolve(true);
        } else {
          Swal.fire({
            title: 'Ticket no valido', // Titulo de la alerta
            text: data.message, // Texto de la alerta
            icon: 'error', // Icono de la alerta
            timer: 2000, // Duración de la alerta en milisegundos (3 segundos en este caso)
            showConfirmButton: false, // No mostrar el botón de confirmación
            timerProgressBar: true, // Muestra la barra de tiempo
          });
          resolve(false);
        }
      } catch (error) {
        console.log('Error');
        reject(error);
      }
    });
  };

  const generateFactura = (e) => {
    e.preventDefault();
    return new Promise(async (resolve, reject) => {
      try {
        const respose = await fetch('http://localhost:8080/api-jdm/facturas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre: nombre,
            apellidos: apellidos,
            correo: correo,
            rfc: rfc,
            razonSocial: razon,
            ticket: {
              numTicket: numTicket
            },
            fecha: '',
          })
        });
        const data = await respose.json();
        if (data.error === false && data.data !== null) {
          const facturaData = data.data;
          const facturaM = {
            ...factura,

          }
          setFactura(facturaData);


          console.log(facturaData);
          generatePDF(facturaData); //genera el PDF
          console.log("Todo bien")
          Swal.fire({
            title: 'Factura generada', // Titulo de la alerta
            text: 'Por favor espere mientras se complete la descarga', // Texto de la alerta
            icon: 'success', // Icono de la alerta
            timer: 2000, // Duración de la alerta en milisegundos (3 segundos en este caso)
            showConfirmButton: false, // No mostrar el botón de confirmación
            timerProgressBar: true, // Muestra la barra de tiempo
          });
          resolve(facturaM);
          console.log(facturaM)

        } else {
          console.log("Todo mal")
          resolve(false)
        }
      } catch (error) {
        console.log('Error');
        reject(error)
      }
    });
  }



  const formatDate = (e) => {
    const fechaRecibida = e.target.value;
    const [year, month, day] = fechaRecibida.split('-');
    const nuevaFecha = `${day}/${month}/${year}`;
    setFechaC(nuevaFecha);
  }


  // Validar el formulario de los datos que el cliente ingrese
  const validateForm = () => {
    const elementName = inputName.current;
    const elementApellidos = inputApellidos.current;
    const elementRFC = inputRFC.current;
    const elementEmail = inputEmail.current;
    const elementRazon = inputRazon.current;

    if (elementName.checkValidity() && elementApellidos.checkValidity() && elementEmail.checkValidity() && elementRFC.checkValidity() && elementRazon.checkValidity()) {
      btnCancel2.current.click();
    }

  };

  const prevent = (e) => {
    e.preventDefault();
  }

  //funcion generar no. factura aleatorio
  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'Fa';
    for (let i = 0; i < length - 2; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }


  // Generar PDF con los datos
  const generatePDF = (factura) => {

    // Generar un número de factura aleatorio
    const randomFactura = generateRandomString(10);

    const doc = new jsPDF();

    doc.setFont('Arial', 'normal');
    doc.setFontSize(12);

    // Agregar encabezado con el logo
    doc.addImage(JDM, 'PNG', 15, 15, 90, 25);

    // Agregar título e número de factura
    doc.setFontSize(18);
    doc.setFont('arial', 'bold');
    doc.text(130, 15, 'FACTURA');
    doc.setFont('arial', 'normal');
    doc.setFontSize(12);
    doc.text(130, 25, 'Factura #' + randomFactura);
    // doc.text(130, 35, 'Ticket #' + factura.ticket.numTicket);
    doc.text(130, 35, 'Fecha: ' + (f.getDate() + " / " + (f.getMonth() + 1) + " / " + f.getFullYear()));


    // Colocar información de la empresa debajo del logo
    doc.text(15, 65, 'Jardines de México');
    doc.text(15, 75, 'Autopista México -Acapulco  Km 129');
    doc.text(15, 85, 'Tehuixtla, Morelos');
    doc.text(15, 95, 'Teléfono: 777-333-0141');
    doc.text(15, 105, 'Correo: contacto@jardinesdemexico.org');

    // Agregar información del cliente
    doc.setFontSize(12);
    doc.text(130, 65, 'Facturar a:');
    doc.text(130, 75, `${nombre} ${apellidos}`);
    doc.text(130, 85, `RFC: ${rfc.toUpperCase()}`);
    doc.text(130, 95, `Correo: ${correo}`);
    doc.text(130, 105, `Razón social: ${razon}`);

    // Agregar ejemplos de filas de la tabla (reemplazar con datos reales)
    const posYHeader = 125;
    const alturaFila = 15;
    const items = factura.ticket.productos.map(producto => {
      return {
        descripcion: producto.nombre,
        cantidad: producto.cantidad,
        precioUnitario: producto.precio,
        total: producto.total
      };
    });

    // Dibujar encabezado de la tabla
    doc.setDrawColor(0);
    doc.setFillColor(254, 196, 252); // Color de fondo de encabezado
    doc.rect(15, posYHeader, 180, alturaFila, 'F'); // Rectángulo de encabezado
    doc.setTextColor(0);
    doc.setFontSize(12);
    doc.text(20, posYHeader + 10, 'Descripción');
    doc.text(120, posYHeader + 10, 'Cantidad');
    doc.text(140, posYHeader + 10, 'Precio Unitario');
    doc.text(175, posYHeader + 10, 'Total');

    // Agregar filas de la tabla con bordes
    const posYTableStart = posYHeader + alturaFila;
    let posY = posYTableStart;
    items.forEach(item => {

      // Dibujar bordes de la fila
      doc.setDrawColor(0);

      // Agregar contenido de la fila
      doc.setTextColor(0);
      doc.setFontSize(12);
      doc.text(20, posY + 10, item.descripcion);
      doc.text(128, posY + 10, item.cantidad.toString());
      doc.text(145, posY + 10, `$ ${item.precioUnitario.toFixed(2)}`);
      doc.text(175, posY + 10, `$ ${item.total.toFixed(2)}`);
      posY += alturaFila;
    });

    doc.line(15, posY, 195, posY); // Línea final de la tabla (abajo

    // Agregar el total
    const subtotal = items.reduce((suma, item) => suma + item.total, 0);
    const iva = subtotal * 0.16;
    const total = subtotal + iva;


    doc.setFontSize(12);
    doc.text(145, posY + 10, 'Subtotal:');
    doc.text(175, posY + 10, `$ ${subtotal.toFixed(2)}`);
    doc.text(145, posY + 20, 'IVA (16%):');
    doc.text(175, posY + 20, `$ ${iva.toFixed(2)}`);

    doc.setFont('arial', 'bold');
    doc.text(145, posY + 30, 'Total:');
    doc.text(175, posY + 30, `$ ${total.toFixed(2)}`);

    doc.setFont('arial', 'normal');
    doc.setFontSize(10);


    doc.setFillColor(254, 196, 252); // Color de fondo de encabezado
    doc.rect(0, posY + 100, 220, alturaFila, 'F'); // Rectángulo del final
    doc.setTextColor(0);
    doc.text(15, posY + 122.5, 'Este documento es una factura válida en México, expedida por Jardines de México.');


    // Guardar el PDF
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
            <form onSubmit={validateTicket}>
              <div class="mb-4 row" style={styles.containers}>
                <label for="staticEmail" class="col-sm-2 col-form-label" style={styles.inputs}>No. Ticket</label>
                <div class="col-sm-10">
                  <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">#</span>
                    <input type="text" class="form-control" placeholder="Ticket" aria-describedby="addon-wrapping" onChange={(e) => setNumTicket(e.target.value)} value={numTicket} required />
                  </div>
                </div>
              </div>
              <div class="mb-4 row" style={styles.containers}>
                <label for="inputDate" class="col-sm-2 col-form-label" style={styles.inputs}>Fecha de compra</label>
                <div class="col-sm-10">
                  <input type="date" class="form-control" id="inputDate" onChange={formatDate} required />
                </div>

              </div>
              <div class="mb-4 row" style={styles.containers}>
                <label for="staticEmail" class="col-sm-2 col-form-label" style={styles.inputs}>Importe Total</label>
                <div class="col-sm-10">
                  <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">$</span>
                    <input type="number" class="form-control" placeholder="Importe del ticket" aria-describedby="addon-wrapping" onChange={(e) => setImporte(e.target.value)} value={importe} required />
                  </div>
                </div>
              </div>

              <center>
                <button type="submit" class="btn btn-lg" style={{ backgroundColor: "#2c497f", color: "white" }}>Generar Factura</button>
                <button ref={btnCancel} type="button" class="invisible-button" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#generarFactura" style={{ display: 'none' }}>Botón Invisible</button>
              </center>
            </form>
          </div>
        </div>
      </div>


      {/* modal para ingresar datos de facturacion */}

      <div className="modal fade" id="generarFactura" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header lign-items-center justify-content-center">
              <h1 class="modal-title fs-5" >Datos Fiscales</h1>
            </div>
            <div class="modal-body">
              <form onSubmit={prevent}>
                <h4>Ingrese sus datos</h4>
                <div class="mb-3">
                  <label class="form-label">Fecha</label>
                  <input class="form-control" type="text"
                    placeholder={(f.getDate() + " / " + (f.getMonth() + 1) + " / " + f.getFullYear())}
                    aria-label="Disabled input example" disabled name='fecha' onChange={(e) => setFecha(e.target.value)} value={fecha} required />
                </div>
                <div class="mb-3">
                  <label class="form-label">Nombre/s</label>
                  <input ref={inputName} id='nombre' type="text" class="form-control" name='nombre' onChange={(e) => setNombre(e.target.value)} value={nombre} required />
                </div>
                <div class="mb-3">
                  <label class="form-label">Apellido/s</label>
                  <input ref={inputApellidos} id='apellidos' type="text" class="form-control" name='apellidos' onChange={(e) => setApellidos(e.target.value)} value={apellidos} required />
                </div>
                <div class="mb-3">
                  <label class="form-label">RFC</label>
                  <input ref={inputRFC} style={styles.rfc} id='rfc' maxlength="13" type="text" class="form-control" name='rfc' onChange={(e) => setRFC(e.target.value)} value={rfc} required />
                </div>
                <div class="mb-3">
                  <label class="form-label">Correo Electrónico</label>
                  <input ref={inputEmail} id='correo' type="email" class="form-control" aria-describedby="emailHelp" name='correo' onChange={(e) => setCorreo(e.target.value)} required />
                </div>

                <div class="mb-3">
                  <label class="form-label">Razón social</label>
                  <select ref={inputRazon} class="form-select" name='razon' onChange={(e) => setRazon(e.target.value)} required>
                    <option value="">Seleccione una opción</option>
                    <option value="Física">Persona Física</option>
                    <option value="Moral">Persona Moral</option>
                  </select>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                  <button type="submit" class="btn btn-primary" onClick={validateForm}>Continuar</button>
                  <button ref={btnCancel2} type="button" class="invisible-button" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#confirmacion" style={{ display: 'none' }}>Botón Invisible</button>
                </div>
              </form>

            </div>

          </div>
        </div>
      </div>

      {/* modal para la confirmacion de datos para generar factura */}

      <div className="modal fade" id="confirmacion" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
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
              <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={generateFactura}>Facturar</button>
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
