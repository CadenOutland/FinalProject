const request = require('supertest');
const app = require('../server');

describe('Client API', () => {
  it('POST /clients - create client', async () => {
    const res = await request(app)
      .post('/clients')
      .send({ name: 'Client Test', email: 'test@example.com', phone: '123456' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  it('GET /clients - fetch all clients', async () => {
    const res = await request(app).get('/clients');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});