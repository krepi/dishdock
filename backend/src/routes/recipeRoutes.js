import express from 'express';
import { recipeController } from '../controllers/RecipeController.js';

const router = express.Router();

router.get('/recipes', recipeController.getRecipes);
router.get('/recipe/:id(\\d+)', recipeController.getRecipe);

export default router;
