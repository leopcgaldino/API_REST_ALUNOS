import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    //lista todos alunos
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'filename'],
      },
    });

    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      // const { nome, sobrenome, email, idade, peso, altura } = aluno;

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      //lista um aluno
      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      return res.json(aluno);
    } catch (e) {
      // eslint-disable-next-line no-undef
      if (!id) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      //deleta aluno
      await aluno.destroy();

      return res.json({
        apagado: true,
      });
    } catch (e) {
      if (!id) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      //atualiza aluno
      const novoAluno = aluno.update(req.body);

      return res.json(novoAluno);
    } catch (e) {
      if (!id) {
        return res.status(400).json({
          errors: e.errors.map((err) => err.message),
        });
      }
    }
  }
}

export default new AlunoController();
