document.getElementById('loginOn').addEventListener('click', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    const email = document.getElementById("exampleInputEmail1");
    const password = document.getElementById("exampleInputPassword1");
    const parrafo = document.getElementById("warnings");

    let validacion = true; // Declarar la variable validacion antes de usarla


    //Recordar Usuario mediante el checkbox
    const rememberUserCheckbox = document.getElementById("flexCheckChecked");
    const rememberUser = rememberUserCheckbox.checked;

    function mostrarAlerta(mensaje, contenedorID) {
        const contenedor = document.getElementById(contenedorID);
        const alertContact = document.createElement('div');
        alertContact.className = 'alert alert-danger alertText';
        alertContact.textContent = mensaje;

        contenedor.appendChild(alertContact);

        setTimeout(() => {
            contenedor.removeChild(alertContact); // Oculta la alerta después de 1.5 segundos
        }, 2500);

        validacion = false;
    }

    // VALIDACIONES

    /* Verifica que el correo electrónico cumple con un formato válido */
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!regexEmail.test(email.value)) {
        mostrarAlerta('Correo electrónico no válido', 'validacionEmail');
    }

    /* Verifica que la contraseña tenga al menos 6 caracteres */
    if (password.value.length < 6) {
        mostrarAlerta('Contraseña no válida, debe tener al menos 6 caracteres', 'validacionPassword');
    }

    /* Aquí puedes agregar más validaciones si es necesario */

    /* Envía el formulario si la validación es exitosa */
    if (validacion) {
        parrafo.innerHTML = "Iniciar sesión exitoso";
        console.log("Listo");
        // Aquí puedes enviar el formulario si es necesario
        // document.getElementById('login-form').submit();
    }

    if (validacion && rememberUser) {
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
    }
});