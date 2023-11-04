// Define el objeto carrito en el ámbito global
let compras = JSON.parse(localStorage.getItem('compras')) ||{
  productos: [],
  total: 0
};

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
      carrito.total -= deletedProduct.precio * deletedProduct.cantidad;
      localStorage.setItem('carrito', JSON.stringify(carrito));

      totalCarrito.textContent = carrito.total;

      // Muestra una alerta
      showDeleteAlert();
    }
  }

  function restElement(producto) {
    if (producto.cantidad > 0) {
      producto.cantidad--; // Restar 1 a la cantidad del producto
      // Si la cantidad llega a 0, eliminar el producto del carrito
      if (producto.cantidad === 0) {
        const productIndex = carrito.productos.indexOf(producto);
        if (productIndex !== -1) {
          carrito.productos.splice(productIndex, 1); // Elimina el producto del carrito
          const divElement = bodyCarrito.children[productIndex];
          if (divElement) {
            divElement.remove(); // Elimina el elemento del DOM
          }
        }
      }
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
  
    // Restar el precio del producto eliminado del total del carrito
    carrito.total -= producto.precio;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    totalCarrito.textContent = carrito.total;
  }
  
  function addElement(producto){
    producto.cantidad ++;
    carrito.total += producto.precio;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    totalCarrito.textContent = carrito.total;
  }

  
  function comprar() {
    // Copia los productos del carrito a compras
    compras.productos.push(...carrito.productos);
    compras.total = carrito.total;

    // Vacía el carrito
    carrito.productos = [];
    carrito.total = 0;

    // Actualiza el carrito en el almacenamiento local
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Limpia el carrito en el DOM
    while (bodyCarrito.firstChild) {
      bodyCarrito.removeChild(bodyCarrito.firstChild);
    }

    totalCarrito.textContent = carrito.total;

    // Actualiza las compras en el almacenamiento local
    localStorage.setItem('compras', JSON.stringify(compras));
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
                           <p><i name="resta-producto" class="bi bi-dash-circle"></i>Cantidad: ${producto.cantidad}<i name="suma-producto" class="bi bi-plus-circle"></i></p>
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

      const botonAdd = divElement.querySelector('[name="suma-producto"]');
      botonAdd.addEventListener('click', () => {
        addElement(producto);
      });
      
      const botonComprar = document.getElementById('button-comprar');
      botonComprar.addEventListener('click', comprar);

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
