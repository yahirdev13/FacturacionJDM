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
          <table class="table" style={{ width: "auto" }}>
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
                  <button type="button" class="btn btn-primary " style={{ marginRight: "10px" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Detalles</button>
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

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Detalles de Rol: </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>la neta no se que voy a poner aca jsjsjs salu2</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary">Holis</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
