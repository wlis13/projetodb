const express = require('express');
const peopleDB = require('../db/peopleDB');

const peopleDelete = express.Router();

peopleDelete.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await peopleDB.remove(id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Pessoa de id ${ id } excluída com sucesso` });
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' })
    }
  } catch (error) {
    res.status(500).json({ message: error.sqlMessage })
  }
});

module.exports = peopleDelete;