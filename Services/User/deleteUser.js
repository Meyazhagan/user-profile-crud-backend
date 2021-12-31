const { isValidObjectId } = require("mongoose");
const User = require("../../model/User");

module.exports = async ({ id }) => {
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

    const user = await User.findByIdAndDelete(id);

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
        errors: [],
        success: "User Deleted",
    };
};
