const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    company: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    contact: { name: String, email: String },
    response: Boolean,
    assesment: String,
    techInt: String,
    behInt: Boolean,
    offer: Boolean,
    salary: Number,
    dateApplied: { type: Date, required: true },
    notes: String
})

module.exports = mongoose.model('Job', jobSchema)