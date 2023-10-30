// var carrito = JSON.parse(localStorage.getItem('carrito'));

// var verCarrito = document.getElementById('botonCarrito');
// var modalBody = document.getElementById('modal-body');

// verCarrito.addEventListener('click', function () {
//     // Limpiar el contenido del modal antes de mostrar el carrito
//     modalBody.innerHTML = '';

//     // Recorre los elementos del carrito y muestra cada elemento en el modal
//     carrito.forEach(ropa => {
//         var divElement = document.createElement('div');
//         divElement.className = 'modal-body';
//         divElement.innerHTML = `
//         <div class="product-card">
//                      <figure>
//                          <img src="${ropa.img}" alt="${ropa.Nombre}" class="product-image">
//                      </figure>
//                      <div class="product-details">
//                          <h2>${ropa.Nombre}</h2>
//                          <ul>
//                              <li>Talla: ${ropa.Talla}</li>
//                              <li>Precio: $${ropa.Precio}</li>
//                              <li>Color: ${ropa.Color}</li>
//                              <li>Tipo de bordado: ${ropa['Tipo de bordado']}</li>
//                          </ul>
//                      </div>
//                  </div>
//         `;

//         modalBody.appendChild(divElement);
//     });
// });



// let verCarrito = document.getElementById('botonCarrito');
// var carrito = JSON.parse(localStorage.getItem('carrito'));
// const modalContainer = document.getElementById('modal-conteiner');
// verCarrito.addEventListener('click', () => {
//     const modalHeader = document.createElement('div');
//     modalHeader.className = 'modal-header'
//     modalHeader.innerHTML = `
//     <h1 id="modal-header-title">Carrito de compras</h1>
//     `;
//     modalContainer.append(modalHeader);

//     const modalButton = document.createElement('button');
//     modalButton.innerText = "x";
//     modalButton.className = 'modal-header-button';
//     modalHeader.append(modalButton);

//     carrito.forEach(product => {
//         let carritoContent = document.createElement('div');
//         carritoContent.className = 'modal-content';
//         carritoContent.innerHTML = `
//             <div class="product-card">
//                 <figure>
//                     <img src="${product.img}" alt="${product.Nombre}" class="product-image">
//                 </figure>
//                 <div class="product-details">
//                     <h2>${product.Nombre}</h2>
//                     <ul>
//                         <li>Talla: ${product.Talla}</li>
//                         <li>Precio: $${product.Precio}</li>
//                         <li>Color: ${product.Color}</li>
//                         <li>Tipo de bordado: ${product['Tipo de bordado']}</li>
//                     </ul>
//                 </div>
//             </div>
//         `;
//         modalContainer.append(carritoContent);

//         const total = carrito.reduce((acc, el) => acc + el.Precio, 0);
//         const totalCompra = document.createElement('div');
//         totalCompra.className = 'total-content';
//         totalCompra.innerText = `Total a pagar: $ ${total}`;

//         modalContainer.append(totalCompra);
//     });
// });



