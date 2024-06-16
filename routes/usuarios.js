const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

// Rota de registro
router.post('/register', usuarioController.register);

// Rota de login
router.post('/login', usuarioController.login);


/* GET usuario listing. */
router.get('/', usuarioController.findAll);

/* PUT usuario by ID. */
router.put('/:id', usuarioController.update);

/* POST usuario listing with name validation. */
router.post('/', validateName, usuarioController.save);

/* DELETE usuario by ID. */
router.delete('/:id', usuarioController.remove);

module.exports = router;