import { Router } from 'express'
import { UserController } from '../controllers/user.js'

const router = Router()
const controller = new UserController()

router.get('/', controller.getAll)

export default router
