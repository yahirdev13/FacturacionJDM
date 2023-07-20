import React, { useState } from 'react'
import './style.css'
import DataTable from 'react-data-table-component'
import advertencia from '../../gifs/alerta.gif'

import Menu from '../../common/Admin/Menu';


const data = [
  { id: 1, nombre: 'Yahir Alberto Diaz Gonzalez', telefono: '7271083065', correo: 'juan@gmail.com', asunto: 'Tengo dudas con la facturacion' }
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
    name: 'Teléfono',
    selector: 'telefono',
    sortable: true
  },
  {
    name: 'Correo Electrónico',
    selector: 'correo',
    width: '200px',
    sortable: true
  },
  {
    name: 'Asunto',
    selector: 'asunto',
    sortable: true
  },
  {
    name: 'Acciones',
    width: '230px',
    cell: row => (
      <div>
        <button type="button" class="btn btn-primary me-2 mb-2 mt-1" data-bs-toggle="modal" data-bs-target="#detalleMensaje" >Detalles <i class="bi bi-person-lines-fill"></i></button>
        <button type="button" class="btn btn-danger mb-2 mt-1" data-bs-toggle="modal" data-bs-target="#eliminarMensaje" >Eliminar <i class="bi bi-trash-fill"></i></button>
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

export default function ContactScreen() {

  return (

    <div className='component'>
      <Menu />


      <div>
        <div class="mx-auto p-2">
          <h2>Control de Mensajes</h2>
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
              title="Lista de usuarios"
              pagination
              highlightOnHover
              paginationComponentOptions={paginacionOpciones}
              fixedHeader
              fixedHeaderScrollHeight="auto"
              noDataComponent="No se encontró ningún usuario"
            />
          </div>

        </div>
      </div>


      {/* modal detalles de mensaje */}

      < div class="modal fade" id="detalleMensaje" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header lign-items-center justify-content-center">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Detalles de contacto</h1>
            </div>
            <div class="modal-body">
              <h4>Asunto</h4>
              <p>Aqui va el asunto del cliente</p>

              <h4>Mensaje</h4>
              <p style={{ textAlign: "justify" }}>Aqui va el mensaje que el cliente escribira desde el modulo de contactanos</p>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
            </div>
          </div>
        </div>
      </div >

      {/* modal para la eliminacion de un mensaje */}

      < div class="modal fade" id="eliminarMensaje" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header lign-items-center justify-content-center">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Eliminación de mensaje</h1>
            </div>
            <div class="modal-body text-center">
              <img class="img-fluid" src={advertencia} style={{ width: "50%" }} ></img>
              <h5>¿Está seguro de eliminar permanentemente este mensaje?</h5>
              <div id="liveAlertPlaceholder"></div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal" >Eliminar</button>
            </div>
          </div>
        </div>
      </div >



    </div >

  )
}
