import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import helmet from 'helmet'
import cors from 'cors'
// middleware for handling error
import { 
    errorHandler, 
    notFound 
} from './middleware/errorMiddleware.js'
// connect mongoDB
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const PORT = process.env.PORT || 1010
const HOST = '0.0.0.0'

void process.on('unhandledRejection', (reason, p) => {
    console.log(`BIG ERROR: \n`.red + p)
    console.log(`That's because of: \n`.red + reason)
})

const app = express()

// helmet protect
app.use(helmet())
app.use(helmet.permittedCrossDomainPolicies())
app.use(helmet.referrerPolicy())
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"]
    }
}))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// configure cors
var corsOptions = {
    origin: ["http://localhost:3000"],
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// test server connection
app.get('/', (req,res) => {
    res.send('Test Test(robot sound)>>>>>>>Server is running...>>>>>>>')
})

app.use(notFound)
app.use(errorHandler)

app.listen(
    PORT, 
    HOST,
    console.log(`   
    Welcome to backend of MyWay!!!
    Server is running in ${process.env.NODE_ENV} 
    HOST: ${HOST}
    PORT: ${PORT}...`.blue.bold)
)