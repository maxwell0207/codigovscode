// produtos.js

var express = require('express');
var router = express.Router();

const produtoController = require('../controllers/produtoController');
const { validateName } = require('../middlewares/nomeMiddleware');

/* GET produtos listing. */
router.get('/', produtoController.findAll);

/* PUT produtos by ID. */
router.put('/:id', produtoController.update);

/* POST produtos listing with name validation. */
router.post('/', validateName, produtoController.save);

/* DELETE produtos by ID. */
router.delete('/:id', produtoController.remove);

module.exports = router;
