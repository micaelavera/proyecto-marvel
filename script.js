const baseURL = 'https://gateway.marvel.com:443/v1/public/';
const publicKey = 'e0b9a1aef53742cc955deb022e25767b';
const hash = '11e78a321dac6fe1b0158f5cf846ece7';

const comicsURL = baseURL +"characters/1009629/comics?ts=1&apikey=" + publicKey + "&hash=" + hash;

function getComics() {
    fetch(comicsURL)
    .then(response => response.json())
    .then(response => {
        response.data.results.forEach(element => {
            console.log(element)
        })
    })
    .catch(error => console.log(error))
}

getConnection();