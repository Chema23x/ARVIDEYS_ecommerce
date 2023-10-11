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
                    <strong>Product Name:</strong> ${product.nombreProducto}<br>
                    <strong>Price:</strong> ${product.precioUnitario}<br>
                    <strong>Quantity:</strong> ${product.cantidadProducto}<br>
                    <strong>Size:</strong> ${product.tallaProducto}<br>
                    <strong>Color:</strong> ${product.colorPrenda}<br>
                    <strong>Type:</strong> ${product.tipoProducto}<br>
                    <a href="#" class="btn btn-danger" name='delete'>
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
        }, 3000); 
    }

    showDeleteAlert() {
        const alertElement = document.getElementById('alert');
        alertElement.textContent = 'Producto eliminado exitosamente';
        alertElement.classList.add('alert-danger');

        setTimeout(() => {
            alertElement.textContent = '';
            alertElement.classList.remove('alert-danger');
        }, 3000); 
    }
}


document.getElementById('product-form').addEventListener('submit', function (e) {
    const nombreProducto = document.getElementById('nombreProducto').value;
    const precioUnitario = document.getElementById('precioUnitario').value;
    const cantidadProducto = document.getElementById('cantidadProducto').value;
    const tallaProducto = document.getElementById('tallaProducto').value;
    const colorPrenda = document.getElementById('colorPrenda').value;
    const tipoProducto = document.getElementById('tipoProducto').value;

    const product = new Product (nombreProducto, precioUnitario, cantidadProducto, tallaProducto, colorPrenda, tipoProducto);
    const ui = new UI();
    ui.addProduct(product);
    ui.showAddAlert();
    
    console.log(new Product(nombreProducto, precioUnitario, cantidadProducto, tallaProducto, colorPrenda, tipoProducto));

    e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
    ui.showDeleteAlert();
})
             