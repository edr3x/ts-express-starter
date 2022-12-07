import express from 'express'
import cors from 'cors'
import 'dotenv/config'

if (!process.env.PORT) {
    process.exit(1)
}

const port: number = parseInt(process.env.PORT as string, 10)

const app = express()

app.use(cors())
app.use(express.json())

import { checkRouter } from './routes/checkRoute'
app.use('/', checkRouter)

app.listen(port, () => console.log(`listening in: http://localhost:${port}`))
