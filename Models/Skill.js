const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
	name: { type: String, required: true, trim: true },
	category: { type: String, enum: ['frontend', 'backend', 'database', 'tools'], default: 'frontend' },
	level: { type: String, enum: ['basic', 'intermediate', 'advanced', 'expert'], default: 'intermediate' },
	percent: { type: Number, min: 0, max: 100, default: 50 },
});

module.exports = mongoose.model('Skill', SkillSchema);
