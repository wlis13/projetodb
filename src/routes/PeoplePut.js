const express = require('express');
const peopleDB = require('../db/peopleDB');

const peoplePut = express.Router();

peoplePut.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const person = req.body;
    const [result] = await peopleDB.update(person, id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Pessoa de id ${ id } atualizada com sucesso` })
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' })
    }
  } catch (error) {
    res.status(500).json({ message: error.sqlMessage })
  }
});

module.exports = peoplePut;