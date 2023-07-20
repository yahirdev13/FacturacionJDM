import React from 'react'
import './client/styleFooter.css'

export default function Footer() {
    return (
        <div style={styles.piePagina} className='footer '>
            <div className="grupo-2">
                <small>&copy; 2023 <b>Jardines de México</b> - Todos los Derechos Reservados.</small>
            </div>
        </div>
    )
}

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