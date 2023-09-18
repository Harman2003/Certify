const express = require("express");
const router = express.Router();
const handleLogin = require("../controllers/auth/loginController");
const refreshJWT = require("../controllers/auth/refreshController");
const { handleNewUser } = require('../controllers/auth/registerController')

router.post("/login", handleLogin);
router.get("/refresh", refreshJWT);
router.post('/signup', handleNewUser);

module.exports = router;