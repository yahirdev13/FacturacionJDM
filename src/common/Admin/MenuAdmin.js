import React from 'react'
import SideNav, {
    NavItem,
    NavIcon,
    NavText
} from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import { BsPersonFill, BsFillPeopleFill, BsFillFileEarmarkBarGraphFill, BsFillEnvelopeFill, BsFillPersonLinesFill } from 'react-icons/bs';

import { useNavigate } from 'react-router-dom';

export default function MenuAdmin() {
    const navigate = useNavigate();

    return (
        <div>
            <SideNav
                style={{ backgroundColor: "#2c497f", paddingTop: "4%" }}
                onSelect={(selected) => {
                    console.log(selected);
                    navigate('/' + selected)
                }}>

                
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="profile">

                        <NavItem eventKey="profile">
                            <NavIcon><i style={{ fontSize: "1.5em" }}><BsPersonFill /></i></NavIcon>
                            <NavText style={{ fontSize: "20px" }}>Perfil</NavText>
                        </NavItem>

                        <NavItem eventKey="users">
                            <NavIcon><i style={{ fontSize: "1.5em" }}><BsFillPeopleFill /></i></NavIcon>
                            <NavText style={{ fontSize: "20px" }}>Usuarios</NavText>
                        </NavItem>

                        <NavItem eventKey="rol">
                            <NavIcon><i style={{ fontSize: "1.5em" }}><BsFillPersonLinesFill /></i></NavIcon>
                            <NavText style={{ fontSize: "20px" }}>Roles</NavText>
                        </NavItem>

                        <NavItem eventKey="facturaControl">
                            <NavIcon><i style={{ fontSize: "1.5em" }}><BsFillFileEarmarkBarGraphFill /></i></NavIcon>
                            <NavText style={{ fontSize: "20px" }}>Facturas</NavText>
                        </NavItem>

                        <NavItem eventKey="contact">
                            <NavIcon><i style={{ fontSize: "1.5em" }}><BsFillEnvelopeFill /></i></NavIcon>
                            <NavText style={{ fontSize: "20px" }}>Contactanos</NavText>
                        </NavItem>
                        
                    </SideNav.Nav>

            </SideNav>
        </div >

    )
}
