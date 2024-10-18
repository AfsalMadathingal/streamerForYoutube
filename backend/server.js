import express  from 'express'  
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import Router from './routes/streamRoutes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())


app.use('/api/stream',Router )




connectDB()

app.listen(3001, () => {
    console.log('listening on port 3001')
})

