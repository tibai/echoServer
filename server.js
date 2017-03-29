const express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').createServer(app);
var count = 0;


app.use(bodyParser.json({
    limit: '100mb'
}));
app.use(bodyParser.urlencoded({
    limit: '100mb',
    extended: true
}));
app.use(bodyParser.json());


//echo

app.get('/echo', function(req, res) {
	count++;
	var tmp = { "response count" : count,
		"server time" : new Date().toISOString(),
		"client": req.body};
    console.log("echo ", tmp);
    res.send(tmp);
});

app.post('/echo', function(req, res) {
    console.log("echo ", req.body);
    res.send(req.body);
});

server.listen(process.env.PORT || 61986);
//console.log("Server is running...");