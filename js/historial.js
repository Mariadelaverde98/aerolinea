export class Compra {
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
(function subirHistorial() {
    let fecha = new Date(); // extraigo la fecha de hoy y le sumo 47 horas 
    let fechaMenos48h = sumar47(fecha);
    let dd = String(fechaMenos48h.getDate()).padStart(2, '0');
    let mm = String(fechaMenos48h.getMonth() + 1).padStart(2, '0');
    let yyyy = fechaMenos48h.getFullYear();
    let horaMenos48h = fechaMenos48h.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    fechaMenos48h = yyyy + '/' + mm + '/' + dd;
    let compra1 = new Compra(
        '0001', // Numero de reserva
        '28/10/2022', // Fecha de reserva, aqui el dia de la compra
        'gofthet@gmail.com',  // Aqui el correo del usuario
        [JSON.parse('{"nombre": "Gerardo", "Apellidos": "Mir Garcia", "dni": "52656007Z"}')], // Pasajeros
        [JSON.parse('{"id":"DA000","origen":"Madrid","destino":"Edimburgo","fecha":"","hora":"","horallegada":"10:15","asientosLibres":25,"asientosOcupados":["1A","2A","4C","1DC","2DC"],"precio":120}')]);
    compra1.vuelo[0].fecha = fechaMenos48h;
    compra1.vuelo[0].hora = horaMenos48h;
    console.log(compra1);
    let compra2 = new Compra(
        '0002', // Numero de reserva
        '28/10/2022', // Fecha de reserva, aqui el dia de la compra
        'gofthet@gmail.com',  // Aqui el correo del usuario
        [JSON.parse('{"nombre": "Gerardo", "Apellidos": "Mir Garcia", "dni": "52656007Z"}'), JSON.parse('{"nombre": "Gerar2", "Apellidos": "Mir Garcia", "dni": "52656008Z"}')],
        [JSON.parse('{"id":"DA001","origen":"Madrid","destino":"Paris","fecha":"2022/11/31","hora":"14:00","horallegada":"19:15","asientosLibres": 30,"asientosOcupados":[""],"precio":240}')]);
    console.log(compra1);
    localStorage.removeItem('compras');
    var historial = [compra1, compra2];
    localStorage.setItem("compras", JSON.stringify(historial));
})();
export function sumar47(date) {
    date.setTime(date.getTime() + (47 * 60 * 60 * 1000));
    return date;
}
export function userHistorial() {
    let historial = JSON.parse(localStorage.compras);
    if (historial == null) { alert('Todavía no has hecho compras') };
    let comprasUsuario = historial.filter(element => {
        if (element.usuario == "gofthet@gmail.com") {
            return element;
        }
    });
    return comprasUsuario;
}
export function desplegarHistorial() {
    let comprasUsuario = userHistorial();
    comprasUsuario.forEach((element, i) => {
        let contA = i;
        let numeroReserva = element.numReserva;
        let fechReserva = element.fechaReserva;
        let pasajes = element.numPasajes;
        let infoPasajeros = [];
        for (let i = 0; i < pasajes.length; i++) {
            if (infoPasajeros.length == 0) {
                infoPasajeros.push(pasajes[i].nombre + " " + pasajes[i].Apellidos);
                // infoPasajeros.push(pasajes[i].Apellidos);
                // infoPasajeros.push(pasajes[i].dni);
            } else {
                infoPasajeros.push(pasajes[i].nombre + " " + pasajes[i].Apellidos);
                // infoPasajeros.push(pasajes[i].Apellidos);
                // infoPasajeros.push(pasajes[i].dni);
            }
            console.log("infoPasajeros length: " + infoPasajeros.length);
        }
        let vuelo = element.vuelo;
        let infoVuelos = [];
        for (let i = 0; i < vuelo.length; i++) {
            if (infoVuelos.length == 0) {
                infoVuelos.push(vuelo[i].id);
                infoVuelos.push(vuelo[i].destino);
                infoVuelos.push(vuelo[i].fecha);
                infoVuelos.push(vuelo[i].hora)
                infoVuelos.push(vuelo[i].asientosLibres);
                infoVuelos.push(vuelo[i].asientosOcupados);
                infoVuelos.push(vuelo[i].precio);
            } else {
                infoVuelos.push(vuelo[i].id);
                infoVuelos.push(vuelo[i].destino);
                infoVuelos.push(vuelo[i].fecha);
                infoVuelos.push(vuelo[i].hora);
                infoVuelos.push(vuelo[i].asientosLibres);
                infoVuelos.push(vuelo[i].asientosOcupados);
                infoVuelos.push(vuelo[i].precio);
            }
        }
        let fechaVuelo = infoVuelos[2] + " " + infoVuelos[3];
        let FechaVueloMs = new Date(fechaVuelo).getTime();
        let FechaAhoraMS = Date.now();
        let diferenciaFechas = (FechaVueloMs - FechaAhoraMS) / (1000 * 60 * 60);
        console.log(FechaVueloMs);
        console.log(FechaAhoraMS);
        console.log(diferenciaFechas);
        console.log(infoVuelos);
        let printReserva = `No. reserva: ${numeroReserva}`;
        let printFechaReserva = `Comprado el : ${fechReserva}`;
        let printPagado = `Total compra: ${infoVuelos[6]} €`;
        let printVuelo = `Número de vuelo: ${infoVuelos[0]}`;
        let printDestino = `Destino :${infoVuelos[1]}`;
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
        let col4 = document.createElement('div');
        col4.setAttribute('class', 'col right');
        let contenidoCol4 = document.createTextNode(printDestino);
        col4.appendChild(contenidoCol4);
        col3.appendChild(contenidoCol3);
        let row3 = document.createElement('div');
        row3.setAttribute('class', 'row');
        let col5 = document.createElement('div');
        col5.setAttribute('class', 'col pasajeros');
        let titular = document.createElement('p');
        let titPasajeros = document.createTextNode("Pasajeros");
        titular.appendChild(titPasajeros);
        col5.appendChild(titular);
        let hr = document.createElement("hr");
        col5.appendChild(hr);
        for (let i = 0; i < infoPasajeros.length; i++) {
            let cont = i;
            let vueltas = [contA,cont];
            let contenidoCol5cont = document.createTextNode(cont+1 + '. ' + infoPasajeros[i]);
            let parrafo = document.createElement('p');
            parrafo.appendChild(contenidoCol5cont);
            if (diferenciaFechas < 48) {
                let boton = document.createElement('button');
                boton.setAttribute('value', vueltas);
                let textButton = document.createTextNode('Checking disponible')
                boton.appendChild(textButton);
                parrafo.appendChild(boton);
            }
            col5.appendChild(parrafo);
        }
        let row4 = document.createElement('div');
        row4.setAttribute('class', 'row');
        let col6 = document.createElement('div');
        col6.setAttribute('class', 'col right');
        let contenidoCol6 = document.createTextNode(printPagado);
        col6.appendChild(contenidoCol6);
        var documentFragment2 = document.createDocumentFragment();
        documentFragment2.appendChild(row1);
        row1.appendChild(col1);
        row1.appendChild(col2);
        row2.appendChild(col3);
        row2.appendChild(col4);
        row3.appendChild(col5);
        row4.appendChild(col6);
        container.appendChild(row1);
        container.appendChild(row2);
        container.appendChild(row3);
        container.appendChild(row4);
        document.body.appendChild(container);

    });
    boton();
}

// function boton() {
//     const button = document.querySelector("button");
//     button.addEventListener("click", function () {


//         window.location = "checking.html"
//     });
// }
export function boton() {
    let buttonList = document.querySelectorAll("button");
    console.log(buttonList);
    buttonList.forEach(function (i) {
        i.addEventListener("click", function (e) {
            // alert(e.target.innerHTML);
            const button = e.target;
            localStorage.setItem("checkinUser", JSON.stringify(button.value));
            window.location = "checking.html";
        })
    })
}

