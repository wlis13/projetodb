const express = require('express');

const { insert } = require('../db/peopleDB');

const peoplePost = express.Router();

peoplePost.post('/', async (req, res) => {
  const person = req.body;
  try {
    const result = await insert(person);
    res.status(201).json({
      message: `Pessoa cadastrada com sucesso com o id ${ result.insertId }`
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' })
  }

});


module.exports = peoplePost;