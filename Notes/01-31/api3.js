const axios = require('axios').default;

async function getMusic() {
    let music = axios.get('https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f');
    let data = resp.data; 
    console.log(data);
}

getMusic();