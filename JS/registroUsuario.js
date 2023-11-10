document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();
    const first_name = document.getElementById("inputName");
    const last_name = document.getElementById("inputLastName");
    const phone_number = document.getElementById("inputTelephone");
    const email_address = document.getElementById("inputEmail");
    const address = document.getElementById("inputDireccion");
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

    const regexemail_address = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    // Valida que el usuario ingrese al menos 1 mayúscula, 1 minúscula y 1 carácter, mínimo 8 caracteres y máximo 15 caracteres
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    /*SE VERIFICA QUE EL first_name CUMPLA CON MÁS DE 6 CARACTERES*/
    if (first_name.value.length < 2) {
        mostrarAlerta('first_name no válido', 'validacionNombre');

    }
    if (address.value.length < 15) {
        mostrarAlerta('Dirección no válida', 'validacionDireccion');

    }

    if (last_name.value.length < 3) {
        mostrarAlerta('no válido', 'validacionApellidos');

    }

    /*SE VALIDA QUE SEA UN NÚMERO MAYOR A 10 DÍGITOS*/
    if (isNaN(phone_number.value) || phone_number.value.length < 10) {
        mostrarAlerta('Teléfono no válido, introduce el número de teléfono a 10 dígitos', 'validacionphone_number');

    }
    /*SE INDICA AL USUARIO QUE EL email_address INGRESADO NO ES VÁLIDO, EN CASO DE QUE NO CUMPLA CON 
    LAS CARACTERÍSTICAS NECESARIAS COMO CONTENER UN "@"*/
    if (!regexemail_address.test(email_address.value)) {
        mostrarAlerta('email address no válido', 'validacionemail_address');

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
            first_name: first_name.value,
            last_name: last_name.value,
            phone_number: phone_number.value,
            email_address: email_address.value,
            address: address.value,
            password: password.value
        };
        // Enviar la solicitud fetch con discountCodesId como parámetro de la URL
        fetch(`http://localhost:8080/api/users?discountCodesId=1`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}, ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Usuario registrado con éxito en el backend:', data);
                // Resto de tu código después de guardar en el backend
            })
            .catch(error => {
                console.error('Error al registrar usuario en el backend:', error);
            });

            
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


