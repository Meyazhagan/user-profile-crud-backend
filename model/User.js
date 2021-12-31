const mongoose = require("mongoose");
const ProfileSchema = require("./Profile");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    avatar: { type: String, required: true },
    location: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    profile: { type: ProfileSchema, required: true },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
