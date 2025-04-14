import 'dotenv/config.js';
import sequelize from '../config/dbconfig.js';
import { DataTypes } from '@sequelize/core';

const Transfer = sequelize.define(
    'Transfer',
    {
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        transferDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        transferType: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM('pending', 'completed', 'details'),
            allowNull: false,
        },
        nextTransfer: {
            type: DataTypes.DATE, 
            allowNull: true,
        }
    },
    {
        tableName: 'Transfers',
        freezeTableName: true,
    }
);

Transfer.associate = (models)=> {
    Transfer.belongsTo(models, {
        foreignKey: 'supplierId',
        onDelete: 'CASCADE'
    });
    Transfer.belongsTo(models, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
    })
};

export default Transfer;