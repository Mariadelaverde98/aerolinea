window.onload = () => {
    var nav = document.getElementsByTagName('nav')[0];
    nav.style.width = '100%';
    nav.style.height = '60px';
    nav.style.backgroundColor = 'rgba(255, 255, 255, 0.55)';
    nav.style.display = 'flex';
    nav.style.justifyContent = 'space-between';
    nav.style.alignItems = 'center';
    
    //logo
    var enlaceHome = document.createElement('a');
    enlaceHome.setAttribute('href', 'home.html');
    nav.appendChild(enlaceHome);
    var logo = document.createElement('img');
    logo.setAttribute('src', './img/logopng.png');
    enlaceHome.appendChild(logo);
    logo.style.width = '275px';

    //perfil
    var enlaceUser = document.createElement('a');
    enlaceUser.setAttribute('href', 'perfil.html');
    enlaceUser.style.color = 'black';
    nav.appendChild(enlaceUser);
    var icono_user = document.createElement('img');
    icono_user.setAttribute('src', './img/user-solid.svg');
    enlaceUser.appendChild(icono_user);
    enlaceUser.style.width = '46px'
    icono_user.style.border = '3px solid'
    icono_user.style.borderRadius = '100%'
    icono_user.style.paddingLeft = '2%';
    icono_user.style.paddingRight = '2%';
    enlaceUser.style.marginRight = '1%';
}