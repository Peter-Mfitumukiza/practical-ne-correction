const router = require('express').Router();
const { registerOwner, getOwners } = require('../controller/owner.controller');
const { validateRegisterOwner } = require('../middleware/ownerValidations');
const { verifyToken } = require('../middleware/auth');

router.post('/register', validateRegisterOwner, verifyToken, registerOwner);

router.get('/', verifyToken, getOwners);

module.exports = router;