import React from 'react'
import MenuAdmin from '../../common/Admin/MenuAdmin'
import NavAdmin from '../../common/Admin/NavAdmin'

export default function RolScreen() {
  return (
    <div>
      <NavAdmin />
      <MenuAdmin />
      <div style={{ paddingLeft: "8%", paddingRight: "5%" }}>
        <h1 class="mt-5">Control de Roles</h1>
        <div style={{ left: "250px" }} className='container-fluid'>
          <table class="table" style={{width:"auto"}}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Rol</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr style={{ verticalAlign: "middle" }}>
                <th scope="row ">1</th>
                <td>Administrador</td>
                <td>
                  <button type="button" class="btn btn-primary " style={{ marginRight: "10px" }}>Detalles</button>
                  <button type="button" class="btn btn-danger ">Eliminar</button>
                </td>
              </tr>
              <tr style={{ verticalAlign: "middle" }}>
                <th scope="row ">2</th>
                <td>Gerente</td>
                <td>
                  <button type="button" class="btn btn-primary " style={{ marginRight: "10px" }}>Detalles</button>
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
