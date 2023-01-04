import express, { Request, Response } from 'express';
import { Product, ProductStore } from '../models/product';
import verifyAuthToken from '../middlewares/authoraization'

const store = new ProductStore()

const index = async (_req:Request, res: Response) => {
    try {
    const product = await store.index()
    res.json(product)
}   catch(err) {
    res.status(400);
    res.json(err);
 }
}

const show = async (req: Request, res: Response) => {
    try {
    const product = await store.show(req.params.id)
    if(product == null){
    res.status(404);}
    res.json(product)
}   catch(err) {
    res.status(400);
    res.json(err);
 }
 }
 
 const create = async (req: Request, res: Response) => {
     try {
         const product: Product = {
             id : req.body.id,
             name: req.body.name,
             price : req.body.price,
             category : req.body.category
         }
         const newProduct = await store.create(product)
         res.json(newProduct)
     } catch(err) {
        console.log(err);
        res.status(400);
        res.json(err);
     }
 }

 const product_routes = (app: express.Application) => {
   app.get('/products', index)
   app.get('/products/:id',show)
   app.post('/products', verifyAuthToken,create)
 }
export default product_routes