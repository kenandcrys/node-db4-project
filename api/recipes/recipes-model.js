// recipes-model.js
const db = require('../../data/db-config');

const getAll = () => {
    return db('recipes');
};

const getById = (id) => {
    return db('recipes')
        .where("recipe_id", id)
}

module.exports = {
    getAll,
    getById
};
