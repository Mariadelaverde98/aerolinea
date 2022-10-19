 window.onload = () => {
    localStorage.setItem('reserva', JSON.stringify({
        numPasajeros: 5
    }))
    var numPasajeros = JSON.parse(localStorage.getItem('reserva')).numPasajeros;
    for(let i = 0; i < numPasajeros; i++) {
        creaDiv(i);
    }

    

} 

function creaDiv(i) {
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');
    document.getElementsByClassName('pasajeros')[0].appendChild(div1);
    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.style.display = 'grid';
    div1.style.gridTemplateColumns = '180px 400px';
    div1.style.gridTemplateRows = '230px';
    div2.style.backgroundColor = 'white';
    div3.style.backgroundColor = 'white';
    div3.style.boxShadow = '1px 1px 6px';
    div2.style.boxShadow = '1px 1px 6px';
    div2.style.padding = '15%';
    div3.style.padding = '6%'
    div1.style.margin = '0.6%'

    var pas = document.createElement('p');
    pas.appendChild(document.createTextNode(`PASAJERO ${i + 1}:`));
    pas.style.fontFamily = 'system-ui';
    pas.style.fontWeight = '500';
    pas.style.color = '#2e2e5c';
    div2.appendChild(pas);
    var p = document.createElement('p');
    p.appendChild(document.createTextNode('Los datos de los pasajeros deben coincidir con la documentación que presenten en el momento del vuelo.'));
    p.style.color = 'grey'
    div2.appendChild(p);

    div3.style.display = 'flex';
    div3.style.flexDirection = 'column';
    div3.style.justifyContent = 'space-evenly';
    div3.style.alignItems = 'stretch';
    div3.setAttribute('id', `pasajero${i}`);
    
    var nombre = document.createElement('input');
    nombre.setAttribute('placeholder', 'Nombre');
    nombre.setAttribute('required', 'required');
    div3.appendChild(nombre);

    var apellidos = document.createElement('input');
    apellidos.setAttribute('required', 'required');
    apellidos.setAttribute('placeholder', 'Apellidos');
    div3.appendChild(apellidos);

    var dni = document.createElement('input');
    dni.setAttribute('required', 'required');
    dni.setAttribute('placeholder', 'DNI');
    div3.appendChild(dni);

    var label = document.createElement('label');
    var necEspeciales = document.createElement('input');
    necEspeciales.setAttribute('required', 'required');
    necEspeciales.setAttribute('type', 'checkbox');
    label.appendChild(necEspeciales);
    label.appendChild(document.createTextNode('Pasajero con necesidades especiales'));
    div3.appendChild(label);
}

