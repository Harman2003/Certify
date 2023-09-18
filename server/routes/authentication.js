const express = require("express");
const router = express.Router();
const handleLogin = require("../controllers/auth/loginController");
const refreshJWT = require("../controllers/auth/refreshController");
const { handleNewUser } = require('../controllers/auth/registerController')
const passport = require("passport")

router.post("/login", handleLogin);
router.get("/refresh", refreshJWT);
router.post('/signup', handleNewUser);
// router.get("/auth/google",passport.authenticate('google' ,{scope: ['profile','email']} ));
// router.get("/auth/google/callback",passport.authenticate('google' , {failureRedirect: '/failed'}),(req,res)=>{
//     res.redirect('/');
// })

module.exports = router;