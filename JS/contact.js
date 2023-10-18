document.getElementById('contact-form').addEventListener('submit', function (e) {
    const nombre = document.getElementById("nombre")
    const telefono = document.getElementById("telefono")
    const email = document.getElementById("email")
    const mensaje = document.getElementById("mensaje")
    const parrafo = document.getElementById("warnings")
    
    function mostrarAlerta(mensaje, contenedorID) {
        const contenedor = document.getElementById(contenedorID);
        const alertContact = document.createElement('div');
        alertContact.className = 'alert alert-danger alertText';
        alertContact.textContent = mensaje;
    
        contenedor.appendChild(alertContact);
    
        setTimeout(() => {
            contenedor.removeChild(alertContact); // Oculta la alerta despu�s de 1.5 segundos
        }, 2500);
    
        validacion = false;
    }
    
        // VALIDACIONES
    
        let validacion = true;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    
        /*SE VERIFICA QUE EL NOMBRE CUMPLA CON M�S DE 6 CARACTERES*/
        if (nombre.value.length < 6) {
            mostrarAlerta('Nombre no valido', 'validacionNombre');
            e.preventDefault();
        }
    
        /*SE VALIDA q QUE SEA UN N�MERO MAYOR A 10 DIGITOS*/
        if (isNaN(telefono.value) || telefono.value.length < 10) {
            mostrarAlerta('Telefono no válido, introduce el número de teléfono a 10 dígitos', 'validacionTelefono');
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
        
        /*SE ENVIA EL MENSAJE AL USUARIO EN CASO DE QUE SU INFORMACI�N NO SEA VALIDA*/
        if (validacion) {
            parrafo.innerHTML = "Mensaje enviado con �xito!"
        } 
    
        e.preventDefault();
    })

// /** 
// /*SE CREAN LAS CONSTANTES PARA MANIPULAR LA INFORMACIÓN QUE INGRESA EL USUARIO*/
// const nombre = document.getElementById("nombre")
// const email = document.getElementById("email")
// const telefono = document.getElementById("telefono")
// const mensaje = document.getElementById("mensaje")
// const form = document.getElementsById("form")
// const parrafo = document.getElementById("warnings")

// form.addEventListener("submit", e => {
//     e.preventDefault()
//     let warnings = ""
//     let entrar = false
//     /* SE VALIDA EL EMAIL QUE INGRESA EL USUARIO*/
//     let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
//     parrafo.innerHTML = ""
//     /*SE VERIFICA QUE EL NOMBRE CUMPLA CON MÁS DE 6 CARACTERES*/
//     if (nombre.value.length < 6) {
//         warnings += `El nombre no es valido <br>`
//         entrar = true
//     }
//     /*SE VALIDA EN NÚMERO DE TELEFONO A 10 NÚMEROS*/
//     if (telefono.value.length < 10) {
//         warnings += `El telefono no es valido, debe ser a 10 digitos <br>`
//         entrar = true
//     }
//     /*SE INDICA AL UDUARIO QUE EL EMAIL INGRESADO NO ES VALIDO, EN CASO DE QUE NO CUMPLA CON 
//     LAS CARACTERIZTICAS NECESARIAS COMO CONTENER UN "@"*/
//     if (!regexEmail.test(email.value)) {
//         warnings += `El email no es valido <br>`
//         entrar = true
//     }
//     /*SE VALIDA QUE EL USUARIO INGRESE UN MENSAJE*/
//     if (mensaje.value.length < 1) {
//         warnings += `El mensaje no es valido <br>`
//         entrar = true
//     }
//     /*SE ENVIA EL MENSAJE AL USUARIO EN CASO DE QUE SU INFORMACIÓN NO SEA VALIDA*/
//     if (entrar) {
//         parrafo.innerHTML = warnings
//     /*SE LE INDICA AL USUARIO QUE SU MENSAJE FUE ENVIADO EN CASO DE CUMPLIS CON 
//     LA INFORMACIÓN CORRECTA*/
//     } else {
//         parrafo.innerHTML = "Enviado con éxito!"
//     }
// })
