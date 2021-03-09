const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/api', ProductController.getAll);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/:id', ProductController.getProduct);
}