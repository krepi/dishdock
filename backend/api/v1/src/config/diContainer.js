
import {RecipeService} from "../services/RecipeService.js";
import RecipeController from "../controllers/RecipeController.js";

import {Userservice} from "../services/UserService.js";
import UserController from "../controllers/UserController.js";

const recipeService = new RecipeService();
const recipeController = new RecipeController(recipeService);

const userService = new Userservice();
const userController = new UserController(userService);

export { recipeController, userController };
