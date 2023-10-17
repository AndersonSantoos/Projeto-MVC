// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const port = 3000

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', userController);

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})
