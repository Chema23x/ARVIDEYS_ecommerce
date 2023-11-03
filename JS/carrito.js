document.addEventListener("DOMContentLoaded", function () {
  const carrito = JSON.parse(localStorage.getItem('carrito'));
  const bodyCarrito = document.getElementById('carrito-body');
  const totalCarrito = document.getElementById('carrito-total');
  const buttonComprar = document.getElementById('button-comprar');

  function showDeleteAlert() {
    const alertElement = document.getElementById('alert');
    alertElement.textContent = 'Producto eliminado del carrito';
    alertElement.classList.add('alert-danger');

    setTimeout(() => {
      alertElement.textContent = '';
      alertElement.classList.remove('alert-danger');
    }, 1000);
  }

  function removeProduct(divElement) {
    const productIndex = Array.from(bodyCarrito.children).indexOf(divElement);

    if (productIndex > -1) {
      // Elimina el elemento del DOM
      divElement.remove();

      // Elimina el producto del carrito
      const deletedProduct = carrito.productos.splice(productIndex, 1)[0]; // Remueve el producto y obtiene la referencia

      // Resta el precio del producto eliminado del total del carrito
      carrito.total -= deletedProduct.precio;
      localStorage.setItem('carrito', JSON.stringify(carrito));

      totalCarrito.textContent = carrito.total;

      // Muestra una alerta
      showDeleteAlert();
    }
  }

  function restElement(producto) {
    if (producto.cantidad > 1) {
      producto.cantidad--; // Restar 1 a la cantidad del producto
    } else {
      // Si la cantidad llega a 1, eliminar el producto del carrito
      removeProduct(producto); // Pasar el producto en lugar de divElement
    }
    
    // Restar el precio del producto eliminado del total del carrito
    carrito.total -= producto.precio;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    totalCarrito.textContent = carrito.total;
  }
  
  

  if (carrito != null) {
    carrito.productos.forEach(producto => {
      const divElement = document.createElement('div');
      divElement.innerHTML = `
        <div class="product-card">
                       <figure>
                           <img src="${producto.img}" alt="${producto.nombre}" class="product-image">
                       </figure>
                       <div class="product-details">
                           <h2>${producto.nombre}</h2>
                           <ul>
                               <li>Talla: ${producto.talla}</li>
                               <li>Color: ${producto.color}</li>
                               <li>Precio: $${producto.precio}</li>
                           </ul>
                           <p><i name="resta-producto" class="bi bi-dash-circle"></i>Cantidad: ${producto.cantidad}<i id="suma-producto" class="bi bi-plus-circle"></i></p>
                       </div>
                       <button class="btn btn-danger" name="delete">
                        Eliminar
                    </button>
                   </div>
         `;
      bodyCarrito.appendChild(divElement);

      const deleteButton = divElement.querySelector('[name="delete"]');
      deleteButton.addEventListener('click', () => {
        removeProduct(divElement);
      });

      const botonRest = divElement.querySelector('[name="resta-producto"]');
      botonRest.addEventListener('click', () => {
        restElement(producto);
      });



    });

    totalCarrito.textContent = carrito.total;

    const boton = document.createElement('div');
    boton.innerHTML = `
        <button class="btn btn-success">
        Comprar
        </button>
      `;
    buttonComprar.appendChild(boton);


  }
});
