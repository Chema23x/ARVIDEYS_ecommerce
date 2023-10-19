class Product {
    constructor(nombreProducto, precioUnitario, cantidadProducto, tallaProducto, colorPrenda, tipoProducto) {
        this.nombreProducto = nombreProducto;
        this.precioUnitario = precioUnitario;
        this.cantidadProducto = cantidadProducto;
        this.tallaProducto = tallaProducto;
        this.colorPrenda = colorPrenda;
        this.tipoProducto = tipoProducto;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong> Tipo De Producto:</strong> ${product.nombreProducto}
                    <strong> Precio:</strong> ${product.precioUnitario}
                    <strong> Cantidad:</strong> ${product.cantidadProducto}<br>
                    <strong> Talla:</strong> ${product.tallaProducto}
                    <strong> Color:</strong> ${product.colorPrenda}
                    <strong> Tipo de Bordado:</strong> ${product.tipoProducto}<br>
                    <a href="#" class="btn btn-danger" name="delete">
                        Eliminar
                    </a>
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

    showDeleteAlert() {
        const alertElement = document.getElementById('alert');
        alertElement.textContent = 'Producto eliminado exitosamente';
        alertElement.classList.add('alert-danger');

        setTimeout(() => {
            alertElement.textContent = '';
            alertElement.classList.remove('alert-danger');
        }, 1000);
    }
}

let listaProductos = [];

document.getElementById('product-form').addEventListener('submit', function (e) {
    const nombreProducto = document.getElementById('nombreProducto').value;
    const precioUnitario = parseFloat(document.getElementById('precioUnitario').value);
    const cantidadProducto = parseFloat(document.getElementById('cantidadProducto').value);
    const tallaProducto = document.getElementById('tallaProducto').value;
    const colorPrenda = document.getElementById('colorPrenda').value;
    const tipoProducto = document.getElementById('tipoProducto').value;

    function mostrarAlerta(mensaje, contenedorID) {
        const contenedor = document.getElementById(contenedorID);
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-danger alertText';
        alertDiv.textContent = mensaje;

        contenedor.appendChild(alertDiv);

        setTimeout(() => {
            contenedor.removeChild(alertDiv);
        }, 700);

        validacion = false;
    }

    let validacion = true;

    if (nombreProducto == '' || nombreProducto.length <= 4) {
        mostrarAlerta('Por favor, ingrese un nombre de la prenda', 'validacionNombre');
        e.preventDefault();
    }

    if (isNaN(precioUnitario) || (precioUnitario) <= 0 || precioUnitario == '') {
        mostrarAlerta('Por favor, ingrese un precio de la prenda', 'validacionPrecio');
        e.preventDefault();
    }

    if (isNaN(cantidadProducto) || (cantidadProducto) <= 0 || cantidadProducto == '') {
        mostrarAlerta('Por favor, ingresa una cantidad valida', 'validacionCantidad');
        e.preventDefault();
    }

    if (tallaProducto == 'Talla') {
        mostrarAlerta('Por favor, seleccione una talla', 'validacionTalla');
        e.preventDefault();
    }

    if (colorPrenda == 'Color De Prendas') {
        mostrarAlerta('Por favor, seleccione un color', 'validacionColor');
        e.preventDefault();
    }

    if (tipoProducto == 'Tipo De Bordado') {
        mostrarAlerta('Por favor, seleccione un tipo de bordado', 'validacionBordado');
        e.preventDefault();
    }

    if (validacion) {
        console.log(nombreProducto, precioUnitario, cantidadProducto, tallaProducto, colorPrenda, tipoProducto);
        const product = new Product(nombreProducto, precioUnitario, cantidadProducto, tallaProducto, colorPrenda, tipoProducto);
        const ui = new UI();

        ui.addProduct(product);
        ui.showAddAlert();
        ui.resetForm();
        console.log(new Product(nombreProducto, precioUnitario, cantidadProducto, tallaProducto, colorPrenda, tipoProducto));

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

       
        listaProductos.push(product);
    }

    e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
    ui.showDeleteAlert();

    const nombreProducto = e.target.parentElement.querySelector('strong:first-child').textContent.trim();

   
    listaProductos = listaProductos.filter(producto => producto.nombreProducto !== nombreProducto);
});
