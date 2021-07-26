'use-strict'

const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');
const port = 3000;
const server = restify.createServer();
const cors = corsMiddleware({
  origins: ['*'],
  allowHeaders: ['x-access-token'],
  exposeHeaders: []
});
server.use(restify.plugins.bodyParser({
 mapParams:true,
 mapFiles:true,
 overrideParams: false
}));
server.use(restify.plugins.queryParser());
server.pre(cors.preflight);
server.use(cors.actual);

module.exports = {server,port,cors};