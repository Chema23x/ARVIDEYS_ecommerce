class Product {
    constructor(categoriaProducto, precioUnitario, cantidadProducto, tallaProducto, colorPrenda, tipoProducto,imagenProducto) {
        this.categoriaProducto = categoriaProducto;
        this.precioUnitario = precioUnitario;
        this.cantidadProducto = cantidadProducto;
        this.tallaProducto = tallaProducto;
        this.colorPrenda = colorPrenda;
        this.tipoProducto = tipoProducto;
        this.imagenProducto = imagenProducto;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong> Tipo De Producto:</strong> ${product.categoriaProducto}
                    <strong> Precio:</strong> ${product.precioUnitario}
                    <strong> Cantidad:</strong> ${product.cantidadProducto}<br>
                    <strong> Talla:</strong> ${product.tallaProducto}
                    <strong> Color:</strong> ${product.colorPrenda}
                    <strong> Tipo de Bordado:</strong> ${product.tipoProducto}
                    <strong> Imagen de Producto: </strong> ${product.imagenProducto}<br>
                    <button class="btn btn-danger" name="delete">
                        Eliminar
                    </button>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.parentElement.remove();
            showDeleteAlert();
        }
    }

    showAddAlert() {
        const alertElement = document.getElementById('alert');
        alertElement.textContent = 'Producto agregado exitosamente';
        alertElement.classList.add('alert-success');

        setTimeout(() => {
            alertElement.textContent = '';
            alertElement.classList.remove('alert-success');
        }, 1000);
    }

}

function showDeleteAlert() {
    const alertElement = document.getElementById('alert');
    alertElement.textContent = 'Producto eliminado exitosamente';
    alertElement.classList.add('alert-danger');

    setTimeout(() => {
        alertElement.textContent = '';
        alertElement.classList.remove('alert-danger');
    }, 1000);
}

document.getElementById('product-form').addEventListener('submit', function (e) {
    const categoriaProducto = document.getElementById('categoriaProducto').value;
    const precioUnitario = parseFloat(document.getElementById('precioUnitario').value);
    const cantidadProducto = parseFloat(document.getElementById('cantidadProducto').value);
    const tallaProducto = document.getElementById('tallaProducto').value;
    const colorPrenda = document.getElementById('colorPrenda').value;
    const tipoProducto = document.getElementById('tipoProducto').value;
    const imagenProducto = document.getElementById('imagenProducto').value;

    //Alerta

    function mostrarAlerta(mensaje, contenedorID) {
        const contenedor = document.getElementById(contenedorID);
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-danger alertText';
        alertDiv.textContent = mensaje;

        contenedor.appendChild(alertDiv);

        setTimeout(() => {
            contenedor.removeChild(alertDiv); // Oculta la alerta después de 1.5 segundos
        }, 1500);

        validacion = false;
    }

    /**Validaciones */
    let validacion = true;
    const validacionURL = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;


    //Categoria
    if (categoriaProducto == 'Categoria') {
        mostrarAlerta('Por favor, seleccione una categoria', 'validacionCategoria');
        e.preventDefault();
    }

    //Precio 
    if (isNaN(precioUnitario) || (precioUnitario) <= 0 || precioUnitario == '') {
        mostrarAlerta('Por favor, ingrese un precio de la prenda', 'validacionPrecio');
        e.preventDefault();
    }
    //Cantidad
    if (isNaN(cantidadProducto) || (cantidadProducto) <= 0 || cantidadProducto == '') {
        mostrarAlerta('Por favor, ingresa una cantidad valida', 'validacionCantidad');
        e.preventDefault();
    }
    //Talla
    if (tallaProducto == 'Talla') {
        mostrarAlerta('Por favor, seleccione una talla', 'validacionTalla');
        e.preventDefault();
    }

    //Color
    if (colorPrenda == 'Color De Prendas') {
        mostrarAlerta('Por favor, seleccione un color', 'validacionColor');
        e.preventDefault();
    }
    //Tipo de Bordado
    if (tipoProducto == 'Tipo De Bordado') {
        mostrarAlerta('Por favor, seleccione un tipo de bordado', 'validacionBordado');
        e.preventDefault();
    }

    //Imagen

    if (!validacionURL.test(imagenProducto)){
        mostrarAlerta('Por favor, igrese un URL valido', 'validacionImagen');
        e.preventDefault();
    }

    if (validacion) {
        console.log(categoriaProducto, precioUnitario, cantidadProducto, tallaProducto, colorPrenda, tipoProducto,imagenProducto);
        const product = new Product(categoriaProducto, precioUnitario, cantidadProducto, tallaProducto, colorPrenda, tipoProducto,imagenProducto);
        const ui = new UI();

        ui.addProduct(product);
        ui.showAddAlert();
        ui.resetForm();
        console.log(new Product(categoriaProducto, precioUnitario, cantidadProducto, tallaProducto, colorPrenda, tipoProducto,imagenProducto));


        // Funcion listaProductoJSON sera enviada a un formato JSON para una reutilizacion posterior
        const listaProductoJSON = JSON.stringify(product);
        console.log(listaProductoJSON);
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;'
            },
            body: listaProductoJSON
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    //FIN DEL PROCESO POST
    e.preventDefault();


});

document.getElementById('product-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
    //ui.showDeleteAlert();
})



