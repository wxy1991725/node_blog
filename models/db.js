var setting = require('../settings');
Db = require('mongodb').DB,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;
module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_HOST, {}), {safe: true});