import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../app/entity/User"
import { Project } from "../app/entity/Project"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "devplace-db",
    synchronize: true,
    logging: false,
    entities: [User, Project],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize().then(async () => {
    console.log('Db listen!')
}).catch(err => console.log('err.message :>> ', err.message))