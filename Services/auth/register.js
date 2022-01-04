const { pick } = require("lodash");
const UserAccount = require("../../model/UserAccout");

const bodyProps = ["name", "email", "password"];

module.exports = async function (req, res) {
    const email = req.body.email;

    const user = await UserAccount.findOne({ email: email });
    if (user) return res.status(400).send({ error: "User Account is Already exists" });

    const newUser = await new UserAccount(pick(req.body, bodyProps));

    await newUser.save();

    const success = {
        message: "User Account created Succefully",
        user: pick(newUser, ["name", "email", "_id"]),
    };

    res.send({ success });
};
