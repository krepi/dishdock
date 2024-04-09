import express from 'express';
import { userController } from '../controllers/UserController';
const router = express.Router();

router.get('/', userController.getUsers);
router.get('/user/:id(\\d+)', userController.getUser);


export default router;
