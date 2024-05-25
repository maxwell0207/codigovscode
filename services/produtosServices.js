const connection = require('../configs/dbConfiguration');

const findAll = async () => {
    const produtos = await (await connection)
        .execute('SELECT * FROM produtos');
    return produtos;
}

const update = async (produto) => {
    const query = 'UPDATE produtos SET nome = ?, `descrição` = ?, preço = ?, data_atualizada = ? WHERE id = ?';
    const isOk = await (await connection).execute(query,
        [produto.nome, produto.descrição, produto.preço, produto.data_atualizada, produto.id]);
    return isOk[0].affectedRows === 1;
}

const save = async (produto) => {
    const query = 'INSERT INTO produtos(nome, `descrição`, preço, data_atualizada) VALUES (?, ?, ?, ?)';
    const isOk = await (await connection).execute(query,
        [produto.nome, produto.descrição, produto.preço, produto.data_atualizada]);
    return isOk[0].affectedRows === 1;
}

const remove = async (id) => {
    const query = 'DELETE FROM produtos WHERE id = ?';
    const isOk = await (await connection).execute(query, [id]);
    return isOk[0].affectedRows === 1;
}

module.exports = {
    findAll,
    save,
    remove,
    update
};
