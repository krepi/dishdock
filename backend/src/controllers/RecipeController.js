class RecipeController {
    constructor(recipeService) {
        this.recipeService = recipeService;
    }

    translate = async (req, res, txt) => {
        try {
            const data = await this.recipeService.translateTry(txt);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).json({message: 'Internal Server Error'});
        }
    }
    getApiRecipes = async (req, res) => {
        try {
            const recipesData = await this.recipeService.getApiRecipes()
            res.status(200).json(recipesData);
        } catch (error) {
            res.status(500).json({message: 'Internal Server Error'});
        }
    }

    getApiRecipe = async (req, res) => {
        try {
            const {id} = req.params;
            const recipeData = await this.recipeService.getApiRecipe(id);
            res.status(200).json(recipeData);
        } catch (error) {
            res.status(500).json({message: 'Internal Server Error'});
        }
    }
}

export default RecipeController;


