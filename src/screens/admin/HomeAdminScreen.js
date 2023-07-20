import React from 'react'
import Footer from '../../common/Footer'
import './style.css'

import Menu from '../../common/Admin/Menu'



export default function HomeAdminScreen() {
    return (
        <div className='component'>
            <Menu />
            <div>
                <div class="mx-auto p-2">
                    <h2>Perfil</h2>
                </div>

            </div>
            <div style={styles.container}>

                <div class="card mt-3 card__1">
                    <div class="card-body">
                        <h4> Foto de perfil</h4>
                        <center>
                            <div className='mt-4 mb-4'>
                                <img src="https://www.w3schools.com/howto/img_avatar.png" class="rounded-circle" alt="Cinque Terre" width="400" height="400" />
                            </div>
                        </center>

                    </div>
                </div>


                <div class="card mt-3 card__2">
                    <div class="card-body ">
                        <h4>Editar datos personales</h4>
                        <form >
                            <div class="mb-3">
                                <label class="form-label">Nombre/s</label>
                                <input type="text" class="form-control" aria-describedby="textHelp" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Apellido/s</label>
                                <input type="text" class="form-control" aria-describedby="textHelp" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Nombre de usuario</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" ></input>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Correo Electrónico</label>
                                <input type="email" class="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Género</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Seleccione una opción</option>
                                    <option value="1">Hombre</option>
                                    <option value="2">Mujer</option>
                                </select>
                            </div>

                            <div class="d-flex justify-content-end pt-3">
                                <button type="button" class="btn btn-primary">Guadar Cambios</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="card mt-3 card__3">
                    <div class="card-body ">
                        <h4>Cambiar Contraseña</h4>
                        <form >
                            <div class="mb-3">
                                <label class="form-label">Contraseña Actual</label>
                                <input type="password" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Nueva Contraseña</label>
                                <input type="password" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Confirma Contraseña</label>
                                <input type="password" class="form-control" />
                            </div>

                            <div class="d-flex justify-content-end pt-3">
                                <button type="button" class="btn btn-primary">Cambiar Contraseña</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        flexWrap: "wrap", // Agregado para permitir envolver las tarjetas
        paddingBottom: "2%",
    }
}