var http = require("http");
var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(__dirname+"/views"));
app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/scripts"));

app.get("/",function(req,res){
	res.sendFile(path.join(__dirname+"/index.html"));
});

app.get("/api/users",function(req,res){
	res.set("Content-Type","application/json");
	res.send({name: "Shivendra",isValid: true, group: "Admin"});
})

var server = http.createServer(app);

server.listen(9220);

