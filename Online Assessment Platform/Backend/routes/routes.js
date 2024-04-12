const express = require('express')
const router = express.Router();
const {login,signup,view} = require("../controller/userController.js")
const test = require("../controller/testCategory.js")
const testController = require("../controller/testController.js")
router.post("/login",login)
router.post("/signup",signup)
router.get("/testCategory",test.testCategory)
router.get("/viewTest/:testCategory",testController.viewTest)
router.get("/viewusers",view)
module.exports=router;