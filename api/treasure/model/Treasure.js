const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Treasure = new Schema({
    name: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
    },
    distance: {
        type: Number,
        required: true,
    },
    location: {      
        lat: {
            type: Number,
            required: true,
        },
        lng: {
            type: Number,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        province: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        }
    },
    puzzle: {
        q: {
            type: String,
            required: true,
        },
        a: {
            type: String,
            required: true,
        }
    },
    description: {
        type: String,
        required: true,
    },
    reward: {
        type: String,
        required: true,
    },
    feedback: [
        {
            user: { type: String },
            comment: { type: String },
            rate: { type: Number }
        }
    ],
    score: { type: Number }
}, {
    collection: 'treasure',
    timestamps: true,
})

module.exports = mongoose.model('Treasure', Treasure)