import supertest from 'supertest';
import app from '../index';
import { resizeImage , getImage} from '../Utilities/imageHandler'
import path from 'path';
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
  it('Testing if send Invalid width or hight', async () => {
    const response =  await request.get('/image?filename=default&width=100');
    expect(response.status).toBe(404);

  });
  it('Testing if Any image is not exist', async () => {
    await request.get('/image?filename=default22').expect(404);

  });

  it('Testing resizing Function ', async () => {
     expect(await resizeImage("default", 500, 500)).toEqual(path.join(__dirname,'../../assets/thumbnails/default_500_500.png'));
  });
  it('Testing getImage Function ', async () => {
    expect(await getImage("default")).toEqual(path.join(__dirname,'../../assets/images/default.png'));

 });
});