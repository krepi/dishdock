// import { userService } from "../services/UserService.js";

 export default class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  getUser = async (req, res) => {
    try {
      const usersData = await this.userService.getUsers();
      res.status(200).json(usersData);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
  };
  getUsers = async (req, res) => {
    try {
      const { id } = req.params;
      const userData = await this.userService.getUser(id);
      res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
  };
}
// export const userController = new UserController();