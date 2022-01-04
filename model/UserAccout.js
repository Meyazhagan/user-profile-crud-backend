const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserAccountSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

UserAccountSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }

    next();
});

UserAccountSchema.methods.comparePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

UserAccountSchema.methods.getAuthToken = function () {
    const payload = {
        email: this.email,
        name: this.name,
        id: this._id,
        process: "login",
        rootFolder: this.rootFolder,
    };
    const options = { expiresIn: "1d" };

    return jwt.sign(payload, process.env.JWT_SECRET, options);
};

UserAccountSchema.statics.verifyToken = function (token) {
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        return payload;
    } catch (err) {
        return null;
    }
};

const UserAccount = mongoose.model("UserAccount", UserAccountSchema);

module.exports = UserAccount;
