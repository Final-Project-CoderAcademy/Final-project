import request from 'supertest'
import app from '../app.js'
import mongoose from 'mongoose'
import Site from '../models/siteModel.js'
import User from '../models/userModel.js'

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

// test sites API
describe("sites", () => {

    describe('GET /api/sites', () => {
      it("should respond with 200", async () => {
        await request(app).get(`/api/sites`).expect(200)
      })
    })

    describe('POST /api/sites', () => {
      it("should post a new site", async () => {
        const response = await request(app).post('/api/users/login').send({
          email: "admin@example.com",
          password: "123456"
        });
        const token = await response.body.token;
        const site = await request(app).post(`/api/sites`).set('Content-Type', 'application/json').set('Authorization', `Bearer ${token}`)
        expect(site.body.name).toBe("name of the site");
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

    describe('PUT /api/sites/:id', () => {
      it("should post a new site", async () => {
        const response = await request(app).post('/api/users/login').send({
          email: "admin@example.com",
          password: "123456"
        });
        const token = await response.body.token;
        const targetSite = await Site.findOne({name: "name of the site"})
        const targetSiteId = targetSite._id
        const site = await request(app).put(`/api/sites/${targetSiteId}`).send({
          name: "change name",
          description: "The Big Banana is Australia's ",
          rating: 4.0,
          numComments: 5,
          image: "/images/bigbanana.jpg",
          category: "park"
        }).set('Content-Type', 'application/json').set('Authorization', `Bearer ${token}`)
        expect(site.body.name).toBe("change name");
      })
    })

    describe("DELETE api/sites/:id", () => {
      it("should delete a site", async () => {
        const response = await request(app).post('/api/users/login').send({
          email: "admin@example.com",
          password: "123456"
        });
        const token = await response.body.token;
        const targetSite = await Site.findOne({name: "change name"})
        const targetSiteId = targetSite._id
        const site = await request(app).delete(`/api/sites/${targetSiteId}`).set('Content-Type', 'application/json').set('Authorization', `Bearer ${token}`)
        expect(site.statusCode).toBe(200);
      })
    })
})

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// test users API
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

  describe("POST api/users/register", () => {
    it("should response with 200", async () => {
      const response = await request(app).post('/api/users/register').send({
        name: "heyhey",
        email: 'heyhey@example.com',
        password: '123456'
      })
      expect(response.statusCode).toBe(201)
      expect(response.body.name).toBe('heyhey')
      // this new user will be deleted in the deleting test "DELETE api/users/:id"
    })
  })

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

  describe("GET api/users/profile", () => {
    it("should response with 200", async () => {
      const admin = await request(app).post('/api/users/login').send({
        email: 'todd@example.com',
        password: '123456'
      })
      const token = await admin.body.token
      const response = await request(app).get('/api/users/profile').set('Authorization', `Bearer ${token}`)
      expect(response.body.name).toBe('todd')
    })
  })

  describe('PUT /api/users/profile', () => {
    it("should post a new site", async () => {
      const response = await request(app).post('/api/users/login').send({
        email: "heyhey@example.com",
        password: "123456"
      });
      const token = await response.body.token;
      const res = await request(app).put(`/api/users/profile`).send({
        name: "hey",
      }).set('Content-Type', 'application/json').set('Content-Type', 'application/json').set('Authorization', `Bearer ${token}`)
      expect(res.body.name).toBe("hey");
    })
  })

  describe("DELETE api/users/:id", () => {
    it("should response with 200", async () => {
      const admin = await request(app).post('/api/users/login').send({
        email: 'admin@example.com',
        password: '123456'
      })
      const token = await admin.body.token
      const targetUser = await User.findOne({name: 'hey'})
      const targetUserId = targetUser._id
      const response = await request(app).delete(`/api/users/${targetUserId}`).set('Authorization', `Bearer ${token}`)
      expect(response.statusCode).toBe(200)
    })
  })
})


