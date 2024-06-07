//service for fetching recipes from SpoonacularApi
import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config();
const API_KEY_SPOON="822eeba2ab9b4315b3009deebe565d22"
const API_URL_SPOON="https://api.spoonacular.com/recipes/"
export class RecipeApiService {
    constructor() {
        this.apiKey = process.env.API_KEY_SPOON;
        this.mainUrl = process.env.API_URL_SPOON;
    //     this.apiKey = API_KEY_SPOON;
    //     this.mainUrl = API_URL_SPOON;
    }

    async fetchRecipes() {
        const searchType = 'complexSearch';
        const url = `${this.mainUrl}${searchType}?apiKey=${this.apiKey}&number=5`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error fetching recipes:', error);
            throw new Error('Failed to fetch recipes');
        }
    }

    async fetchRecipe(id) {
        const url = `${this.mainUrl}${id}/information?apiKey=${this.apiKey}&includeNutrition=true`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error fetching recipe:', error);
            throw new Error(`Failed to fetch recipe with ID ${id}`);
        }
    }
}
