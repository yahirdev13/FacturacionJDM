import React from 'react'
import Menu from '../../common/Admin/Menu'

import './style.css'
import DataTable from 'react-data-table-component'

//gif
import advertencia from '../../gifs/alerta.gif'

const tableusers = [
    { id: 1, nombre: 'Yahir Alberto Diaz Gonzalez', usuario: 'yahirdg', correo: 'yahird59@gmail.com', rol: 'Administrador' },
    { id: 2, nombre: 'Misael Bahena Diaz', usuario: 'misaxd', correo: 'misaxd@gmail.com', rol: 'Gerente' },
    { id: 3, nombre: 'Martin', usuario: 'martingg', correo: 'martinoli@gmail.com', rol: 'administrador' },
]

const columnas = [
    {
        name: '#',
        selector: 'id',
        sortable: true,
        width: '80px',
    },
    {
        name: 'Nombre',
        selector: 'nombre',
        sortable: true
    },
    {
        name: 'Usuario',
        selector: 'usuario',
        sortable: true
    },
    {
        name: 'Correo Electrónico',
        selector: 'correo',
        sortable: true
    },
    {
        name: 'Rol',
        selector: 'rol',
        sortable: true
    },
    {
        name: 'Acciones',
        width: '180px',
        cell: row => (
            <div>
                <button type="button" class="btn btn-primary me-2 mb-2 mt-1">Editar</button>
                <button type="button" class="btn btn-danger mb-2 mt-1" data-bs-toggle="modal" data-bs-target="#eliminarUsuario" >Eliminar</button>
            </div>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
]

const paginacionOpciones = {
    rowsPerPageText: 'Filas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
}





export default function UsersScreen() {

    //funciones para buscador
    // state = {
    //     busqueda: '',
    // }

    // onChange = async e => {
    //     e.persist();
    //     await this.setState({ busqueda: e.target.value });
    //     console.log(this.state.busqueda);
    // }

    return (
        <div className='component'>
            <Menu />
            <section>

                <div>
                    <div class="mx-auto p-2">
                        <h2>Control de usuarios</h2>
                    </div>
                    <div class="d-flex justify-content-end pt-3">
                        <button type="button" class="btn btn-primary crearUsuario" data-bs-toggle="modal" data-bs-target="#crearUsuario">Agregar Usuario</button>
                    </div>

                </div>
                <div class="card mt-3">
                    <div class="card-body">
                        <div class="d-flex justify-content-end mb-2">
                            <input type='text' placeholder='Buscar...' class='form-control me-2'
                            // onChange={this.onChange}
                            />

                        </div>
                        <div class="table-responsive">
                            <DataTable
                                columns={columnas}
                                data={tableusers}
                                title="Lista de usuarios"
                                pagination
                                highlightOnHover
                                paginationComponentOptions={paginacionOpciones}
                                fixedHeader
                                fixedHeaderScrollHeight="auto"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* modal para la creacion de un nuevo usuario*/}

            <div class="modal fade" id="crearUsuario" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header lign-items-center justify-content-center">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Agregar un nuevo usuario</h1>
                        </div>
                        <div class="modal-body">
                            <form id='registrarUsuario needs-validation novalidate' name='registrarUsuario' onsubmit="verificarPasswords()">
                                <div class="mb-3">
                                    <label class="form-label">Nombre/s</label>
                                    <input type="text" class="form-control" aria-describedby="textHelp" required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Apellido/s</label>
                                    <input type="text" class="form-control" aria-describedby="textHelp" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">nombre de suario</label>
                                    <div class="input-group has-validation">
                                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Correo Electrónico</label>
                                    <input type="email" class="form-control" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="pass1" class="form-label">Contraseña</label>
                                    <input type="password" class="form-control" id='pass1' />
                                </div>
                                <div class="pass2">
                                    <label for="exampleInputPassword1" class="form-label">Vuelve a escribir la contraseña</label>
                                    <input type="password" class="form-control" id='pass2' />
                                </div>

                                {/* mensajes de confirmacion de contraseña */}
                                {/* <div id="error" class="alert alert-danger ocultar" role="alert">
                                    Las Contraseñas no coinciden, vuelve a intentar !
                                </div>
                                <div id="ok" class="alert alert-success ocultar" role="alert">
                                    Contraseña válida
                                </div> */}


                                <div class="mb-3">
                                    <label class="form-label">Rol</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Seleccione una opción</option>
                                        <option value="1">Administrador</option>
                                        <option value="2">Gerente</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Género</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Seleccione una opción</option>
                                        <option value="1">Hombre</option>
                                        <option value="2">Mujer</option>
                                        <option value="2">Helicóptero Apache</option>
                                    </select>
                                </div>

                                <button type="submit" class="btn btn-primary" >Guadar Usuario</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* modal para la eliminacion de un usuario */}

            <div class="modal fade" id="eliminarUsuario" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header lign-items-center justify-content-center">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Eliminación de usuario</h1>
                        </div>
                        <div class="modal-body text-center">
                            <img class="img-fluid" src={advertencia} style={{ width: "50%" }}></img>
                            <h5>¿Está seguro de eliminar permanentemente este usuario?</h5>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}