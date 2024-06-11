const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const NodeCache = require('node-cache');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const produtosRouter = require('./routes/produtos');
const clientesRouter = require('./routes/clientes');

const produtoController = require('./controllers/produtoController');
const clienteController = require('./controllers/clienteController');

const app = express();
const cache = new NodeCache();

// Middleware de caching
function cacheMiddleware(req, res, next) {
   const chave = req.originalUrl;
   const dadosCache = cache.get(chave);
   if (dadosCache !== undefined) {
      console.log("Dados recuperados do cache para a URL:", chave);
      res.send(dadosCache);
   } else {
      console.log("Dados não encontrados no cache para a URL:", chave);
      next();
   }
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/produtos', cacheMiddleware, produtosRouter);
app.use('/clientes', cacheMiddleware, clientesRouter);

app.use(function(req, res, next) {
   res.status(404).send('Not Found');
});

module.exports = app;

