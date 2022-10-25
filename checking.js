function guardarAsiento() {
    let asientoSelec = document.querySelector('input[name="tourist"]:checked.value');
    console.log(asientoSelec)
}
// funcion comprobar checking disponible si es mas 48 bloqueado
(() => {
    // recoger la informacion
    let datosSesion = JSON.parse(localStorage.sesion);
    // sacar por consola
    console.log(datosSesion.usuario);
    console.log(datosSesion.usuario.nom);
    console.log(datosSesion.usuario.ape);
    console.log(datosSesion.usuario.dni);
    console.log(datosSesion.usuario.email);
    console.log(datosSesion.usuario.tel);
    // introducir los datos en los inputs correpondientes
    let nomSesion = document.getElementById("nombre");
    let apeSesion = document.getElementById('apellidos');
    let dniSesion = document.getElementById('dni');
    let emailSesion = document.getElementById('email');
    let telSesion = document.getElementById('telefono');
    console.log(nomSesion);
    nomSesion.value = datosSesion.usuario.nom;
    apeSesion.value = datosSesion.usuario.ape;
    dniSesion.value = datosSesion.usuario.dni;
    emailSesion.value = datosSesion.usuario.email;
    telSesion.value = datosSesion.usuario.tel;

    // console.log(apeSesion);
    // console.log(dniSesion);
    // console.log(emailSesion);
    // console.log(telSesion);
})();
// Validar los datos con regExp
// Nombre
// Apellidos
// DNI RegExp
// email 
// Telefono RegEXP

// Buscar en el local Storage el asiento si no esta añadirlo