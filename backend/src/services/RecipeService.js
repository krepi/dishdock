import {RecipeApiService} from './RecipeApiService.js';
import {RecipeRepository} from "../repository/RecipeRepository.js";
import {TranslateApiService} from "./TranslateApiService.js";

export class RecipeService {
    constructor() {
        this.recipeApiService = new RecipeApiService();
        this.recipeRepository = new RecipeRepository();
        this.translateApiService = new TranslateApiService();
    }

    async getApiRecipes() {
        try {
            const recipesData = await this.recipeApiService.fetchRecipes();
            return recipesData;
        } catch (error) {
            console.error('Error in getApiRecipes:', error);
            throw error;
        }
    }

    async getApiRecipe(id) {
        try {
            const recipeData = await this.recipeApiService.fetchRecipe(id);

            return recipeData;
        } catch (error) {
            console.error('Error in getApiRecipe:', error);
            throw error;
        }
    }

    translateTry = async () => {
        try {
            return await this.translateApiService.makeRequest('Ala ma kota', 'pl', 'en');
        } catch (error) {
            console.error('error in transalate', error)
        }
    }

    async getDbRecipes() {
        try {
            return await this.recipeRepository.getAllRecipes();

        } catch (error) {
            console.error('Error in getDbrecipes:', error)
        }
    }

    async getDbRecipe(id) {
        try {
            return await this.recipeRepository.getRecipeById(id);
        } catch (error) {
            console.error('Error in getDbRecipe:', error)
        }
    }
}


