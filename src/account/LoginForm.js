import React from 'react'

//componentes de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../images/logo-negro.png'

export default function LoginForm() {

    return (
        <div>

            <style>
                {`
          .divider:after,
          .divider:before {
            content: "";
            flex: 1;
            height: 1px;
            background: #eee;
          }
          .h-custom {
            height: calc(100% - 73px);
          }
          @media (max-width: 450px) {
            .h-custom {
              height: 100%;
            }
          }
        `}
            </style>

            <section className="vh-100">
                <div class="container-fluid h-custom">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-md-9 col-lg-6 col-xl-5">
                            <img class="img-fluid" src={logo}/>
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

                                <div class="d-flex justify-content-between align-items-center" className>
                                    <a href="#!" class="text-body">¿Olvidaste tu contraseña?</a>
                                </div>

                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" class="btn btn-primary btn-lg"
                                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Iniciar Sesión</button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </div>

    )
}
