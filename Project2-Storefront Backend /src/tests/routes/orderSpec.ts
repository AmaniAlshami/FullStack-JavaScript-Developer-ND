import supertest from 'supertest';
import app from '../../index';
const request = supertest(app);

describe('Testing Product Endpoints', () => {

    it('Testing Create order', async () => {
      const response =  await request.post('/orders/1')
      .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJBbWFuaSIsImxhc3RuYW1lIjoiQWxzaGFtaSIsInBhc3N3b3JkIjoiJDJiJDEwJC92SUNzOGRJUWgzSDlDTEcwQ2kuZmVXV0ZWSjQ5dUc2Mk83UTFndHZsZ1IuN1NUOWo1UXBtIn0sImlhdCI6MTY3MjM0MTI2MH0.JjtjFJvOz9oNyDlOpOflbMyoD2UPWucQl7a1fBUku4U')
      expect(response.status).toBe(200);
    });
    
    const payload = {productId: '1', quantity: 5 };
    it('Testing add product to order', async () => {
      const response = await request.post('/orders')
      .send(payload)
      .set('Content-Type', 'application/json')
      .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJBbWFuaSIsImxhc3RuYW1lIjoiQWxzaGFtaSIsInBhc3N3b3JkIjoiJDJiJDEwJC92SUNzOGRJUWgzSDlDTEcwQ2kuZmVXV0ZWSjQ5dUc2Mk83UTFndHZsZ1IuN1NUOWo1UXBtIn0sImlhdCI6MTY3MjM0MTI2MH0.JjtjFJvOz9oNyDlOpOflbMyoD2UPWucQl7a1fBUku4U')
      expect(response.status).toBe(200);
    });
    
    it('Testing if get orders for a user', async () => {
      const response =  await request.get('/orders')
      .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJBbWFuaSIsImxhc3RuYW1lIjoiQWxzaGFtaSIsInBhc3N3b3JkIjoiJDJiJDEwJC92SUNzOGRJUWgzSDlDTEcwQ2kuZmVXV0ZWSjQ5dUc2Mk83UTFndHZsZ1IuN1NUOWo1UXBtIn0sImlhdCI6MTY3MjM0MTI2MH0.JjtjFJvOz9oNyDlOpOflbMyoD2UPWucQl7a1fBUku4U')
      expect(response.status).toBe(200);
    });
    it('Testing if get order for a user not exit', async () => {
        const response =  await request.get('/orders/1')
        .set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkppoxLCJmaXJzdG5hbWUiOiJBbWFuaSIsImxhc3RuYW1lIjoiQWxzaGFtaSIsInBhc3N3b3JkIjoiJDJiJDEwJC92SUNzOGRJUWgzSDlDTEcwQ2kuZmVXV0ZWSjQ5dUc2Mk83UTFndHZsZ1IuN1NUOWo1UXBtIn0sImlhdCI6MTY3MjM0MTI2MH0.JjtjFJvOz9oNyDlOpOflbMyoD2UPWucQl7a1fBUku4U')
        expect(response.status).toBe(401);
    });

  });