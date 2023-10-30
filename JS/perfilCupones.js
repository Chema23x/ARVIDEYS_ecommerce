

// Clase cupon-disponible
const cuponContainer = document.querySelector('.cupon-disponible');

// ¿Usuario Registrado?
if (isUserLoggedIn) {
  // Usuario Registrado
  cuponContainer.innerHTML = `
    <h3>Tienes un cupón disponible del 10% de descuento</h3>
    <p>Utiliza el código: <strong>CUPON10</strong> al finalizar tu compra para aplicar el descuento.</p>
  `;
} else {
  // Usuario no registrado
  cuponContainer.innerHTML = '<p>No tienes ningún cupón disponible en este momento.</p>';
}


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

