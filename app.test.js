const request = require('supertest');
const app = require('./app');

describe('Calculator API', () => {
  test('Health check endpoint', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });

  test('POST /add - adds two numbers', async () => {
    const res = await request(app)
      .post('/add')
      .send({ a: 5, b: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(8);
  });

  test('POST /subtract - subtracts two numbers', async () => {
    const res = await request(app)
      .post('/subtract')
      .send({ a: 10, b: 4 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(6);
  });

  test('POST /multiply - multiplies two numbers', async () => {
    const res = await request(app)
      .post('/multiply')
      .send({ a: 6, b: 7 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(42);
  });

  test('POST /divide - divides two numbers', async () => {
    const res = await request(app)
      .post('/divide')
      .send({ a: 20, b: 4 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });

  test('POST /divide - handles division by zero', async () => {
    const res = await request(app)
      .post('/divide')
      .send({ a: 10, b: 0 });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Cannot divide by zero');
  });

  test('Invalid input - non-numeric values', async () => {
    const res = await request(app)
      .post('/add')
      .send({ a: 'five', b: 3 });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Both a and b must be numbers');
  });

  test('POST /power - raises to power', async () => {
    const res = await request(app)
      .post('/power')
      .send({ a: 2, b: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(8);
  });

  test('Health endpoint returns service info', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
    expect(res.body.service).toBe('Calculator API');
    expect(res.body.version).toBe('1.0.0');
  });
});
