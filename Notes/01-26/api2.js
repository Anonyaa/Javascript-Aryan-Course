const axios = require('axios').default;

async function planetary() {
    const options = {
        headers: {
            Authorization: 
            ""
        }
    };
    return await axios.get('https://www.nasa.gov/', options);
}

getCourses().then(resp => console.log(resp))