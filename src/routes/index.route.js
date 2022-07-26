const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index.controller');

/* GET programming languages. */
router.get('/', indexController.get);
  
/* POST programming language */
router.post('/', indexController.post);


module.exports = router;