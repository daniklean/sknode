import express from 'express'
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

import { db } from "./config/db.js"

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

//app.use('/api/v1', )
db()
app.listen(port, () => {
    console.log(`Servidor ejecutandose por http://localhost:${port}`)
})