// Despliegue de secciones del filtro de ropa

document.addEventListener("DOMContentLoaded", function() {
    let desplegarFiltros = document.querySelectorAll(".desplegar-filtro");

    desplegarFiltros.forEach(function(desplegarFiltro) {
        desplegarFiltro.addEventListener("click", function(event) {

            let filtroActual = event.currentTarget;
            let opciones = filtroActual.querySelectorAll('.filtro-sections-1, .filtro-sections-2, .filtro-sections-3, .filtro-sections-4, .filtro-sections-5, .filtro-sections-6, .filtro-sections-7');
            opciones.forEach(function(opcion) {
                opcion.classList.toggle("visibles");
            });
        });
    });
});

