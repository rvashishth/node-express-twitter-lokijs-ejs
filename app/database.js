'use strict';

const loki = require('lokijs');

let db = new loki('db.json');

db.addCollection('top').insert([
	{term:'JavaScript', style :'warning'},
	{term:'Angular 2', style :'danger'},
	{term:'NodeJS', style :'info'},
	{term:'Golang', style :'default'},
	{term:'iOS', style :'warning'},
	{term:'REST', style :'info'},
	{term:'Hapi', style :'info'},
	]);

db.addCollection('searches');

db.saveDatabase();
