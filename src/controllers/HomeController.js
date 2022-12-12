import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    res.json('tudo certo');
  }
}

export default new HomeController();
