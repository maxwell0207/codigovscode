var express = require('express');
var router = express.Router();

const clienteController = require('../controllers/clienteController')
const corMiddleware = require('../middlewares/corMiddleware');

/* GET clientes listing. */
router.get('/', corMiddleware.validateColor, clienteController.findAll);

/* PUT clientes listing. */
router.put('/', clienteController.update);

  /* POST clientes listing. */
router.post('/', clienteController.save);

  /* DELETE clientes listing. */
router.delete('/:id', clienteController.remove);

module.exports = router;