import React, { useEffect, useState } from 'react'


//Importacion de estilos
import './styleLogin.css'

//importacion de imagen
import logo from '../images/logo-negro.png'

//libreria para el redireccionamiento
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

//libreria para alertas
import Swal from 'sweetalert2';
export default function LoginForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            document.getElementById('login').submit(); // Envía el formulario
        }
    };


    const handleLogin = (e) => {
        e.preventDefault();
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch('http://localhost:8080/api-jdm/auth/login', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nombreUsuario: email,
                        contrasena: password
                    })
                });
                const data = await response.json();
                console.log(data);
                if (data.error === false) {

                    console.log("login correcto jejej")
                    resolve(true);

                    //guardar el token en el local storage
                    localStorage.setItem('token', data.token);

                    //redirigir a la pagina de inicio
                    window.location.href = "/profile";

                } else {
                    console.log("Error login!");
                    Swal.fire({
                        title: 'Error!', // Titulo de la alerta
                        text: data.message, // Texto de la alerta
                        icon: 'error', // Icono de la alerta (error)
                        timer: 2000, // Duración de la alerta en milisegundos (2 segundos en este caso)
                        showConfirmButton: false, // No mostrar el botón de confirmación
                        timerProgressBar: true, // Mostrar la barra de tiempo
                    });
                    resolve(false);
                }
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
    };


    return (
        <div>
            <section className="vh-100">
                <div class="container-fluid h-custom">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                            <img class="img-fluid" src={logo} />
                        </div>
                        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form id='login'>
                                <div class='text-center'>
                                    <h2>Sistema de facturacion en línea</h2>
                                </div>

                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                                    <label for="floatingInput">Usuario</label>
                                </div>

                                <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                    <label for="floatingPassword">Contraseña</label>
                                </div>
                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" class="btn btn-primary btn-lg"
                                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                                        onClick={handleLogin}
                                    >Iniciar Sesión</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </div>

    )
}
