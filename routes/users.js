const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

/* /users  */
router.get('/', usersController.index);
router.get('/:id', usersController.profile);


module.exports = router;
