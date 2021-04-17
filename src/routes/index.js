const express = require('express');
const GameController = require('../controllers/GameController');
const router = express.Router();


router.get('/game/', GameController.index);
router.post('/game/', GameController.store);
router.delete('/game/:id', GameController.delete);
router.put('/game/:id', GameController.update);

module.exports = router;