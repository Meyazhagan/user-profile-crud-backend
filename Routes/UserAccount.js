const { validateBody } = require("../Helper/JoiSchema");
const login = require("../Services/auth/login");
const register = require("../Services/auth/register");

const router = require("express").Router();

router.post("/login", validateBody("LOGIN"), login);
router.post("/register", validateBody("REGISTER"), register);

module.exports = router;
