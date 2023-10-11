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
                    <img src="${ropa.img}" alt="${ropa.Nombre}" class="product-image">
                    <div class="product-details">
                        <h2>${ropa.Nombre}</h2>
                        <p>${ropa.Descripción}</p>
                        <ul>
                            <li>Talla: ${ropa.Talla}</li>
                            <li>Precio: $${ropa.Precio}</li>
                            <li>Color: ${ropa.Color}</li>
                            <li>Tipo de bordado: ${ropa['Tipo de bordado']}</li>
                            <li>Cantidad: ${ropa.Cantidad}</li>
                        </ul>
                    </div>
                </div>
            `;
        });

        // Agrega las tarjetas al contenedor
    document.getElementById("results-container").innerHTML = html;    
}

