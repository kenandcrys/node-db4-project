const express = require('express');
const User = require('./user-model');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const user = await User.getUsers();

    if (!user) {
      res.status(404).json({
        message: 'No users found'
      });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;