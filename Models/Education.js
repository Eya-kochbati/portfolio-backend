const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
	institution: { type: String, required: true, trim: true },
	degree: { type: String, required: true, trim: true },
	fieldOfStudy: { type: String, default: '' },
	startDate: { type: Date },
	endDate: { type: Date },
	grade: { type: String, default: '' },
	description: { type: String, default: '' },
	location: { type: String, default: '' }
});

module.exports = mongoose.model('Education', EducationSchema);
