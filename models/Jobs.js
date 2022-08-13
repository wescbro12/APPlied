const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    user: String,
    company: {
        type: String,
        required:true},
    jobTitle: {
        type: String,
        required: true},
    contact: { name: String, email: String },
    response: Boolean,
    assement: String,
    techInt: String,
    behInt: Boolean,
    offer: Boolean,
    salary: Number,
    dateApplied: {type: Date, require: true},
    notes: String
})

module.exports = mongoose.model('Job', jobSchema)