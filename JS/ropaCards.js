// Define el objeto carrito en el ámbito global
let carrito = JSON.parse(localStorage.getItem('carrito')) ||{
    productos: [],
    total: 0
};

// Se crea una variable app, la cual contendrá posteriormente la informacion del archivo ropa.jsonp(Este archivo contiene los datos de los 10 objetos y se define como jsonp o Json con padding, ya que permite llamar los datos contenidos mediante una funcion "callBack")
var app ={}
var callBack = function(datos){
    console.log(datos);
    app.ropa=datos;
    // Se genera la variable html, con el fin de mostrar posteriormente la información generada mediante un asignador de adición
    var html = "";
        app.ropa.forEach(ropa => {
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
        });

        // Agrega las tarjetas al contenedor
        document.getElementById("articles-container").innerHTML = html;
    
        let botones = document.querySelectorAll(".cssbuttons-io");
        botones.forEach((boton, index) => {
            boton.addEventListener('click', () => {
              const producto = {
                img: app.ropa[index].img,
                nombre: app.ropa[index].Nombre,
                talla: app.ropa[index].Talla,
                precio: app.ropa[index].Precio,
                color: app.ropa[index].Color,
              };
              
              carrito.productos.push(producto);
              carrito.total += producto.precio;
              
              localStorage.setItem('carrito', JSON.stringify(carrito));
              
              console.log(carrito);
            });
          });
          


}