const express = require('express')

const md = require('./recipes-middleware');

const db = require('../../data/db-config');

const Recipes = require('./recipes-model');

const router = ('express').Router();



module.exports = router;