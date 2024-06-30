const express = require('express');
const router = express.Router();

const livroController = require('../controllers/livroController.js')


router.get('/', livroController.getLivros)

router.get('/:id', livroController.getLivroId)

router.post('/', livroController.createLivro)

router.put('/:id', livroController.updateLivro)

router.delete('/:id', livroController.deleteLivro)


module.exports = router;