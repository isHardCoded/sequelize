import type { Request, Response } from 'express'
import { Note } from '../models/index.js'

export class NoteController {
	getAll = async (req: Request, res: Response): Promise<void> => {
		try {
			const notes = await Note.findAll()
			res.status(200).json(notes)
		} catch (error) {
			res.status(500).json({
				message: 'Ошибка при получении заметок',
			})
		}
	}
}
