import 'dotenv/config.js';
import sequelize from "../config/dbconfig.js";
import { DataTypes } from "@sequelize/core";
import Transfer from '../transfer/transferModel.js';


const Supplier = sequelize.define(
    'Supplier',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rut: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bank: {
            type: DataTypes.ENUM('BancoEstado', 'Banco de Chile', 'Santander', 'BCI', 'Scotiabank', 'Itau', 'Banco Falabella', 'Banco BICE', 'Banco Security', 'Banco Consorcio'),
            allowNull: false,
        },
        accountNumber: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        accountType: {
            type: DataTypes.ENUM('Cuenta Corriente', 'Cuenta ahorro'),
            allowNull: true,
        }

    },
    {
        tableName: 'Suppliers',
        timestamps: true,
        freezeTableName: true,
    }
)

Supplier.hasMany(Transfer, {
    foreignKey: 'supplierId'
})

export default Supplier;