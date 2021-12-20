import { Router } from 'express';
import userController from '../controllers/UserController.js';
import productController from '../controllers/ProductController.js';

const router = Router();

router.post('/signUp', userController.createUser);
router.post('/userLogin', userController.userLogin);
router.get('/getProducts', productController.getProducts);
export default router;
