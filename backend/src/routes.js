const express = require('express');

const routes = express.Router();

routes.get('/', function (req, res) {
    return res.json({ message: `Olá ${req.query.name}` });

});

routes.post('/devs', function(req, res) {
    return res.json(req.body);

})

module.exports = routes;