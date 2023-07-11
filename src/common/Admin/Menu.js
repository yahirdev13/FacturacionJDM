import React from 'react'
import { useEffect, useState } from 'react'
import './styles/style.css'
import './styles/styles.scss'

import { Link } from 'react-router-dom'

import user from '../../images/usuario.png'


export default function Menu() {

    useEffect(() => {
        const toggleBtn = document.getElementById('header-toggle');
        const nav = document.getElementById('navbar');

        const toggleMenu = () => {
            nav.classList.toggle('show-menu');
            toggleBtn.classList.toggle('bx-x');
        };

        toggleBtn.addEventListener('click', toggleMenu);

        return () => {
            toggleBtn.removeEventListener('click', toggleMenu);
        };
    }, []);

    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div>
            <div>
                <header class="header">
                    <div class="header__container">
                        <img src={user} class="header__img" />
                        <div class="header__search">
                            <input type="search" placeholder="Buscar..." class="header__input" />
                            <i class="bi bi-search"></i>
                        </div>
                        <div class="header__toggle">
                            <button type="button" class="btn">
                                <i class="bi bi-list" id="header-toggle"></i>
                            </button>

                        </div>
                    </div>
                </header>
            </div>

            <div class="nav" id="navbar">
                <nav class="nav__container">
                    <div>

                        <a href="#" class="nav__link nav__logo">
                            <i class="bx bxs-disc nav__icon"></i>
                            <span class="nav__logo-name">Sistema de Facturación</span>
                        </a>
                        <div class="nav__list">
                            <div class="nav__items">
                                <h3 class="nav__subtitle">Profile</h3>

                                <Link
                                    class={`nav__link ${activeLink === 'profile' ? 'active' : ''}`}
                                    to="/profile"
                                    onClick={() => handleLinkClick('profile')}
                                >
                                    <i class="bi bi-person-fill nav__icon"></i>
                                    <span class="nav__name">Profile</span>
                                </Link>

                            </div>
                            <div class="nav__items">
                                <h3 class="nav__subtitle">Menu</h3>
                                <Link
                                    class={`nav__link ${activeLink === 'users' ? 'active' : ''}`}
                                    to="/users"
                                    onClick={() => handleLinkClick('users')}
                                >
                                    <i class="bi bi-people-fill nav__icon"></i>
                                    <span class="nav__name">Usuarios</span>
                                </Link>
                                <Link
                                    className={`nav__link ${activeLink === 'rol' ? 'active' : ''}`}
                                    to="/rol"
                                    onClick={() => handleLinkClick('rol')}
                                >
                                    <i class="bi bi-grid nav__icon"></i>
                                    <span class="nav__name">Roles</span>
                                </Link>
                                <Link
                                    className={`nav__link ${activeLink === 'mensajes' ? 'active' : ''}`}
                                    to="/mensajes"
                                    onClick={() => handleLinkClick('mensajes')}
                                >
                                    <i class="bi bi-chat-left-dots nav__icon"></i>
                                    <span class="nav__name">Mensajes</span>
                                </Link>
                                <Link
                                    className={`nav__link ${activeLink === 'facturaControl' ? 'active' : ''}`}
                                    to="/facturaControl"
                                    onClick={() => handleLinkClick('facturaControl')}
                                >
                                    <i class="bi bi-files nav__icon"></i>
                                    <span class="nav__name">Facturas</span>
                                </Link>


                            </div>
                        </div>
                    </div>
                    <a href="#" class="nav__link nav__logout">
                        <i class="bi bi-box-arrow-right nav__icon"></i>
                        <span class="nav__name">Cerrar Sesión</span>
                    </a>
                </nav>
            </div>
        </div >
    )
}
