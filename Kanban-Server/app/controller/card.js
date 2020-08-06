const mongoose = require('mongoose');
const Card = require('../model/card');

//create new card
exports.addNewCard = (req, res) => {
    const card = new Card({
        columnName: req.body.columnName,
        task: req.body.task,
        status: req.body.status
    });

    card.save()
        .then(doc => {
            console.log(doc);
            res.status(200).json({
                message: "success",
                card: doc
            });
        })
        .catch(err => {
            res.status(500).json({
                message: "unable to store card",
                error: err
            });
        })
}

//get all cards
exports.getAllCards = (req, res) => {
    Card.find()
        .select('-__v')
        .then(docs => {
            if (docs.length === 0) {
                res.status(200).json({
                    message: "success",
                    docs: "no cards available"
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

//update card by id
exports.updateById = (req, res) => {
    const updateOps = req.body;
    for (const operations in updateOps) {
        updateOps[operations.propName] = operations.value;
    }
    Card.findByIdAndUpdate({ _id: req.params.id }, { $set: updateOps })
        .exec()
        .then(doc => {
            res.status(200).json({
                message: "success",
                doc: doc
            });
        })
        .catch(err => {
            res.status(500).json({
                message: "unable to update the card",
                error: err
            });
        })
}

//delete card by id
exports.deleteById = (req, res) => {
    Card.findByIdAndDelete(req.params.id)
        .then(doc => {
            res.status(200).json({
                message: "success",
                doc: doc
            });
        })
        .catch(err => {
            res.status(500).json({
                message: "unable to delete the card",
                error: err
            });
        })
}