import React, { useState } from 'react'
import MenuAdmin from '../../common/Admin/MenuAdmin'
import NavAdmin from '../../common/Admin/NavAdmin'
import ToastComponent from '../../common/Admin/Toast'

import advertencia from '../../gifs/alerta.gif'



export default function ContactScreen() {

  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const columns = [
    {
      title: '#',
      field: 'position'
    },
    {
      title: 'Nombre',
      field: 'name'
    },
    {
      title: 'Teléfono',
      field: 'phone',
      type: 'numeric'
    },
    {
      title: 'Correo Electrónico',
      field: 'email'

    },
  ];

  const data = [
    { position: 1, name: 'Yahir Alberto Diaz Gonzalez', phone: '7271083065', email: 'yahird59@gmail.com' }
  ]



  return (
    <div>
      <NavAdmin />
      <MenuAdmin />
      <div style={{ paddingLeft: "8%", paddingRight: "5%", paddingTop: "3%" }}>
        <div class="card">
          <div class="card-header">
            <h1 class="">Control de contactos</h1>
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <div style={{ left: "250px" }} className='container-fluid'>
                <table class="table ">
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
                        <button type="button" class="btn btn-primary " style={{ marginRight: "10px" }} data-bs-toggle="modal" data-bs-target="#detallesContacto">Detalles</button>
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
            </blockquote>
          </div>
        </div>



      </div>

      <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <ToastComponent showToast={showToast} onClose={handleCloseToast} />
      </div>



      {/* modal detalles de contacto */}

      < div class="modal fade" id="detallesContacto" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header lign-items-center justify-content-center">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Detalles de contacto</h1>
            </div>
            <div class="modal-body">
              <h4>Asunto</h4>
              <p>Dudas sobre la facturacion</p>

              <h4>Mensaje</h4>
              <p style={{ textAlign: "justify" }}>loremansnais aJSOIIJASDIOJASAAID   iajsdijasd as dajsdiaj sid  iojisasjisj ijaisjdIJ OIJIJASOIDJ IA SDASDH OASHDAI HHDAIS  asiduaisudais uaiusdioa sdjdaufihasd</p>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
            </div>
          </div>
        </div>
      </div >

      {/* modal para la eliminacion de un contacto */}

      < div class="modal fade" id="eliminarContacto" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header lign-items-center justify-content-center">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Eliminación de contacto</h1>
            </div>
            <div class="modal-body text-center">
              <img class="img-fluid" src={advertencia} style={{ width: "50%" }} ></img>
              <h5>¿Está seguro de eliminar permanentemente este contacto?</h5>
              <div id="liveAlertPlaceholder"></div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={handleShowToast}>Eliminar</button>
            </div>
          </div>
        </div>
      </div >


    </div >



  )
}
