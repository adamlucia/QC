const express = require('express');
const nunjucks = require('nunjucks');
var app = express();
var path = require("path");

app.set('view engine', 'html');
// nunjucks.configure(path.join(__dirname, 'templates'), {
nunjucks.configure('public/templates', {
    autoescape: true,
    express: app
});

//app.use(express.static('publc/*'))
//app.use(express.static('public'));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = app;
