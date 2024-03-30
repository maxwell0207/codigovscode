const validateColor = (request, response, next) => {
    const { body } = request;
    if (body.cor == undefined) {
        return response.status(400)
            .json({ message: 'O campo "cor" não pode ser vazio'});
    }
    next();
};
module.exports = { validateColor };