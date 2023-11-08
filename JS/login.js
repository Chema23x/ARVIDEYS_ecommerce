document.getElementById('loginOn').addEventListener('click', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    const email = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;
    const parrafo = document.getElementById("warnings");

    let Validation = true; // Declarar la variable Validacion antes de usarla

    // Función para mostrar alertas
    function mostrarAlerta(mensaje, contenedorID) {
        const contenedor = document.getElementById(contenedorID);
        const alertContact = document.createElement('div');
        alertContact.className = 'alert alert-danger alertText';
        alertContact.textContent = mensaje;

        contenedor.appendChild(alertContact);

        setTimeout(() => {
            contenedor.removeChild(alertContact); // Oculta la alerta después de 2.5 segundos
        }, 2500);

        Validation = false;
    }

    // Validaciones
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
        const userData = JSON.parse(userDataString);
        if (userData.email === email && userData.password === password) {
            parrafo.innerHTML = "Inicio de sesión exitoso";

            
            // Redirecciona después de 2.5 segundos
            setTimeout(() => {
                window.location.href = "../index.html";
            }, 2500);
        } else {
            mostrarAlerta('Credenciales no válidas', 'PasswordValidation');
        }
    } else {
        mostrarAlerta('No se encontraron datos de usuario', 'PasswordValidation');
    }

    //Recordar Usuario mediante el checkbox
    const rememberUserCheckbox = document.getElementById("rememberUser");
    const rememberUser = rememberUserCheckbox.checked;

    // Validaciones y almacenamiento en localStorage
    if (Validation && rememberUser) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    } else if (!rememberUser) {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
    }
});

// Código para llenar los campos de entrada con los datos almacenados
if (localStorage.getItem("email") && localStorage.getItem("password")) {
    // Recupera los datos almacenados en localStorage
    const rememberUserLS = localStorage.getItem("email");
    const rememberPasswordLS = localStorage.getItem("password");

    // Llena los campos de entrada con los datos almacenados
    document.getElementById("exampleInputEmail1").value = rememberUserLS;
    document.getElementById("exampleInputPassword1").value = rememberPasswordLS;
}

document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
        // Si hay sesion ya iniciada redirige al perfil de
        window.location.href = "../HTML/Perfil.html";
    }
    // Aqui se va a actualizar el enlace del botón de perfil
    const botonPerfil = document.querySelector("#botonPerfil a");
    if (botonPerfil) {
        botonPerfil.setAttribute("href", "../HTML/Perfil.html");
    }
    const showPasswordCheckbox = document.getElementById("showPasswordCheckbox");
    if (showPasswordCheckbox) {
        showPasswordCheckbox.addEventListener("change", togglePassword);
    }
});


// Muestra u oculta contraseña
function togglePassword() {
    var passwordInput = document.getElementById("exampleInputPassword1");
    var checkbox = document.getElementById("showPasswordCheckbox");
    if (checkbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}



