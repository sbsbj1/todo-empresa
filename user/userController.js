import express from 'express';
import User from './userModel.js';
import asyncHandler from 'express-async-handler';

const getUsers = asyncHandler(async (req, res)=> {
    try {
        const users = await User.findAll();
        const usersWithLinks = users.map(user => {
            return {
                user: user,
                links: {
                    self: {
                        href: `http://localhost:3000/users/${user.id}`,
                    },
                    home: {
                        href: `http://localhost:3000/users`
                    }
                }
            }
        })
        res.status(200).json(usersWithLinks);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        
    }
})

const getUserById = asyncHandler(async (req, res)=> {
    try {
        const user = await User.findByPk(req.params.id);
        if(!user){
            return res.status(404).json({message: `User not found with this id ${req.params.id}`})
        }
        const usersWithLinks = {
            user: user,
            links: {
                self: {
                    href: `http://localhost:3000/users/${user.id}`,
                },
                home: {
                    href: `http://localhost:3000/users`
                }
            }
    }
        res.status(200).json(usersWithLinks);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        
    }
})

const createUser = asyncHandler(async (req, res)=>{
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        
    }
})

const updateUser = asyncHandler(async (req, res)=> {
    try {
        const user = await User.findByPk(req.params.id);
        if(!user){
           return res.status(404).json({message: `User not found with this id ${req.params.id}`})
        }
        const updatedUser = await user.update(req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        
    }
})

const deleteUser = asyncHandler(async (req, res)=> {
    try {
        const user = await User.findByPk(req.params.id);
        if(!user){
           return res.status(404).json({message: `User not found with this id ${req.params.id}`})
        }
        await user.destroy();
        res.status(200).json({message: `User with id ${req.params.id} deleted successfully`});
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        
    }
})

export { getUsers, getUserById, createUser, updateUser, deleteUser };