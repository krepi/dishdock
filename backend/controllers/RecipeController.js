// RecipeController.js
import {RecipeService} from "../services/RecipeService.js";

export class RecipeController {
    constructor() {
        this.recipeService = new RecipeService();
    }
    async getRecipe(req, res) {
        try {
            const recipeData = await this.recipeService.getRecipe();
            if (recipeData) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(recipeData));
            } else {
                // Obsługa przypadku, gdy dane nie zostały znalezione
                res.statusCode = 404;
                res.end(JSON.stringify({ message: 'Recipe not found' }));
            }
        } catch (error) {
            console.error('Error fetching recipe:', error);
            res.statusCode = 500;
            res.end(JSON.stringify({ message: 'Internal Server Error' }));
        }
    }
}

// Eksportuj instancję RecipeController
export const recipeController = new RecipeController();
