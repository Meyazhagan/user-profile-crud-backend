const { isValidObjectId } = require("mongoose");
const User = require("../../model/User");

module.exports = async ({ id, input }) => {
    if (!isValidObjectId(id))
        return {
            ok: false,
            user: null,
            errors: [
                {
                    message: "Invalid User Id",
                },
            ],
        };

    const user = await User.findByIdAndUpdate(id, { $set: input }, { new: true });
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
        success: "Profile Updated",
    };
};
