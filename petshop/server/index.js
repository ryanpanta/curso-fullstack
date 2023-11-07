const express = require("express")
const app = express();

app.get('/', (request, response) => {
    response.send("Hello World!");
});

app.get('/teste', (request, response) => {
    response.send("Endpoint de teste");
});

app.listen(8080, () => console.log("Service on"));