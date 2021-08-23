const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const {
  salvarPokemons,
  mostrarPokemon,
  mostrarPokemons,
  atualizarPokemon,
  deletarPokemon,
  batalhaPokemon,
  beberPocao,
} = require('./dataBase');

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/pokemons', (req, res) => {
  res.send(mostrarPokemons());
});

app.get('/pokemons/:id', (req, res) => {
  res.send(mostrarPokemon(req.params.id));
});

app.post('/pokemons', (req, res) => {
  const pokemon = salvarPokemons({
    nome: req.body.nome,
    tipo: req.body.tipo,
    fraqueza: req.body.fraqueza,
    resistencia: req.body.resistencia,
    hp: 10,
  });
  res.send(pokemon);
});

app.put('/pokemons/:id', (req, res) => {
  const pokemon = atualizarPokemon(req.params.id, {
    nome: req.body.nome,
    tipo: req.body.tipo,
    fraqueza: req.body.fraqueza,
    resistencia: req.body.resistencia,
    hp: 100,
    id: parseInt(req.params.id),
  });
  res.send(pokemon);
});

app.delete('/pokemons/:id', (req, res) => {
  res.send(deletarPokemon(req.params.id));
});

app.post('/batalha', (req, res) => {
  res.send(batalhaPokemon(req.body.id1, req.body.id2));
});

app.post('/pocao', (req, res) => {
  res.send(beberPocao(req.body.id));
});

app.listen(3000);
