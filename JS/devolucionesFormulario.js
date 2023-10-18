document.getElementById('dev-form').addEventListener('submit', function (e) {
const nombre = document.getElementById("nombre")
const pedido = document.getElementById("pedido")
const telefono = document.getElementById("telefono")
const email = document.getElementById("email")
const mensaje = document.getElementById("mensaje")
const parrafo = document.getElementById("warnings")

function mostrarAlerta(mensaje, contenedorID) {
    const contenedor = document.getElementById(contenedorID);
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-danger alertText';
    alertDiv.textContent = mensaje;

    contenedor.appendChild(alertDiv);

    setTimeout(() => {
        contenedor.removeChild(alertDiv); // Oculta la alerta después de 1.5 segundos
    }, 1500);

    validacion = false;
}

    // VALIDACIONES

    let validacion = true;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

    /*SE VERIFICA QUE EL NOMBRE CUMPLA CON MÁS DE 6 CARACTERES*/
    if (nombre.value.length < 6) {
        mostrarAlerta('Nombre no valido', 'validacionNombre');
        e.preventDefault();
    }

    /*SE VERIFICA QUE EL PEDIDO CUMPLA CON MÁS DE 3 CARACTERES*/
    if (pedido.value.length < 3) {
        mostrarAlerta('Numero de pedido no valido', 'validacionPedido');
        e.preventDefault();
    }

    /*SE VALIDA q QUE SEA UN NÚMERO MAYOR A 10 DIGITOS*/
    if (isNaN(telefono.value) || telefono.value.length < 10) {
        mostrarAlerta('Telefono no valido', 'validacionTelefono');
        e.preventDefault();
    }
    /*SE INDICA AL UDUARIO QUE EL EMAIL INGRESADO NO ES VALIDO, EN CASO DE QUE NO CUMPLA CON 
    LAS CARACTERIZTICAS NECESARIAS COMO CONTENER UN "@"*/
    if (!regexEmail.test(email.value)) {
        mostrarAlerta('Email no valido', 'validacionEmail');
        e.preventDefault();
    }
    /*SE VALIDA QUE EL USUARIO INGRESE UN MENSAJE*/
    if (mensaje.value.length < 1) {
        mostrarAlerta('Por favor, ingrese un mensaje', 'validacionMensaje');
        e.preventDefault();
    }
    
    /*SE ENVIA EL MENSAJE AL USUARIO EN CASO DE QUE SU INFORMACIÓN NO SEA VALIDA*/
    if (validacion) {
        parrafo.innerHTML = "Mensaje enviado con éxito!"
    } 

    e.preventDefault();
})