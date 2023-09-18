const express = require("express");
const router = express.Router();
const handleLogin = require("../controllers/auth/loginController");
const refreshJWT = require("../controllers/auth/refreshController");
const { handleNewUser } = require('../controllers/auth/registerController')
const AddEvent = require('../controllers/EventController/EventHandler');
const passport = require("passport")
const getEvents = require("../controllers/EventController/GetEvents")

router.post("/auth/login", handleLogin);
router.get("/auth/refresh", refreshJWT);
router.post('/auth/signup', handleNewUser);
// router.get("/auth/google",passport.authenticate('google' ,{scope: ['profile','email']} ));
// router.get("/auth/google/callback",passport.authenticate('google' , {failureRedirect: '/failed'}),(req,res)=>{
//     res.redirect('/');
// })
router.post('/events/add',AddEvent);
router.get('/events',getEvents);
// router.get('/events',EventsForOrg);

module.exports = router;