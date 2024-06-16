const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your-secret-key';

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ error: 'Token não fornecido' });
    }
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Falha na autenticação do token' });
        }
        req.userId = decoded.id;
        next();
    });
};

module.exports = verifyToken;
