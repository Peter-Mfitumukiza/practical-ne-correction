const router = require('express').Router();
const { registerOwner, getOwners } = require('../controller/owner.controller');
const { validateRegisterOwner } = require('../middleware/ownerValidations');

router.post('/register', validateRegisterOwner, registerOwner);

router.get('/', getOwners);

module.exports = router;