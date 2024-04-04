import { RecipeService } from '../services/RecipeService.js';

export class RecipeController {
    constructor() {
        this.recipeService = new RecipeService();
    }

    getRecipes = async (req, res) => {
        try {
            const recipesData = await this.recipeService.getRecipes();
            res.status(200).json(recipesData);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    getRecipe = async (req, res) => {
        try {
            const { id } = req.params;
            const recipeData = await this.recipeService.getRecipe(id);
            res.status(200).json(recipeData);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

export const recipeController = new RecipeController();


