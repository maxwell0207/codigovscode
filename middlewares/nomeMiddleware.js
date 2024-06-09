// nomeMiddleware.js

const validateName = (req, res, next) => {
    const { nome } = req.body;
    if (!nome || nome.trim() === '') {
        return res.status(400).json({ error: 'O campo "nome" é obrigatório.' });
    }
    next();
};

module.exports = { validateName };
