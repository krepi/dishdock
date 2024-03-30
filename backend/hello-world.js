import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';


import http from "node:http";

const hostname = '127.0.0.1';
const port = 3000;

const getRecipe = async () => {
    const apiKey = process.env.API_KEY_SPOON; // Użyj klucza API z pliku .env
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1`; // URL do pobrania losowego przepisu

    try {
        const response = await axios.get(url); // Wykonaj zapytanie do API przy użyciu axios
        return response.data; // axios automatycznie przetwarza odpowiedź jako JSON
    } catch (error) {
        console.error('Error fetching recipe:', error);
        return null; // W przypadku błędu zwróć null
    }
};

const server = http.createServer(async (req, res) => {
    if (req.url === '/recipe') { // Dodaj ścieżkę /recipe
        const recipeData = await getRecipe(); // Pobierz dane przepisu
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(recipeData)); // Wyślij dane przepisu jako JSON
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!\n');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
