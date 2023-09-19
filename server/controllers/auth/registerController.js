const bcrypt = require('bcrypt');
const User = require('../../model/User')

const handleNewUser = async (req, res) => {
    const {fullname, username, email, password,role} = req.body;
    if (!fullname || !username || !email || !password) return res.status(400).json({ 'message': 'New User Data is Incomplete' });

  
    const duplicate = await User.findOne({ username: username }) 
    if(duplicate)return res.sendStatus(409)//conflict

    try {
        //encrypt
        const hashedPass = await bcrypt.hash(password, 10);

        //store the new user
        const newUser = {
            fullname: fullname,
            username: username,
            email: email,
            password: hashedPass,
            role:role
        }
        const savedUser = await User.create(newUser);
        res.status(200).json(savedUser);
    }
    catch (err) {
        res.sendStatus(500);
        console.log(err);
    }
}

module.exports = {handleNewUser};