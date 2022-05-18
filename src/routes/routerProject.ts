import { Request, Response, Router } from "express"
import { Project } from "../app/entity/Project"
import ProjectController from "../app/controller/ProjectController"
import { UserController } from "../app/controller/UserController"
import { AppDataSource } from "../database/data-source"
import { parse } from "path"
import authMiddleware from "../app/middlewares/authMiddleware"

//import Router function from Express
export const routerProject = Router()


//import controllers class
const projectcontroller = ProjectController
const usercontroller = new UserController()


//test of router
try {
    routerProject.get('/test', (req: Request, res: Response) => {
        return res.json({message: "Route of Project OK"})
    })
} catch (err) {
    console.error('err.message :>> ', err.message)
}


//create new project with getByUsername
try {
    routerProject.post('/create', authMiddleware, async(req: Request, res: Response) => {
        const {name, stack, description, link, username} = req.body
        const user = await usercontroller.getByUsername(username)
        if(!user){
            return res.status(404).json({message: "User does not exist!"})
        }else{
            const project = new Project(name, stack, description, link, user)
            const projectSaved = await projectcontroller.save(project)
            return res.status(201).json(projectSaved)
        }
    })
} catch (err) {
    
    console.error('err.message :>> ', err.message)
}


//list all projects
try {
    routerProject.get('/projects', authMiddleware, async(req: Request, res: Response) => {
        const projects = await projectcontroller.getAll()

        res.json(projects)
    })
} catch (err) {

    console.error('err.message :>> ', err.message)    
}

//list all projects of one user
try {
    routerProject.post('/userprojects', authMiddleware, async(req: Request, res: Response) => {
        const {username} = req.body
        const projects = await usercontroller.getAllOfOne(username)

        res.json(projects)
    })
} catch (err) {

    console.error('err.message :>> ', err.message)    
}

//delete project
try {
    routerProject.post('/delete', authMiddleware, async(req: Request, res: Response) => {
        const {username, name} = req.body
        const project = await projectcontroller.remove(username, name)

        return res.status(201).json({message: "Project removed with sucess!"})
    })
} catch (err) {

    console.error('err.message :>> ', err.message)    
}

//update project
try {
    routerProject.post('/update', authMiddleware, async(req: Request, res: Response) => {
        const { username, name, stack, description, link, nName, nStack, nDescription, nLink} = req.body
        const project = await projectcontroller.updateName(
            username, 
            name, 
            stack, 
            description, 
            link, 
            nName, 
            nStack, 
            nDescription, 
            nLink
        )
        
        return res.status(201).json({message: "Project updated with sucess!"})
    })
} catch (err) {
    console.error('err.message :>> ', err.message)
}