// server.js
import http from 'http';
import {RecipeController} from "../controllers/RecipeController.js";

const hostname = '127.0.0.1';
const port = 3000;
const recipeController = new RecipeController();
const server = http.createServer(async (req, res) => {

    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end("hello from serwer");
    } else if (req.url === '/api/external/recipes' && req.method === 'GET') {
        await recipeController.getRecipes(req, res);
    } else if (req.url.match(/\/api\/external\/recipe\/\d+$/) && req.method === 'GET') {
        // Extract ID from the URL
        const id = req.url.split('/').pop();
        await recipeController.getRecipe(req, res, id);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({message: 'Not Found'}));
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


