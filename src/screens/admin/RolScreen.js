import React, { useEffect, useState, useRef } from 'react';
import Menu from '../../common/Admin/Menu'
import './style.css'

import DataTable from 'react-data-table-component'


//gif
import advertencia from '../../gifs/alerta.gif'

//libreria para las alertas
import Swal from 'sweetalert2';

//define la configuracion de la paginacion de la tabla 

const paginacionOpciones = {
  rowsPerPageText: 'Filas por Página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'Todos'
}

export default function RolScreen() {

  const [nombreRol, setNombreRol] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const registrarRol = (e) => {
    e.preventDefault();
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('http://localhost:8080/api-jdm/roles', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombreRol: nombreRol,
            descripcion: descripcion,
          })
        });
        const data = await response.json();
        if (data.error === false) {
          console.log('Rol creado ' + data);
          Swal.fire({
            title: 'Rol creado', // Titulo de la alerta
            text: data.message, // Texto de la alerta
            icon: 'success', // Icono de la alerta
            timer: 2000, // Duración de la alerta en milisegundos (3 segundos en este caso)
            showConfirmButton: false, // No mostrar el botón de confirmación
            timerProgressBar: true, // Muestra la barra de tiempo
          });
          resolve(true);

        } else {
          console.log('Rol no creado ' + data.message);
          Swal.fire({
            title: 'Error', // Titulo de la alerta
            text: data.message, // Texto de la alerta
            icon: 'error', // Icono de la alerta
            timer: 2000, // Duración de la alerta en milisegundos (3 segundos en este caso)
            showConfirmButton: false, // No mostrar el botón de confirmación
            timerProgressBar: true, // Muestra la barra de tiempo
          });
          resolve(false);
        }
      } catch (error) {
        console.log('Error');
        reject(error);
      }
    });
  };


  const [idRol, setIdRol] = useState('');

  const handleIdRol = (id) => {
    setIdRol(id);
  }


  const columnas = [
    {
      name: '#',
      selector: (row) => row.id,
      sortable: true,
      width: '80px',
    },
    {
      name: 'Nombre del rol',
      selector: (row) => row.nombreRol,
      sortable: true
    },
    {
      name: 'Descripción',
      selector: (row) => row.descripcion,
      sortable: true
    },
    {
      name: 'Acciones',
      width: '230px',
      cell: row => (
        <div>
          <button type="button" class="btn btn-primary me-2 mb-2 mt-1" data-bs-toggle="modal" data-bs-target="#editarRol" >Editar <i class="bi bi-pencil-fill"></i></button>
          <button type="button" class="btn btn-danger mb-2 mt-1" data-bs-toggle="modal" data-bs-target="#eliminarRol" onClick={() => handleIdRol(row.id)}>Eliminar <i class="bi bi-trash-fill"></i></button>
        </div >
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ]

  const [roles, setRoles] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [rolesFiltrados, setRolesFiltrados] = useState([]);

  useEffect(() => {
    getRoles().then((roles) => {
      setRoles(roles);
      setRolesFiltrados(roles);
      console.log("Datos roles: ", roles);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const getRoles = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('http://localhost:8080/api-jdm/roles', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (response.ok) {
          const data = await response.json();
          if (data.data !== null) {
            const rolesC = data.data.map((rol) => ({
              ...rol
            }));
            console.log('Todo bien');
            resolve(rolesC);
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

  const deleteRol = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`http://localhost:8080/api-jdm/roles/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (response.ok) {
          console.log('Usuario eliminado');
          Swal.fire({
            title: 'Rol eliminado', // Titulo de la alerta
            text: 'El rol se eliminó correctamente', // Texto de la alerta
            icon: 'success', // Icono de la alerta
            timer: 2000, // Duración de la alerta en milisegundos (2 segundos en este caso)
            showConfirmButton: false, // No mostrar el botón de confirmación
            timerProgressBar: true, // Muestra la barra de tiempo
          });
        }
      } catch (error) {
        console.log('Error');
        Swal.fire({
          title: 'Error', // Titulo de la alerta
          text: 'No se pudo eliminar el rol', // Texto de la alerta
          icon: 'error', // Icono de la alerta
          timer: 2000, // Duración de la alerta en milisegundos (2 segundos en este caso)
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
    const resultados = roles.filter((rol) => {
      if (
        rol.nombreRol.toLowerCase().includes(busqueda) ||
        rol.descripcion.toLowerCase().includes(busqueda)
      ) {
        return rol;
      }
      return false;
    });
    setRolesFiltrados(resultados);
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
      getRoles().then((roles) => {
        setRoles(roles);
        setRolesFiltrados(roles);
        console.log("Datos roles: ", roles);
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
              onChange={onChange}
            />

          </div>
          <div class="table-responsive">
            <DataTable
              columns={columnas}
              data={rolesFiltrados}
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
              <form name='crearRol' onSubmit={registrarRol}>
                <div class="mb-3">
                  <label class="form-label">Nombre del rol</label>
                  <input type="text" class="form-control" placeholder="Nombre del rol" required
                    onChange={(e) => setNombreRol(e.target.value)} />
                </div>
                <div class="mb-3">
                  <label class="form-label">Descripción</label>
                  <textarea type="text-area" class="form-control" placeholder="Ingrese una descripción breve" style={{ height: "100px" }} required onChange={(e) => setDescripcion(e.target.value)} />
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                  <button type="submit" class="btn btn-primary">Guardar nuevo rol</button>
                </div>
              </form>
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
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => deleteRol(idRol)}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div >




  )
}
