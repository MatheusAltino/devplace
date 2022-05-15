import * as express from 'express'
import routerUser from './routes/routerUser'
import {routerProject} from './routes/routerProject'
import { AppDataSource } from './database/data-source'
import * as cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.use('/user', routerUser)
app.use('/project', routerProject)

export default app