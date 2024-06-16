const bcrypt = require('bcrypt');
const { Usuario } = require('../models'); // Ajuste conforme o modelo de usuário

const register = async ({ email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await Usuario.create({ email, password: hashedPassword });
    return newUser ? true : false;
};

const login = async (email, password) => {
    const user = await Usuario.findOne({ where: { email } });
    if (user && await bcrypt.compare(password, user.password)) {
        return user;
    } else {
        return null;
    }
};

module.exports = {
    register,
    login,
};
