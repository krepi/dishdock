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
            const promises = recipesData.results.map(result => this.translateTry(result.title));
            const dataToTranslate = await Promise.all(promises);
            console.log(dataToTranslate[0][0].translations[0].text);

            return recipesData;
        } catch (error) {
            console.error('Error in getApiRecipes:', error);
            throw error;
        }
    }

    getTranslatedApiRecipes = async () => {
        try {
            const recipesData = await this.recipeApiService.fetchRecipes();
            const dataToTranslate = await Promise.all(recipesData.results.map(result => this.translateTry(result.title)))
        } catch (error) {
            console.error('Error in translated Recip', error)
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

    translateTry = async (text) => {
        try {
            return await this.translateApiService.makeRequest(text, 'en', 'pl');
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


