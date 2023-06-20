import React from 'react'

//Componentes
import MenuAdmin from '../../common/Admin/MenuAdmin'
import NavAdmin from '../../common/Admin/NavAdmin'


export default function UsersScreen() {
    return (
        <div>
            <NavAdmin />
            <MenuAdmin />
            <div style={{ paddingLeft: "8%", paddingRight: "5%" }}>
                <h1 class="mt-5">Control de Usuarios</h1>
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
                            <tr style={{ verticalAlign: "middle"}}>
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


        </div>
    )
}
