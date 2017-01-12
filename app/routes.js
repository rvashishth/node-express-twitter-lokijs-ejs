'use strict';

module.exports = function(expressApp){
	expressApp.get('/',(req,res)=>{
		res.send("this is home page");
	});
	expressApp.get('/top',(req,res)=>{
		res.send("this is top page");
	});
	expressApp.get('/results',(req,res)=>{
		res.send("this is results page");
	});
	expressApp.get('/api/results',(req,res)=>{
		res.json({message:'this is results api'});
	});
}