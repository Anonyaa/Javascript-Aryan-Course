const https = require('https')
//https is the name of module (one in brackets)

let dittoData;
https.get('https://pokeapi.co/api/v2/pokemon/ditto'), {},
(response) => {
    let data = " ";
    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', (_) => {
        //console.log(JSON.parse(data)); //comment this out eventually
        dittoData = JSON.parse(data);
        console.log(dittoData.abilities); //change the .abilities to be what you are looking for
    });
}

//this should mostly just be copy/paste
