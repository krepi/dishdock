import dotenv from 'dotenv';

dotenv.config();

import {Pool} from 'pg';

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: 5432, // domyślny port dla PostgreSQL
});

export {pool};