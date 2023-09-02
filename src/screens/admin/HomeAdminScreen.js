import React, { useState, useEffect } from 'react';
import './style.css'

import Menu from '../../common/Admin/Menu'

import Photo from '../../images/usuario.png'
import { useRef } from 'react';
import Swal from 'sweetalert2';


export default function HomeAdminScreen() {
    let nombreUsuario = localStorage.getItem('nombreUsuario');
    const [contrasena, setContrasena] = useState('');
    const [nContrasena, setNContrasena] = useState('');
    const [nContrasena2, setNContrasena2] = useState('');
    const [nuevoUsuario, setNuevoUsuario] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [correo, setCorreo] = useState('');
    const token = localStorage.getItem('token');
    console.log(token);


    useEffect(() => {
        getUsuarioByUsername().then((usuario) => {
            console.log(usuario);
            setNombre(usuario.nombre);
            setApellidos(usuario.apellidos);
            setNuevoUsuario(usuario.nombreUsuario);
            setCorreo(usuario.correo);
        }).catch((error) => {
            console.log(error);
        });
    }, []);


    const getUsuarioByUsername = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`http://localhost:8080/api-jdm/usuarios/getProfile/${nombreUsuario}`, {
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
                            ...usuario
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
    };

    const changePassword = (e) => {
        e.preventDefault();
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch('http://localhost:8080/api-jdm/auth/changePass', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nombreUsuario: nombreUsuario,
                        contrasena: contrasena,
                        nuevaContrasena: nContrasena
                    })
                });
                const data = await response.json();
                if (data.error === false) {
                    Swal.fire({
                        title: 'Contraseña actualizada', // Titulo de la alerta
                        text: data.message, // Texto de la alerta
                        icon: 'success', // Icono de la alerta
                        timer: 2000, // Duración de la alerta en milisegundos (2 segundos en este caso)
                        showConfirmButton: false, // No mostrar el botón de confirmación
                        timerProgressBar: true, // Muestra la barra de tiempo
                    });
                    resolve(true);
                } else {
                    Swal.fire({
                        title: 'Contraseña no actualizada', // Titulo de la alerta
                        text: data.message, // Texto de la alerta
                        icon: 'error', // Icono de la alerta
                        timer: 2000, // Duración de la alerta en milisegundos (2 segundos en este caso)
                        showConfirmButton: false, // No mostrar el botón de confirmación
                        timerProgressBar: true, // Muestra la barra de tiempo
                    });
                    resolve(false);
                }
            } catch (error) {
                console.log('Error');
                reject(error);
            }
        })
    }

    const updateProfile = (e) => {
        e.preventDefault();
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`http://localhost:8080/api-jdm/auth/updateProfile/1`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nombre: nombre,
                        apellidos: apellidos,
                        nombreUsuario: nuevoUsuario,
                        correo: correo,

                    })
                });
                const data = await response.json();
                if (data.error === false) {
                    Swal.fire({
                        title: 'Usuario actualizado', // Titulo de la alerta
                        text: data.message, // Texto de la alerta
                        icon: 'success', // Icono de la alerta
                        timer: 2000, // Duración de la alerta en milisegundos (2 segundos en este caso)
                        showConfirmButton: false, // No mostrar el botón de confirmación
                        timerProgressBar: true, // Muestra la barra de tiempo
                    });
                    console.log(nuevoUsuario);
                    console.log(nombreUsuario);
                    nombreUsuario = nuevoUsuario;
                    console.log(nombreUsuario);
                    setNombre('');
                    setApellidos('');
                    setNuevoUsuario('');
                    setCorreo('');
                    resolve(true);
                    getUsuarioByUsername().then((usuario) => {
                        setNombre(usuario.nombre);
                        setApellidos(usuario.apellidos);
                        setNuevoUsuario(usuario.nombreUsuario);
                        setCorreo(usuario.correo);
                    }).catch((error) => {
                        console.log(error);
                    });
                } else {
                    Swal.fire({
                        title: 'Usuario no actualizado', // Titulo de la alerta
                        text: data.message, // Texto de la alerta
                        icon: 'error', // Icono de la alerta
                        timer: 2000, // Duración de la alerta en milisegundos (2 segundos en este caso)
                        showConfirmButton: false, // No mostrar el botón de confirmación
                        timerProgressBar: true, // Muestra la barra de tiempo
                    });
                    resolve(false);
                }

            } catch (error) {
                console.log('Error');
                reject(error);
            }
        })
    }

    const inputPass = useRef(null);
    const inputPass2 = useRef(null);
    const inputPass3 = useRef(null);

    const validatePass = () => {
        const elementPass = inputPass.current;
        const elementPass2 = inputPass2.current;
        const elementPass3 = inputPass3.current;

        const isPassValid2 = elementPass2.value.length < 8;
        const isPassValid3 = elementPass3.value.length < 8;
        const isPassMatching = elementPass2.value === elementPass3.value;

        if (elementPass.value.length > 0 || elementPass2.value.length > 0 || elementPass3.value.length > 0) {
            if (isPassValid2) {
                elementPass2.setCustomValidity("La contraseña debe tener al menos 8 caracteres");
            } else {
                elementPass2.setCustomValidity("");
            }
            if (isPassValid3) {
                elementPass3.setCustomValidity("La cotraseña debe tener al menos 8 caracteres");
            } else {
                elementPass3.setCustomValidity("");
            }

            if (!isPassValid2 && !isPassValid3) {
                if (!isPassMatching) {
                    elementPass3.setCustomValidity("Las contraseñas no coinciden");
                } else {
                    elementPass3.setCustomValidity("");
                }
            }
        } else {
            elementPass.setCustomValidity("");
            elementPass2.setCustomValidity("");
            elementPass3.setCustomValidity("");
        }

        if (elementPass.checkValidity() && elementPass2.checkValidity() && elementPass3.checkValidity()) {
            console.log("Formulario valido");
        } else {
            console.log("Formulario no valido!")
        }

    }


    return (
        <div className='component'>
            <Menu />
            <div>
                <div class="mx-auto p-2">
                    <h2>Perfil</h2>
                </div>

            </div>
            <div style={styles.container}>

                <div class="card mt-3 card__1">
                    <div class="card-body">
                        <h4> Foto de perfil</h4>
                        <center>
                            <div className='mt-4 mb-4'>
                                <img src={Photo} class="rounded-circle" alt="Cinque Terre" width="400" height="400" />
                            </div>
                        </center>

                    </div>
                </div>


                <div class="card mt-3 card__2">
                    <div class="card-body ">
                        <h4>Editar datos personales</h4>
                        <form name='editarPerfil' onSubmit={updateProfile}>
                            <div class="mb-3">
                                <label class="form-label">Nombre/s</label>
                                <input type="text" class="form-control" aria-describedby="textHelp" onChange={(e) => setNombre(e.target.value)} value={nombre} required />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Apellido/s</label>
                                <input type="text" class="form-control" aria-describedby="textHelp" onChange={(e) => setApellidos(e.target.value)} value={apellidos} required />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Nombre de usuario</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" onChange={(e) => setNuevoUsuario(e.target.value)} value={nuevoUsuario} required ></input>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Correo Electrónico</label>
                                <input type="email" class="form-control" aria-describedby="emailHelp" onChange={(e) => setCorreo(e.target.value)} value={correo} required />
                            </div>
                            <div class="d-flex justify-content-end pt-3">
                                <button type="submit" class="btn btn-primary">Guadar Cambios</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="card mt-3 card__3">
                    <div class="card-body ">
                        <h4>Cambiar Contraseña</h4>
                        <form onSubmit={changePassword}>
                            <div class="mb-3">
                                <label class="form-label">Contraseña Actual</label>
                                <input ref={inputPass} type="password" class="form-control" placeholder='Ingrese su contraseña actual' onChange={(e) => setContrasena(e.target.value)} value={contrasena} required />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Nueva Contraseña</label>
                                <input ref={inputPass2} type="password" class="form-control" placeholder='Ingrese su nueva contraseña' onChange={(e) => setNContrasena(e.target.value)} value={nContrasena} required />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Confirma Contraseña</label>
                                <input ref={inputPass3} type="password" class="form-control" placeholder='Confirme su nueva contraseña' onChange={(e) => setNContrasena2(e.target.value)} value={nContrasena2} required />
                            </div>
                            <div class="d-flex justify-content-end pt-3">
                                <button type="submit" class="btn btn-primary" onClick={validatePass}>Cambiar Contraseña</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        flexWrap: "wrap", // Agregado para permitir envolver las tarjetas
        paddingBottom: "2%",
    }
}