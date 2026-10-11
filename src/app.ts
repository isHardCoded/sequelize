import express, { type Request, type Response } from 'express'

import noteRoutes from './routes/note.js'
import userRoutes from './routes/user.js'

export const app = express()

app.use(express.json())

app.use('/api/notes', noteRoutes)
app.use('/api/users', userRoutes)

app.get('/', (_req, res) => {
	res.json({ message: 'API is working' })
})
