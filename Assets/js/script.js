function encenderBombillo() {
    document.getElementById('bombillo').src = 'assets/images/pic_bulbon.gif'
}

function apagarBombillo() {
    document.getElementById('bombillo').src = 'assets/images/pic_bulboff.gif'
}

function aplicarEstilos() {
    document.getElementById('texto').style.color = 'blue';
    document.getElementById('texto').style.background = 'red';
    document.getElementById('texto').style.fontFamily = 'Arial';
    document.getElementById('texto').style.fontSize = '28px';
}

function validarNombre() {
    //acceder a un formulario
    var nombres = document.getElementById("nombres").value;
    if (/^[a-zA-ZÑñáéíóú\s]+$/.test(nombres)) {
        alert("El nombre solo puede contener letras");
    }
}

function validarApellido() {
    //acceder a un formulario
    var apellidos = document.getElementById("apellidos").value;
    if (/^[a-zA-ZÑñáéíóú\s]+$/.test(apellidos)) {
        alert("El apellido solo puede contener letras");
    }
}

function validarCorreo() {
    var email = document.getElementById("apellidos").value;
    if (/^[a-zA-ZÑñáéíóú\s]+$/.test(apellidos)) {
        alert("El apellido solo puede contener letras");
    }

}