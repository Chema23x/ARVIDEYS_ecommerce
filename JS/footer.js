document.addEventListener("DOMContentLoaded", function () {
    var html = test(footer => {
        return `<footer class="text-left mt-5">
        <div class="container-fluid text-white"> 
        <div class="row">

            <div class="col-md-4 mt-5"> 
                <img class="LogoEmpresa" src="../assets/ARVIDEYS.png" alt="LogoEmpresa">
            </div>

            <div class="col-md-2 mt-3"> 
              <h6 class="text-uppercase mb-3 titleFooter">Contactanos</h6> 
              <p>
                <i class="bi bi-facebook"></i> 
                <a class="link-footer" href="https://www.facebook.com/vivy.abarca" target="_blank">Facebook</a> 
              </p>
              <p>
                <i class="bi bi-whatsapp"></i> 
                <a class="link-footer" href="https://wa.me/9712618213" target="_blank">WhatsApp</a> 
            </p>
            <p>
                <i class="bi bi-instagram"></i> 
                <a class="link-footer" href="https://www.instagram.com/" target="_blank">Instagram</a> 
            </p>
            </div>

            <div class="col-md-3 mt-5"> 
                <p>
                    <i class="bi bi-telephone"></i> 
                   555555555 
                </p>
                <p>
                    <i class="bi bi-geo-alt"></i> 
                    <a class="link-footer" href="" >Ubicacion de tiendas</a> 
                </p>
              </div>
            
            <div class="col-md-3 mt-3"> 
                <h6 class="text-uppercase mb-3 titleFooter">Acerca de nosotros</h6> 
            <p>
                <a class="link-footer" href="../HTML/aboutArvideys.html">¡Conocenos!</a> 
            </p>
            <p>
                <a class="link-footer" href="../HTML/terminos.html">Terminos y condicones de envios y devoluciones</a> 
            </p>
          </div>
        </div>
    </div>
                    
      </footer>`;
    });
    document.getElementById("footer").innerHTML = html;

});

// Aquí puedes hacer cualquier manipulación necesaria del objeto `footer`
function test(footerCallback) {
    var footer = {};
    return footerCallback(footer);
}