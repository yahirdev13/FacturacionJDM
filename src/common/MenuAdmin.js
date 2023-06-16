import React from 'react'
import SideNav, {
    Toggle,
    NavItem,
    NavIcon,
    NavText
} from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import { FaReact } from 'react-icons/fa';

export default function MenuAdmin() {
    return (
        <SideNav
            onSelect={(selected) => {
                console.log(selected)
            }}>
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="profile">
                <NavItem>
                    <NavIcon><i style={{fontSize:"1.5em"}}><FaReact/></i></NavIcon>
                    <NavText>Perfil</NavText>
                </NavItem>
                
            </SideNav.Nav>

        </SideNav>
    )
}
