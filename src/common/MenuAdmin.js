import React from 'react'


export default function MenuAdmin() {
    return (
        <div >
            <aside class="main-sidebar">
                <section class="sidebar">
                    <div class="user-panel">
                        <div class="pull-left image">
                            <img src="imagenes/profiles/default.png" class="img-circle" alt="User Image" />
                        </div>
                        <div class="pull-left info">
                            <p>Said Villa Araujo</p>

                        </div>
                    </div>
                    <ul class="sidebar-menu">
                        <li class="header">MENU</li>

                        <li class="<?php if(isset($active1)){echo $active1;}?>">
                            <a href="home.php"><i class="fa fa-user"></i> <span>Mi perfil</span></a>
                        </li>

                        <li class="<?php if(isset($active2)){echo $active2;}?>">
                            <a href="usuarios"><i class="fa fa-filter"></i> <span>Usuarios</span></a>
                        </li>

                        <li class="<?php if(isset($active3)){echo $active3;}?>">
                            <a href="Roles"><i class="fa fa-commenting"></i> <span>Roles</span></a>
                        </li>

                        <li class="<?php if(isset($active4)){echo $active4;}?>">
                            <a href="facturas"><i class="fa fa-user-plus"></i> <span>Facturas</span></a>
                        </li>

                        <li class="<?php if(isset($active5)){echo $active5;}?>">
                            <a href="Contactanos"><i class="fa fa-tags"></i> <span>Contactanos</span></a>
                        </li>
                    </ul>
                </section>

            </aside>

        </div>
    )
}
