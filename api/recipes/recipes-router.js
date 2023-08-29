// recipes-router.js
const express = require('express');
const Recipes = require('./recipes-model');


const router = express.Router();

router.get('/', async (_req, res, next) => {
        try {

            const recipes = await Recipes.getAll();
            res.status(200).json(recipes)

        } catch(err) {
            next(err)
        }
});


router.get('/:id', async (req, res, next) => {

    try {
        const id = req.params.id;
        const recipe = await Recipes.getById(id);
        res.status(200).json(recipe)
    } catch (err) {
        next(err)
    }
})








module.exports = router;
