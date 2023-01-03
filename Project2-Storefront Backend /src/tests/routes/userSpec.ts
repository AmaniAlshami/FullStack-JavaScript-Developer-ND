import supertest from 'supertest';
import app from '../../index';
const request = supertest(app);

describe('Testing User Endpoints', () => {

    const payload = {firstName: 'Amani', lastName: "Alshami" , password: 'a123' , id : 1};
    it('Testing Create user', async () => {
      const response =  await request.post('/user')
      .send(payload)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      expect(response.status).toBe(200);
    });
    
    it('Testing get user', async () => {
      const response = await request.get('/user')
      .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJBbWFuaSIsImxhc3RuYW1lIjoiQWxzaGFtaSIsInBhc3N3b3JkIjoiJDJiJDEwJC92SUNzOGRJUWgzSDlDTEcwQ2kuZmVXV0ZWSjQ5dUc2Mk83UTFndHZsZ1IuN1NUOWo1UXBtIn0sImlhdCI6MTY3MjM0MTI2MH0.JjtjFJvOz9oNyDlOpOflbMyoD2UPWucQl7a1fBUku4U')
      expect(response.status).toBe(200);
    });
    
    it('Testing if user not authoris', async () => {
      const response =  await request.get('/user/1')
      .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJBbWFuaSpopmxhc3RuYW1lIjoiQWxzaGFtaSIsInBhc3N3b3JkIjoiJDJiJDEwJC92SUNzOGRJUWgzSDlDTEcwQ2kuZmVXV0ZWSjQ5dUc2Mk83UTFndHZsZ1IuN1NUOWo1UXBtIn0sImlhdCI6MTY3MjM0MTI2MH0.JjtjFJvOz9oNyDlOpOflbMyoD2UPWucQl7a1fBUku4U')
      expect(response.status).toBe(401);
    });

  });