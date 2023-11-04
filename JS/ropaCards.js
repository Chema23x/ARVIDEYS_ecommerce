// Define el objeto carrito en el ámbito global
let carrito = JSON.parse(localStorage.getItem('carrito')) || {
    productos: [],
    total: 0
};

var app = {};
var callBack = function (datos) {
    console.log(datos);
    app.ropa = datos;

    var filtrosActivos = [];

    // Manejar eventos de clic en los elementos de filtro
    var filterItems = document.querySelectorAll('.filter-item');
    filterItems.forEach(item => {
        item.addEventListener('click', function () {
            var categoria = item.getAttribute('category');
            if (filtrosActivos.includes(categoria)) {
                filtrosActivos = filtrosActivos.filter(filtro => filtro !== categoria);
            } else {
                filtrosActivos.push(categoria);
            }
            mostrarTarjetas(filtrosActivos);
        });
    });

    function mostrarTarjetas(filtros) {
        var html = "";
        app.ropa.forEach(ropa => {
            ropa.CantidadEnCarrito = 0;
            var cumpleFiltros = true;
            filtros.forEach(filtro => {
                if (filtro !== "all" && !ropa.Talla.includes(filtro) && !ropa.Color.includes(filtro) && !ropa['Tipo de bordado'].includes(filtro)) {
                    cumpleFiltros = false;
                }
            });

            if (cumpleFiltros) {
                html += `
                    <div class="product-card">
                        <figure>
                            <img src="${ropa.img}" alt="${ropa.Nombre}" class="product-image">
                        </figure>
                        <div class="product-details">
                            <h2>${ropa.Nombre}</h2>
                            <ul>
                                <li>Talla: ${ropa.Talla}</li>
                                <li>Precio: $${ropa.Precio}</li>
                                <li>Color: ${ropa.Color}</li>
                                <li>Tipo de bordado: ${ropa['Tipo de bordado']}</li>
                            </ul>
                            <div class="boton">
                                <button id="buttonCart" class="cssbuttons-io">
                                    <span>Añadir al carrito</span>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }
        });

        document.getElementById("articles-container").innerHTML = html;

        // Agrega el evento de clic a los botones de añadir al carrito
        let botones = document.querySelectorAll(".cssbuttons-io");
        botones.forEach((boton, index) => {
            boton.addEventListener('click', () => {
                const productoId = app.ropa[index].Id;
                const repeatProduct = carrito.productos.find(producto => producto.id === productoId);

                if (repeatProduct) {
                    repeatProduct.cantidad += 1;
                    carrito.total += app.ropa[index].Precio;
                } else {
                    const producto = {
                        id: app.ropa[index].Id,
                        img: app.ropa[index].img,
                        nombre: app.ropa[index].Nombre,
                        talla: app.ropa[index].Talla,
                        precio: app.ropa[index].Precio,
                        color: app.ropa[index].Color,
                        cantidad: 1,
                    };
                    carrito.productos.push(producto);
                    app.ropa[index].CantidadEnCarrito += 1;
                    carrito.total += app.ropa[index].Precio;
                }

                // Guarda el carrito en el almacenamiento local
                localStorage.setItem('carrito', JSON.stringify(carrito));

                // Muestra el carrito en la consola
                console.log(carrito);
            });
        });
    }

    mostrarTarjetas(filtrosActivos); // Muestra todas las tarjetas al principio
};