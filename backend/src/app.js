import express from 'express';
import dotenv from 'dotenv';
import recipeRoutes from './routes/recipeRoutes.js';
import userRoutes from './routes/userRoutes.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware do parsowania JSON

app.use('/api/external', recipeRoutes); // Użycie routera przepisów z api
app.use('/user',userRoutes); //Uzycie routera dla uzytkownikow

app.use((req, res) => {
    res.status(404).json({ message: 'Not Found' });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});








