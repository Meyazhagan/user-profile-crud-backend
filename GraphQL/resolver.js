const allUsers = require("../Services/User/getAllUser");
const getUser = require("../Services/User/getUser");
const createUser = require("../Services/User/createUser");
const updateUser = require("../Services/User/updateUser");
const deleteUser = require("../Services/User/deleteUser");
const initUser = require("../Services/User/initUser");

const createProfile = require("../Services/Profile/createProfile");
const updateProfile = require("../Services/Profile/updateProfile");
const deleteProfile = require("../Services/Profile/deleteProfile");

const resolver = {
    //User CRUD Operations
    allUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    initUser,
    //Profile CRUD Operations
    createProfile,
    updateProfile,
    deleteProfile,
};

module.exports = resolver;
