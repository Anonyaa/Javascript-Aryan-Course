npm install axios
const axios = require('axios');

const client_id = '96eccd5f1c46401a9c052b0c9f6d77e2';
const secret_id = 'fa3f7e6978714841a4535d910ede5d21';

let options = {
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true,
}

axios.post('https://accounts.spotify.com/api/token', options).then(resp => console.log(resp))
