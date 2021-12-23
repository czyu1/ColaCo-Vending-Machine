import Product from '../models/ProductModel.js';

const productController = {};

productController.getProducts = (req, res) => {
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

productController.purchaseProduct = (req, res) => {
  const { name, current_quantity } = req.body;
  Product.findOneAndUpdate(
    { name },
    { current_quantity: current_quantity - 1 },
    { new: true },
    (error, product) => {
      if (error) {
        console.log(error);
        return res.status(404).json({ errorMessage: error });
      } else if (!product) {
        return res.status(200).json({ errorMessage: 'No product available.' });
      } else {
        console.log(product);
        return res.status(200).json(product);
      }
    }
  );
};

productController.updateProduct = (req, res) => {
  const { name, cost, current_quantity } = req.body;
  Product.findOneAndUpdate(
    { name },
    { current_quantity: current_quantity, cost: cost },
    { new: true },
    (error, product) => {
      if (error) {
        console.log(error);
        return res.status(404).json({ errorMessage: error });
      } else if (!product) {
        return res.status(200).json({ errorMessage: 'No product available.' });
      } else {
        console.log(product);
        return res.status(200).json(product);
      }
    }
  );
};

export default productController;
