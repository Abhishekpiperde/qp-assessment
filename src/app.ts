import { connectDB } from './config/postgres.db'
import express from 'express'
import { errorHandler } from './middlewares/ErrorHandler'

const app = express()
const PORT = process.env.PORT||3000;

app.use(express.json())

app.use(errorHandler)

async function startServer() {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Unable to start the server:', error)
  }
}

startServer();

