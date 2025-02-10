const express = require('express');
const router = express.Router();
const UsuariosControllers = require('../controllers/usuario_controllers');

// Rotas para poder realizar o CRUD Ezequiel
router.get('/', UsuariosControllers.getTodosUsuarios);
router.get('/:id', UsuariosControllers.getUsuarioPorId);
router.post('/', UsuariosControllers.criarUsuario);
router.put('/:id', UsuariosControllers.atualizarUsuario);
router.delete('/:id', UsuariosControllers.deletarUsuario);


module.exports = router;


