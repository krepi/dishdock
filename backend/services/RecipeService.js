// RecipeService.js
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();


// console.log(process.env);
export class RecipeService {
    constructor() {
        this.apiKey = process.env.API_KEY_SPOON;
        this.mainUrl = process.env.API_URL_SPOON;
    }

    async getRecipes() {
        const searchType = 'complexSearch';
        const url = `${this.mainUrl}${searchType}?apiKey=${this.apiKey}&number=5`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error fetching recipe:', error);
            return null;
        }
    }
    async getRecipe(id) {
        const searchType = 'information';
        const url = `${this.mainUrl}${id}/${searchType}?apiKey=${this.apiKey}&includeNutrition=true`;
        console.log(url);
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error fetching recipe:', error);
            return null;
        }
    }
}
