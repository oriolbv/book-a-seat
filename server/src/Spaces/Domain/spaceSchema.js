// models/spaceSchema.js
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Space = new Schema({
    name: {
        type: String,
        required: true
    },
}, {
    timestamps: true
}, )

module.exports = mongoose.model('spaces', Space)