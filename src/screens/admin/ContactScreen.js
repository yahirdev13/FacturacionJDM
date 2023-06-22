import React from 'react'
import MenuAdmin from '../../common/Admin/MenuAdmin'
import NavAdmin from '../../common/Admin/NavAdmin'

//gif
import advertencia from '../../gifs/alerta.gif'

export default function ContactScreen() {
  return (
    <div>
      <NavAdmin />
      <MenuAdmin />
      <div style={{ paddingLeft: "8%", paddingRight: "5%" }}>
        <h1 class="mt-5">Control de contactos</h1>
        <div style={{ left: "250px" }} className='container-fluid'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Correo Electrónico</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr style={{ verticalAlign: "middle" }}>
                <th scope="row ">1</th>
                <td>Yahir Alberto Diaz Gonzalez</td>
                <td>7271083065</td>
                <td>yahird59@gmail.com</td>
                <td>
                  <button type="button" class="btn btn-primary " style={{ marginRight: "10px" }}>Detalles</button>
                  <button type="button" class="btn btn-danger " data-bs-toggle="modal" data-bs-target="#eliminarContacto">Eliminar</button>
                </td>
              </tr>
              <tr style={{ verticalAlign: "middle" }}>
                <th scope="row ">2</th>
                <td>Misael Bahena Diaz</td>
                <td>7773647629</td>
                <td>misaelbd@gmail.com</td>
                <td>
                  <button type="button" class="btn btn-primary " style={{ marginRight: "10px" }}>Detalles</button>
                  <button type="button" class="btn btn-danger ">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* modal para la eliminacion de un contacto */}

      <div class="modal fade" id="eliminarContacto" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header lign-items-center justify-content-center">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Eliminación de contacto</h1>
            </div>
            <div class="modal-body text-center">
              <img class="img-fluid" src={advertencia} ></img>
              <h5>¿Está seguro de eliminar permanentemente este contacto?</h5>
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
