const express = require('express');
const routes = express.Router();
const data = require('./data.json');

const admin = require('./controllers/admin');

routes.get('/', function(req, res){
    return res.render('index', { recipes: data.recipes })
});

routes.get('/above', function(req, res){
    return res.render('above')
});

routes.get('/recipes', function(req, res){
    return res.render('recipes',  { recipes: data.recipes })
});

routes.get("/recipes/:index", function (req, res) {
    const recipeIndex = req.params.index;

    return res.render('recipe', {recipe: data.recipes[recipeIndex]});
})

routes.get("/admin/recipes", admin.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", admin.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", admin.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", admin.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", admin.post); // Cadastrar nova receita
routes.put("/admin/recipes", admin.put); // Editar uma receita
routes.delete("/admin/recipes", admin.delete); // Deletar uma receita


module.exports = routes;