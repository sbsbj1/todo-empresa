import express from 'express';
import  User from './userModel.js';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from './userController.js';
import { validations } from '../config/validator.js';
import  validationMiddleware from '../config/validationMiddleware.js';


const router = express.Router();

router.get('/users', getUsers)

router.get('/users/:id', getUserById)

router.post('/users', validations, validationMiddleware, createUser)

router.put('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)

export default router;