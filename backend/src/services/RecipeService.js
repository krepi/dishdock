import { RecipeApiService } from './RecipeApiService.js';
import {RecipeRepository} from "../repository/RecipeRepository.js";

export class RecipeService {
    constructor() {
        this.recipeApiService = new RecipeApiService();
        this.recipeRepository = new RecipeRepository();
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


