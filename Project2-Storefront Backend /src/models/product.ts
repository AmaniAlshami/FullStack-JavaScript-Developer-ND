   // @ts-ignore
import client from '../database';

export type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
};

export class ProductStore {

    // Get product index
    async index(): Promise<Product[]> {
      try {
             // @ts-ignore
        const conn = await client.connect()
        const sql = 'SELECT * FROM product'
        const result = await conn.query(sql)
  
        conn.release()
        return result.rows 
      } catch (error) {
        throw new Error(`Could not get products. Error: ${error}`)
      }
    }

    // Show one Product 
    async show(id: string): Promise<Product> {
        try {
        const sql = 'SELECT * FROM product WHERE id=($1)'
        // @ts-ignore
        const conn = await client.connect()
    
        const result = await conn.query(sql, [id])
    
        conn.release()
    
        return result.rows[0]
        } catch (error) {
            throw new Error(`Could not find Product ${id}. Error: ${error}`)
        }
      }

      // Create new product 

      async create(p: Product): Promise<Product> {
        try {
          console.log()
      const sql = 'INSERT INTO product (id, name, price, category) VALUES($1, $2, $3, $4) RETURNING *'
      // @ts-ignore
      const conn = await client.connect()
  
      const result = await conn.query(sql, [p.id, p.name, p.price, p.category])
  
      const product = result.rows[0]
  
      conn.release()
  
      return product
        } catch (error) {
            throw new Error(`Could not add new product. Error: ${error}`)
        }
    }
}