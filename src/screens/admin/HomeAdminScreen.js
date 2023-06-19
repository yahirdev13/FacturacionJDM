import React from 'react'
import Footer from '../../common/Footer'

import MenuAdmin from '../../common/Admin/MenuAdmin'
import NavAdmin from '../../common/Admin/NavAdmin'



export default function HomeAdminScreen() {
    return (
        <div>
            <NavAdmin/>
            <MenuAdmin/>

            {/* <Footer/> */}
        </div>
    )
}
