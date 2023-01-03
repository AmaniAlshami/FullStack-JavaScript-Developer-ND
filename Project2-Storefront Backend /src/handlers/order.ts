import express, { Request, Response } from 'express';
import { order, orderStore } from '../models/order';
import verifyAuthToken from '../middlewares/authoraization'

const store = new orderStore()

const index = async (req:Request, res: Response) => {
    const product = await store.index(req.params.user_id)
    res.json(product)
}

const show = async (req: Request, res: Response) => {
    const order = await store.show(req.params.id,req.params.user_id)
    res.json(order)
 }
 
 const create = async (req: Request, res: Response) => {
     try {
         const order: order = {
             id :parseInt(req.params.id),
             user_id :parseInt(req.params.user_id) ,
             status : "Active"
         }
         const newOrder = await store.create(order)
         res.json(newOrder)
     } catch(err) {
        res.json(err);
        console.log(err);
        res.status(400);
     }
 }

const addProduct = async (req: Request, res: Response) => {
  const orderId = req.params.id
  const productId: string = req.body.productId
  const quantity: number = parseInt(req.body.quantity)
  try {
    const addedProduct = await store.addProduct(quantity, orderId, productId)
    res.json(addedProduct)
  } catch(err) {
    console.log(err)
    res.status(400)
    res.json(err)
  }
} 

const order_routes = (app: express.Application) => {
    app.get('/orders', verifyAuthToken,index)
    app.get('/orders/:id', verifyAuthToken,show)
    app.post('/orders/:id', verifyAuthToken,create)
    // add product
    app.post('/orders/:id/products',verifyAuthToken, addProduct)
}

export default order_routes