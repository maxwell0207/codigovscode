var express = require('express');
var router = express.Router();

const produtoController = require('../controllers/produtoController');
const corMiddleware = require('../middlewares/corMiddleware');

/* GET produtos listing. */
router.get('/', produtoController.findAll);

/* PUT produtos by ID. */
router.put('/:id', produtoController.update);

/* POST produtos listing. */
router.post('/', corMiddleware.validateColor, produtoController.save);

/* DELETE produtos by ID. */
router.delete('/:id', produtoController.remove);

module.exports = router;
