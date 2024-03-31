
// server.js
import http from 'http';
import {RecipeController} from "../controllers/RecipeController.js";

const hostname = '127.0.0.1';
const port = 3000;
const recipeController = new RecipeController();
const server = http.createServer(async (req, res) => {
    if (req.url === '/recipe' && req.method === 'GET') {
        await recipeController.getRecipe(req, res);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Not Found' }));
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


