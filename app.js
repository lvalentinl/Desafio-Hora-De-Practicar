let diaIntroducio = prompt("Que dia de la semana es?");
let numeroIngresado = "";
let puntajeIngresado = "";
let saldoDeCuenta = Math.random()*100;
let nombreDeUsuario ="";
//A desear un buen dia
if (diaIntroducio == "domingo" || diaIntroducio == "Domingo" ||diaIntroducio == "sabado" ||diaIntroducio == "sábado" ||diaIntroducio == "Sábado" ||diaIntroducio == "Sabado") {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}

//B numero positivo o negativo
numeroIngresado = prompt("Ingrese cualquier número positivo o negativo");
if (numeroIngresado < 0) {
    alert("El número que ingresó es NEGATIVO");
} else if (numeroIngresado == 0) {
    alert("El número que ingresó es CERO");
} else {
    alert("El número que ingresó es POSITIVO");
}

//C puntaje 
puntajeIngresado = prompt("Ingrese un número entre 50 y 150");
if (numeroIngresado >= 50 || numeroIngresado <= 150) {
    if (puntajeIngresado >= 100) {
        alert("¡Felicidades, has ganado!");
    } else {
        alert("Inténtalo nuevamente para ganar.");
    }
} else {
    puntajeIngresado = prompt("Ingrese un número entre 50 y 150");
    if (puntajeIngresado >= 100) {
        alert("¡Felicidades, has ganado!");
    } else {
        alert("Inténtalo nuevamente para ganar.");
    }    
}

//D saldo de cuenta
alert(`El saldo de su cuenta es: ${saldoDeCuenta} soles`);

//E nombre de usuario
nombreDeUsuario = prompt("ingrese su nombre por favor...");
alert(`Bienvenido ${nombreDeUsuario} !`);