// Despliegue de secciones del filtro de ropa

document.addEventListener("DOMContentLoaded", function() {
    let desplegarFiltros = document.querySelectorAll(".desplegar-filtro");

    desplegarFiltros.forEach(function(desplegarFiltro) {
        desplegarFiltro.addEventListener("click", function(event) {

            let filtroActual = event.currentTarget;
            let opciones = filtroActual.querySelectorAll('.filtro-section-1, .filtro-section-2, .filtro-section-3, .filtro-section-4, .filtro-section-5, .filtro-section-6');
            opciones.forEach(function(opcion) {
                opcion.classList.toggle("visible");
            });
        });
    });
});

