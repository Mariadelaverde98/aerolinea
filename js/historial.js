class Compra {
    constructor(numReserva, fechaReserva, usuario, numPasajes, vuelo, asientosLibres, asientosOcupados, totalPagado) {
        this.numReserva = numReserva;
        this.fechaReserva = fechaReserva;
        this.usuario = usuario;
        this.numPasajes = numPasajes;
        this.vuelo = vuelo;
        // this.asientosLibres = asientosLibres;
        // this.asientosOcupados = asientosOcupados;
        // this.totalPagado = totalPagado;
    }
}
// import { Vuelo } from './vuelo.js';

Date.prototype.addHours = function () {
    this.setTime(this.getTime() + (47 * 60 * 60 * 1000));
    return this;
}
function subirHistorial() {
    let fecha = new Date(); // extraigo la fecha de hoy y le sumo 47 horas 
    let fechaMenos48h = fecha.addHours();
    let dd = String(fechaMenos48h.getDate()).padStart(2, '0');
    let mm = String(fechaMenos48h.getMonth() + 1).padStart(2, '0');
    let yyyy = fechaMenos48h.getFullYear();
    let horaMenos48h = fechaMenos48h.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    fechaMenos48h = yyyy + '/' + mm + '/' + dd;
    let compra1 = new Compra(
        '0001', // Numero de reserva
        '2022-10-28', // Fecha de reserva, aqui el dia de la compra
        'gofthet@gmail.com',  // Aqui el correo del usuario
        [JSON.parse('{"nombre": "Gerardo", "Apellidos": "Mir Garcia", "dni": "52656007Z"}')], // Pasajeros
        [JSON.parse('{"id":"000","origen":"Madrid","destino":"Edimburgo","fecha":"","hora":"","horallegada":"10:15","asientosLibres":"25","asientosOcupados":["1A","2A","4C","1DC","2DC"],"precio":240}')]);
    compra1.vuelo[0].fecha = fechaMenos48h;
    compra1.vuelo[0].hora =  horaMenos48h;
    console.log(compra1);
    let compra2 = new Compra(
        '0002', // Numero de reserva
        '2022-10-28', // Fecha de reserva, aqui el dia de la compra
        'gofthet@gmail.com',  // Aqui el correo del usuario
        [JSON.parse('{"nombre": "Gerardo", "Apellidos": "Mir Garcia", "dni": "52656007Z"}'), JSON.parse('{"nombre": "Gerar2", "Apellidos": "Mir Garcia", "dni": "52656008Z"}')],
        [JSON.parse('{"id":"001","origen":"Madrid","destino":"Paris","fecha":"2022/11/31","hora":"14:00","horallegada":"19:15","asientosLibres":30,"precio":120}')]);
        console.log(compra1);
        // localStorage.clear();
    var historial = [compra1, compra2];
    localStorage.setItem("compras", JSON.stringify(historial));
}

function userHistorial() {
    let historial = JSON.parse(localStorage.compras);
    if (historial == null) { alert('Todavía no has hecho compras') };
    let comprasUsuario = historial.filter(element => {
        if (element.usuario == "gofthet@gmail.com") {
            return element;
        }
    });
    return comprasUsuario;
}
function desplegarHistorial() {
    let comprasUsuario = userHistorial()
    comprasUsuario.forEach(element => {
        let numeroReserva = element.numReserva;
        let fechReserva = element.fechaReserva;
        let pasajes = element.numPasajes;
        let infoVuelos = [];
        for (let i = 0; i < pasajes.length; i++) {

            if (infoVuelos.length == 0) {
                infoVuelos.push(pasajes[i].vuelo);
                infoVuelos.push(pasajes[i].Pasajero);
            } else {
                infoVuelos.push(pasajes[i].Pasajero);
            }
            console.log(infoVuelos.length);
        }
        console.log(infoVuelos);
        let pagado = element.totalPagado;
        let printReserva = `No. reserva: ${numeroReserva}`;
        let printFechaReserva = `Comprado el : ${fechReserva}`;
        let printPagado = `Total compra: ${pagado} €`;
        let printVuelo = `Número de vuelo: ${infoVuelos[0]}`
        let container = document.createElement('div');
        container.setAttribute('class', 'container card');
        var documentFragment = document.createDocumentFragment();
        documentFragment.appendChild(container);
        let row1 = document.createElement('div');
        row1.setAttribute('class', 'row')
        let col1 = document.createElement('div');
        col1.setAttribute('class', 'col');
        let contenidoCol1 = document.createTextNode(printReserva);
        col1.appendChild(contenidoCol1);
        let col2 = document.createElement('div');
        col2.setAttribute('class', 'col right');
        let contenidoCol2 = document.createTextNode(printFechaReserva);
        col2.appendChild(contenidoCol2);
        let row2 = document.createElement('div');
        row2.setAttribute('class', 'row');
        let col3 = document.createElement('p');
        col3.setAttribute('class', 'col');
        let contenidoCol3 = document.createTextNode(printVuelo);
        col3.appendChild(contenidoCol3);
        for (let i = 1; i < infoVuelos.length; i++) {
            console.log(infoVuelos[i])
            let contenidoCol3b = document.createTextNode(infoVuelos[i]);
            let parrafo = document.createElement('p');
            parrafo.appendChild(contenidoCol3b);
            col3.appendChild(parrafo);
        }
        let row3 = document.createElement('div');
        row3.setAttribute('class', 'row');
        let col4 = document.createElement('div');
        col4.setAttribute('class', 'col right');
        let contenidoCol4 = document.createTextNode(printPagado);
        col4.appendChild(contenidoCol4);
        var documentFragment2 = document.createDocumentFragment();
        documentFragment2.appendChild(row1);
        row1.appendChild(col1);
        row1.appendChild(col2);
        row2.appendChild(col3);
        row3.appendChild(col4);
        container.appendChild(row1);
        container.appendChild(row2);
        container.appendChild(row3);
        document.body.appendChild(container);
    });





}


