const router = require('express').Router();
const { register, login } = require('../controller/auth.controller');
const { validateLogin, validateRegister } = require('../middleware/authValidations');

router.post("/register", validateRegister, register);

router.post("/login", validateLogin, login);

module.exports = router;