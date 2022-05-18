import { Request, Response, NextFunction} from 'express';
import * as jwt from 'jsonwebtoken';


function authMiddleware(req: Request, res: Response, next: NextFunction){
    const { authorization } = req.headers
    
    if(!authorization){
        return res.sendStatus(401).json({message: "unauthorized!"})
    }

    try {
        const token = authorization.replace('Bearer ', '').trim()
        const validToken = jwt.verify(token, 'secret')
        req['tokenData'] = validToken
        const data = jwt.verify(token, 'secret')

        return next()
    } catch {
        return res.sendStatus(401)
    }
}

export default authMiddleware