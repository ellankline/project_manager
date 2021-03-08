const Product = require('../models/product.model');    /* this is new */

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports = {
    getAll: (req, res) => {
        Product.find()
        .then((allProducts) => {
            console.log(allProducts);
            res.json(allProducts);
        })
        .catch(err => response.json(err));
    },

    createProduct: (request, response) => {
        Product.create(request.body)
            .then(product => response.json(product))
            .catch(err => response.json(err));
    }
}