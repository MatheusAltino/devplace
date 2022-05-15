import { resolve } from 'path'
import { AppDataSource } from '../../database/data-source'
import { Project } from '../entity/Project'
import { User } from '../entity/User'

export class ProjectController {
    
    // save new project
    async save(project:Project){
        try {
            const projectRepository = await AppDataSource.getRepository(Project)
            const projectSaved = await projectRepository.save(project)
            
            return projectSaved
        } catch (err) {
            console.error('err.message :>> ', err.message)
        }
    }

    //get all projects
    async getAll() {
        try {
            const projectRepository = await AppDataSource.getRepository(Project)
            const projects = await projectRepository.find()
            return projects
        } catch (err) {
            console.error('err.message :>> ', err.message)
        }
    }

    //remove one project
    async remove(username: string, name: string){
        const userRepository = await AppDataSource.getRepository(User)
        const projectRepository = await AppDataSource.getRepository(Project)
        const user = await userRepository.findOneBy({
            username:username,
        })
        if(!user){
            return ({message: "User does not exist!"})
        }else{
            const project = await projectRepository.findOneBy({
                name:name,
            })

            const projectDel = await projectRepository.remove(project)

            return projectDel
        }
    }

    //update project name
    async updateName(
        username: string, 
        name: string, 
        stack: string, 
        description: string,
        link: string,
        nName: string, 
        nStack: string, 
        nDescription: string, 
        nLink: string){
        const userRepository = await AppDataSource.getRepository(User)
        const user = await userRepository.findOneBy({
            username: username
        })
        if(!user){
            return ({message: "User does not exist!"})
        }else{
            const projectRepository = await AppDataSource.getRepository(Project)
            const project = await projectRepository.findOneBy({
                name: name,
                stack: stack,

            })
            const updateProjectName = await projectRepository.update({name:name}, {name:nName})
            const updateProjectStack = await projectRepository.update({stack:stack}, {stack:nStack})
            const updateProjectDescription = await projectRepository.update({description:description}, {description:nDescription})
            const updateProjectLink = await projectRepository.update({link:link}, {link:nLink})
            
            return {
                updateProjectName,
                updateProjectStack,
                updateProjectDescription,
                updateProjectLink
            }
        }
    }

}

export default new ProjectController()