(() => {
    // recoge la informacion del localStorage
    let datosReserva = JSON.parse(localStorage.reservaActual);
    let datosVuelos = JSON.parse(localStorage.vueloSeleccionado);
    console.log(datosVuelos);
    // introduce los datos de usuario  en los inputs correpondientes
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