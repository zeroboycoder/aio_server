const route = require("express").Router();
const authController = require("../controllers/authController");

route.post("/create-admin", authController.createAdmin);

route.post("/admin-login", authController.adminLogin);

module.exports = route;
