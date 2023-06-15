import React from 'react'
import '../common/NavAdminStyle.css'
import logo from '../images/logo-nav.png'
import { Link } from 'react-router-dom'
import menu from '../images/menu256.png'


export default function NavAdmin() {
    return (
        <nav class="navbar navbar-static-top" id='nav-3'>
                <a href="" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span class="sr-only">Menu</span>
                </a>
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <li class="dropdown user user-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                              <img src="imagenes/profiles/default.png" class="user-image" alt="User Image"/>
                              <span class="hidden-xs">Administrador</span>
                            </a>
                            <ul class="dropdown-menu">
                               
                                <li class="user-footer">
                                    <div class="pull-left">
                                        <a href="#.php" class="btn btn-default btn-flat">Mi perfil</a>
                                    </div>
                                    
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}
