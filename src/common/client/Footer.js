import React from 'react'

//importacion de estlo
import './styleFooter.css'

export default function Footer() {
    //regresa el componente footer
    return (
        <div style={styles.piePagina} className='footer '>
            <div className="grupo-2">
                <small>&copy; 2023 <b>Jardines de México</b> - Todos los Derechos Reservados.</small>
            </div>
        </div>
    )
}


//declaracion de estilos
const styles = {
    piePagina: {
        backgroundColor: '#2c497f',
        padding: '15px 10px',
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Roboto',
        backgroundColor: '#2c497f',
        bottom: '0',
        zIndex: '100',
        marginTop: 'auto',
    },

}