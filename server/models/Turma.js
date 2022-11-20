const mongoose = require('mongoose');

const Turma = mongoose.model('Turma', {
    codigo: String,
    disciplina: {id: String, nome: String},
    professor: {id: String, nome: String},
})

module.exports = Turma;