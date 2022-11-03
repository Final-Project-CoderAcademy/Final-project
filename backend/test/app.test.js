import app from '../app.js'
import request from 'supertest'

describe("GET /", () => {
    test("should respond with a 200 status code", async () => {
        const response = await request(app).get('/').expect(200).expect('Content-Type', /json/)
      })
})

