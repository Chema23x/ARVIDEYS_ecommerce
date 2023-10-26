document.getElementById('loginOn').addEventListener('click', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    const email = document.getElementById("exampleInputEmail1");
    const password = document.getElementById("exampleInputPassword1");
    const parrafo = document.getElementById("warnings");

    let Validation = true; // Declarar la variable Validacion antes de usarla


    //Recordar Usuario mediante el checkbox
    const rememberUserCheckbox = document.getElementById("rememberUser");
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

        Validation = false;
    }

    // ValidationES

    /* Verifica que el correo electrónico cumple con un formato válido */
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!regexEmail.test(email.value)) {
        mostrarAlerta('Correo electrónico no válido', 'EmailValidation');
    }

    /* Verifica que la contraseña tenga al menos 6 caracteres */
    if (password.value.length < 6) {
        mostrarAlerta('Contraseña no válida, debe tener al menos 6 caracteres', 'PasswordValidation');
    }

    /* Aquí puedes agregar más Validationes si es necesario */

    /* Envía el formulario si la validación es exitosa */
    if (Validation) {
        parrafo.innerHTML = "Iniciar sesión exitoso";
        console.log("Listo");
        // Aquí puedes enviar el formulario si es necesario
        // document.getElementById('login-form').submit();
    }
    //Validacion para almacenar los Items en el LocalStorage
    if (Validation && rememberUser) {
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        //Si el checkbox esta desactivado y login elimina del local Storage
    } else if(!rememberUser){
        localStorage.clear("email",email.value);
        localStorage.clear("password",password.value);
    }
});
if (localStorage.getItem("email") && localStorage.getItem("password")) {
    // Recupera los datos almacenados en localStorage
    const rememberUserLS = localStorage.getItem("email");
    const RememberPasswordLS = localStorage.getItem("password");

    // Llena los campos de entrada con los datos almacenados
    document.getElementById("exampleInputEmail1").value = rememberUserLS;
    document.getElementById("exampleInputPassword1").value = RememberPasswordLS;
}