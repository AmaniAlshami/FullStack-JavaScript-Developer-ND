import supertest from 'supertest';
import app from '../../index';
const request = supertest(app);

describe('Testing Product Endpoints', () => {

    const payload = {name: 'Apple', price: 5 , category: 'Fruits' , id : 10};
    it('Testing Create product', async () => {
      const response =  await request.post('/products')
      .send(payload)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJBbWFuaSIsImxhc3RuYW1lIjoiQWxzaGFtaSIsInBhc3N3b3JkIjoiJDJiJDEwJC92SUNzOGRJUWgzSDlDTEcwQ2kuZmVXV0ZWSjQ5dUc2Mk83UTFndHZsZ1IuN1NUOWo1UXBtIn0sImlhdCI6MTY3MjM0MTI2MH0.JjtjFJvOz9oNyDlOpOflbMyoD2UPWucQl7a1fBUku4U')
      expect(response.status).toBe(200);
    });
    
    it('Testing get products', async () => {
      const response = await request.get('/products');
      expect(response.status).toBe(200);
    });
    
    it('Testing if product id = 10 exit', async () => {
      const response =  await request.get('/products/10');
      expect(response.status).toBe(200);
    });
    it('Testing if product id 1000000 not exit', async () => {
        const response =  await request.get('/products/1000000');
        expect(response.status).toBe(404);
    });

  });