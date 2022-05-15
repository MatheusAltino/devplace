import { Any, Repository } from 'typeorm'
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

    //get user by email
    async getByEmail(email:string){
        try {
            const userRepository = await AppDataSource.getRepository(User)
            const user = await userRepository.findOneBy({
                email:email,
            })
            
            return user        
        } catch (err) {
            return console.error('err.message :>> ', err.message)
        }     
    }
    

    //get user by username
    async getByUsername(username: string): Promise <User>{
        const userRepository = await AppDataSource.getRepository(User)
        const user = await userRepository.findOneBy({
            username: username, 
        })
        
        return user
    }

    
    //get all projects of one user
    async getAllOfOne(username: string) {
        try {
            const userRepository = await AppDataSource.getRepository(User)

            const user = userRepository.findOneBy({
                username:username
            })
            if(!user){
                return ({message: "User does not exist!"})
            }else{
                const projects = await userRepository.find({
                    relations:{
                        project: true
                    },
                    where:{
                        username:username
                    }

                })
                return projects
            }
        } catch (err) {
            console.error('err.message :>> ', err.message)
        }
    }
}