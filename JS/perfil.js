document.addEventListener('DOMContentLoaded', function () {
    const editIcon = document.querySelector('.edit-icon');
    const userNameElement = document.querySelector('.user-name');
    const userEmailElement = document.querySelector('.user-email');
    const userPhoneElement = document.querySelector('.user-phone');
    const userAddressElement = document.querySelector('.user-address');

    function updateTitulo(userData) {
        const titulos = document.getElementsByClassName("titulo");
        for (let i = 0; i < titulos.length; i++) {
            titulos[i].textContent = userData.name;
        }
    }

    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
        const userData = JSON.parse(userDataString);
        userNameElement.textContent = userData.name;
        userEmailElement.textContent = userData.email;
        userPhoneElement.textContent = userData.phone;
        userAddressElement.textContent = userData.address;

        updateTitulo(userData);
    }

    editIcon.addEventListener('click', () => {
        const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]*$/;
        const emailRegex = /\S+@\S+\.\S+/;
        const phoneRegex = /^\d{10}$/;

        const saveButton = document.createElement('button');
        saveButton.classList.add('save-button');
        const spanElement = document.createElement('span');
        spanElement.textContent = 'Guardar';
        saveButton.appendChild(spanElement);

        const inputs = [userNameElement, userEmailElement, userPhoneElement, userAddressElement].map((element, index) => {
            const input = document.createElement('input');
            input.value = element.textContent; // Asignar el valor actual al input
            element.innerHTML = '';
            element.appendChild(input);
            if (index === 3) {
                element.appendChild(saveButton);
            }
            return input;
        });

        saveButton.addEventListener('click', () => {
            if (inputs[0].value.trim() === '') {
                showAlert('El campo de nombre no puede estar vacío', 'danger', userNameElement);
            } else if (!nameRegex.test(inputs[0].value)) {
                showAlert('El nombre no debe contener números', 'danger', userNameElement);
            } else if (!emailRegex.test(inputs[1].value)) {
                showAlert('Por favor ingrese un correo electrónico válido', 'danger', userEmailElement);
            } else if (!phoneRegex.test(inputs[2].value)) {
                showAlert('Por favor ingrese un número de teléfono válido de 10 dígitos', 'danger', userPhoneElement);
            } else {
                userNameElement.textContent = inputs[0].value; // Actualizar contenido del elemento
                userEmailElement.textContent = inputs[1].value;
                userPhoneElement.textContent = inputs[2].value;
                userAddressElement.textContent = inputs[3].value;
                const userData = {
                    name: inputs[0].value,
                    email: inputs[1].value,
                    phone: inputs[2].value,
                    address: inputs[3].value,
                };
                localStorage.setItem('userData', JSON.stringify(userData));

                updateTitulo(userData);
            }
        });

        function showAlert(message, type, targetElement) {
            const alertDiv = document.createElement('div');
            alertDiv.classList.add('alert', `alert-${type}`, 'mt-2');
            alertDiv.textContent = message;
            targetElement.appendChild(alertDiv);
            setTimeout(() => {
                alertDiv.remove();
            }, 3000);
        }
    });
});





//Editar foto
const botonCargarImagen = document.getElementById('botonCargarImagen');
const vistaPreviaImagen = document.getElementById('vistaPreviaImagen');
const imagenPerfil = document.getElementById('imagenPerfil');

botonCargarImagen.addEventListener('click', () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function () {
            imagenPerfil.src = reader.result;
            imagenPerfil.style.width = '200px'; 
            imagenPerfil.style.height = '200px';
            localStorage.setItem('imagenPerfil', reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    });

    document.body.appendChild(fileInput);
    fileInput.click();
    document.body.removeChild(fileInput);
});

window.addEventListener('load', () => {
    const imagenGuardada = localStorage.getItem('imagenPerfil');
    if (imagenGuardada) {
        imagenPerfil.src = imagenGuardada;
        imagenPerfil.style.width = '200px'; 
        imagenPerfil.style.height = '200px';
    }
});

