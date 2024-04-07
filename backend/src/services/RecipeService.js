import { RecipeApiService } from './RecipeApiService.js';

export class RecipeService {
    constructor() {
        this.recipeApiService = new RecipeApiService();
    }

    async getRecipes() {
        try {
            const recipesData = await this.recipeApiService.fetchRecipes();
            return recipesData;
        } catch (error) {
            console.error('Error in getRecipes:', error);
            throw error;
        }
    }

    async getRecipe(id) {
        try {
            const recipeData = await this.recipeApiService.fetchRecipe(id);

            return recipeData;
        } catch (error) {
            console.error('Error in getRecipe:', error);
            throw error;
        }
    }
}


