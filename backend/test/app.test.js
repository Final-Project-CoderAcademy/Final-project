import request from 'supertest'
import app from '../app.js'
import mongoose from 'mongoose'
import {Site} from '../models/siteModel.js'
import {User} from '../models/userModel.js'

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
})

afterAll(async () => {
  await mongoose.connection.close()
})


// test server start request '/'
describe("GET /", () => {
  it("should respond with a 200 status code", async () => {
      await request(app).get('/').expect(200).expect('Content-Type', /json/)
    })
})

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// test sites server '/api/sites'
describe("sites", () => {

    describe('GET /api/sites', () => {
      it("should respond with 200", async () => {
        await request(app).get(`/api/sites`).expect(200)
      })
    })

    describe('GET /api/sites/:id', () => {
      describe('given the site not exist',() => {
        it("should respond with 500 when give ", async () => {
          const siteId = 'site1234'
          await request(app).get(`/api/sites/${siteId}`).expect(500)
        })
      })
      describe('given the site exist', () => {
        it("should respond with accurate data", async () => {
          const res = await request(app).get(`/api/sites/6364b4f41230101b9667ea25`)
          expect(res.body.name).toBe("Hiking in Tasmania")
        })
      })
    })

    // describe('only for admin', () => {

    //   describe('POST /api/sites', () => {
    //     it("should post a new site", async () => {
    //       const response = await request(app).post('/users/login').send({
    //         email: "admin@example.com",
    //         password: "123456"
    //       });
    //       const token = response.body.token;
    //       console.log(token)
    //       const site = await request(app).post(`/api/sites`).set('Content-Type', "application/json").set('Authorization', `Bearer ${token}`)
    //       expect(site.body.name).toBe('name of the site');
    //     })
    //   })
    // })
    
})

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

describe("users", () => {
  describe("POST api/users/login", () => {
    it("should response with 200", async () => {
      const response = await request(app).post('/api/users/login').send({
        email: 'todd@example.com',
        password: '123456'
      })
      expect(response.statusCode).toBe(200)
      expect(response.body.name).toBe('todd')
    })
  })

  // describe("POST api/users/register", () => {
  //   it("should response with 200", async () => {
  //     const response = await request(app).post('/api/users/register').send({
  //       name: "heyhey",
  //       email: 'heyhey@example.com',
  //       password: '123456'
  //     })
  //     expect(response.statusCode).toBe(201)
  //     expect(response.body.name).toBe('heyhey')
  //     const user = await User.findById(response.body._id)
  //     await user.remove()
  //   })
  // })

  describe("GET api/users", () => {
    it("should response with 200", async () => {
      const admin = await request(app).post('/api/users/login').send({
        email: 'admin@example.com',
        password: '123456'
      })
      const token = await admin.body.token
      const response = await request(app).get('/api/users').set('Authorization', `Bearer ${token}`)
      expect(response.statusCode).toBe(200)
      
    })
  })

})


