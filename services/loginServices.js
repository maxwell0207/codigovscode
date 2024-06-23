const connection = require('../configs/dbConfiguration');

const getUser = async (usuario) => {
    console.log(usuario.usuario + " getUserService");
    const query = 'SELECT * FROM usuarios WHERE usuario = ? AND senha = ?';
    const produtos = await (await connection)
        .execute(query, [usuario.usuario, usuario.senha]);
        console.log(produtos + "retorno query");
    return produtos;
};

module.exports = {
    getUser

};