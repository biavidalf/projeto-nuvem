const mongoose = require('mongoose');

const Aluno = mongoose.model('Aluno', {
    matricula: Number,
    nome: String,
    email: String,
    telefone: String,
    senha: String,
    curso: String,
    semestre: Number,
    turmas: [String]
})

module.exports = Aluno;