
// RecipeRepository.js
import {pool} from "../config/dbConfig.js";
import {Recipe} from "../models/Recipe.js";

export class RecipeRepository {
    async getAllRecipes() {
        const query = 'SELECT * FROM recipes';
        const result = await pool.query(query);
        // Mapowanie wyników z bazy danych na obiekty modelu Recipe
        const recipes = result.rows.map(row => new Recipe(row.id, row.name, row.ingredients, row.instructions));
        return recipes;
    }

    async getRecipeById(id) {
        const query = 'SELECT * FROM recipes WHERE id = $1';
        const result = await pool.query(query, [id]);
        if (result.rows.length === 0) {
            throw new Error(`Recipe with ID ${id} not found`);
        }

        const recipeData = result.rows[0];
        const recipe = new Recipe(recipeData.id, recipeData.name, recipeData.ingredients, recipeData.instructions);
        return recipe;
    }

    async createRecipe(recipe) {
        const query = 'INSERT INTO recipes (name, ingredients, instructions) VALUES ($1, $2, $3) RETURNING *';
        const result = await pool.query(query, [recipe.name, recipe.ingredients, recipe.instructions]);
        const createdRecipe = result.rows[0];
        return new Recipe(createdRecipe.id, createdRecipe.name, createdRecipe.ingredients, createdRecipe.instructions);
    }

    async updateRecipe(id, updatedRecipe) {
        const query = 'UPDATE recipes SET name = $1, ingredients = $2, instructions = $3 WHERE id = $4 RETURNING *';
        const result = await pool.query(query, [updatedRecipe.name, updatedRecipe.ingredients, updatedRecipe.instructions, id]);
        const updatedRecipeData = result.rows[0];
        return new Recipe(updatedRecipeData.id, updatedRecipeData.name, updatedRecipeData.ingredients, updatedRecipeData.instructions);
    }

    async deleteRecipe(id) {
        const query = 'DELETE FROM recipes WHERE id = $1 RETURNING *';
        const result = await pool.query(query, [id]);
        const deletedRecipeData = result.rows[0];
        return new Recipe(deletedRecipeData.id, deletedRecipeData.name, deletedRecipeData.ingredients, deletedRecipeData.instructions);
    }
}
