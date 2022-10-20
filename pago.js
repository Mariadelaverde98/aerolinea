function confirmarPago() {
    var nombre = document.getElementsByTagName('input')[0];
    var numTarjeta = document.getElementsByTagName('input')[1];
    var fechaEx = document.getElementsByTagName('input')[2];
    var cvv = document.getElementsByTagName('input')[3];
    var reserva = JSON.parse(localStorage.getItem('reservaActual'));
    reserva.setMetodoPago({
        'nombre': nombre,
        'numeroTarjeta': numTarjeta,
        'fechaExpedicion': fechaEx,
        'cvv': cvv
    });
    localStorage.setItem('reservaActual', reserva);

    //Y que lleve a una pagina donde se muestran los datos de la compra
}