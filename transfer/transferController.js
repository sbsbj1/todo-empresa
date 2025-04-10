import express from 'express';
import Transfer from './transferModel.js';

const getTransfers = async(req, res)=> {
    try {
        const transfer = await Transfer.findAll();
        res.status(200).json(transfer);
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
}

const getTransferById = async (req, res)=> {
    try {
        const transfer = await Transfer.findByPk(req.params.id);
        if(!transfer){
            return res.status(404).json({message: `Transfer not found with this id ${req.params.id}`})
        }
        res.status(200).json(transfer);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createTransfer = async (req, res)=>{
    try {
        const transfer = await Transfer.create(req.body);
        res.status(201).json(transfer);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateTransfer = async (req, res)=> {
    try {
        const transfer = await Transfer.findByPk(req.params.id);
        if(!transfer){
           return res.status(404).json({message: `Transfer not found with this id ${req.params.id}`})
        }
        const updatedTransfer = await transfer.update(req.body);
        res.status(200).json(updatedTransfer);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteTransfer = async (req, res)=> {
    try {
        const transfer = await Transfer.findByPk(req.params.id);
        if(!transfer){
           return res.status(404).json({message: `Transfer not found with this id ${req.params.id}`})
        }
        await transfer.destroy();
        res.status(200).json({message: `Transfer with id ${req.params.id} deleted successfully`});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export { getTransfers, getTransferById, createTransfer, updateTransfer, deleteTransfer };