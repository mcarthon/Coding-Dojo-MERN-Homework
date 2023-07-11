const ProductController = require("../controllers/product.controllers");

module.exports = app => {

    app.get( "/api/all-products", ProductController.findAllProducts );

    app.get( "/api/product/:id", ProductController.findOneProduct );

    app.post( "/api/new-product", ProductController.createProduct );

    app.patch( "/api/update-product/:id", ProductController.updateProduct );

    app.delete( "/api/delete-product/:id", ProductController.deleteProduct );

}
