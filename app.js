const express = require('express');
const constants = require('./config/constants');
const valorantApi = require('./api/valorantApi');
const app = express();
const port = constants._port;


app.get('/', (request, response) => {
    return response.send('OK');
});
app.get('/api/valorant-content', (request, response) => {
    valorantApi.getValorantContent()
        .then(resp => {
            response.json(resp);
        })
        .catch(error => {
            response.send(error);
        })
        // return response.send('OK');
});


app.listen(port, () => {
    console.log(port);
    console.log(`Valorant Api is listening on port {${port}}`);
});