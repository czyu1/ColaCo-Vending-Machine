import Product from '../models/ProductModel.js';

const productController = {};

productController.getProducts = async (req, res) => {
  Product.find({}, (error, products) => {
    if (error) {
      console.log(error);
      return res.status(404).json({ errorMessage: error });
    } else if (!products) {
      return res.status(200).json({ errorMessage: 'No products available.' });
    } else {
      return res.status(200).json(products);
    }
  });
};

export default productController;
