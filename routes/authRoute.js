const express = require("express")
const register = require("../controllers/auth")
const { check } = require('express-validator');

const Routers = express.Router()

/* Routers.route("/register").post([
    check('email', 'Please include a valid email').isEmail(),
  ],register.register) */
Routers.route("/login").post(register.login)
/* Routers.route("/restLink/:id/:token").post(register.restLink).get(register.getrestlink)
Routers.route("/forgotpassword").post(register.forgotPassword) */

module.exports = Routers
