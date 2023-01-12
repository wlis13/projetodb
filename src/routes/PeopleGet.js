const express = require('express');
const {
  findAll,
  findById,
} = require('../db/peopleDB');

const peopleGet = express.Router();

peopleGet.get('/', async (req, res) => {
  try {
    const result = await findAll();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.sqlMessage })
  }
});

peopleGet.get('/:id', async (req, res) => {
  try {

    const { id } = req.params;
    const [result] = await findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' })
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.sqlMessage })
  }
});

module.exports = peopleGet;