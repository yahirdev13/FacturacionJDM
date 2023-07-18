import React from 'react'
import Menu from '../../common/Admin/Menu'
import './style.css'

import DataTable from 'react-data-table-component'


//gif
import advertencia from '../../gifs/alerta.gif'


const data = [
  { id: 1, rol: 'Administrador', descripcion: 'Tiene acceso a todas las funciones del sistema' },
  { id: 2, rol: 'Usuario', descripcion: 'Puede entrar al sistema' },
]


const columnas = [
  {
    name: '#',
    selector: 'id',
    sortable: true,
    width: '80px',
  },
  {
    name: 'Nombre del rol',
    selector: 'rol',
    sortable: true
  },
  {
    name: 'Descripción',
    selector: 'descripcion',
    sortable: true
  },
  {
    name: 'Acciones',
    width: '230px',
    cell: row => (
      <div>
        <button type="button" class="btn btn-primary me-2 mb-2 mt-1" data-bs-toggle="modal" data-bs-target="#editarRol" >Editar <i class="bi bi-pencil-fill"></i></button>
        <button type="button" class="btn btn-danger mb-2 mt-1" data-bs-toggle="modal" data-bs-target="#eliminarRol" >Eliminar <i class="bi bi-trash-fill"></i></button>
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

export default function RolScreen() {

  return (
    <div className='component'>
      <Menu />
      <div>
        <div class="mx-auto p-2">
          <h2>Control de roles</h2>
        </div>
        <div class="d-flex justify-content-end pt-3">
          <button type="button" class="btn btn-primary crearRol" data-bs-toggle="modal" data-bs-target="#crearRol">Agregar rol <i class="bi bi-person-fill-add"></i></button>
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

      {/* modal para la creacion de rol */}
      <div class="modal fade" id="crearRol" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Agregar nuevo rol</h1>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label class="form-label">Nombre del rol</label>
                  <input type="text" class="form-control" placeholder="Nombre del rol" required />
                </div>
                <div class="mb-3">
                  <label class="form-label">Descripción</label>
                  <textarea type="text-area" class="form-control" placeholder="Ingrese una descripción breve" style={{ height: "100px" }} required />
                </div>
                <div class="mb-3">
                  <label class="form-label">Permisos</label>
                  <table class="table table-borderless align-middle">
                    <thead>
                      <tr>
                        <th scope="col">Módulo</th>
                        <th scope="col" class="text-center">Ver</th>
                        <th scope="col" class="text-center">Crear</th>
                        <th scope="col" class="text-center">Editar</th>
                        <th scope="col" class="text-center">Eliminar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Usuarios</th>
                        <td class="text-center"><input type="checkbox" class="form-check-input" /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" /></td>
                      </tr>
                      <tr>
                        <th scope="row">Roles</th>
                        <td class="text-center"><input type="checkbox" class="form-check-input" /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" /></td>
                      </tr>
                      <tr>
                        <th scope="row">Mensajes</th>
                        <td class="text-center"><input type="checkbox" class="form-check-input" /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" disabled /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" disabled /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" /></td>
                      </tr>
                      <tr>
                        <th scope="row">Facturas</th>
                        <td class="text-center"><input type="checkbox" class="form-check-input" /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" disabled /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" disabled /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" /></td>
                      </tr>
                    </tbody>

                  </table>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Guardar nuevo rol</button>
            </div>
          </div>
        </div>
      </div>

      {/* modal para la edicion de rol */}
      <div class="modal fade" id="editarRol" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Editar Rol</h1>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label class="form-label">Nombre del rol</label>
                  <input type="text" class="form-control" placeholder="Nombre del rol" required></input>
                </div>
                <div class="mb-3">
                  <label class="form-label">Descripción</label>
                  <textarea type="text-area" class="form-control" placeholder="Ingrese una descripción breve" style={{ height: "100px" }} required />
                </div>
                <div class="mb-3">
                  <label class="form-label">Permisos</label>
                  <table class="table table-borderless align-middle">
                    <thead>
                      <tr>
                        <th scope="col">Módulo</th>
                        <th scope="col" class="text-center">Ver</th>
                        <th scope="col" class="text-center">Crear</th>
                        <th scope="col" class="text-center">Editar</th>
                        <th scope="col" class="text-center">Eliminar</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">Usuarios</th>
                        <td class="text-center"><input type="checkbox" class="form-check-input" checked /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" checked /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" checked /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" checked /></td>
                      </tr>
                      <tr>
                        <th scope="row">Roles</th>
                        <td class="text-center"><input type="checkbox" class="form-check-input" checked /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" checked /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" checked /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" checked /></td>
                      </tr>
                      <tr>
                        <th scope="row">Mensajes</th>
                        <td class="text-center"><input type="checkbox" class="form-check-input" checked /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" disabled /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" disabled /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" checked /></td>
                      </tr>
                      <tr>
                        <th scope="row">Facturas</th>
                        <td class="text-center"><input type="checkbox" class="form-check-input" checked /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" disabled /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" disabled /></td>
                        <td class="text-center"><input type="checkbox" class="form-check-input" checked /></td>
                      </tr>
                    </tbody>

                  </table>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Guardar Cambios</button>
            </div>
          </div>
        </div>
      </div>


      {/* modal para la eliminacion de un rol */}

      <div class="modal fade" id="eliminarRol" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header lign-items-center justify-content-center">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Eliminación de rol</h1>
            </div>
            <div class="modal-body text-center">
              <img class="img-fluid" src={advertencia} style={{ width: "50%" }} ></img>
              <h5>¿Está seguro de eliminar permanentemente este rol?</h5>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>




  )
}
