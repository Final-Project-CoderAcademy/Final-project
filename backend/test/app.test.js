import request from 'supertest'
import app from '../app.js'



describe("GET /", () => {
  test("should respond with a 200 status code", async () => {
      await request(app).get('/').expect(200).expect('Content-Type', /json/)
    })
})

// describe("GET /api/sites", () => {
//   test("should response with an array", async () => {
//     const response = await request(app).get('/').expect(200).expect('Content-Type', /json/)
//   })
// })