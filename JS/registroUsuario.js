document.getElementById('registro-form').addEventListener('submit', function (e) {
    const nombre = document.getElementById("inputName")
    const apellidos = document.getElementById("inputLastName")
    const telefono = document.getElementById("inputTelephone")
    const email = document.getElementById("inputEmail")
    const direction = document.getElementById("inputDireccion")
    const password = document.getElementById("inputPassword")
    const confirPassword = document.getElementById("inputConfirPassword")
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
        //Valida que el usuario ingrese al menos 1 mayuscula, 1 minuscula y 1 caracter, minimo 8 caracteres y maximo 15 caracteres
        let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    
        /*SE VERIFICA QUE EL NOMBRE CUMPLA CON M�S DE 6 CARACTERES*/
        if (nombre.value.length < 2) {
            mostrarAlerta('Nombre no valido', 'validacionNombre');
            e.preventDefault();
        }
        if (direction.value.length < 15) {
            mostrarAlerta('Dirección no valida', 'validacionDireccion');
            e.preventDefault();
        }

        if (apellidos.value.length < 3) {
            mostrarAlerta('Apellidos no validos', 'validacionApellidos');
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

        /*SE VALIDA QUE EL USUARIO INGRESE UNA CONTRASENA*/
        if(!password.value.match(regexPassword)) {
            mostrarAlerta('El password debe contener al menos una minúscula, mayúscula, número y un carácter especial. Y 8 carácteres como mínimo.','validacionPassword')
            e.preventDefault();
        } 
   
        //Hugo.123456
        if(password.value != confirPassword.value){
            mostrarAlerta('Las contrasenas NO coinciden, por favor verifique nuevamente', 'validacionConfirPassword')
            e.preventDefault();
        } 
        
        console.log(password.value);
        console.log(confirPassword.value);
        /*SE ENVIA EL MENSAJE AL USUARIO EN CASO DE QUE SU INFORMACI�N NO SEA VALIDA*/
        if (validacion) {
            parrafo.innerHTML = "Usuario registrado con éxito!"
        } 
    
        e.preventDefault();
    })