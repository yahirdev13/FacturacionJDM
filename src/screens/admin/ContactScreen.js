import React, { useEffect, useState, useRef } from 'react';
import './style.css'
import DataTable from 'react-data-table-component'
import advertencia from '../../gifs/alerta.gif'

import Menu from '../../common/Admin/Menu';

//libreria para las alertas
import Swal from 'sweetalert2';

//define la configuracion de la paginacion de la tabla

const paginacionOpciones = {
  rowsPerPageText: 'Filas por Página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos'
}

export default function ContactScreen() {

  const [idContacto, setIdContacto] = useState('');

  const handleIdContacto = (id) => {
    setIdContacto(id);
  }

  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleAsunto = (asunto, mensaje) => {
    setAsunto(asunto);
    setMensaje(mensaje);
  }

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
      name: 'Teléfono',
      selector: (row) => row.telefono,
      sortable: true
    },
    {
      name: 'Correo Electrónico',
      selector: (row) => row.correo,
      width: '200px',
      sortable: true
    },
    {
      name: 'Asunto',
      selector: (row) => row.asunto,
      sortable: true
    },
    {
      name: 'Fecha',
      selector: (row) => row.fechaEnvio,
      sortable: true
    },
    {
      name: 'Acciones',
      width: '230px',
      cell: row => (
        <div>
          <button type="button" class="btn btn-primary me-2 mb-2 mt-1" data-bs-toggle="modal" data-bs-target="#detalleMensaje" onClick={() => handleAsunto(row.asunto, row.mensaje)}>Detalles <i class="bi bi-person-lines-fill"></i></button>
          <button type="button" class="btn btn-danger mb-2 mt-1" data-bs-toggle="modal" data-bs-target="#eliminarMensaje" onClick={() => handleIdContacto(row.id)}>Eliminar <i class="bi bi-trash-fill"></i></button>
        </div >
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ]

  const [contactos, setContactos] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [contactosFiltrados, setContactosFiltrados] = useState([]);

  useEffect(() => {
    getContactos().then((contactos) => {
      setContactos(contactos);
      setContactosFiltrados(contactos);
      console.log("Datos contactos: ", contactos);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const getContactos = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('http://localhost:8080/api-jdm/contactanos', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (response.ok) {
          const data = await response.json();
          if (data.data !== null) {
            const contactosC = data.data.map((contacto) => ({
              ...contacto
            }));
            console.log('Todo bien');
            resolve(contactosC);
          } else {
            console.log('Todo mal');
            resolve([]);
          }
        }
      } catch (error) {
        console.log('Error');
        reject(error);
      }
    });
  };

  const deleteContacto = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`http://localhost:8080/api-jdm/contactanos/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (response.ok) {
          console.log('Contacto eliminado');
          Swal.fire({
            title: 'Mensaje eliminado', // Titulo de la alerta
            text: 'El mensaje se eliminó correctamente', // Texto de la alerta
            icon: 'success', // Icono de la alerta
            timer: 2000, // Duración de la alerta en milisegundos (3 segundos en este caso)
            showConfirmButton: false, // No mostrar el botón de confirmación
            timerProgressBar: true, // Muestra la barra de tiempo
          });
        }
      } catch (error) {
        console.log('Error');
        Swal.fire({
          title: 'Error', // Titulo de la alerta
          text: 'No se pudo eliminar el mensaje', // Texto de la alerta
          icon: 'error', // Icono de la alerta
          timer: 2000, // Duración de la alerta en milisegundos (3 segundos en este caso)
          showConfirmButton: false, // No mostrar el botón de confirmación
          timerProgressBar: true, // Muestra la barra de tiempo
        });
        reject(error);
      }
    });
  };


  const onChange = (e) => {
    const valorBusqueda = e.target.value.toLowerCase();
    setBusqueda(valorBusqueda);
    filtraResultados(valorBusqueda);
  }

  const filtraResultados = (busqueda) => {
    const resultados = contactos.filter((contacto) => {
      if (
        contacto.nombre.toLowerCase().includes(busqueda) ||
        contacto.telefono.toLowerCase().includes(busqueda) ||
        contacto.correo.toLowerCase().includes(busqueda)
      ) {
        return contacto;
      }
      return false;
    });
    setContactosFiltrados(resultados);
  }

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    if (busqueda === '') {
      getContactos().then((contactos) => {
        setContactos(contactos);
        setContactosFiltrados(contactos);
        console.log("Datos contactos: ", contactos);
      }).catch((error) => {
        console.log(error);
      });
    } else {
      console.log("Hay texto xd")
    }
  }, 1000);


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
              data={contactosFiltrados}
              title="Lista de mensajes"
              pagination
              highlightOnHover
              paginationComponentOptions={paginacionOpciones}
              fixedHeader
              fixedHeaderScrollHeight="auto"
              noDataComponent="No se encontró ningún mensaje "
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
              <p>{asunto}</p>

              <h4>Mensaje</h4>
              <p style={{ textAlign: "justify" }}>{mensaje}</p>

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
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => deleteContacto(idContacto)}>Eliminar</button>
            </div>
          </div>
        </div>
      </div >



    </div >

  )
}
