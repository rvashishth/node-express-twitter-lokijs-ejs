const loki = require('lokijs');

let db = new loki('db.json');

module.exports = db;