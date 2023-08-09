import React, { useState } from 'react'


//Importacion de estilos
import './styleLogin.css'

//importacion de imagen
import logo from '../images/logo-negro.png'

//importacion de componentes
import { Link } from 'react-router-dom'

//libreria para alertas
import Swal from 'sweetalert2';
export default function LoginForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        const formData = {
            nombreUsuario: email,
            contrasena: password
        };

        try {
            const response = await fetch('http://localhost:8080/api-jdm/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: 'Error!', // Titulo de la alerta
                text: 'Contraseña y/o correo incorrectos!', // Texto de la alerta
                icon: 'error', // Icono de la alerta (error)
                timer: 3000, // Duración de la alerta en milisegundos (2 segundos en este caso)
                showConfirmButton: false, // No mostrar el botón de confirmación
                timerProgressBar: true, // Mostrar la barra de tiempo
            });
        }
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
                            <form>
                                <div class='text-center'>
                                    <h2>Sistema de facturacion en línea</h2>
                                </div>

                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Correo Electrónico</label>
                                </div>

                                <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
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
