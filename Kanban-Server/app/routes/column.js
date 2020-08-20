const express = require('express');
const router = express.Router();

const columnController = require('../controller/column');

//create new column
router.post('/new', columnController.addNewColumn);

//get all columns
router.get('/all', columnController.getAllColumns);

//get all column names and status
router.get('/all/names', columnController.getAllColumnNames);

//update a column by id
router.patch('/update/:id', columnController.updateById);

//delete a column by id
router.delete('/delete/:id', columnController.deleteById);

module.exports = router;