const fechaBoda = new Date("November 22, 2026 18:00:00").getTime();

const contador = setInterval(function() {

    const ahora = new Date().getTime();

    const distancia = fechaBoda - ahora;


    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (distancia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (distancia % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const segundos = Math.floor(
        (distancia % (1000 * 60)) /
        1000
    );


    document.getElementById("days").innerHTML = dias;
    document.getElementById("hours").innerHTML = horas;
    document.getElementById("minutes").innerHTML = minutos;
    document.getElementById("seconds").innerHTML = segundos;


    if (distancia < 0) {

        clearInterval(contador);

        document.querySelector(".timer").innerHTML =
        "¡Llegó el gran día! ❤️";

    }

}, 1000);
