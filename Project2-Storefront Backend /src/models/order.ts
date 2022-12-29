   // @ts-ignore
import client from '../database';

export type order = {
    id:number;
  user_id: number ;
  status : string;
};

export type order_products = {
  id:number;
product_id:number;
quantity:number;
order_id: number ;
}

export class orderStore {

// Get order index
async index(): Promise<order[]> {
  try {
         // @ts-ignore
    const conn = await client.connect()
    const sql = 'SELECT * FROM orders'
    const result = await conn.query(sql)

    conn.release()
    return result.rows 
  } catch (error) {
    throw new Error(`Could not get orders. Error: ${error}`)
  }
}

// Show one order 
async show(id: string): Promise<order> {
    try {
    const sql = 'SELECT * FROM orders WHERE id=($1)'
    // @ts-ignore
    const conn = await client.connect()

    const result = await conn.query(sql, [id])

    conn.release()

    return result.rows[0]
    } catch (error) {
        throw new Error(`Could not find order ${id}. Error: ${error}`)
    }
  }

  // Create new order 
  async create(p: order): Promise<order> {
    try {
      console.log()
  const sql = 'INSERT INTO orders (id, user_id, status) VALUES($1, $2, $3) RETURNING *'
  // @ts-ignore
  const conn = await client.connect()

  const result = await conn.query(sql, [p.id, p.user_id, p.status])

  const product = result.rows[0]

  conn.release()

  return product
    } catch (error) {
        throw new Error(`Could not add new order. Error: ${error}`)
    }
}

  // add product to the order 
  async addProduct(quantity: number, orderId: string, productId: string): Promise<order> {
    // get order to see if it is open
    try {
      const ordersql = 'SELECT * FROM orders WHERE id=($1)'
      //@ts-ignore
      const conn = await Client.connect()

      const result = await conn.query(ordersql, [orderId])

      const order = result.rows[0]

      if (order.status !== "open") {
        throw new Error(`Could not add product ${productId} to order ${orderId} because order status is ${order.status}`)
      }

      conn.release()
    } catch (err) {
      throw new Error(`${err}`)
    }

    try {
      const sql = 'INSERT INTO order_products (quantity, order_id, product_id) VALUES($1, $2, $3) RETURNING *'
      //@ts-ignore
      const conn = await Client.connect()

      const result = await conn
          .query(sql, [quantity, orderId, productId])

      const order = result.rows[0]

      conn.release()

      return order
    } catch (err) {
      throw new Error(`Could not add product ${productId} to order ${orderId}: ${err}`)
    }
  }


}