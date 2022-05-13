import * as express from 'express'
import routerUser from './routes/routerUser'
import { AppDataSource } from './database/data-source'
import * as cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.use('/user', routerUser)

export default app