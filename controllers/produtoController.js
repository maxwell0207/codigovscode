const produtoService = require('../services/produtosServices');
const NodeCache = require('node-cache');
const cache = new NodeCache();

const findAll = async (request, response) => {
    const cacheKey = 'produtos';
    const cachedProdutos = cache.get(cacheKey);

    if (cachedProdutos) {
        console.log('Dados recuperados do cache para a URL:', request.originalUrl);
        return response.status(200).json(cachedProdutos);
    } else {
        const produtos = await produtoService.findAll();
        cache.set(cacheKey, produtos, 30); // Cache por 30 segundos
        console.log('Dados armazenados no cache para a URL:', request.originalUrl);
        return response.status(200).json(produtos);
    }
};

const save = async (request, response) => {
    const result = await produtoService.save(request.body);
    if (result) {
        cache.flushAll(); // Limpa o cache após salvar um novo produto
        console.log('Cache limpo após salvar um novo produto');
        return response.status(200).json();
    } else {
        return response.status(400).json({ "[ERROR/SERVER]": "Falha ao salvar produto" });
    }
};

const update = async (request, response) => {
    const { id } = request.params;
    const result = await produtoService.update(id, request.body);
    if (result) {
        cache.flushAll(); // Limpa o cache após atualizar um produto
        console.log('Cache limpo após atualizar um produto');
        return response.status(200).json();
    } else {
        return response.status(400).json({ "[ERROR/SERVER]": "Falha ao atualizar produto" });
    }
};

const remove = async (request, response) => {
    const { id } = request.params;
    const result = await produtoService.remove(id);
    if (result) {
        cache.flushAll(); // Limpa o cache após remover um produto
        console.log('Cache limpo após remover um produto');
        return response.status(200).json();
    } else {
        return response.status(400).json({ "[ERROR/SERVER]": "Falha ao remover produto" });
    }
};

module.exports = {
    findAll,
    save,
    remove,
    update
};
