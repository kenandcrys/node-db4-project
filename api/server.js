const express = require('express');

const recipesRouter = require('./recipes/recipes-router')
const userRouter = require('./users/users-router')
const server = express();

server.use(express.json());
server.use('/api/recipes', recipesRouter);
server.use('/api/users', userRouter)

server.get("*", (_req, res, next) => {
    try {
        res.status(500).json({
            status: 500,
            message: 'Internal Server Error'
        });
    } catch(err) {
       next(err)
    }
});

module.exports = server;




