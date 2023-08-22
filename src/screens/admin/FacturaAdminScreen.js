import React from 'react'
import Menu from '../../common/Admin/Menu'
import './style.css'

import DataTable from 'react-data-table-component'
import { ro } from 'date-fns/locale'

//libreria para exportar a excel
import { CSVLink } from 'react-csv'


const paginacionOpciones = {
  rowsPerPageText: 'Filas por Página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos'
}
const data = [
  { id: 1, nombre: 'Yahir Alberto Diaz Gonzalez', correo: "yahird59@gmail.com", ticket: '7384958493', fecha: '19/08/2023' },
  { id: 2, nombre: 'Ana García Pérez', correo: 'ana.garcia@gmail.com', ticket: '6283719201', fecha: '23/08/2023' },
  { id: 3, nombre: 'Carlos Martinez Ramirez', correo: 'carlos.martinez@gmail.com', ticket: '9475830123', fecha: '15/08/2023' },
  { id: 4, nombre: 'Elena Rodríguez Sanchez', correo: 'elena.rodriguez@gmail.com', ticket: '3859201746', fecha: '05/08/2023' },
  { id: 5, nombre: 'Juan López Herrera', correo: 'juan.lopez@gmail.com', ticket: '7394850217', fecha: '28/08/2023' },
  { id: 6, nombre: 'María Fernandez Castro', correo: 'maria.fernandez@gmail.com', ticket: '2059138476', fecha: '10/08/2023' },
  { id: 7, nombre: 'Luis Gomez Ortega', correo: 'luis.gomez@gmail.com', ticket: '5091837462', fecha: '17/08/2023' },
  { id: 8, nombre: 'Laura Morales Juarez', correo: 'laura.morales@gmail.com', ticket: '6150283974', fecha: '21/08/2023' },
  { id: 9, nombre: 'Pedro Vargas Mendoza', correo: 'pedro.vargas@gmail.com', ticket: '3847562910', fecha: '12/08/2023' },
  { id: 10, nombre: 'Sofía Navarro Rios', correo: 'sofia.navarro@gmail.com', ticket: '9384720561', fecha: '07/08/2023' }

]

const columnas = [
  {
    name: '#',
    selector: (row) => row.id,
    sortable: true,
    width: '80px',
  },
  {
    name: 'Nombre',
    selector: (row) => row.nombre,
    sortable: true
  },
  {
    name: 'Correo',
    selector: (row) => row.correo,
    sortable: true
  },
  {
    name: 'Ticket',
    selector: (row) => row.ticket,
    sortable: true
  },
  {
    name: 'Fecha',
    selector: (row) => row.fecha,
    width: '200px',
    sortable: true
  },
  {
    name: 'Acciones',
    width: '230px',
    cell: (row) => (
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
            <CSVLink data={data} filename='Mensajes.csv' className='btn btn-primary me-2'>
              Exportar facturas <i class="bi bi-download"></i>
            </CSVLink>

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
              noDataComponent="No se encontró ningúna factura"
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
