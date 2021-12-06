const express = require('express');
const app = express();
const port = 5000;
app.get('/', (request, response) => {
    return response.send('OK');
});

app.listen(port, () => {
    console.log(`Valorant Api is listening on port {${port}}`);
});