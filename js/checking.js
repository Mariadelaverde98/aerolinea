function guardarAsiento() {
    let asientoSelec = document.querySelector('input[name="tourist"]:checked.value');
    console.log(asientoSelec)
}

(() => {
    // recoge la informacion del localStorage
    let datosSesion = JSON.parse(localStorage.sesion);
    // introduce los datos de usuario  en los inputs correpondientes
    let nomSesion = document.getElementById("nombre");
    let apeSesion = document.getElementById('apellidos');
    let dniSesion = document.getElementById('dni');
    let emailSesion = document.getElementById('email');
    let telSesion = document.getElementById('telefono');
    nomSesion.value = datosSesion.usuario.nom;
    apeSesion.value = datosSesion.usuario.ape;
    dniSesion.value = datosSesion.usuario.dni;
    emailSesion.value = datosSesion.usuario.email;
    telSesion.value = datosSesion.usuario.tel;
})();
function checkNomApe(name) {
    let regExpNom = /(^[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})(\s[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})?$/;
    let check = document.getElementById(name).value;
    if (!regExpNom.test(check)) {
        alert('El nombre no es correcto');
        document.getElementById(name).style.outline = "#ff000087 solid";
        return false;
    } else {
        return true;
    }
}
function checkDni() { // Valida Dni o NIE}
    let regExpDNI = /^[XYZ]?\d{5,8}[A-Z]$/;
    let dni = document.getElementById("dni").value;
    let numero;
    let letr;
    let letra;
    if (regExpDNI.test(dni) == true) {
        numero = dni.substr(0, dni.length - 1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        letr = dni.substr(dni.length - 1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero + 1);
        if (letra != letr.toUpperCase()) {
            document.getElementById("dni").style.outline = "#ff000087 solid";
            alert('Dni erroneo, la letra del NIF no se corresponde');
            return false;
        } else {
            return true;
        }
    } else {
        document.getElementById("dni").style.outline = "#ff000087 solid";
        alert('Dni erroneo, formato no válido');
        return false;
    }
}
function checkEmail() { // Valida Email
    let regExpEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let email = document.getElementById("email").value;
    if (!regExpEmail.test(email)) {
            document.getElementById("email").style.outline = "#ff000087 solid";
            alert('Email erroneo');
            return false;
        } else {
            return true;
        }
}
function checkTel() { // Valida Telefono
    let regExpTel = /^(?:(?:\+?[0-9]{2,4})?[ ]?[6789][0-9 ]{8,13})$/;
    let tel = document.getElementById("telefono").value;
    if (!regExpTel.test(email)) {
            document.getElementById("telefono").style.outline = "#ff000087 solid";
            alert('Teléfono erroneo');
            return false;
        } else {
            return true;
        }
}
function confirmacion() {
    
}
// Validar los datos con regExp
// Nombre
// Apellidos
// DNI RegExp
// email 
// Telefono RegEXP

// Buscar en el local Storage el asiento si no esta añadirlo
// funcion comprobar checking disponible si es mas 48 bloqueado