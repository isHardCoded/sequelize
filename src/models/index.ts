import { User } from './User.js'
import { Note } from './Note.js'

User.hasMany(Note, {
	foreignKey: 'userId',
	as: 'notes',
})

Note.belongsTo(User, {
	foreignKey: 'userId',
	as: 'notes',
})

export { User, Note }
