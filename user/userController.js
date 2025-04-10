import express from 'express';
import User from './userModel.js';

const getUsers = async (req, res)=> {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getUserById = async (req, res)=> {
    try {
        const user = await User.findByPk(req.params.id);
        if(!user){
            return res.status(404).json({message: `User not found with this id ${req.params.id}`})
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createUser = async (req, res)=>{
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateUser = async (req, res)=> {
    try {
        const user = await User.findByPk(req.params.id);
        if(!user){
           return res.status(404).json({message: `User not found with this id ${req.params.id}`})
        }
        const updatedUser = await user.update(req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteUser = async (req, res)=> {
    try {
        const user = await User.findByPk(req.params.id);
        if(!user){
           return res.status(404).json({message: `User not found with this id ${req.params.id}`})
        }
        await user.destroy();
        res.status(200).json({message: `User with id ${req.params.id} deleted successfully`});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export { getUsers, getUserById, createUser, updateUser, deleteUser };