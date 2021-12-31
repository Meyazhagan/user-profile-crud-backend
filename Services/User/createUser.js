const User = require("../../model/User");

module.exports = async ({ input }) => {
    input.profile = {};
    const user = await User(input);

    await user.save();

    return {
        ok: true,
        user,
        errors: [],
        success: "User Created",
    };
};
