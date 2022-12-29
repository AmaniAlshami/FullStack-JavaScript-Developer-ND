import jwt from 'jsonwebtoken'
import { Request, Response } from 'express';
const tokenSecret = process.env.TOKEN_SECRET!;  


const verifyAuthToken = (req: Request, res: Response, next: () => void) => {
    try {
        const authorizationHeader = req.headers.authorization as string
        const token = authorizationHeader.split(' ')[1]
        const decoded = jwt.verify(token, tokenSecret)

        next()
    } catch (error) {
        res.json('Access denied, invalid token')
        res.status(401)
    }
}

export default verifyAuthToken;