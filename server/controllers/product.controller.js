const { request, response } = require('express');
const Product = require('../models/product.model');    /* this is new */

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports = {
    getAll: (req, res) => {
        Product.find({})
        .then((allProducts) => {
            console.log(allProducts);
            res.json(allProducts);
        })
        .catch(err => res.json(err));
    },

    createProduct: (request, response) => {
        Product.create(request.body)
            .then(product => response.json(product))
            .catch(err => response.json(err));
    },

    getProduct: (req, res) => {
        Product.findOne({_id:req.params.id})
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },

    updateProduct: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.json(err))
    },

    deleteProduct: (req, res) => {
        Product.deleteOne({_id:req.params.id})
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => res.json(err))
    }
    
}