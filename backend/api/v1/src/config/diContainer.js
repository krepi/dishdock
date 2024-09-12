
import {RecipeService} from "../services/RecipeService.js";
import RecipeController from "../controllers/RecipeController.js";

import {UserService} from "../services/UserService.js";
import UserController from "../controllers/UserController.js";

const recipeService = new RecipeService();
const recipeController = new RecipeController(recipeService);

const userService = new UserService();
const userController = new UserController(userService);

export { recipeController, userController };
