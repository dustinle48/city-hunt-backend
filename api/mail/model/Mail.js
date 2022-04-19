const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Mail = new Schema({
    user: {
        type: String,
        required: true,
    },
    platform: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
}, {
    collection: 'mail',
    timestamps: true,
})

module.exports = mongoose.model('Mail', Mail)