const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: { type: String, required: true},
    description: { type: String },
    image: {type: String},
    slug: {type: String, slug: 'name', unique: true},
    videoId: {type: String, requỉed: true},
    level: {type: String},
    deletedAt: {type: Date},
}, {
    timestamps: true,
});

// Custom query helpers
CourseSchema.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidType ? req.query.type : 'desc',
        });
    }

    return this;
}

// Add plugins
CourseSchema.plugin(mongooseDelete, { overrideMethods: true, deletedAt: true });
mongoose.plugin(slug);

module.exports = mongoose.model('Course', CourseSchema);