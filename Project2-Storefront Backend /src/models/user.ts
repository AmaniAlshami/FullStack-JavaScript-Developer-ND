// @ts-ignore
import client from '../database';


export type User= {
    id:number; 
    firstName :string;
    lastName:string;
    password:string;
}
export class UserStore {

    // Get User index
    async index(): Promise<User[]> {
      try {
             // @ts-ignore
        const conn = await client.connect()
        const sql = 'SELECT * FROM User'
  
        const result = await conn.query(sql)
  
        conn.release()
  
        return result.rows 
      } catch (error) {
        throw new Error(`Could not get Users. Error: ${error}`)
      }
    }

    // Show one User 
    async show(id: string): Promise<User> {
        try {
        const sql = 'SELECT * FROM User WHERE id=($1)'
        // @ts-ignore
        const conn = await client.connect()
    
        const result = await conn.query(sql, [id])
    
        conn.release()
    
        return result.rows[0]
        } catch (error) {
            throw new Error(`Could not find user ${id}. Error: ${error}`)
        }
      }

      // Create new User 

      async create(b: User): Promise<User> {
        try {
      const sql = 'INSERT INTO User (firstName, lastName, password) VALUES($1, $2, $3) RETURNING *'
      // @ts-ignore
      const conn = await client.connect()
  
      const result = await conn.query(sql, [b.firstName, b.lastName, b.password])
  
      const User = result.rows[0]
  
      conn.release()
  
      return User
        } catch (error) {
            throw new Error(`Could not add new User . Error: ${error}`)
        }
    }
}