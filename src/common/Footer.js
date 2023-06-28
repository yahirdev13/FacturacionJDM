import React from 'react'

export default function Footer() {
    return (
        <footer style={styles.footer}>
            <div style={styles.piePagina} >
                <div class="grupo-2">
                    <small>&copy; 2023 <b>Jardines de México</b> - Todos los Derechos Reservados.</small>
                </div>
            </div>
        </footer>
    )
}

const styles = {
    footer: {
        width: '100%',
        bottom: '0',
        zIndex: '100',
        marginTop: 'auto',
    },
    piePagina: {
        backgroundColor: '#2c497f',
        padding: '15px 10px',
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Roboto',
    },

}