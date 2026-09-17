const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
	title: { type: String, required: true, trim: true },
	resume: { type: String, required: true },
	social: {
		github: { type: String, default: '' },
		linkedin: { type: String, default: '' }
	},
	updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('About', AboutSchema);
