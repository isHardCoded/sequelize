import 'dotenv/config'
import { app } from './app.js'
import { sequelize } from './config/database.js'
import { User, Note } from './models/index.js'

import './models/User.js'

const PORT = process.env.PORT || 3000

async function start() {
	try {
		await sequelize.authenticate()
		console.log('Database connected!')

		await sequelize.sync({ force: true })

		console.log('Таблицы созданы по моделям!')

		const user = await User.create({ name: 'Alice' })
		await Note.create({
			title: 'Первая заметка',
			content: 'Тестовый контент',
			userId: user.id,
			createdAt: new Date('2026-10-01T10:00:00'),
			updatedAt: new Date('2026-10-01T10:00:00'),
		})

		app.listen(PORT, () => {
			console.log(`Server started: http://localhost:${PORT}`)
		})
	} catch (error) {
		console.error(`Database connection error: ${error}`)
	}
}

start()
