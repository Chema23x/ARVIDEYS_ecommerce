// Define el objeto carrito en el ámbito global
let compras = JSON.parse(localStorage.getItem('compras')) || {
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

  function addElement(producto) {
    producto.cantidad++;
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

    // Actualiza los datos del modal
    const productosModal = document.getElementById('cantidadProductos');
    productosModal.textContent = carrito.productos.length;

    const totalCarritoModal = document.getElementById('totalCarritoModal');
    totalCarritoModal.textContent = carrito.total;

    const pagoModal = bootstrap.Modal.getInstance(document.getElementById('pagoModal'));
    pagoModal.hide();
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
            <p>
              <i name="resta-producto" class="bi bi-dash-circle"></i>Cantidad: ${producto.cantidad}<i name="suma-producto" class="bi bi-plus-circle"></i>
            </p>
          </div>
          <button class="btn btn-danger" name="delete">Eliminar</button>
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
    });

    totalCarrito.textContent = carrito.total;

    buttonComprar.addEventListener('click', () => {
      // Actualiza los datos del modal
      const productosModal = document.getElementById('cantidadProductos');
      productosModal.textContent = carrito.productos.length;

      const totalCarritoModal = document.getElementById('totalCarritoModal');
      totalCarritoModal.textContent = carrito.total;

      const costoEnvio = document.getElementById('costoEnvio');
      costoEnvio.textContent = 150;

      const totalCompra = document.getElementById('totalCompra');
      totalCompra.textContent = carrito.total+150;
    });



    //Formulario y sus validaciones
    document.getElementById('pago-form').addEventListener('submit', function (e) {

      e.preventDefault();
      let validacion = true;

      //Alerta

      function showAlerta(mensaje, contenedorID) {
        const contenedor = document.getElementById(contenedorID);
        const alertp = document.createElement('p');
        alertp.textContent = mensaje;

        contenedor.appendChild(alertp);

        setTimeout(() => {
          contenedor.removeChild(alertp); // Oculta la alerta después de 1.5 segundos
        }, 1500);

        validacion = false;
      }

      // Validaciones 
      const nombreTarjeta = document.getElementById('nombreTarjeta');
      const numeroTarjeta = document.getElementById('numeroTarjeta');
      const fechaExpiracion = document.getElementById('fechaExpiracion');
      const cvv = document.getElementById('cvv');

      if (nombreTarjeta.value.trim() === '') {
        showAlerta('Nombre no valido', 'validacionNombre');
        e.preventDefault();
      }

      const tarjetaNumeroValidacion = /^\d{16}$/; // 16 dígitos
      if (!tarjetaNumeroValidacion.test(numeroTarjeta.value.replace(/ /g, ''))) {
        showAlerta('Número de tarjeta no valido', 'validacionNumero');
        e.preventDefault();
      }

      const fechaValidacion = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY
      if (!fechaValidacion.test(fechaExpiracion.value)) {
        showAlerta('Fecha de expiracion no valida', 'validacionFecha');
        e.preventDefault();
      }

      const cvvValidacion = /^\d{3,4}$/; // 3 o 4 dígitos
      if (!cvvValidacion.test(cvv.value)) {
        showAlerta('Cvv no valido', 'validacionCvv');
        e.preventDefault();
      }

      if (validacion) {
        comprar();
      }

    });




  }
});

// Agregar evento al botón "Pagar" para mostrar el modal de pago
document.getElementById('confirmarCompra').addEventListener('click', () => {
  // Muestra el modal de pago
  const pagoModal = new bootstrap.Modal(document.getElementById('pagoModal'));
  pagoModal.show();
});


