import express from 'express';
import {userController} from "../config/diContainer.js";

const router = express.Router();

router.get('/', userController.getUsers);
router.get('/user/:id(\\d+)', userController.getUser);


export default router;
