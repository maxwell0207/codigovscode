var express = require('express');
var router = express.Router();
const mysql = require('mysql2/promise');

/* GET produtos. */
router.get('/produtos', function(req, res, next) {
  mysql.createConnection({
    host: 'localhost',
    user: 'maxwell',
    password: 'suelzao07',
    database: 'adsmaxwell',
    port: 3306
  }).then((connection) => {
    connection.query('SELECT * FROM produtos;')
      .then((result) => {
        res.send(result[0]);
      });
  });
});

/* GET clientes. */
router.get('/clientes', function(req, res, next) {
  mysql.createConnection({
    host: 'localhost',
    user: 'maxwell',
    password: 'suelzao07',
    database: 'adsmaxwell',
    port: 3306
  }).then((connection) => {
    connection.query('SELECT * FROM clientes;')
      .then((result) => {
        res.send(result[0]);
      });
  });
});

/* GET usuarios. */
router.get('/usuarios', function(req, res, next) {
  mysql.createConnection({
    host: 'localhost',
    user: 'maxwell',
    password: 'suelzao07',
    database: 'adsmaxwell',
    port: 3306
  }).then((connection) => {
    connection.query('SELECT * FROM usuarios;')
      .then((result) => {
        res.send(result[0]);
      });
  });
});

/* GET home page (Hello World). */
router.get('/', function(req, res, next) {
  res.send('Hello World!');
});

module.exports = router;
