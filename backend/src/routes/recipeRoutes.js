import express from 'express';
import {recipeController} from "../config/diContainer.js";

const router = express.Router();

router.get('/recipes', recipeController.getRecipes);
router.get('/recipe/:id(\\d+)', recipeController.getRecipe);

export default router;