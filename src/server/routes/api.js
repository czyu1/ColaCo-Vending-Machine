import { Router } from 'express';
import userController from '../controllers/UserController.js';

const router = Router();

router.post('/signUp', userController.createUser);
router.post('/userLogin', userController.userLogin);

export default router;
