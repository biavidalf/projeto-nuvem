const router = require('express').Router();
const Aluno = require('../models/Aluno');

router.route('/aluno')
    .get(async (req, res) => {
    try {
        const alunos = await Aluno.find();
        res.status(200).json(alunos);
      } catch (error) {
        res.status(500).json({error});
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
      res.status(500).json({error});
    }
  })

router.route('/aluno/:matricula')
  .get(async (req, res) => {
    let matricula = req.params.matricula;
    
    try {
        const aluno = await Aluno.findOne({matricula});

        if(!aluno){
            res.status(422).json({message: 'Aluno nao encontrado'});
            return
        }

        res.status(200).json(aluno);
      } catch (error) {
        res.status(500).json({error});
    }
  })
  .delete(async (req, res) => {
    // Deletar um artigo baseado no id
    let matricula = req.params.matricula;
    
    try {
      const aluno = await Aluno.findOne({matricula});

        if(!aluno){
            res.status(422).json({message: 'Aluno nao encontrado'});
            return
        }

        await Aluno.deleteOne({matricula});

        res.status(200).json({message: 'Aluno deletado'});
      } catch (error) {
        res.status(500).json({error});
    }
  })

router.route('/professor')
  .get(async (req, res) => {
    try {
      const professores = await Professor.find();
      res.status(200).json(professores);
    } catch (error) {
      res.status(500).json({ error });
    }
  })
  .post(async (req, res) => {
    const professor = req.body;

    if (!professor) {
      res.status(422).json({ error: 'Dados obrigatório' });
      return;
    }

    try {
      await Professor.create(professor);
      res.status(201).json({ message: 'Professor cadastrado.' });
    } catch (error) {
      res.status(500).json({ error });
    }
  });

router.route('/professor/:matricula')
  .get(async (req, res) => {
    let matricula = req.params.matricula;
    
    try {
        const professor = await Professor.findOne({matricula});

        if(!professor){
            res.status(422).json({message: 'Professor nao encontrado'});
            return
        }

        res.status(200).json(professor);
      } catch (error) {
        res.status(500).json({error});
    }
  })
  .delete(async (req, res) => {
    // Deletar um artigo baseado no id
    let matricula = req.params.matricula;
    
    try {
      const professor = await Professor.findOne({matricula});

        if(!professor){
            res.status(422).json({message: 'Professor nao encontrado'});
            return
        }

        await Professor.deleteOne({matricula});

        res.status(200).json({message: 'Professor deletado'});
      } catch (error) {
        res.status(500).json({error});
    }
  })

module.exports = router;
