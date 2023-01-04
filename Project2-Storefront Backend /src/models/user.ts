// @ts-ignore
import client from '../database';
import bcrypt from 'bcrypt';

const { PEPPER } = process.env;
const saltAround = process.env.SALT_ROUNDS!;  

export type User= {
    id?:number; 
    firstName :string;
    lastName:string;
    password?:string;
}
export class UserStore {

    // Get User index
    async index(): Promise<User[]> {
      try {
             // @ts-ignore
        const conn = await client.connect()
        const sql = 'SELECT * FROM Users'
  
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
        const sql = 'SELECT id , firstName , lastName FROM Users WHERE id=($1)'
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

      async create(u: User): Promise<User> {
        try {
      const sql = 'INSERT INTO Users (id, firstName, lastName, password) VALUES($1, $2, $3, $4) RETURNING *'
      // @ts-ignore
      const conn = await client.connect()
      const hash = bcrypt.hashSync(
        u.password as string+ PEPPER, 
        parseInt(saltAround)
     );
      const result = await conn.query(sql, [u.id ,u.firstName, u.lastName, hash])
      console.log(result);
      const User = result.rows[0];
  
      conn.release()
  return User;

        } catch (error) {
            throw new Error(`Could not add new User . Error: ${error}`)
        }
    }

    async authenticate(username: string, password: string): Promise<User | null> { 
        // @ts-ignore
       const conn = await client.connect();
       const sql = 'SELECT password FROM users WHERE username=($1) ';
       const result = await conn.query(sql, [username]);
         
       console.log(password+PEPPER);
       if (result.rows.length) 
       { 
            const user = result.rows[0] 
            console.log(user) 
            if (bcrypt.compareSync (password+PEPPER, user.password_digest)) 
            { 
              return user;
            } 
        } 
            return null
      } 
}