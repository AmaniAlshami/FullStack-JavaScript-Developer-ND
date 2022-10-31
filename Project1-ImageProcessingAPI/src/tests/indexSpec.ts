import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Testing Image Endpoints', () => {
  it('Testing if Default image is exist', async () => {
    const response = await request.get('/image?filename=default');
    expect(response.status).toBe(200);
  });
  it('Testing if Default resizing by width and hight', async () => {
    const response =  await request.get('/image?filename=default&width=100&height=100');
    expect(response.status).toBe(200);

  });
  it('Testing if Any image is not exist', async () => {
    await request.get('/image?filename=default22').expect(404);

  });
});