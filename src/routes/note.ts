import { Router } from 'express'
import { NoteController } from '../controllers/note.js'

const router = Router()
const controller = new NoteController()

router.get('/', controller.getAll)

export default router
