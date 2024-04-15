

class RecipeController {
    constructor(recipeService) {
        this.recipeService =  recipeService;
    }

    getApiRecipes = async (req, res) => {
        try {
            const recipesData = await this.recipeService.getApiRecipes();
            res.status(200).json(recipesData);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    getApiRecipe = async (req, res) => {
        try {
            const { id } = req.params;
            const recipeData = await this.recipeService.getApiRecipe(id);
            res.status(200).json(recipeData);
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

export default RecipeController;


