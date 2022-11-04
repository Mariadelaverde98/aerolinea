(() => {
    // recoge la informacion del localStorage
    // let datosSesion = JSON.parse(localStorage.sesion);
    let datosCheckin = JSON.parse(localStorage.checkinUser);
    let pos1 = datosCheckin[0];
    let pos2 = datosCheckin[2];
    imprimirDatosPasajero(pos1,pos2);
    // // if ()
    // // introduce los datos de usuario  en los inputs correpondientes
    // let nomSesion = document.getElementById("nombre");
    // let apeSesion = document.getElementById('apellidos');
    // let dniSesion = document.getElementById('dni');
    // let emailSesion = document.getElementById('email');
    // let telSesion = document.getElementById('telefono');
    // nomSesion.value = datosSesion.usuario.nom;
    // apeSesion.value = datosSesion.usuario.ape;
    // dniSesion.value = datosSesion.usuario.dni;
    // emailSesion.value = datosSesion.usuario.email;
    // telSesion.value = datosSesion.usuario.tel;
})();
function imprimirDatosPasajero(pos1,pos2) {
    let datosCompras = JSON.parse(localStorage.compras);
    let nomPasajero = document.getElementById("nombre");
    let apePasajero = document.getElementById('apellidos');
    let dniPasajero = document.getElementById('dni');
    nomPasajero.value = datosCompras[pos1].numPasajes[pos2].nombre;
    apePasajero.value = datosCompras[pos1].numPasajes[pos2].Apellidos;
    dniPasajero.value = datosCompras[pos1].numPasajes[pos2].dni;
}
function checkNomApe(name) {
    let regExpNom = /(^[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})(\s[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})?$/;
    let check = document.getElementById(name).value;
    if (!regExpNom.test(check)) {
        alert('Por favor introduce tus datos correctamente');
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
        alert('Por favor introduce un DNI correcto');
        return false;
    }
}
function checkEmail() { // Valida Email
    let regExpEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let email = document.getElementById("email").value;
    if (!regExpEmail.test(email)) {
            document.getElementById("email").style.outline = "#ff000087 solid";
            alert('Por favor introduce un email correcto');
            return false;
        } else {
            return true;
        }
}
function checkTel() { // Valida Telefono
    let regExpTel = /^(?:(?:\+?[0-9]{2,4})?[ ]?[6789][0-9 ]{8,13})$/;
    let tel = document.getElementById("telefono").value;
    if (!regExpTel.test(tel)) {
            document.getElementById("telefono").style.outline = "#ff000087 solid";
            alert('Por favor, introduce un teléfono correcto');
            return false;
        } else {
            return true;
        }
}
function confirmacion() {
    if (checkNomApe('nombre') && 
    checkNomApe('apellidos') && 
    checkDni() &&
    checkEmail() &&
    checkTel()) {
        alert("ok");
    } else {
        alert("not ok");
    }
}
