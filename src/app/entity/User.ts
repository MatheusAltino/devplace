import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Project } from "./Project"

@Entity()
export class User {

    constructor(username: string, email: string, password: string, bio: string, website: string){
        this.username = username
        this.email = email
        this.password = password
        this.bio = bio
        this.website = website
    }

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        unique: true
    })
    username: string
    
    @Column({
        unique: true
    })
    email: string

    @Column()
    password: string
    
    @Column()
    bio: string

    @Column()
    website: string

    @OneToMany(() => Project, (project) => project.user)
    project: Project[]
}
