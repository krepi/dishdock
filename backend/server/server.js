import {RecipeController} from "../controllers/RecipeController.js";
import express from 'express';

const app = express();
const port = 3000;
const recipeController = new RecipeController();

app.get('/', (req,res)=>{
    res.send("hello world");
});
app.get('/api/external/recipes',async (req,res)=>{
    await recipeController.getRecipes(req, res);
})

app.get('/api/external/recipe/:id(\\d+)', async (req, res) => {
    const { id } = req.params; // Extract the ID using destructuring
    await recipeController.getRecipe(req, res, id);
});
app.use((req, res) => {
    res.status(404).json({message: 'Not Found'});
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})







