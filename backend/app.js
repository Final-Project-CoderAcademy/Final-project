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
// routes
import siteRoutes from './routes/siteRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

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
    res.status(200)
    res.json({message: ">>>>>Server is connected<<<<<"})
})

app.use('/api/sites', siteRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

export default app