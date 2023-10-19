document.addEventListener("DOMContentLoaded", function() {
var html = test(navbar =>{
   return `<nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="../index.html">
                     <img id="logo" src="../ASSETS/IMG/logo.png" alt="Logo">
                     </a>
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
                </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul id="seccionesNav" class="navbar-nav ms-auto">

        <li class="nav-item desplegar-seccion">
          <a class="nav-link titleText" href="#">MUJER</a>
            <div class="seccion-1 text"><a class="subtext" href="#">Huipiles</a></div>
            <div class="seccion-2 text"><a class="subtext" href="#">Faldas</a></div>
            <div class="seccion-3 text"><a class="subtext" href="#">Vestidos</a></div>
        </li>
        
        <li class="nav-item desplegar-seccion ">
          <a class="nav-link titleText" href="#">HOMBRE</a>
            <div class="seccion-1 text"><a class="subtext" href="#">Guayaberas</a></div>
            <div class="seccion-2 text"><a class="subtext" href="#">Pantalones</a></div>
            <div class="seccion-3 text"><a class="subtext" href="#">Huaraches</a></div>
        </li>

        <li class="nav-item desplegar-seccion">
          <a class="nav-link titleText" href="#">NIÑOS</a>
            <div class="seccion-1 text"><a class="subtext" href="#">Niña</a></div>
            <div class="seccion-2 text"><a class="subtext" href="#">Niño</a></div>
        </li>
        <li class="nav-item"><a class="nav-link titleText" href="./formularioDeProductos.html">DESCUENTOS</a></li>
        <li class="nav-item"><a class="nav-link titleText" href="./contact.html">CONTACTO</a></li>
        <li class="nav-item"><a class="nav-link titleText" href="./FAQ's.html">AYUDA/FAQ</a></li>
        <li class="nav-item"><a class="nav-link titleText" href="./aboutUs.html">+INFO</a></li>
      </ul>
    </div>
        
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent"> 
         <div class="input-wrapper">
            <button class="icon"> 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="25px" width="25px">
                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"></path>
                <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M22 22L20 20"></path>
              </svg>
            </button>
            <input id="barra" placeholder="search..." class="input" name="text" type="text">
        </div>
        <ul id="hamburguesa" class="navbar-nav">
          <li class="nav-item">
            <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img class="icons" src="../ASSETS/ICON/menu-hamburguesa.png" alt="menu-hamburguesa">
            </a>
        <ul class="dropdown-menu">
          <li class="nav-item desplegar-seccion">
            <a class="nav-link titleText" href="#">MUJER</a>
            <div class="seccion-1 text"><a class="subtext" href="#">Huipiles</a></div>
            <div class="seccion-2 text"><a class="subtext" href="#">Faldas</a></div>
            <div class="seccion-3 text"><a class="subtext" href="#">Vestidos</a></div>
          </li>
          <li class="nav-item desplegar-seccion">
            <a class="nav-link titleText" href="#">HOMBRE</a>
              <div class="seccion-1 text"><a class="subtext" href="#">Guayaberas</a></div>
              <div class="seccion-2 text"><a class="subtext" href="#">Pantalones</a></div>
              <div class="seccion-3 text"><a class="subtext" href="#">Huaraches</a></div>
           </li>
           <li class="nav-item desplegar-seccion">
             <a class="nav-link titleText" href="#">NIÑOS</a>
              <div class="seccion-1 text"><a class="subtext" href="#">Niña</a></div>
              <div class="seccion-2 text"><a class="subtext" href="#">Niño</a></div>
           </li>
           <div>
           <li><hr class="dropdown-divider"></li>
           <!--Secciones desplegables sin subsecciones-->
           <li><a class="dropdown-item titleText" href="./formularioDeProductos.html">DESCUENTOS</a></li>
           <li><a class="dropdown-item titleText" href="./contact.html">CONTACTO</a></li>
           <li><a class="dropdown-item titleText" href="./FAQ's.html">AYUDA/FAQ</a></li>
           <li><a class="dropdown-item titleText" href="./aboutUs.html">+INFO</a></li>
          </div>
        </ul>
      </li>
    </ul>


      <div class="menu">
        <li class="navbar-nav">
          <a class="nav-link" href="../HTML/productos.html"><img class="perfil" src="../ASSETS/ICON/perfil.png" alt="profile"></i></a>
        </li>
              
        <li class="navbar-nav">
          <a class="nav-link" href="../HTML/devolucionesFormulario.html"><img class="cart" src="../ASSETS/ICON/carrito-de-compras.png" alt="carrito"></i></a>
        </li>
      </div>
    </div>
  </div>
  </nav>`;
  });
    document.getElementById("navbar").innerHTML = html;    

});

    // Aquí puedes hacer cualquier manipulación necesaria del objeto `navbar`
function test(navbarCallback) {
    var navbar = {}; 
    return navbarCallback(navbar);
}