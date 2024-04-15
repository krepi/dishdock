import { UserRepository } from "../repository/UserRepository";

export  class Userservice {
  
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
  async deleteUser(id) {
    try{

    } catch (error){
        console.error('Error at deleteUser:', error)
    }
  }
}
