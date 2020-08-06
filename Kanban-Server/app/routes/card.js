const express = require('express');
const router = express.Router();

const cardController = require('../controller/card');

//create new card
router.post('/new', cardController.addNewCard);

//get all cards
router.get('/all', cardController.getAllCards);

//update card by id
router.patch('/update/:id', cardController.updateById);

//delete card by id
router.delete('/delete/:id', cardController.deleteById);

module.exports = router;