import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import helmet from 'helmet'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT || 1010
const HOST = '0.0.0.0'

void process.on('unhandledRejection', (reason, p) => {
    console.log(`Here is the BIG ERROR: \n`.red + p)
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

app.get('/', (req,res) => {
    res.send('Server is running...')
})

app.listen(
    PORT, 
    HOST,
    console.log(`   
    Welcome to backend of MyWay!!!
    Server is running in ${process.env.NODE_ENV} 
    HOST: ${HOST}
    PORT: ${PORT}...`.blue.bold)
)