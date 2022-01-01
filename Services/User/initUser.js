const User = require("../../model/User");
const usersData = require("../../model/Data");

module.exports = async ({}) => {
    const userCount = await User.find({}).count();
    if (userCount > 0)
        return {
            ok: false,
            user: null,
            errors: [{ message: "Failed to Generate Users" }],
        };

    const users = await User.insertMany(usersData);

    return {
        ok: true,
        users,
        errors: [],
        success: "Users Created",
    };
};
