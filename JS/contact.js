/*SE CREAN LAS CONSTANTES PARA MANIPULAR LA INFORMACIÓN QUE INGRESA EL USUARIO*/
const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const telefono = document.getElementById("telefono")
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ""
    let entrar = false
    /* SE VALIDA EL EMAIL QUE INGRESA EL USUARIO*/
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    /*SE VERIFICA QUE EL NOMBRE CUMPLA CON MÁS DE 6 CARACTERES*/
    if (nombre.value.length < 6) {
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    /*SE VALIDA EN NÚMERO DE TELEFONO A 10 NÚMEROS*/
    if (telefono.value.length < 10) {
        warnings += `El telefono no es valido, debe ser a 10 digitos <br>`
        entrar = true
    }
    /*SE INDICA AL UDUARIO QUE EL EMAIL INGRESADO NO ES VALIDO, EN CASO DE QUE NO CUMPLA CON 
    LAS CARACTERIZTICAS NECESARIAS COMO CONTENER UN "@"*/
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es valido <br>`
        entrar = true
    }
    /*SE VALIDA QUE EL USUARIO INGRESE UN MENSAJE*/
    if (mensaje.value.length < 1) {
        warnings += `El mensaje no es valido <br>`
        entrar = true
    }
    /*SE ENVIA EL MENSAJE AL USUARIO EN CASO DE QUE SU INFORMACIÓN NO SEA VALIDA*/
    if (entrar) {
        parrafo.innerHTML = warnings
    /*SE LE INDICA AL USUARIO QUE SU MENSAJE FUE ENVIADO EN CASO DE CUMPLIS CON 
    LA INFORMACIÓN CORRECTA*/
    } else {
        parrafo.innerHTML = "Enviado con éxito!"
    }
})
