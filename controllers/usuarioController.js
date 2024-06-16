const usuarioService = require('../services/usuarioService');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const result = await usuarioService.register(req.body);
    return result
        ? res.status(200).json({ message: 'Usuário registrado com sucesso!' })
        : res.status(400).json({ error: 'Falha ao registrar usuário.' });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await usuarioService.login(email, password);

    if (user) {
        const token = jwt.sign({ id: user.id }, 'seu_segredo', { expiresIn: '1h' });
        return res.status(200).json({ token });
    } else {
        return res.status(401).json({ error: 'Credenciais inválidas.' });
    }
};

module.exports = {
    register,
    login,
};
