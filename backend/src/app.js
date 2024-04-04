import express from 'express';
import dotenv from 'dotenv';
import recipeRoutes from './routes/recipeRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware do parsowania JSON

app.use('/api/external', recipeRoutes); // Użycie routera przepisów

app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});








