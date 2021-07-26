'use-strict'

// importando configurações do servidor
const server = require('./config/server').server;
const port = require('./config/server').port;
const router = require('./routes/router');


// listando portas
server.listen(port, () => {
  console.log(`Servidor executando na porta:${port}`);
 });

