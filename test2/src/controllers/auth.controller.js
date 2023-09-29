import User from '../models/User'
import { Jwt } from 'jsonwebtoken';
import config from '../config'

export const signUp = async (req, res) => {
        
    const { correo, clave } = req.body;
    
    // const userFound = User.find({correo})

    const newUser = new User({
        correo,
        clave: User.encryptPassword(clave)
    })

    const savedUser = await newUser.save();

    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400 // 24 hours
    })

    res.status(200).json({token})
};

export const signIn = async (req, res) => {
    res.json('signin')
};