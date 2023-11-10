class Product {
    constructor(category_name, price, quantity, size, productColor, embroidery_type,product_image) {
        this.category_name = category_name;
        this.price = price;
        this.quantity = quantity;
        this.size = size;
        this.productColor = productColor;
        this.embroidery_type = embroidery_type;
        this.product_image = product_image;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong> Precio:</strong> ${product.price}
                    <strong> Cantidad:</strong> ${product.quantity}<br>
                    <strong> Talla:</strong> ${product.size}
                    <strong> Color:</strong> ${product.productColor}
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
    const category_name = document.getElementById('categoriaProducto').value;
    const price = parseFloat(document.getElementById('precioUnitario').value);
    const quantity = parseFloat(document.getElementById('cantidadProducto').value);
    const size = document.getElementById('tallaProducto').value;
    const productColor = document.getElementById('colorPrenda').value;
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
    if (category_name == 'Categoria') {
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
    if (productColor == 'Color De Prendas') {
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
        console.log(category_name, price, quantity, size, productColor, embroidery_type,product_image);
        const product = new Product(price, quantity, size, productColor, embroidery_type,product_image);
        const Category = new Product(category_name);
        const ui = new UI();

        ui.addProduct(product);
        ui.showAddAlert();
        ui.resetForm();
        console.log(new Product(category_name, price, quantity, size, productColor, embroidery_type,product_image));


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
        const listaCategoryJSON = JSON.stringify(Category);
        console.log(listaCategoryJSON);
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;'
            },
            body: listaCategoryJSON
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