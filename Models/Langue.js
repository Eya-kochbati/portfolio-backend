const mongoose = require('mongoose');

const LangueSchema = new mongoose.Schema({
	name: { type: String, required: true, trim: true },
	level: { type: String, enum: ['native', 'fluent', 'intermediate', 'basic'], default: 'intermediate' },
	score: { type: Number, min: 0, max: 100 }
});

module.exports = mongoose.model('Langue', LangueSchema);
