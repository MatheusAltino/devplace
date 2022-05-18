import { Request, Response, Router} from 'express'
import {AuthController} from '../app/controller/AuthController'
import { AppDataSource } from '../database/data-source'
import { User } from '../app/entity/User'

const routerAuth = Router()


const authcontroller = new AuthController()

//test of route
try {
    routerAuth.get('/', (req: Request, res: Response) => {
        res.json({message: "Route of User OK"})
    })    
} catch (err) {
    console.error('err.message :>> ', err.message)
}

//authenticate
    routerAuth.post('/authenticate', async (req: Request, res: Response) => {
        const { email, password } = req.body
        const userRepository = await AppDataSource.getRepository(User)
        const user = await userRepository.findOneBy({
            email: email
        })
        if(!user){
            return res.status(400).json({message:"User does not exist!"})
        }
        if(user.password === password){
            const auth = await authcontroller.auth(email, password)
            
            return res.json({auth})
        }
    })

export default routerAuth