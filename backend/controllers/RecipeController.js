// RecipeController.js
import {RecipeService} from "../services/RecipeService.js";

export class RecipeController {
    constructor() {
        this.recipeService = new RecipeService();
    }
    async getRecipes(req, res) {
        try {
            const recipesData = await this.recipeService.getRecipes();
            if (recipesData) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(recipesData));
            } else {
                // Obsługa przypadku, gdy dane nie zostały znalezione
                res.statusCode = 404;
                res.end(JSON.stringify({message: 'Recipes not found'}));
            }
        } catch (error) {
            console.error('Error fetching recipe:', error);
            res.statusCode = 500;
            res.end(JSON.stringify({message: 'Internal Server Error'}));
        }
    }
        async getRecipe(req, res, id) {
            try {
                const recipeData = await this.recipeService.getRecipe(id);
                if (recipeData) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(recipeData));
                } else {
                    // Obsługa przypadku, gdy dane nie zostały znalezione
                    res.statusCode = 404;
                    res.end(JSON.stringify({ message: 'Recipes not found' }));
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
