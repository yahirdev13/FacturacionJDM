import React from 'react'
import Footer from '../../common/Footer'
import NavAdmin from '../../common/NavAdmin'
import MenuAdmin from '../../common/MenuAdmin'
import SideBar from '../../common/SideBar'


export default function HomeAdminScreen() {
    return (
        <div>
            <NavAdmin/>
           <SideBar/>
            {/* <MenuAdmin/> */}
            {/* <Footer/> */}
        </div>
    )
}
