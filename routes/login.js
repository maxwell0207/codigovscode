var express = require('express');
var router = express.Router();

const loginController = require('../controllers/loginController');

/* GET produtos listing. */
//router.get('/', produtoController.findAll);

/* PUT produtos by ID. */
//router.put('/:id', produtoController.update);

/* POST produtos listing with name validation. */
router.post('/', loginController.getUser);

/* DELETE produtos by ID. */
//router.delete('/:id', produtoController.remove);

module.exports = router;
