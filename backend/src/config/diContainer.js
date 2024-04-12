
import { RecipeService } from '../services/RecipeService';
import RecipeController from '../controllers/RecipeController';

const recipeService = new RecipeService();
const recipeController = new RecipeController(recipeService);

export { recipeController };
