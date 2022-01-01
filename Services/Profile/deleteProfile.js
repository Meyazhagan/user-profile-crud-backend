const UpdateUserProfile = require("../User/UpdateUserProfile");

module.exports = async ({ userId }) => {
    return await UpdateUserProfile({
        userId,
        profile: { skill: [], role: [] },
        successMsg: "Profile Deleted",
    });
};
