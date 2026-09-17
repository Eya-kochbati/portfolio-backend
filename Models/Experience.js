const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
	role: { type: String, required: true, trim: true },
	company: { type: String, required: true, trim: true },
	location: { type: String, default: '' },
	startDate: { type: Date },
	endDate: { type: Date },
	current: { type: Boolean, default: false },
	description: { type: String, default: '' },
	responsibilities: [{ type: String }],
	achievements: [{ type: String }],
	technologies: [{ type: String }],
	order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Experience', ExperienceSchema);
