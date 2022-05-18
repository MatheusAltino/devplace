import * as express from 'express'
import routerUser from './routes/routerUser'
import {routerProject} from './routes/routerProject'
import * as cors from 'cors'
import routerAuth from './routes/routerAuth'

const app = express()

app.use(express.json())

app.use(cors())

app.use('/auth', routerAuth)
app.use('/user', routerUser)
app.use('/project', routerProject)

export default app