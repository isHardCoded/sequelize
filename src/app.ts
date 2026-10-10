import express, { type Request, type Response } from 'express'
import { User, Note } from "./models/index.js"
import { NoteController } from './controllers/Note.js'

export const app = express()

app.use(express.json())

const noteController = new NoteController()

app.get("/api/users", async (_req: Request, res: Response) => {
  const users = await User.findAll()
  res.json({ data: users })
})

app.get("/", (_req, res) => {
  res.json({ message: "API is working" })
})