const { isValidObjectId } = require("mongoose");
const User = require("../../model/User");

module.exports = async ({ userId, profile, successMsg }) => {
    if (!isValidObjectId(userId))
        return {
            ok: false,
            user: null,
            errors: [
                {
                    message: "Invalid User Id",
                },
            ],
        };

    const user = await User.findByIdAndUpdate(userId, { $set: { profile } }, { new: true });
    if (!user)
        return {
            ok: false,
            user: null,
            errors: [
                {
                    message: "No User Found For Given Id",
                },
            ],
        };

    return {
        ok: true,
        user,
        errors: [],
        success: successMsg,
    };
};
