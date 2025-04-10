import express from 'express';
import Transfer from './transferModel.js';
import { getTransfers, getTransferById, createTransfer, updateTransfer, deleteTransfer } from './transferController.js';


const router = express.Router();

router.get('/transfers', getTransfers)
router.get('/transfers/:id', getTransferById)

router.post('/transfers', createTransfer)

router.put('/transfers/:id', updateTransfer)

router.delete('/transfers/:id', deleteTransfer)

export default router;