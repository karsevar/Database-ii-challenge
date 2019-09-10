const express = require('express');

const server = express();

server.use(express.json());

server.use('/api', (req, res) => {
    res.status(200).json({message: 'testing testing welcome to the base api route'})
});

module.exports = server;