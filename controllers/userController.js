// controllers/userController.js
const express = require('express');
const userModel = require('../models/userModel');
const router = express.Router();

router.get('/', (req, res) => {
  const users = userModel.getAllUsers();
  res.render('index', { users });
});

router.post('/add', (req, res) => {
  const { id, nome, idade, profissao, salario } = req.body;
  const newUser = new userModel.User(id, nome, idade, profissao, salario);
  userModel.addUser(newUser);
  res.redirect('/');
});

router.put('/edit/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { nome, idade, profissao, salario } = req.body;
    const updatedUser = new userModel.User(userId, nome, idade, profissao, salario);
    userModel.updateUser(userId, updatedUser);
    res.redirect('/');
  });
  
  router.delete('/delete/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    userModel.deleteUser(userId);
    res.sendStatus(204); // Responde com o status 204 (No Content) após a exclusão bem-sucedida
  });
  

module.exports = router;
