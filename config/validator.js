import express from 'express';
import { check, body, query, validationResult } from 'express-validator';
import User from '../user/userModel.js';

const validationPassword = [body('password').isLength({min: 8}).matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$").withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character')];



const validationEmail = [body('email').isEmail().withMessage('Email is not valid')];

const emailExist = check('email').custom(async(email) =>{
    const user = await User.findOne({where: {email: email}});
    if(user){
        throw new Error('Email already exists');
    }
});

export const validations = [
    validationPassword,
    validationEmail,
    emailExist,
];


