"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _userController = require('../controllers/userController'); var _userController2 = _interopRequireDefault(_userController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// router.get('/', userController.index); //lista usuários
// router.get('/:id', userController.show); //lista usuário

router.post('/', _loginRequired2.default, _userController2.default.store); //cria usuário
router.put('/', _loginRequired2.default, _userController2.default.update); //atualiza usuário
router.delete('/', _loginRequired2.default, _userController2.default.delete); //apaga usuário

exports. default = router;

/*
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
update -> atualiza um usuário -> PATCH ou PUT
*/


