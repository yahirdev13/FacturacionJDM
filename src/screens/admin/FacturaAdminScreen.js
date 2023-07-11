import React from 'react'
import Menu from '../../common/Admin/Menu'


export default function FacturaAdminScreen() {
  return (
    <div>
      <Menu />

      <div style={{ paddingLeft: "8%", paddingRight: "5%" }}>
        <h1 class="mt-5">Control de Facturas</h1>
        <div style={{ left: "250px" }} className='container-fluid'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Ticket</th>
                <th scope="col">Fecha</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr style={{ verticalAlign: "middle" }}>
                <th scope="row ">1</th>
                <td>Yahir Alberto Diaz Gonzalez</td>
                <td>2836947638</td>
                <td>14/03/2023</td>
                <td>
                  <button type="button" class="btn btn-primary " style={{ marginRight: "10px" }}>Detalles</button>
                  <button type="button" class="btn btn-danger ">Eliminar</button>
                </td>
              </tr>
              <tr style={{ verticalAlign: "middle" }}>
                <th scope="row ">2</th>
                <td>Misael Bahena Diaz</td>
                <td>3784783927</td>
                <td>18/05/2023</td>
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
