import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userController.index); //lista usuários
// router.get('/:id', userController.show); //lista usuário

router.post('/', userController.store); //cria usuário
router.put('/', loginRequired, userController.update); //atualiza usuário
router.delete('/', loginRequired, userController.delete); //apaga usuário

export default router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/
