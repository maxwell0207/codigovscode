const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your-secret-key';

const loginService = require('../services/loginServices');
const getUser = async (request, response) => {
    console.log(request.body + " body");
    const result = await loginService.getUser(request.body);
    console.log(result + " result");
    if (result) {
        const token = jwt.sign({ id: result.id }, SECRET_KEY, { expiresIn: 300 });
//Alterar Tabela Usuarios Atualizando Token
        return response.status(200).json({ auth: true, token });
    } else {
        return response.status(400).json({ "[ERROR/SERVER]": "Falha ao salvar produto" });
    }


};


module.exports = {
    getUser
};