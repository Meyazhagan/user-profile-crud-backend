const UpdateUserProfile = require("../User/UpdateUserProfile");

module.exports = async ({ userId, input }) => {
    return await UpdateUserProfile({ userId, profile: input, successMsg: "Profile Updated" });
};
