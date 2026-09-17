const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
	title: { type: String, required: true, trim: true },
	shortDescription: { type: String, required: true },
	longDescription: { type: String, default: '' },
	technologies: [{ type: String }],
	repoUrl: { type: String, default: '' },
	demoUrl: { type: String, default: '' },
	featuredImage: { type: String, default: '' },
	images: [{ type: String }],
	startDate: { type: Date },
	endDate: { type: Date },
	isPublished: { type: Boolean, default: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date }
});

ProjectSchema.pre('save', function (next) {
	this.updatedAt = new Date();
	if (!this.slug && this.title) {
		this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
	}
	next();
});

module.exports = mongoose.model('Project', ProjectSchema);
