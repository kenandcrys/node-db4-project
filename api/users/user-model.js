const db = require('../../data/db-config');

const getUsers = () => db('users');

const getUserById = id => db('users').where('id', id);

const createUser = newUser => db('users').insert(newUser);

module.exports = {
  getUsers,
  getUserById,
  createUser,
};