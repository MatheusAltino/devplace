import * as jwt from 'jsonwebtoken'
import { AppDataSource } from '../../database/data-source'
import { User } from '../entity/User'

export class AuthController {

    async auth(email: string, password: string) {
        const userRepository = await AppDataSource.getRepository(User)
        const user = await userRepository.findOneBy({
            email:email
        })
        if(!user || user.password !== password){
            return {message: "Access denied"}
        }else{
            const payload = {
                email: user.email
            }
            const token = jwt.sign({payload}, 'secret', {
                subject: user.email,
                expiresIn: '1d'
            })
                    
            return {token}
        }
    } catch (err) {
            console.error('err.message :>> ', err.message)
    }
}