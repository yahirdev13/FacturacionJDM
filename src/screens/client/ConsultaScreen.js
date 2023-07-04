import React from 'react'
import Nav from '../../common/Nav'
import Navbar from '../../common/client/Navbar'
import logo from '../../images/logo-negro.png'

export default function ConsultaScreen() {
    return (
        <div>
            <Navbar />

            <div class="d-flex justify-content-center align-items-center" style={{ height: "90vh" }}>
                <div class="card " style={styles.card}>
                    <center>
                        <img style={styles.image} src={logo} class="img-fluid" />
                    </center>

                    <div class="card-body">
                        <h3 class="card-title" style={styles.title}>Consulta tu ticket</h3>
                        <form>
                            <h5>Ingrese su número de ticket</h5>
                            <div class="input-group flex-nowrap">
                                <span class="input-group-text" id="addon-wrapping">#</span>
                                <input type="text" class="form-control" placeholder="Ticket" aria-describedby="addon-wrapping" />
                            </div>
                            <h5>Ingrese la fecha de la compra</h5>
                            <input type="date"></input>
                            <button type="button" class="btn btn-primary">Consultar</button>
                        </form>

                    </div>
                </div>

            </div>
        </div>
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
        textAlign: "center"
    }
}
