import React from 'react'
import Swal from 'sweetalert2'
import { useEffect } from 'react';

const Alert = () => {
    function showAlert() {
        Swal.fire({
            title: "Welcome",
            text: "Lets play",
            icon: "success"
        });
    }
    useEffect(() => {
        showAlert();
    }, []);
    return (
        <div>
        </div>
    )
}

export default Alert