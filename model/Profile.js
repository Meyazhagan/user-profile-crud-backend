const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    skill: {
        type: [String],
        required: true,
        default: [],
    },
    role: {
        type: [String],
        required: true,
        default: [],
    },
});

module.exports = ProfileSchema;
