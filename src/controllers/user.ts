import type { Request, Response } from 'express'
import { Note, User } from '../models/index.js'

export class UserController {
	getAll = async (req: Request, res: Response): Promise<void> => {
		try {
			const users = await User.findAll({
				include: [
					{
						model: Note,
						as: 'notes',
					},
				],
			})
			res.status(200).json(users)
		} catch (error) {
			res.status(500).json({
				message: 'Ошибка при получении пользователей',
			})
		}
	}
}
