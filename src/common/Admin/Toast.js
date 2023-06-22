import React from 'react'
import { Toast } from 'react-bootstrap';

const ToastComponent = ({ showToast, onClose }) => {
    return (

        <Toast show={showToast} onClose={onClose} className="toast align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <Toast.Body>
                    Eliminación exitosa!
                </Toast.Body>
                <button type="button" className="btn-close btn-close-white me-2 m-auto ml-2" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </Toast >

    );
};

export default ToastComponent;

