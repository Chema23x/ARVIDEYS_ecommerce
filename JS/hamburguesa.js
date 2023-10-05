/**Función para la generación de subsecciones en menu hamburguesa */

document.addEventListener("DOMContentLoaded", function() {
    let desplegarSecciones = document.querySelectorAll(".desplegar-seccion");

    desplegarSecciones.forEach(function(desplegarSeccion) {
        desplegarSeccion.addEventListener("click", function(event) {
            event.stopPropagation();

            let seccionActual = event.currentTarget;
            let opciones = seccionActual.querySelectorAll('.seccion-1, .seccion-2, .seccion-3');
            opciones.forEach(function(opcion) {
                opcion.classList.toggle("visible");
            });
        });
    });
});
