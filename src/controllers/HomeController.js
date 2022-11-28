import Aluno from '../models/Aluno';

class HomeController {
 async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Danielly',
      sobrenome: 'Rocha',
      email: 'dannymorena@gmail.com',
      idade: 25,
      peso: 77,
      altura: 1.8
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
