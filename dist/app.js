import express from "express";
var server = express();
server.get('/games', function (req, res) {
    res.send('Ok');
});
server.listen(4000, function () {
    console.log("Running in port 4000");
});
