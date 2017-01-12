'use strict';
// entry point to this application

const expressApp = require('./app/server');
expressApp.listen(8080,()=>{
	console.log("app is running===");
});