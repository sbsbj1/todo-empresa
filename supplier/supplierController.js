import Supplier from './supplierModel.js';
const getSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findAll();
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({ message: error.message });
        
    }
}

const getSupplierById = async(req, res)=>{
    try {
        const supplier = await Supplier.findByPk(req.params.id);
        if(!supplier){
            return res.status(404).json({message: `Supplier not found with this id ${req.params.id}`})
        }
        res.status(200).json(supplier);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createSupplier = async(req, res)=>{
    try {
        const supplier = await Supplier.create(req.body);
        res.status(201).json(supplier);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateSupplier = async(req, res)=> {
    try {
        const supplier = await Supplier.findByPk(req.params.id);
        if(!supplier){
            return res.status(404).json({message: `Supplier not found with this id ${req.params.id}`})
        }
        const updatedSupplier = await supplier.update(req.body);
        res.status(200).json(updatedSupplier);
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
}

const deleteSupplier = async(req, res)=>{
    try {
        const supplier = await Supplier.findByPk(req.params.id);
        if(!supplier){
            return res.status(404).json({message: `Supplier not found with this id ${req.params.id}`})
        }
        await supplier.destroy()
        res.status(200).json({message: `User with id ${req.params.id} deleted successfully`});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export { getSupplier, getSupplierById, createSupplier, updateSupplier, deleteSupplier };