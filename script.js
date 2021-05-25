const baseURL = 'https://gateway.marvel.com:443/v1/public/';
const publicKey = 'e0b9a1aef53742cc955deb022e25767b';
const hash = '11e78a321dac6fe1b0158f5cf846ece7';

const comicsURL = baseURL + "characters/1009629/comics?limit=4&ts=1&apikey=" + publicKey + "&hash=" + hash;
const moviesURL = baseURL + "characters/1009629/series?ts=1&apikey=" + publicKey + "&hash=" + hash;
const getComics = async () => {
    try{
        const response = await fetch(comicsURL);
        const json = await response.json();
        json.data.results.forEach(element => {
            drawComic(element);
            console.log(element.urls);
        });
    }catch(error){
        console.log(error);
    }
}

/* const getComics = () => {
    fetch(comicsURL)
    .then(response => response.json())
    .then(response => {
        response.data.results.forEach(element => {
            drawComic(element);
            console.log(element);
        })
    })
    .catch(error => console.log(error))
} */

const drawComic = e => {
    const comic = `
    <div class="cards">
    <div class="comic">
        <div class="front">        
            <img src="${e.thumbnail.path}.${e.thumbnail.extension}">
        </div>
        <div class="back">
            <h3>${e.title}</h3>
            <a class="btn btn-success" href="${e.urls.url}" target="_blank">Ver más</a>
        </div>
    </div>
    </div>`;

    comics.insertAdjacentHTML('beforeEnd', comic);
    //document.getElementById('comic').innerHTML = comic;
}


const getMovies= async () => {
    try{
        const response = await fetch(moviesURL);
        const json = await response.json();
        json.data.results.forEach(element => {
            drawMovie(element);
        });
    }catch(error){
        console.log(error);
    }
}

const drawMovie = e => {
    const comic = `
    <div class="pelicula">
                  <a href="#"><img src=</a>
                  <figcaption class="text-white">Dark Phoenix</figcaption>
                </div>`;

    comics.insertAdjacentHTML('beforeEnd', comic);
    //document.getElementById('comic').innerHTML = comic;
}


getComics();