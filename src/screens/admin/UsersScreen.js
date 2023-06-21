import React from 'react'
import "../admin/UserScreenStyle.css"

//Componentes
import MenuAdmin from '../../common/Admin/MenuAdmin'
import NavAdmin from '../../common/Admin/NavAdmin'


export default function UsersScreen() {


    function verificarPasswords() {

        // Ontenemos los valores de los campos de contraseñas 
        pass1 = document.getElementById('pass1');
        pass2 = document.getElementById('pass2');


        if (pass1.value != pass2.value) {   // Verificamos si las constraseñas no coinciden

            document.getElementById("error").classList.add("mostrar");// Si las constraseñas no coinciden mostramos un mensaje
            return false;
        }
        else {

            document.getElementById("error").classList.remove("mostrar");  // Si las contraseñas coinciden ocultamos el mensaje de error


            document.getElementById("ok").classList.remove("ocultar"); // Mostramos un mensaje mencionando que las Contraseñas coinciden


            document.getElementById("login").disabled = true;  // Desabilitamos el botón de login


            setTimeout(function () { // Refrescamos la página (Simulación de envío del formulario)
                location.reload();
            }, 3000);
            return true;
        }
    }

    return (
        <div>
            <NavAdmin />
            <MenuAdmin />
            <div style={{ paddingLeft: "8%", paddingRight: "5%" }}>
                <h1 class="mt-5">Control de Usuarios</h1>
                <div>
                    <button type="button" class="btn btn-primary" style={{ float: "right" }}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                    >Agregar Usuario</button>
                </div>
                <div style={{ left: "250px" }} className='container-fluid'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Correo Electrónico</th>
                                <th scope="col">Rol</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            <tr style={{ verticalAlign: "middle" }}>
                                <th scope="row ">1</th>
                                <td>Yahir Alberto Diaz Gonzalez</td>
                                <td>yahird59@gmail.com</td>
                                <td>Administrador</td>
                                <td>
                                    <button type="button" class="btn btn-warning " style={{ marginRight: "10px" }}>Editar</button>
                                    <button type="button" class="btn btn-danger ">Eliminar</button>
                                </td>
                            </tr>
                            <tr style={{ verticalAlign: "middle" }}>
                                <th scope="row">2</th>
                                <td>Misael Bahena Diaz</td>
                                <td>misaxd@hotmail.com</td>
                                <td>Gerente</td>
                                <td>
                                    <button type="button" class="btn btn-warning " style={{ marginRight: "10px" }}>Editar</button>
                                    <button type="button" class="btn btn-danger ">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* modales */}

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Agregar un nuevo usuario</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id='registrarUsuario' name='registrarUsuario' onsubmit="verificarPasswords(); return false">
                                <div class="mb-3">
                                    <label class="form-label">Nombre/s</label>
                                    <input type="text" class="form-control" aria-describedby="textHelp" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Apellido/s</label>
                                    <input type="text" class="form-control" aria-describedby="textHelp" />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Usuario</label>
                                    <input type="text" class="form-control" aria-describedby="textHelp" />
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
                                <div id="error" class="alert alert-danger ocultar" role="alert">
                                    Las Contraseñas no coinciden, vuelve a intentar !
                                </div>
                                <div id="ok" class="alert alert-success ocultar" role="alert">
                                    Contraseña válida
                                </div>


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

                                <button type="submit" class="btn btn-primary">Guadar Usuario</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
