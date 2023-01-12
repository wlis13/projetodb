const { connection } = require('./connection');

const insert = async (person) => {
  const [result] = await connection.execute(
    `INSERT INTO people
  (first_name, last_name, email, phone) VALUES(?, ?, ?, ?)`,
    [person.firstName, person.lastName, person.email, person.phone],
  );
  return result;
};

const findAll = async () => {
  const [result] = await connection.execute('SELECT * FROM people')
  return result;
};
const findById = async (id) => {
  const [result] = await connection.execute('SELECT *  FROM people WHERE id = ?', [id]);
  return result;
};

const update = async (person, id) => connection.execute(`
  UPDATE people
  SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE id = ?`,
  [person.firstName, person.lastName, person.email, person.phone, id],
);

const remove = (id) => connection.execute('DELETE FROM people WHERE id = ?', [id])

module.exports = {
  insert,
  findAll,
  findById,
  update,
  remove,
};