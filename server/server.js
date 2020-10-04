const express = require('express');
const server = express();
const port = 4000;
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
var cors = require('cors')

server.use(bodyParser.json());

server.use(cors())

//inicia servidor
server.listen(port, () => {
    console.log('Servidor Iniciado');
});
server.get('/card/:name', (req, res) => {
    var http = require("https");
    var options = {
        "method": "GET",
        "hostname": "db.ygoprodeck.com",
        "port": null,
        "path": encodeURI("/api/v7/cardinfo.php?name="+req.params.name),
        "headers": {
            "cache-control": "no-cache",
            "postman-token": "23bffd42-c4b3-ddad-fcd9-ff90ff5e6ea0"
        }
    };

    var req = http.request(options, function (r) {
        var chunks = [];

        r.on("data", function (chunk) {
            chunks.push(chunk);
        });

        r.on("end", function () {
            var body = Buffer.concat(chunks);
            res.status(200).json(JSON.parse(body.toString()));

        });
    });

    req.end();
});