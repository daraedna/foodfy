const express = require('express');
const nunjucks = require('nunjucks');
const recipes = require('./data');


const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express:server,
    autoescape: false,
    noCache: true,
});


server.get('/', function(req, res){
    return res.render('index', { recipes })
});

server.get('/above', function(req, res){
    return res.render('above')
});

server.get('/recipes', function(req, res){
    return res.render('recipes',  { recipes })
});

server.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;

    return res.render('recipe', {recipe: recipes[recipeIndex]});
  })

server.listen(5000, function(){
    console.log('Servidor rodando')
}); 