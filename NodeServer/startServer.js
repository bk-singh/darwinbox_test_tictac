// var http = require('http');
var express = require('express'),
    app     = express();




app.listen(8888);

app.get('/', function(req,res) {

    res.send('Hello');
    });
app.get('/players', function(req,res) {
    // console.log("players called ..");
    res.send({id:0, name:'player 0'});
});



app.post('/postData', function(req,res) {

    res.send('postData');
});

app.post('/submit', function(req,res) {

    res.send('submit');
});
































//
//
// function startServer(req, res){
// console.log("server started");
// res.write("server started.");
// res.send();
// }
//
// var webServer =  http.createServer(startServer).listen(8888, 'localhost');
//
// webServer.once('listening',function(){
//     console.log("server running on localhost..");
// });
//
// webServer.once('connected', function(){
//     console.log("connected to server.");
// });