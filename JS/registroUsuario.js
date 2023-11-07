document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();
    const nombre = document.getElementById("inputName");
    const apellidos = document.getElementById("inputLastName");
    const telefono = document.getElementById("inputTelephone");
    const email = document.getElementById("inputEmail");
    const direction = document.getElementById("inputDireccion");
    const password = document.getElementById("inputPassword");
    const confirPassword = document.getElementById("inputConfirPassword");
    const parrafo = document.getElementById("warnings");

    let Validation = true
   
    function mostrarAlerta(mensaje, contenedorID) {
        const contenedor = document.getElementById(contenedorID);
        const alertContact = document.createElement('div');
        alertContact.className = 'alert alert-danger alertText';
        alertContact.textContent = mensaje;

        contenedor.appendChild(alertContact);

        setTimeout(() => {
            contenedor.removeChild(alertContact); // Oculta la alerta después de 1.5 segundos
        }, 2500);

        Validation = false;
    }


    // VALIDACIONES

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    // Valida que el usuario ingrese al menos 1 mayúscula, 1 minúscula y 1 carácter, mínimo 8 caracteres y máximo 15 caracteres
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    /*SE VERIFICA QUE EL NOMBRE CUMPLA CON MÁS DE 6 CARACTERES*/
    if (nombre.value.length < 2) {
        mostrarAlerta('Nombre no válido', 'validacionNombre');
       
    }
    if (direction.value.length < 15) {
        mostrarAlerta('Dirección no válida', 'validacionDireccion');
        
    }

    if (apellidos.value.length < 3) {
        mostrarAlerta('Apellidos no válidos', 'validacionApellidos');
     
    }

    /*SE VALIDA QUE SEA UN NÚMERO MAYOR A 10 DÍGITOS*/
    if (isNaN(telefono.value) || telefono.value.length < 10) {
        mostrarAlerta('Teléfono no válido, introduce el número de teléfono a 10 dígitos', 'validacionTelefono');
       
    }
    /*SE INDICA AL USUARIO QUE EL EMAIL INGRESADO NO ES VÁLIDO, EN CASO DE QUE NO CUMPLA CON 
    LAS CARACTERÍSTICAS NECESARIAS COMO CONTENER UN "@"*/
    if (!regexEmail.test(email.value)) {
        mostrarAlerta('Email no válido', 'validacionEmail');
       
    }

    /*SE VALIDA QUE EL USUARIO INGRESE UNA CONTRASEÑA*/
    if (!password.value.match(regexPassword)) {
        mostrarAlerta('La contraseña debe contener al menos una minúscula, mayúscula, número y un carácter especial. Y 8 caracteres como mínimo.', 'validacionPassword');
      
    }

    //Hugo.123456
    if (password.value != confirPassword.value) {
        mostrarAlerta('Las contraseñas NO coinciden, por favor verifique nuevamente', 'validacionConfirPassword');
      
    }

    console.log(password.value);
    console.log(confirPassword.value);

    
    /*SE ENVÍA EL MENSAJE AL USUARIO EN CASO DE QUE SU INFORMACIÓN NO SEA VÁLIDA*/

    if (Validation) {
        parrafo.innerHTML = "¡Usuario registrado con éxito!";
        const userData = {
            name: nombre.value,
            lastName: apellidos.value,
            telephone: telefono.value,
            email: email.value,
            direction: direction.value,
            password: password.value
        };
        localStorage.setItem('userData', JSON.stringify(userData));

        // Redireccionamiento después de 2.5 segundos
        setTimeout(() => {
            window.location.href = "../HTML/login.html";
        }, 2500);
    }
});

  function togglePassword() {
        var passwordInput = document.getElementById("inputPassword");
        var confirmInput = document.getElementById("inputConfirPassword");
        var checkbox = document.getElementById("showPasswordCheckbox");

        if (checkbox.checked) {
            passwordInput.type = "text";
            confirmInput.type = "text";
        } else {
            passwordInput.type = "password";
            confirmInput.type = "password";
        }
    }

