import {pool} from "../config/dbConfig.js";
import {User} from "../models/User.js";


export class UserRepository{

async getAllUsers(){
    const query = 'SELECT * FROM users';
    const result = await pool.query(query);
    const users = result.rows.map(row => new User(
        row.id, 
        row.name, 
        row.email, 
        row.password, 
        row.role
        ));
    return users;
}

async getUserById(id) {
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await pool.query(query, [id]);
    if (result.rows.length === 0) {
        throw new Error(`User with ID ${id} not found`);
    }
    const userData = result.rows[0];
    const user = new User(
        userData.id, 
        userData.name, 
        userData.email, 
        userData.password, 
        userData.role
        );
    return user;
}
}