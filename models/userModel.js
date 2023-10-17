// models/userModel.js
let users = [];
let currentId = 1; // Variável que mantém o valor do próximo ID

class User {
  constructor(nome, idade, profissao, salario) {
    this.id = currentId++; // Define o ID e, em seguida, incrementa
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
    this.salario = salario;
  }
}

function getAllUsers() {
  return users;
}

function addUser(user) {
  users.push(user);
}

function updateUser(id, updatedUser) {
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex !== -1) {
    users[userIndex] = updatedUser;
  }
}

function deleteUser(id) {
  users = users.filter(user => user.id !== id);
}

module.exports = {
  User,
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
};
