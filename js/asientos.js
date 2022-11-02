(() => {
    // recoge la informacion del localStorage
    let datosReserva = JSON.parse(localStorage.compras);
    // introduce los datos del PASAJERO  en los inputs correpondientes
    let nomPasajero = document.getElementById("nombre");
    let apePasajero = document.getElementById('apellidos');
    let dniPasajero = document.getElementById('dni');
    let emailPasajero = document.getElementById('email');
    let telPasajero = document.getElementById('telefono');
    nomPasajero.value = datosPasajero.usuario.nom;
    apePasajero.value = datosPasajero.usuario.ape;
    dniPasajero.value = datosPasajero.usuario.dni;
    emailPasajero.value = datosPasajero.usuario.email;
    telPasajero.value = datosPasajero.usuario.tel;
    let asientosDisponibles = datosReserva.vuelo.asientosLibres;
    let asientosOcupadoss = datosReserva.vuelo.asientosDisponibles;
})();