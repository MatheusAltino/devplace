import { ManyToOne, Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { User } from './User'

@Entity()
export class Project {
    constructor(name: string, stack: string, description: string, link: string, user: User){
        this.name = name
        this.stack = stack
        this.description = description
        this.link = link
        this.user = user
    }

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        unique: true
    })
    name: string

    @Column()
    stack: string

    @Column()
    description: string

    @Column()
    link: string

    @ManyToOne(() => User, (user) => user.project)
    user: User
}