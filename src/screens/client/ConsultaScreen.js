import React, { useRef, useState } from 'react'

//importacion de componentes
import Navbar from '../../common/client/Navbar'
import Footer from '../../common/client/Footer'

//importacion de libreria para el redireccionamiento de paginas
import { Link } from 'react-router-dom'


//importacion de imagenes y gifs
import aprobado from '../../gifs/aprobado.gif'
import cancelado from '../../gifs/archivo.gif'
import logo from '../../images/logo-negro.png'

export default function ConsultaScreen() {

    const [numTicket, setNumTicket] = useState('');
    const [fechaC, setFechaC] = useState('');
    const [importe, setImporte] = useState('');

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
                    btnSI.current.click();
                } else {
                    btnNO.current.click();
                }
            } catch (error) {
                console.log('Error');
                reject(error);
            }
        });
    };

    const btnSI = useRef(null);
    const btnNO = useRef(null);


    const formatDate = (e) => {
        const fechaRecibida = e.target.value;
        const [year, month, day] = fechaRecibida.split('-');
        const nuevaFecha = `${day}/${month}/${year}`;
        setFechaC(nuevaFecha);
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <button ref={btnNO} type="button" id="NOCONSULTA" class="invisible-button" data-bs-toggle="modal" data-bs-target="#NOconsultaTicket" style={{ display: 'none' }}>boton invisible</button>
            <button ref={btnSI} type="button" id="CONSULTA" class="invisible-button" data-bs-toggle="modal" data-bs-target="#consultaTicket" style={{ display: 'none' }}>boton invisible</button>

            <Navbar />

            <div class="d-flex justify-content-center align-items-center">
                <div class="card border-white" style={styles.card}>
                    <center>
                        <img style={styles.image} src={logo} class="img-fluid" />
                    </center>
                    <div class="card-body">
                        <h3 class="card-title" style={styles.title}>Consulta tu ticket</h3>

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
                                <button type="submit" class="btn btn-lg" style={{ backgroundColor: "#2c497f", color: "white" }}>Consultar Factura</button>
                            </center>
                        </form>

                    </div>

                </div>


            </div>


            {/* modal ticket aprobado */}

            < div class="modal fade" id="consultaTicket" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header lign-items-center justify-content-center">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Estado del Ticket</h1>
                        </div>
                        <div class="modal-body text-center">
                            <img class="img-fluid" src={aprobado} style={{ width: "50%" }} ></img>
                            <h5>Tu Ticket es válido para facturar</h5>
                            <p>Puedes facturar dando click  <Link to={"/factura"}><button type="button" class="btn btn-link" data-bs-dismiss="modal">Aquí</button></Link></p>
                            <div id="liveAlertPlaceholder"></div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detallesTicket">Detalles</button>
                            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div >

            {/* modal detalles del ticket */}

            < div class="modal fade" id="detallesTicket" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header lign-items-center justify-content-center">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Detalles de Ticket</h1>
                        </div>
                        <div class="modal-body">

                            <h4>Ticket</h4>
                            <p>123456789</p>

                            <h4>Fecha</h4>
                            <p>10/03/2023</p>

                            <h4>Lugar</h4>
                            <p>Restaurante Jardines de Mexico</p>

                            <h4>Desglose</h4>
                            <table class="table ">
                                <thead>
                                    <tr>

                                        <th scope="col">Producto</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody class="table-group-divider">
                                    <tr>

                                        <td>Agua</td>
                                        <td>10</td>
                                        <td>$120</td>
                                    </tr>
                                    <tr>

                                        <td>Pastel</td>
                                        <td>8</td>
                                        <td>$1200</td>
                                    </tr>
                                    <tr>

                                        <td>Hamburguesa</td>
                                        <td>3</td>
                                        <td>$800</td>
                                    </tr>
                                    <tr>

                                        <td>Helado</td>
                                        <td>3</td>
                                        <td>$140</td>
                                    </tr>
                                    <tr>
                                        <td>Cerveza Modelo</td>
                                        <td>8</td>
                                        <td>$1200</td>
                                    </tr>
                                    <tr>
                                        <td><h3>Total</h3></td>
                                        <td></td>
                                        <td><b>$36748</b></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div >

            {/* modal ticket no aprobado */}

            < div class="modal fade" id="NOconsultaTicket" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header lign-items-center justify-content-center">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Estado del Ticket</h1>
                        </div>
                        <div class="modal-body text-center">
                            <img class="img-fluid" src={cancelado} style={{ width: "50%" }} ></img>
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
        </div>

    )
}

//declaracion de estilos
const styles = {
    card: {
        width: "1000px",
        height: "100%",
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
    }
}
