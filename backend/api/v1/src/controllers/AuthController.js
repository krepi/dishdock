import {UserService} from "../services/UserService.js";


export default class AuthController {
    constructor() {

        this.userService = new UserService();
    }

    async login(req, res) {
        try {
            const usersData = await this.userService.loginUser(req.body);
            res.status(200).json(usersData);
        } catch (e) {

        }
    }

    async register(req, res) {

    }
}