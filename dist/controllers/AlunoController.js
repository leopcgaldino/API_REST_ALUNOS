"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class AlunoController {
 async index(req, res) {

  //lista todos alunos
  const alunos = await _Aluno2.default.findAll({
    attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
    order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
    include: {
      model: _Foto2.default,
      attributes: ['url', 'filename']
    },
  });

    res.json(alunos);
  }

    async store(req, res) {
    try {
      const aluno = await _Aluno2.default.create(req.body);

      // const { nome, sobrenome, email, idade, peso, altura } = aluno;

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async show(req, res){
    try {
      const { id } = req.params;

      if(!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      //lista um aluno
      const aluno = await _Aluno2.default.findByPk(id);

      if(!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      return res.json(aluno)
    } catch (e) {
      if(!id) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
    }
  }

  async delete(req, res){
    try {
      const { id } = req.params;

      if(!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id);

      if(!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      //deleta aluno
      await aluno.destroy();

      return res.json({
        apagado: true,
      })
    } catch (e) {
      if(!id) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
    }
  }

  async update(req, res){
    try {
      const { id } = req.params;

      if(!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(id);

      if(!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      //atualiza aluno
      const novoAluno = aluno.update(req.body);

      return res.json(aluno)
    } catch (e) {
      if(!id) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
    }
  }
}

exports. default = new AlunoController();
