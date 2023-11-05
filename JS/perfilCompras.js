document.addEventListener("DOMContentLoaded", function () {
    const compras = JSON.parse(localStorage.getItem('compras'));
    const comprasBody = document.getElementById('compras-body');

    if (compras && compras.productos && compras.productos.length > 0) {
        compras.productos.forEach(producto => {
            const divElement = document.createElement('div');
            divElement.innerHTML =  `
            <div class="product-card">
                           <figure>
                               <img src="${producto.img}" alt="${producto.nombre}" class="product-image">
                           </figure>
                           <div class="product-details">
                               <h2>${producto.nombre}</h2>
                               <ul>
                                   <li>Talla: ${producto.talla}</li>
                                   <li>Color: ${producto.color}</li>
                                   <li>Cantidad: ${producto.cantidad}</li>
                                   <li>Precio por un producto: $${producto.precio}</li>
                               </ul>
                           </div>
                       </div>
             `;

            comprasBody.appendChild(divElement);
        });
    } else {
        const message = document.createElement('p');
        message.textContent = 'No tienes compras registradas.';
        comprasBody.appendChild(message);
    }
});


//Foto

window.addEventListener('load', () => {
   const imagenGuardada = localStorage.getItem('imagenPerfil');
    if (imagenGuardada) {
         const imagenPerfilSegundoHTML = document.getElementById('imagenPerfilSegundo');
         if (imagenPerfilSegundoHTML) {
             imagenPerfilSegundoHTML.src = imagenGuardada;
             imagenPerfilSegundoHTML.style.width = '200px';
             imagenPerfilSegundoHTML.style.height = '200px'; 
         }
     }
 });