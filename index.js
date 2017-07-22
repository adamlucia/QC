const express = require('express');
const nunjucks = require('nunjucks');
var app = express();
var path = require("path");

var cors = require('cors');

var app = express()
app.use('*',cors());
app.options('*', cors());

app.set('view engine', 'html');
// nunjucks.configure(path.join(__dirname, 'templates'), {
nunjucks.configure('public/templates', {
    autoescape: true,
    express: app,
    watch: true
});


//app.use(express.static('publc/*'))
//app.use(express.static('public'));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/downloads', express.static(path.join(__dirname, 'public/downloads')));
app.use('/fonts', express.static(path.join(__dirname, 'public/fonts')));
app.use('/swf', express.static(path.join(__dirname, 'public/swf')));
app.use('/node_modules', express.static(path.join(__dirname, '/node_modules/')));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = app;
