import express, { Request, Response } from 'express';
import { order, orderStore } from '../models/order';
import verifyAuthToken from '../middlewares/authoraization'

const store = new orderStore()

const index = async (_req:Request, res: Response) => {
    const product = await store.index()
    res.json(product)
}

const show = async (req: Request, res: Response) => {
    const order = await store.show(req.params.id)
    res.json(order)
 }
 
 const create = async (req: Request, res: Response) => {
     try {
         const order: order = {
             id : 1,
             user_id : req.body.user_id,
             status : "Active"
         }
         const newOrder = await store.create(order)
         res.json(newOrder)
     } catch(err) {
        console.log(err);
        res.status(400);
        res.json(err);
     }
 }

const addProduct = async (_req: Request, res: Response) => {
  const orderId: string = _req.params.id
  const productId: string = _req.body.productId
  const quantity: number = parseInt(_req.body.quantity)

  try {
    const addedProduct = await store.addProduct(quantity, orderId, productId)
    res.json(addedProduct)
  } catch(err) {
    res.status(400)
    res.json(err)
  }
} 

const order_routes = (app: express.Application) => {
    app.get('/orders', verifyAuthToken,index)
    app.get('/orders/:id', verifyAuthToken,show)
    app.post('/orders', verifyAuthToken,create)
    // add product
    app.post('/orders/:id/products',verifyAuthToken, addProduct)
}

export default order_routes