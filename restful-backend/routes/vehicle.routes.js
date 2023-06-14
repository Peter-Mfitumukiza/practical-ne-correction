const router = require('express').Router();
const { registerVehicle, getVehicles, getVehiclesWithOwners } = require('../controller/vehicle.controller');

router.post("/register", registerVehicle);

router.get("/", getVehicles);

router.get("/with-owners", getVehiclesWithOwners);

module.exports = router;