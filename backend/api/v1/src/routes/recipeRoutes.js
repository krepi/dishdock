import express from 'express';
import {recipeController} from "../config/diContainer.js";

const router = express.Router();

router.get('/recipes', recipeController.getApiRecipes);
router.get('/recipe/:id(\\d+)', recipeController.getApiRecipe);
router.get('/recipe/translate', recipeController.translate);

export default router;