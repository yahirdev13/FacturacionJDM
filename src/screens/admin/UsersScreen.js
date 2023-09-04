import React, { useEffect, useState, useRef } from 'react';
import Menu from '../../common/Admin/Menu';
import './style.css';
import DataTable from 'react-data-table-component';
import advertencia from '../../gifs/alerta.gif';

//libreria para las alertas
import Swal from 'sweetalert2';

//libreria para exportar los usuarios
import { CSVLink } from 'react-csv';

const paginacionOpciones = {
    rowsPerPageText: 'Filas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
}

export default function UsersScreen() {

    const [idUsuario, setIdUsuario] = useState('');

    const handleIdUsuario = (id) => {
        setIdUsuario(id);
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
            name: 'Usuario',
            selector: (row) => row.nombreUsuario,
            sortable: true
        },
        {
            name: 'Correo Electrónico',
            selector: (row) => row.correo,
            width: '200px',
            sortable: true
        },
        {
            name: 'Rol',
            selector: (row) => row.rol,
            sortable: true
        },
        {
            name: 'Acciones',
            width: '230px',
            cell: row => (
                <div>
                    <button type="button" className="btn btn-primary me-2 mb-2 mt-1" data-bs-toggle="modal" data-bs-target="#editarUsuario" onClick={() => handleUsuario(row.id)}>Editar <i className="bi bi-pencil-fill"></i></button>
                    <button type="button" className="btn btn-danger mb-2 mt-1" data-bs-toggle="modal" data-bs-target="#eliminarUsuario" onClick={() => handleIdUsuario(row.id)}>Eliminar <i className="bi bi-trash-fill"></i></button>
                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    useEffect(() => {
        getUsuarios().then((usuarios) => {
            setUsuarios(usuarios);
            setUsuariosFiltrados(usuarios);
            console.log("Datos usuarios: ", usuarios);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState(null);
    const [contrasena2, setContrasena2] = useState('');
    const [rol, setRol] = useState('');
    const [nombreRol, setNombreRol] = useState('');
    const [genero, setGenero] = useState('');


    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState([]);
    const [roles, setRoles] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);


    const getUsuarios = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch('http://localhost:8080/api-jdm/usuarios/getUsuarios', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    if (data.data !== null) {
                        const usuariosC = data.data.map((usuario) => ({
                            ...usuario,
                            nombre: `${usuario.nombre} ${usuario.apellidos}`,
                        }));
                        console.log('Todo bien');
                        resolve(usuariosC);
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
    const handleRegistro = () => {
        getRoles().then((roles) => {
            setRoles(roles);
            console.log("Datos roles: ", roles);
        }).catch((error) => {
            console.log(error);
        });
    }

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
                        const roles = data.data.map((rol) => ({
                            ...rol
                        }));
                        console.log('Todo bien');
                        resolve(roles);
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
    }

    const handleRolChange = (e) => {
        const selectedRolId = parseInt(e.target.value, 10);
        setRol(selectedRolId);

        const selectedRol = roles.find((rol) => rol.id === selectedRolId);
        if (selectedRol) {
            setNombreRol(selectedRol.nombreRol);
        } else {
            setNombreRol('');
        }

        console.log("Selected Rol ID:", selectedRolId);
        console.log("Selected Rol:", selectedRol);
        console.log("Nombre Rol:", selectedRol?.nombreRol);
    };

    const handleGenChange = (e) => {
        setGenero(e.target.value);
        console.log(e.target.value);
    }

    const registerUsuario = (e) => {
        e.preventDefault();
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch('http://localhost:8080/api-jdm/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nombre: nombre,
                        apellidos: apellidos,
                        nombreUsuario: nombreUsuario,
                        correo: correo,
                        contrasena: contrasena,
                        idRol: rol,
                        rol: nombreRol,
                        genero: genero,
                        fechaCreacion: '',
                    })
                });
                const data = await response.json();
                if (data.error === false) {
                    console.log('Usuario registrado');
                    Swal.fire({
                        title: 'Usuario registrado', // Titulo de la alerta
                        text: 'El usuario se registró correctamente', // Texto de la alerta
                        icon: 'success', // Icono de la alerta
                        timer: 2000, // Duración de la alerta en milisegundos (3 segundos en este caso)
                        showConfirmButton: false, // No mostrar el botón de confirmación
                        timerProgressBar: true, // Muestra la barra de tiempo
                    });
                    setNombre('');
                    setApellidos('');
                    setNombreUsuario('');
                    setCorreo('');
                    setContrasena('');
                    setContrasena2('');
                    setRol('');
                    setGenero('');
                    resolve(true);
                } else {
                    console.log('Usuario no registrado');
                    Swal.fire({
                        title: 'Usuario no registrado', // Titulo de la alerta
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

    const handleUsuario = (id) => {
        setIdUsuario(id);
        console.log(id)
        getUsuarioById(id).then((usuario) => {
            setUsuario(usuario);
            setNombre(usuario.nombre);
            setApellidos(usuario.apellidos);
            setNombreUsuario(usuario.nombreUsuario);
            setCorreo(usuario.correo);
            setRol(usuario.idRol.id);
            setNombreRol(usuario.rol);
            setGenero(usuario.genero);
            console.log("Datos usuariobyid: ", usuario);
        }).catch((error) => {
            console.log(error);
        });
        getRoles().then((roles) => {
            setRoles(roles);
            console.log("Datos roles: ", roles);
        }).catch((error) => {
            console.log(error);
        });
    }

    const getUsuarioById = (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`http://localhost:8080/api-jdm/usuarios/getUsuario/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    if (data.data !== null) {
                        const usuario = data.data;
                        const usuarioC = {
                            ...usuario,
                        }
                        console.log('Todo bien');
                        resolve(usuarioC);
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
    }

    const editUsuario = (id, e) => {
        e.preventDefault();
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`http://localhost:8080/api-jdm/auth/update/${id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nombre: nombre,
                        apellidos: apellidos,
                        nombreUsuario: nombreUsuario,
                        correo: correo,
                        contrasena: contrasena,
                        idRol: rol,
                        rol: nombreRol,
                        genero: genero
                    })
                });
                const data = await response.json();
                if (data.error === false) {
                    console.log("Usuario actualizado correctamente!")
                    Swal.fire({
                        title: 'Usuario actualizado', // Titulo de la alerta
                        text: data.message, // Texto de la alerta
                        icon: 'success', // Icono de la alerta
                        timer: 2000, // Duración de la alerta en milisegundos (2 segundos en este caso)
                        showConfirmButton: false, // No mostrar el botón de confirmación
                        timerProgressBar: true, // Muestra la barra de tiempo
                    });
                    setNombre('');
                    setApellidos('');
                    setNombreUsuario('');
                    setCorreo('');
                    setContrasena('');
                    setContrasena2('');
                    setRol('');
                    setGenero('');
                    resolve(true);
                } else {
                    console.log("Usuario no actualizado!");
                    Swal.fire({
                        title: 'Usuario no actualizado', // Titulo de la alerta
                        text: data.message, // Texto de la alerta
                        icon: 'error', // Icono de la alerta
                        timer: 2000, // Duración de la alerta en milisegundos (2 segundos en este caso)
                        showConfirmButton: false, // No mostrar el botón de confirmación
                        timerProgressBar: true, // Muestra la barra de tiempo
                    });
                    setNombre('');
                    setApellidos('');
                    setNombreUsuario('');
                    setCorreo('');
                    setContrasena('');
                    setContrasena2('');
                    setRol('');
                    setGenero('');
                    resolve(false);
                }
            } catch (error) {
                console.log('Error');
                reject(error);
            }
        });
    };


    const deleteUsuario = (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`http://localhost:8080/api-jdm/usuarios/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response.ok) {
                    console.log('Usuario eliminado');
                    Swal.fire({
                        title: 'Usuario eliminado', // Titulo de la alerta
                        text: 'El usuario se eliminó correctamente', // Texto de la alerta
                        icon: 'success', // Icono de la alerta
                        timer: 3000, // Duración de la alerta en milisegundos (3 segundos en este caso)
                        showConfirmButton: false, // No mostrar el botón de confirmación
                        timerProgressBar: true, // Muestra la barra de tiempo
                    });
                    resolve(true);
                }
            } catch (error) {
                console.log('Error');
                Swal.fire({
                    title: 'Error', // Titulo de la alerta
                    text: 'No se pudo eliminar el usuario', // Texto de la alerta
                    icon: 'error', // Icono de la alerta
                    timer: 3000, // Duración de la alerta en milisegundos (3 segundos en este caso)
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
        const resultados = usuarios.filter((usuario) => {
            if (
                usuario.nombre.toLowerCase().includes(busqueda) ||
                usuario.nombreUsuario.toLowerCase().includes(busqueda) ||
                usuario.correo.toLowerCase().includes(busqueda) ||
                usuario.rol.toLowerCase().includes(busqueda)
            ) {
                return usuario;
            }
            return false;
        });
        setUsuariosFiltrados(resultados);
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
            getUsuarios().then((usuarios) => {
                setUsuarios(usuarios);
                setUsuariosFiltrados(usuarios);
                console.log("Datos usuarios: ", usuarios);
            }).catch((error) => {
                console.log(error);
            });
        } else {
            console.log("Hay texto xd")
        }
    }, 2000);

    const inputName = useRef(null);
    const inputLastName = useRef(null);
    const inputUserName = useRef(null);
    const inputEmail = useRef(null);
    const inputPass = useRef(null);
    const inputPass2 = useRef(null);
    const selectGen = useRef(null);
    const selectRol = useRef(null);
    const btnCancel = useRef(null);

    const handleDrop = () => {
        if (nombre !== '' || apellidos !== '' || nombreUsuario !== '' || correo !== '' || contrasena !== '' || contrasena2 !== '' || rol !== '' || genero !== '') {
            setNombre('');
            setApellidos('');
            setNombreUsuario('');
            setCorreo('');
            setContrasena('');
            setContrasena2('');
            setRol('');
            setGenero('');
        }
    }

    const validateForm = () => {
        const elementName = inputName.current;
        const elementLastName = inputLastName.current;
        const elementUserName = inputUserName.current;
        const elementEmail = inputEmail.current;
        const elementPass = inputPass.current;
        const elementPass2 = inputPass2.current;
        const elementGen = selectGen.current;
        const elementRol = selectRol.current;

        const isPassValid = elementPass.value.length < 8;
        const isPass2Valid = elementPass2.value.length < 8;
        const isPassMatching = elementPass.value === elementPass2.value;

        if (isPassValid) {
            elementPass.setCustomValidity("La contraseña debe tener al menos 8 caracteres");
        } else {
            elementPass.setCustomValidity("");
        }
        if (isPass2Valid) {
            elementPass2.setCustomValidity("La contraseña debe tener al menos 8 caracteres");
        } else {
            elementPass2.setCustomValidity("");
        }

        if (!isPassValid && !isPass2Valid) {
            if (!isPassMatching) {
                elementPass2.setCustomValidity("Las contraseñas no coinciden");
            } else {
                elementPass2.setCustomValidity("");
            }
        }


        if (elementName.checkValidity() && elementLastName.checkValidity() && elementUserName.checkValidity() && elementEmail.checkValidity() && elementPass.checkValidity() && elementPass2.checkValidity() && elementGen.checkValidity() && elementRol.checkValidity()) {
            btnCancel.current.click();
            console.log("Formulario validado");
        } else {
            console.log("Formulario no validado");
        }
    }

    const inputName2 = useRef(null);
    const inputLastName2 = useRef(null);
    const inputUserName2 = useRef(null);
    const inputEmail2 = useRef(null);
    const inputPassword = useRef(null);
    const inputPassword2 = useRef(null);
    const selectGen2 = useRef(null);
    const selectRol2 = useRef(null);
    const btnCancel2 = useRef(null);

    const validateForm2 = () => {
        const elementName2 = inputName2.current;
        const elementLastName2 = inputLastName2.current;
        const elementUserName2 = inputUserName2.current;
        const elementEmail2 = inputEmail2.current;
        const elementPassword = inputPassword.current;
        const elementPassword2 = inputPassword2.current;
        const elementGen2 = selectGen2.current;
        const elementRol2 = selectRol2.current;

        const isPasswordValid = elementPassword.value.length < 8;
        const isPassword2Valid = elementPassword2.value.length < 8;
        const isPasswordMatching = elementPassword.value === elementPassword2.value;
        const isPasswordNotEmpty = contrasena == null;

        if (isPasswordNotEmpty) {
            setContrasena("Empty");
        }

        if (elementPassword.value.length > 0 || elementPassword2.value.length > 0) {
            if (isPasswordValid) {
                elementPassword.setCustomValidity("La contraseña debe tener al menos 8 caracteres");
            } else {
                elementPassword.setCustomValidity("");
            }
            if (isPassword2Valid) {
                elementPassword2.setCustomValidity("La contraseña debe tener al menos 8 caracteres");
            }
            else {
                elementPassword2.setCustomValidity("");
            }

            if (!isPasswordValid && !isPassword2Valid) {
                if (!isPasswordMatching) {
                    elementPassword2.setCustomValidity("Las contraseñas no coinciden");
                } else {
                    elementPassword2.setCustomValidity("");
                }
            }
        } else {
            elementPassword.setCustomValidity("");
            elementPassword2.setCustomValidity("");
        }

        if (elementName2.checkValidity() && elementLastName2.checkValidity() && elementUserName2.checkValidity() && elementEmail2.checkValidity() && elementPassword.checkValidity() && elementPassword2.checkValidity() && elementGen2.checkValidity() && elementRol2.checkValidity()) {
            btnCancel2.current.click();
            console.log("Formulario validado");
        } else {
            console.log("Formulario no validado");
        }
    }


    return (
        <div className='component'>
            <Menu />
            <div>
                <div class="mx-auto p-2">
                    <h2>Control de usuarios</h2>
                </div>
                <div class="d-flex justify-content-end pt-3">
                    <button type="button" class="btn btn-primary crearUsuario" data-bs-toggle="modal" data-bs-target="#crearUsuario" onClick={() => handleRegistro()}>Agregar Usuario <i class="bi bi-person-fill-add"></i></button>
                </div>

            </div>
            <div class="card mt-3">
                <div class="card-body">
                    <div class="d-flex justify-content-end mb-2">
                        <input type='text' placeholder='Buscar...' class='form-control me-2' style={{ width: "300px" }}
                            onChange={onChange}
                        />
                        <CSVLink data={usuariosFiltrados} filename='Usuarios.csv' className='btn btn-primary me-2'>
                            Exportar Usuarios <i class="bi bi-filetype-csv"></i>
                        </CSVLink>

                    </div>
                    <div class="table-responsive">
                        <DataTable
                            columns={columnas}
                            data={usuariosFiltrados}
                            title="Lista de usuarios"
                            pagination
                            highlightOnHover
                            paginationComponentOptions={paginacionOpciones}
                            fixedHeader
                            fixedHeaderScrollHeight="auto"
                            noDataComponent={<span>No se encontró ningún usuario</span>}
                        />
                    </div>

                </div>
            </div>


            {/* modal para la creacion de un nuevo usuario*/}

            <div class="modal fade" id="crearUsuario" data-bs-backdrop="static" data-bs-keyboard="true" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header lign-items-center justify-content-center">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Agregar un nuevo usuario</h1>
                        </div>
                        <div class="modal-body">
                            <form id='registrarUsuario needs-validation novalidate' name='registrarUsuario' onSubmit={registerUsuario} >
                                <div class="mb-3">
                                    <label class="form-label">Nombre/s</label>
                                    <input ref={inputName} type="text" class="form-control" aria-describedby="textHelp" onChange={(e) => setNombre(e.target.value)} value={nombre} required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Apellido/s</label>
                                    <input ref={inputLastName} type="text" class="form-control" aria-describedby="textHelp" onChange={(e) => setApellidos(e.target.value)} value={apellidos} required />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Nombre de usuario</label>
                                    <div class="input-group has-validation">
                                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                                        <input ref={inputUserName} type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" onChange={(e) => setNombreUsuario(e.target.value)} value={nombreUsuario} required></input>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Correo Electrónico</label>
                                    <input ref={inputEmail} type="email" class="form-control" aria-describedby="emailHelp" onChange={(e) => setCorreo(e.target.value)} value={correo} required />
                                </div>
                                <div class="mb-3">
                                    <label for="pass1" class="form-label">Contraseña</label>
                                    <input ref={inputPass} type="password" class="form-control" id='pass1' onChange={(e) => setContrasena(e.target.value)} value={contrasena} required />
                                </div>
                                <div class="pass2">
                                    <label for="exampleInputPassword1" class="form-label">Vuelve a escribir la contraseña</label>
                                    <input ref={inputPass2} type="password" class="form-control" id='pass2' onChange={(e) => setContrasena2(e.target.value)} value={contrasena2} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Rol</label>
                                    <select ref={selectRol} className="form-select" aria-label="Default select example" onChange={handleRolChange} value={rol} required>
                                        <option value="">Seleccione un rol</option>
                                        {roles.map((rol) => (
                                            <option key={rol.id} value={rol.id}>
                                                {rol.nombreRol}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Género</label>
                                    <select ref={selectGen} class="form-select" aria-label="Default select example" placeholder='Seleccione una opción' onChange={handleGenChange} value={genero} required>
                                        <option value="">Seleccione un genero</option>
                                        <option value="H">Hombre</option>
                                        <option value="M">Mujer</option>
                                    </select>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={handleDrop}>Cancelar</button>
                                    <button type="submit" class="btn btn-primary" onClick={validateForm} >Guadar Usuario</button>
                                    <button ref={btnCancel} type="button" class="invisible-button" data-bs-dismiss="modal" style={{ display: 'none' }}>Botón Invisible</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            {/* modal para editar un usuario*/}

            <div class="modal fade" id="editarUsuario" data-bs-backdrop="static" data-bs-keyboard="true" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header lign-items-center justify-content-center">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Editar usuario</h1>
                        </div>
                        <div class="modal-body">
                            <form id='editarUsuario needs-validation novalidate' name='editarUsuario' onSubmit={(e) => editUsuario(idUsuario, e)} >
                                <div class="mb-3">
                                    <label class="form-label">Nombre/s</label>
                                    <input ref={inputName2} type="text" class="form-control" aria-describedby="textHelp" onChange={(e) => setNombre(e.target.value)} value={nombre} required />
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Apellido/s</label>
                                    <input ref={inputLastName2} type="text" class="form-control" aria-describedby="textHelp" onChange={(e) => setApellidos(e.target.value)} value={apellidos} required />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Nombre de usuario</label>
                                    <div class="input-group has-validation">
                                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                                        <input ref={inputUserName2} type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" onChange={(e) => setNombreUsuario(e.target.value)} value={nombreUsuario} required></input>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Correo Electrónico</label>
                                    <input ref={inputEmail2} type="email" class="form-control" aria-describedby="emailHelp" onChange={(e) => setCorreo(e.target.value)} value={correo} required />
                                </div>
                                <div class="mb-3">
                                    <label for="pass1" class="form-label">Contraseña</label>
                                    <input ref={inputPassword} type="password" class="form-control" id='password1' onChange={(e) => setContrasena(e.target.value)} value={contrasena} />
                                </div>
                                <div class="pass2">
                                    <label for="exampleInputPassword1" class="form-label">Vuelve a escribir la contraseña</label>
                                    <input ref={inputPassword2} type="password" class="form-control" id='password2' onChange={(e) => setContrasena2(e.target.value)} value={contrasena2} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Rol</label>
                                    <select ref={selectRol2} className="form-select" aria-label="Default select example" onChange={handleRolChange} value={rol} required>
                                        <option value="">Seleccione un rol</option>
                                        {roles.map((rol) => (
                                            <option key={rol.id} value={rol.id}>
                                                {rol.nombreRol}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Género</label>
                                    <select ref={selectGen2} class="form-select" aria-label="Default select example" placeholder='Seleccione una opción' onChange={handleGenChange} value={usuario.genero} required>
                                        <option value="">Seleccione un rol</option>
                                        <option value="H">Hombre</option>
                                        <option value="M">Mujer</option>
                                    </select>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={handleDrop}>Cancelar</button>
                                    <button type="submit" class="btn btn-primary" onClick={validateForm2} >Guadar Usuario</button>
                                    <button ref={btnCancel2} type="button" class="invisible-button" data-bs-dismiss="modal" style={{ display: 'none' }}>Botón Invisible</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            {/* modal para la eliminacion de un usuario */}

            <div class="modal fade" id="eliminarUsuario" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header lign-items-center justify-content-center">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Eliminación de usuario</h1>
                        </div>
                        <div class="modal-body text-center">
                            <img class="img-fluid" src={advertencia} style={{ width: "50%" }}></img>
                            <h5>¿Está seguro de eliminar permanentemente este usuario?</h5>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => deleteUsuario(idUsuario)}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}