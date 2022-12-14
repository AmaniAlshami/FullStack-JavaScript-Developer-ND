import jwt , { JwtPayload }from 'jsonwebtoken'
import { Request, Response } from 'express';
import { User } from '../models/user';
const tokenSecret = process.env.TOKEN_SECRET!;  


const verifyAuthToken = (req: Request, res: Response, next: () => void) => {
    try {
        const authorizationHeader = req.headers.authorization as string
        const token = authorizationHeader.split(' ')[1]
        const decoded = jwt.verify(token, tokenSecret) as JwtPayload
        req.params.user_id = decoded.user.id;
        next()
    } catch (error) {
        res.status(401)
        res.json('Access denied, invalid token')
    }
}

export default verifyAuthToken;