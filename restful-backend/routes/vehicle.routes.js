const router = require('express').Router();
const { registerVehicle, getVehicles, getVehiclesWithOwners } = require('../controller/vehicle.controller');
const { validateRegisterVehicle } = require('../middleware/vehicleValidations');
const { verifyToken } = require('../middleware/auth');

router.post("/register", validateRegisterVehicle, verifyToken, registerVehicle);

router.get("/", verifyToken, getVehicles);

router.get("/with-owners", verifyToken, getVehiclesWithOwners);

module.exports = router;