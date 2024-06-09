// clientes.js

var express = require('express');
var router = express.Router();

const clienteController = require('../controllers/clienteController');
const { validateName } = require('../middlewares/nomeMiddleware');

/* GET clientes listing. */
router.get('/', clienteController.findAll);

/* PUT clientes listing. */
router.put('/', clienteController.update);

/* POST clientes listing with name validation. */
router.post('/', validateName, clienteController.save);

/* DELETE clientes listing. */
router.delete('/:id', clienteController.remove);

module.exports = router;
