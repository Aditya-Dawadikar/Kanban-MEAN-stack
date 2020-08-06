const mongoose = require('mongoose');
const Column = require('../model/column');

//create new column
exports.addNewColumn = (req, res) => {
    const column = new Column({
        columnName: req.body.columnName,
        columnType: req.body.columnType,
        cards: []
    });
    column.save()
        .then(doc => {
            res.status(200).json({
                message: "success",
                doc: doc
            });
        })
        .catch(err => {
            res.status(500).json({
                message: "unable to create new Column",
                error: err
            });
        })
}

//get all columns
exports.getAllColumns = (req, res) => {
    Column.find()
        .select('-__v')
        .then(docs => {
            if (docs.length === 0) {
                res.status(200).json({
                    message: "success",
                    docs: "no columns available"
                })
            } else {
                res.status(200).json({
                    message: "success",
                    docs: docs
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: "some error occured while fetching data from database",
                error: err
            });
        })
}

//update column by id
exports.updateById = (req, res) => {
    const updateOps = req.body;
    for (const operations in updateOps) {
        updateOps[operations.propName] = operations.value;
    }
    Column.findByIdAndUpdate({ _id: req.params.id }, { $set: updateOps })
        .exec()
        .then(doc => {
            res.status(200).json({
                message: "success",
                doc: doc
            });
        })
        .catch(err => {
            res.status(500).json({
                message: "unable to update the Column",
                error: err
            });
        })
}

//delete column by id
exports.deleteById = (req, res) => {
    Column.findByIdAndDelete(req.params.id)
        .then(doc => {
            res.status(200).json({
                message: "success",
                doc: doc
            });
        })
        .catch(err => {
            res.status(500).json({
                message: "unable to delete the column",
                error: err
            });
        })
}