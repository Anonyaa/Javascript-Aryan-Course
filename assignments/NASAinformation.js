import {default as axios} from 'axios';
import promptPKG from 'prompt-sync';
const prompt = promptPKG();

async function getDate() {
    let userInput = prompt('What date are you looking for? (YYYY-MM-DD): ')
    let authKey = "rVwyuhpJnwRBiwPFofGXSMvSKCD50bJlzIY3QVNL"
    let resp = await axios.get('https://api.nasa.gov/planetary/apod?api_key=rVwyuhpJnwRBiwPFofGXSMvSKCD50bJlzIY3QVNL&date=' + userInput);
    let data = resp.data; 
    return {
        title: data.title,
        date: data.date,
        explanation: data.explanation,
        url: data.url,
        hdurl: data.hdurl,
    };

};

console.log(getDate());
