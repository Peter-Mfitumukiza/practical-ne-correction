const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const register = async(req,res) => {
    const userDetails = req.body;
    
    const existingUser = await User.find({ email: userDetails.email});
    if(existingUser){
        return res.json({ status: 'error', message: 'You have already registered'});
    }

    const hashedPassword = await bcrypt.hash(userDetails.password, 10);
    userDetails.password = hashedPassword;

    const newUser = await User.create(userDetails);
    await newUser.save();

    return res.json({ status: 'success', message:'User created successfully'});
}

const login = async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        return res.json({ status: 'error', message: 'Invalid email or password' });
    }
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if(!isPasswordCorrect){
        return res.json({ status: 'error', message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: existingUser._id }, { expiresIn: '24h'});

    const userInfo = {
        fullnames: existingUser.fullnames,
        email: existingUser.email,
        phoneNumber: existingUser.phoneNumber,
        nationalId: existingUser.nationalId
    }

    return res.json({ status:'success', message: 'Login successful', token, userInfo });
}

module.exports = {
    register,
    login
}