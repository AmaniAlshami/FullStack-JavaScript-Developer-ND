   // @ts-ignore
import client from '../database';

export type order = {
    id:number;
productId:number;
quantity:number;
user_id: number ;
status : string;
}

export class orderStore {


      // Create new order 

      async create(b: order): Promise<order> {
        try {
      const sql = 'INSERT INTO order (productId, quantity, user_id, status) VALUES($1, $2, $3, $4) RETURNING *'
      // @ts-ignore
      const conn = await client.connect()
  
      const result = await conn.query(sql, [b.productId, b.quantity, b.user_id, b.status])
  
      const order = result.rows[0]
  
      conn.release()
  
      return order
        } catch (error) {
            throw new Error(`Could not add new order . Error: ${error}`)
        }
    }
}