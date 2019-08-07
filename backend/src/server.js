const express = require('express');
const routes = require('./routes');

const server = express();

// GET (buscar info), POST (criar algum registro na API), PUT (editar a API), DELETE 

server.use(express.json());
server.use(routes);

server.listen(3333);