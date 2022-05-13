import { AppDataSource } from '../../database/data-source'
import { User } from '../entity/User'

export class UserController {
    
    //save new User
    async save(user:User){
        try {
            const userSaved = await AppDataSource.manager.save(user)
            return userSaved
        } catch (err) {
            console.error('err.message :>> ', err.message)
        }
    }

    //get all users
    async getAll() {
        try {
            const users = await AppDataSource.manager.find(User)
            return users            
        } catch (err) {
            console.error('err.message :>> ', err.message)
        }
    }

    //upadate users
    async update() {
        try {
        
        } catch (err) {
            console.error('err.message :>> ', err.message)
        }
    }
}