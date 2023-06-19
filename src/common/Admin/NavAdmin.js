import React from 'react'
import Logo from "../../images/logo-nav.png";
import photo from "../Admin/xd.jpg";
import { Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function NavAdmin() {
    return (
        <nav class="navbar sticky-top headerWrap" style={{ backgroundColor: "#2c497f" }}>


            <div class="container-fluid">
                <div class="col-sm-4 col-md-4 col-lg-2 col-xl-2">
                    <Link to={"/profile"}>
                        <img src={Logo} width="50" height="50" />
                    </Link>
                </div>

                <div class="col-sm-6 col-md-4 col-lg-2 col-xl-2">
                    <Dropdown>
                        <Dropdown.Toggle variant="username" >
                            <img src={photo} class="avatar" style={{ width: "35px", borderRadius: "50%" }} />
                            <span class="avatar_text" style={{ color: "white", paddingLeft:"15px"}}>Yahir Alberto Diaz Gonzalez</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ backgroundColor: "#FF7474", width:"90%" }}>
                            <Dropdown.Item style={{textAlign:"center"}}>Cerrar Sesión</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </nav>
    )
}
