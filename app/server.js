'use strict';

const express = require('express');

const expressApp = express();

// set ejs - embedded java script as view template for this express app
expressApp.set('view engine','ejs');
expressApp.set('view',__dirname+`/../public`);

expressApp.use(express.static(__dirname + `/../public`));

require('./database');
require('./routes')(expressApp);
module.exports = expressApp;