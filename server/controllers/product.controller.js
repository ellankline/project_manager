const Product = require('../models/product.model');    /* this is new */

module.exports.createProduct = (request, response) => {
    const { Title, Price, Description } = request.body;
    Product.create({
        Title,
        Price,
        Description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}
