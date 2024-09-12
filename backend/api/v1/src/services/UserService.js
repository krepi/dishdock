import { UserRepository } from "../repository/UserRepository.js";

export  class UserService {
  
  constructor(){
    this.userRepository = new UserRepository();
  }
  
    async getUsers() {
try{
const usersData = await this.userRepository.getAllUsers();
return usersData;
} catch (error){
    console.error('Error at getUsers:', error)
}
  }
 async  getUser(id) {
    try{
        const userData = await this.userRepository.getUserById(id);
        return userData;
    } catch (error){
        console.error('Error at getUser:', error)
    }
 }
  
 async createUser(user) {
    try{

    } catch (error){
        console.error('Error at createUser:', error)
    }
  }
  async loginUser(user) {
      try{

      } catch (error){
          console.error('Error in loginUser:', error)
      }
  }

  async deleteUser(id) {
    try{

    } catch (error){
        console.error('Error at deleteUser:', error)
    }
  }
}
