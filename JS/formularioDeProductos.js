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
                </div>
            </div>
        `;
        productList.appendChild(element);
    }
    
    //resetForm() {
      ///  document.getElementById('product-form').reset();
   /// }
    
  //  deleteProduct(element) { 
    //    if (element.name === 'delete') {
      //      element.parentElement.parentElement.parentElement.remove();
        //}
    //}
    showMessage(message, cssClass) {}
}


document.getElementById('product-form').addEventListener('submit', function (e) {
    const nombreProducto = document.getElementById('nombreProducto').value;
    const precioUnitario = document.getElementById('precioUnitario').value;
    const cantidadProducto = document.getElementById('cantidadProducto').value;
    const tallaProducto = document.getElementById('tallaProducto').value;
    const colorPrenda = document.getElementById('colorPrenda').value;
    const tipoProducto = document.getElementById('tipoProducto').value;
    const product = new Product (nombreProducto, precioUnitario, cantidadProducto, tallaProducto, colorPrenda, tipoProducto);
    console.log(new Product(nombreProducto, precioUnitario, cantidadProducto, tallaProducto, colorPrenda, tipoProducto));
    const ui = new UI();
    e.preventDefault();
});
