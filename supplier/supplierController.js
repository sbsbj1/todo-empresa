import Supplier from './supplierModel.js';
import asyncHandler from 'express-async-handler';


const getSupplier = asyncHandler(async (req, res) => {
    try {
        const supplier = await Supplier.findAll();
        const supplierWithLinks = supplier.map(supplier => {
            return {
                supplier: supplier,
                links: {
                    self: {
                        href: `http://localhost:3000/suppliers/${supplier.id}`,
                    },
                    home: {
                        href: `http://localhost:3000/suppliers`,
                    }
                }
            }
        })
        res.status(200).json(supplierWithLinks);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        
    }
})

const getSupplierById = asyncHandler(async(req, res)=>{
    try {
        const supplier = await Supplier.findByPk(req.params.id);
        if(!supplier){
            return res.status(404).json({message: `Supplier not found with this id ${req.params.id}`})
        }
        const supplierWithLinks = {
            supplier: supplier,
            links: {
                self: {
                    href: `http://localhost:3000/suppliers/${supplier.id}`,
                },
                home: {
                    href: `http://localhost:3000/suppliers`,
                }
            }
        }
        res.status(200).json(supplierWithLinks);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        
    }
})

const createSupplier = asyncHandler(async(req, res)=>{
    try {
        const supplier = await Supplier.create(req.body);
        res.status(201).json(supplier);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        
    }
})

const updateSupplier = asyncHandler(async(req, res)=> {
    try {
        const supplier = await Supplier.findByPk(req.params.id);
        if(!supplier){
            return res.status(404).json({message: `Supplier not found with this id ${req.params.id}`})
        }
        const updatedSupplier = await supplier.update(req.body);
        res.status(200).json(updatedSupplier);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        
        
    }
})

const deleteSupplier = asyncHandler(async(req, res)=>{
    try {
        const supplier = await Supplier.findByPk(req.params.id);
        if(!supplier){
            return res.status(404).json({message: `Supplier not found with this id ${req.params.id}`})
        }
        await supplier.destroy()
        res.status(200).json({message: `User with id ${req.params.id} deleted successfully`});
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        
    }
})

export { getSupplier, getSupplierById, createSupplier, updateSupplier, deleteSupplier };