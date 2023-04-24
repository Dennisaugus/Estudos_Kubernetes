var express = require('express');

var app = express();
app.get('/', function (req, res) {
    res.send('Hello Word');
});
app.listem(3000, function () {
    console.log('Listening on port 3000!');
    console.log('http://localhost:3000');
});

