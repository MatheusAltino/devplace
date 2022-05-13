import {Request, Response, Router} from 'express'
import { UserController } from '../app/controller/UserController'
import { User } from '../app/entity/User'

const routerUser = Router()

const usercontroller = new UserController()

try {
    routerUser.get('/', (req: Request, res: Response) => {
        res.json({message: "Route of User OK"})
    })    
} catch (error) {
    console.log(error)
}

try {
    routerUser.post('/register', async (req: Request, res: Response) => {
        const {username, email, password, bio, website} = req.body
        const user = new User(username, email, password, bio, website)
        const userSaved = await usercontroller.save(user)
        
        res.json(userSaved)
    })    
} catch (error) {
    console.log(error)
}

try {
    routerUser.get('/users', async (req: Request, res: Response) => {
        const users = await usercontroller.getAll()

        res.json(users)
    })    
} catch (error) {
    console.log(error)
}

export default routerUser