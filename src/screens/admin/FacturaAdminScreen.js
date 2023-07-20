import React from 'react'
import Menu from '../../common/Admin/Menu'
import './style.css'

import DataTable from 'react-data-table-component'


const paginacionOpciones = {
  rowsPerPageText: 'Filas por Página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos'
}
const data = [
  { id: 1, nombre: 'Yahir Alberto Diaz Gonzalez', ticket: '7271083065', fecha: 'juan@gmail.com' }
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
    name: 'Ticket',
    selector: 'ticket',
    sortable: true
  },
  {
    name: 'Fecha',
    selector: 'fecha',
    width: '200px',
    sortable: true
  },
  {
    name: 'Acciones',
    width: '230px',
    cell: row => (
      <div>
        <button type="button" class="btn btn-primary mb-2 mt-1" data-bs-toggle="modal" data-bs-target="#detalleFactura" >Detalles <i class="bi bi-person-lines-fill"></i></button>
      </div >
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
]


export default function FacturaAdminScreen() {
  return (
    <div className='component'>
      <Menu />
      <div>
        <div class="mx-auto p-2">
          <h2>Control de Facturas</h2>
        </div>

      </div>
      <div class="card mt-3">
        <div class="card-body">
          <div class="d-flex justify-content-end mb-2">
            <input type='text' placeholder='Buscar...' class='form-control me-2' style={{ width: "300px" }}
            // onChange={this.onChange}
            />

          </div>
          <div class="table-responsive">
            <DataTable
              columns={columnas}
              data={data}
              title="Lista de roles"
              pagination
              highlightOnHover
              paginationComponentOptions={paginacionOpciones}
              fixedHeader
              fixedHeaderScrollHeight="auto"
              noDataComponent="No se encontró ningún rol"
            />
          </div>

        </div>
      </div>
      {/* modal detalles de mensaje */}

      < div class="modal fade" id="detalleFactura" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header lign-items-center justify-content-center">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Detalles de factura</h1>
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
                    <td><b>$3,460.00</b></td>
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
    </div>
  )
}
