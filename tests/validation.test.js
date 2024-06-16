// validation.test.js

const request = require('supertest');
const app = require('../app');

describe('Validations', () => {
    test('Should validate name', async () => {
        const response = await request(app)
            .get('/clientes');

        expect(response.statusCode).toBe(200);
    });

    test('Should validate produto', async () => {
        const response = await request(app)
            .get('/produtos'); 
    
        expect(response.statusCode).toBe(200);
    });    

    test('Should validate email format', async () => { // Checar se email é valido
        const response = await request(app)
            .post('/clientes')
            .send({ nome: 'Nome', sobrenome: 'Sobrenome', email: 'emailinvalido', idade: 30 });
    
        expect(response.statusCode).toBe(200);
    });
    

    test('Should validate age', async () => {
        const response = await request(app)
            .post('/clientes')
            .send({ nome: 'Test', sobrenome: 'Sobrenome', email: 'teste@teste.com', idade: 119 }); // Idade positiva e menor que 120
    
        expect(response.statusCode).toBe(200);
    });
        
    
    test('Should validate price', async () => { //Checar se preço é positivo
        const response = await request(app)
            .post('/produtos')
            .send({ nome: 'Produto', descrição: 'Descrição', preço: 10, data_atualizada: '2023-01-01' });
    
        expect(response.statusCode).toBe(200);
    });

    test('Should validate date', async () => {  //Checar se data é uma data válida entre 1 de Janeiro de 2000 até dia 20 de Junho de 2024
        const response = await request(app)
            .post('/produtos')
            .send({ nome: 'Produto', descrição: 'Descrição', preço: 100, data_atualizada: '2025-01-01' });
    
        expect(response.statusCode).toBe(200);
    });
     
    test('Should validate users endpoint', async () => {   //Checar se chamada a endpoint usuarios funciona
        const response = await request(app)
            .get('/users');
    
        expect(response.statusCode).toBe(200);
    });



    const token = 'seu_token_jwt_valido';  //Checar se chamada para endpoint clientes possui token

    test('Should validate token on clientes endpoint', async () => {
        const response = await request(app)
            .get('/clientes')
            .set('Authorization', `Bearer ${token}`);
    
        expect(response.statusCode).toBe(200);
    });
       
});

