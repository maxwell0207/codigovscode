const clienteService = require('../services/clientesServices');
const NodeCache = require('node-cache');
const cache = new NodeCache();

const findAll = async (request, response) => {
    const cacheKey = 'clientes';
    const cachedClientes = cache.get(cacheKey);

    if (cachedClientes) {
        console.log('Dados recuperados do cache para a URL:', request.originalUrl);
        return response.status(200).json(cachedClientes);
    } else {
        const clientes = await clienteService.findAll();
        cache.set(cacheKey, clientes, 60); // Cache por 60 segundos
        console.log('Dados armazenados no cache para a URL:', request.originalUrl);
        return response.status(200).json(clientes);
    }
};

const save = async (request, response) => {
    const result = await clienteService.save(request.body);
    if (result) {
        cache.flushAll(); // Limpa o cache após salvar um novo cliente
        console.log('Cache limpo após salvar um novo cliente');
        return response.status(200).json();
    } else {
        return response.status(400).json({ "[ERROR/SERVER]": "Falha ao salvar cliente" });
    }
};

const update = async (request, response) => {
    const { id } = request.params;
    const result = await clienteService.update(id, request.body);
    if (result) {
        cache.flushAll(); // Limpa o cache após atualizar um cliente
        console.log('Cache limpo após atualizar um cliente');
        return response.status(200).json();
    } else {
        return response.status(400).json({ "[ERROR/SERVER]": "Falha ao atualizar cliente" });
    }
};

const remove = async (request, response) => {
    const { id } = request.params;
    const result = await clienteService.remove(id);
    if (result) {
        cache.flushAll(); // Limpa o cache após remover um cliente
        console.log('Cache limpo após remover um cliente');
        return response.status(200).json();
    } else {
        return response.status(400).json({ "[ERROR/SERVER]": "Falha ao remover cliente" });
    }
};

module.exports = {
    findAll,
    save,
    remove,
    update
};
