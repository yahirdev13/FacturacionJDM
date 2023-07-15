import React, { Component, useEffect, useState } from 'react'
import Menu from '../../common/Admin/Menu'

import axios from 'axios';

import './style.css'
import DataTable from 'react-data-table-component'

//gif
import advertencia from '../../gifs/alerta.gif'


//definicion de la tabla especificamente las columnas

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
        selector: 'nombreUsuario',
        sortable: true
    },
    {
        name: 'Correo Electrónico',
        selector: 'correo',
        width: '200px',
        sortable: true
    },
    {
        name: 'Rol',
        selector: 'rol',
        sortable: true
    },
    {
        name: 'Acciones',
        width: '230px',
        cell: row => (
            <div>
                <button type="button" class="btn btn-primary me-2 mb-2 mt-1">Editar <i class="bi bi-pencil-fill"></i></button>
                <button type="button" class="btn btn-danger mb-2 mt-1" data-bs-toggle="modal" data-bs-target="#eliminarUsuario" >Eliminar <i class="bi bi-trash-fill"></i></button>
            </div >
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    },
]

//define la configuracion de la paginacion de la tabla

const paginacionOpciones = {
    rowsPerPageText: 'Filas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
}

export default class UsersScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            busqueda: '',
            resultados: [],
            usuarios: [], // Agrega esta línea
        };
    }

    //Estado para la busqueda
    state = {
        busqueda: ' ',
        resultados: [],
    }

    //Consumir api de Get all de usuarios
    componentDidMount() {
        this.fetchUsuarios();
    }

    fetchUsuarios = () => {
        axios
            .get('http://localhost:8080/api-jdm/usuarios')
            .then(response => {
                const { data } = response;
                if (data && data.data && data.data.length > 0) {
                    const usuarios = data.data.map(usuario => {
                        const { id, nombre, apellidos, correo, nombreUsuario, rol } = usuario;
                        const nombreCompleto = `${nombre} ${apellidos}`;

                        return { id, nombre: nombreCompleto, nombreUsuario, correo, rol };
                    });
                    console.log(usuarios); // Imprime los usuarios en el formato deseado en la consola
                    this.setState({ usuarios: usuarios, resultados: usuarios });
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    //Funcionalidad del buscador
    onChange = e => {
        this.setState({ busqueda: e.target.value }, this.filtrarResultados);
    };

    filtrarResultados = () => {
        const { usuarios, busqueda } = this.state;

        const search = usuarios.filter(item => {
            if (
                item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                item.nombreUsuario.toLowerCase().includes(busqueda.toLowerCase()) ||
                item.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
                item.rol.toLowerCase().includes(busqueda.toLowerCase())
            ) {
                return item;
            }
        });

        this.setState({ resultados: search });
    };

    // onChange = async e => {
    //     e.persist();
    //     await this.setState({ busqueda: e.target.value });
    //     this.filtrarResultados();
    // }

    // filtrarResultados = () => {
    //     var search = usuarios.filter(item => {
    //         if (item.nombre.toLowerCase().includes(this.state.busqueda) ||
    //             item.usuario.toLowerCase().includes(this.state.busqueda) ||
    //             item.correo.toLowerCase().includes(this.state.busqueda) ||
    //             item.rol.toLowerCase().includes(this.state.busqueda)
    //         ) {
    //             return item;
    //         }
    //     });
    //     this.setState({ resultados: search });
    // }

    // componentDidMount() {
    //     this.setState({ resultados: tableusers });
    // }

    render() {

        const { resultados } = this.state;

        return (
            <div className='component'>
                <Menu />


                <div>
                    <div class="mx-auto p-2">
                        <h2>Control de usuarios</h2>
                    </div>
                    <div class="d-flex justify-content-end pt-3">
                        <button type="button" class="btn btn-primary crearUsuario" data-bs-toggle="modal" data-bs-target="#crearUsuario">Agregar Usuario <i class="bi bi-person-fill-add"></i></button>
                    </div>

                </div>
                <div class="card mt-3">
                    <div class="card-body">
                        <div class="d-flex justify-content-end mb-2">
                            <input type='text' placeholder='Buscar...' class='form-control me-2' style={{ width: "300px" }}
                                onChange={this.onChange}
                            />

                        </div>
                        <div class="table-responsive">
                            <DataTable
                                columns={columnas}
                                data={resultados}
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
}
