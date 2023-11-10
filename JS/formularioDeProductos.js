class Product {
    constructor(categoriaProducto, price, quantity, size, product_color, embroidery_type,product_image) {
        this.categoriaProducto = categoriaProducto;
        this.price = price;
        this.quantity = quantity;
        this.size = size;
        this.product_color = product_color;
        this.embroidery_type = embroidery_type;
        this.product_image = product_image;
    }
}

delete Product.categoriaProducto;

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong> Tipo De Producto:</strong> ${product.categoriaProducto}
                    <strong> Precio:</strong> ${product.price}
                    <strong> Cantidad:</strong> ${product.quantity}<br>
                    <strong> Talla:</strong> ${product.size}
                    <strong> Color:</strong> ${product.product_color}
                    <strong> Tipo de Bordado:</strong> ${product.embroidery_type}
                    <strong> Imagen de Producto: </strong> ${product.product_image}<br>
                    <button class="btn btn-danger" name="delete" id="deleteButton">
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
    const price = parseFloat(document.getElementById('precioUnitario').value);
    const quantity = parseFloat(document.getElementById('cantidadProducto').value);
    const size = document.getElementById('tallaProducto').value;
    const product_color = document.getElementById('colorPrenda').value;
    const embroidery_type = document.getElementById('tipoProducto').value;
    const product_image = document.getElementById('imagenProducto').value;

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
    if (isNaN(price) || (price) <= 0 || price == '') {
        mostrarAlerta('Por favor, ingrese un precio de la prenda', 'validacionPrecio');
        e.preventDefault();
    }
    //Cantidad
    if (isNaN(quantity) || (quantity) <= 0 || quantity == '') {
        mostrarAlerta('Por favor, ingresa una cantidad valida', 'validacionCantidad');
        e.preventDefault();
    }
    //Talla
    if (size == 'Talla') {
        mostrarAlerta('Por favor, seleccione una talla', 'validacionTalla');
        e.preventDefault();
    }

    //Color
    if (product_color == 'Color De Prendas') {
        mostrarAlerta('Por favor, seleccione un color', 'validacionColor');
        e.preventDefault();
    }
    //Tipo de Bordado
    if (embroidery_type == 'Tipo De Bordado') {
        mostrarAlerta('Por favor, seleccione un tipo de bordado', 'validacionBordado');
        e.preventDefault();
    }

    //Imagen

    if (!validacionURL.test(product_image)){
        mostrarAlerta('Por favor, igrese un URL valido', 'validacionImagen');
        e.preventDefault();
    }

    if (validacion) {
        
        console.log(categoriaProducto, price, quantity, size, product_color, embroidery_type,product_image);
        const product = new Product(categoriaProducto, price, quantity, size, product_color, embroidery_type,product_image);
        const ui = new UI();

        ui.addProduct(product);
        ui.showAddAlert();
        ui.resetForm();
        console.log(new Product(categoriaProducto, price, quantity, size, product_color, embroidery_type,product_image));


        // Funcion listaProductoJSON sera enviada a un formato JSON para una reutilizacion posterior
        const listaProductoJSON = JSON.stringify(product);

        fetch('http://localhost:8080/api/products?categoryId=3', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // Agrega otros encabezados si es necesario
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



