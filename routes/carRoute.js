const express = require('express');
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(error => {
            res.status(500).json(error);
        })
});

router.get('/:id', validateId, (req, res) => {
    db('cars').where({id: req.params.id})
        .then(car => {
            res.status(200).json(car)
        })
        .catch(error => {
            res.status(500).json(error) 
        })
})

// middleware:
function validateId(req, res, next) {
    db('cars').where({id: req.params.id}) 
        .then(results => {
            if (results.length === 0) {
                res.status(400).json({message: 'Invalid account id'});
            } else {
                next();
            }
        })
        .catch(error => {
            console.log(error);
        })
}

function validateUniqueVIN(req, res, next) {
    db('cars').where('vin', 'like', req.body.vin)
        .then(results => {
            if (results.length === 0) {
                next();
            } else {
                res.status(400).json({message: `account name ${req.body.vin} has already been taken`})
            }
        })
        .catch(error => {
            console.log(error)
        })
}


function validatePost(req, res, next) {
    if(!Object.keys(req.body).length) {
        res.status(400).json({message: 'missing post data'})
    } else {
        if (req.body.make && req.body.model && req.body.mileage && req.body.vin) {
            next();
        } else {
            res.status(400).json({message: 'missing make, model, mileage, or vin fields'})
        }
    }
}

module.exports = router;