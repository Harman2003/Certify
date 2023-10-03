const User = require("../../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const handleLogin = async (req, res) => {
  try {
    const { nameOrmail, password, role } = req.body;
    if (!nameOrmail || !password) return res.sendStatus(401);

    let foundUser;
    if (nameOrmail.includes("@"))
      foundUser = await User.findOne({ email: nameOrmail });
    else foundUser = await User.findOne({ username: nameOrmail });
    if (!foundUser || foundUser.role != role) return res.sendStatus(401); //unauthorized

    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
      const accessToken = jwt.sign(
        {
          username: foundUser.username,
          role: foundUser.role,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "10m" }
      );
      const refreshToken = jwt.sign(
        {
          username: foundUser.username,
          role: foundUser.role,
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d" }
      );

      await User.updateOne(
        { _id: foundUser["_id"] },
        { refreshToken: refreshToken },
        { runValidators: true }
      );

      res.cookie("jwt", refreshToken, {
        secure: true,
        httpOnly: true,
        sameSite: "none",
      });
      res.json({
        accessToken,
        username: foundUser.username,
        role: foundUser.role,
      });
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.log("error in login part");
    res.status(401).send("Unable to Login");
  }
};

module.exports = handleLogin;
