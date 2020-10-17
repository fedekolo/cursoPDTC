// tomo los datos del clima

function peticionClima() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=buenos%20aires&appid=302370cfe5a68e4a4c8109b3703153f6')
    .then (function(response){
        return response.json();
    })
    .then (function (respuesta){
        console.log(respuesta);
        mostrarClima(respuesta);
    })
}

// cargo datos del clima

window.addEventListener("load",peticionClima);

// utilizo los datos del clima

function mostrarClima(respuesta) {

    // tomo los elementos del html
    const sensTerm = document.querySelector('#feels_like');
    const humedad = document.querySelector('#humidity');
    const presion = document.querySelector('#pressure');
    const temp = document.querySelector('#temp');
    const tempMax = document.querySelector('#temp_max');
    const tempMin = document.querySelector('#temp_min');
    const descripcion = document.querySelector('#description');
    const dirViento = document.querySelector('#deg');
    const velViento = document.querySelector('#speed');

    // utilizo los elementos del html
    sensTerm.textContent = respuesta.main.feels_like;
    humedad.textContent = respuesta.main.humidity;
    presion.textContent = respuesta.main.pressure;
    temp.textContent = respuesta.main.temp;
    tempMax.textContent = respuesta.main.temp_max;
    tempMin.textContent = respuesta.main.temp_min;
    descripcion.textContent = respuesta.weather[0].description;
    dirViento.textContent = respuesta.wind.deg;
    velViento.textContent = respuesta.wind.speed;
}
