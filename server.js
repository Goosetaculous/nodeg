var express = require('express');
var app = express();
var fs = require("fs");

app.get('/', function (req, res) {
    res.end("TEST")
})

app.listen(process.env.PORT, function () {




})
