

// // Clase cupon-disponible
// const cuponContainer = document.querySelector('.cupon-disponible');

// // ¿Usuario Registrado?
// if (isUserLoggedIn) {
//   // Usuario Registrado
//   cuponContainer.innerHTML = `
//     <h3>Tienes un cupón disponible del 10% de descuento</h3>
//     <p>Utiliza el código: <strong>CUPON10</strong> al finalizar tu compra para aplicar el descuento.</p>
//   `;
// } else {
//   // Usuario no registrado
//   cuponContainer.innerHTML = '<p>No tienes ningún cupón disponible en este momento.</p>';
// }


//Confeti
function startConfeti() {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
    }, 250);
}

//Foto
window.addEventListener('load', () => {
 const imagenGuardada = localStorage.getItem('imagenPerfil');
  if (imagenGuardada) {
     const imagenPerfilTercerHTML = document.getElementById('imagenPerfilTercer');
      if (imagenPerfilTercerHTML) {
           imagenPerfilTercerHTML.src = imagenGuardada;
           imagenPerfilTercerHTML.style.width = '200px'; 
           imagenPerfilTercerHTML.style.height = '200px'; 
       }
   }
 });

 //Nombre 
 document.addEventListener('DOMContentLoaded', function () {
    function updateTitulo(userData) {
        const titulos = document.getElementsByClassName("titulo");
        for (let i = 0; i < titulos.length; i++) {
            titulos[i].textContent = userData.name;
        }
    }
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
        const userData = JSON.parse(userDataString);
        updateTitulo(userData);
    }
});