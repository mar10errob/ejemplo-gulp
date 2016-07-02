var express = require('express');

var app = express();
// app.set('views','/views');
app.use(express.static(__dirname + '/views'));
// app.set('view engine','html');

app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen('8000', function(){
    console.log('Servidor escuchando por el poerto 8000');
});
