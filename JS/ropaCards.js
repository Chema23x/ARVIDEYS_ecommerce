// Se crea una variable app, la cual contendrá posteriormente la informacion del archivo ropa.jsonp(Este archivo contiene los datos de los 10 objetos y se define como jsonp o Json con padding, ya que permite llamar los datos contenidos mediante una funcion "callBack")
var app ={}
var callBack = function(datos){
    console.log(datos);
    app.ropa=datos;
    // Se genera la variable html, con el fin de mostrar posteriormente la información generada mediante un asignador de adición
    function mostrarTarjetas(categoria) {
    var html = "";
        app.ropa.forEach(ropa => {
            if (categoria === "all" || ropa.Talla === categoria || ropa.Color === categoria || ropa['Tipo de bordado'] === categoria) {
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

        // Agrega las tarjetas al contenedor
    document.getElementById("articles-container").innerHTML = html;

}
    // Manejar eventos de clic en los elementos de filtro
    var filterItems = document.querySelectorAll('.filter-item');
    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            var categoria = item.getAttribute('category');
            mostrarTarjetas(categoria);
        });
    });

    mostrarTarjetas('all'); // Muestra todas las tarjetas al principio
};