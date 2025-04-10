import express from 'express';
import Supplier from './supplierModel.js';
import { getSupplier, getSupplierById, createSupplier, updateSupplier, deleteSupplier } from './supplierController.js';

const router = express.Router();

router.get('/suppliers', getSupplier)
router.get('/suppliers/:id', getSupplierById)

router.post('/suppliers', createSupplier)

router.put('/suppliers/:id', updateSupplier)

router.delete('/suppliers/:id', deleteSupplier)

export default router;