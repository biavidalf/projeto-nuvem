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

    try {
      await Aluno.create(aluno);
      res.status(201).json({message: 'Aluno cadastrado.'});
    } catch (error) {
      res.status(500).json({error:error});
    }
  })

module.exports = router;