const router = require('express').Router();
const Aluno = require('../models/Aluno');

router.route('/aluno')
    .get(async (req, res) => {
    try {
        const alunos = await Aluno.find();
        res.status(200).json(alunos);
      } catch (error) {
        res.status(500).json({error:error});
      }
  })
  .post(async (req, res) => {
    const aluno = req.body;
    
    if(!aluno){
      res.status(422).json({error: 'Dados obrigatório'});
      return
    }

    const alunoNoBanco = await Aluno.findOne({matricula: req.body.matricula});
    
    if(alunoNoBanco){
      res.status(422).json({error: 'Matrícula inserida já encontrada no banco'});
      return
    }

    try {
      await Aluno.create(aluno);
      res.status(201).json({message: 'Aluno cadastrado.'});
    } catch (error) {
      res.status(500).json({error:error});
    }
  })

router.route('/aluno/:matricula')
  .get(async (req, res) => {
    let matricula = req.params.matricula;
    
    try {
        const aluno = await Aluno.findOne({matricula: matricula});

        if(!aluno){
            res.status(422).json({message: 'Aluno nao encontrado'});
            return
        }

        res.status(200).json(aluno);
      } catch (error) {
        res.status(500).json({error:error});
    }
  })
  .delete(async (req, res) => {
    // Deletar um artigo baseado no id
    let matricula = req.params.matricula;
    
    try {
      const aluno = await Aluno.findOne({matricula: matricula});

        if(!aluno){
            res.status(422).json({message: 'Aluno nao encontrado'});
            return
        }

        await Aluno.deleteOne({matricula:matricula});

        res.status(200).json({message: 'Aluno deletado'});
      } catch (error) {
        res.status(500).json({error:error});
    }
  })

module.exports = router;