import express, { Request, Response } from 'express';
import { User, UserStore } from '../models/user';
import jwt from 'jsonwebtoken'
import verifyAuthToken from '../middlewares/authoraization'


const tokenSecret = process.env.TOKEN_SECRET!;  

const store = new UserStore()
const create = async (req: Request, res: Response) => {
    try {
        const user: User = {
            id : req.body.id,
            firstName: req.body.firstName,
            lastName : req.body.lastName,
            password : req.body.password
        };
        const newUser = await store.create(user);
        var token = jwt.sign({user: newUser}, tokenSecret);
        res.json(token)
    } catch(err) {
       console.log(err);
       res.status(400);
       res.json(err);
    }
}
const index = async (_req:Request, res: Response) => {
    try{
    const user = await store.index()
    res.json(user)
}   catch(err) {
    res.status(400);
    res.json(err);
 }
}

const show = async (req: Request, res: Response) => {
    try{
    const user = await store.show(req.params.id)
    res.json(user)
}   catch(err) {
    res.status(400);
    res.json(err);
 }
 }
const user_routes = (app: express.Application) => {
    app.get('/users/:id',verifyAuthToken,show)
    app.get('/users', verifyAuthToken,index)
    app.post('/users', create)
  }
 export default user_routes