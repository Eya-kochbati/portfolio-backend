const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: { type: String, required: true, trim: true },
	email: { type: String, required: true, unique: true, trim: true },
	password: { type: String, required: true },
	role: { type: String, default: 'admin' },
	isActive: { type: Boolean, default: true },
	createdAt: { type: Date, default: Date.now },
	lastLogin: { type: Date }
});

module.exports = mongoose.model('User', UserSchema);
