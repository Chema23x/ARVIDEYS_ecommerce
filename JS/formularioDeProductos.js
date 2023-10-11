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


document.getElementById('product-form').addEventListener('submit', function (e) {
    const nombreProducto = document.getElementById('nombreProducto').value;
    const precioUnitario = document.getElementById('precioUnitario').value;
    const cantidadProducto = document.getElementById('cantidadProducto').value;
    const tallaProducto = document.getElementById('tallaProducto').value;
    const colorPrenda = document.getElementById('colorPrenda').value;
    const tipoProducto = document.getElementById('tipoProducto').value;
    console.log(nombreProducto,precioUnitario, cantidadProducto, tallaProducto, colorPrenda, tipoProducto);
    const product = new Product (nombreProducto, precioUnitario, cantidadProducto, tallaProducto, colorPrenda, tipoProducto);
    const ui = new UI();

    ui.addProduct(product);
    ui.showAddAlert();
    ui.resetForm();
    console.log(new Product(nombreProducto, precioUnitario, cantidadProducto, tallaProducto, colorPrenda, tipoProducto));
    // Funcion listaProductoJSON sera enviada a un formato JSON para una reutilizacion posterior
    const listaProductoJSON = JSON.stringify(product);
    console.log(listaProductoJSON);
    e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
    ui.showDeleteAlert();
})