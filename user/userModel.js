import 'dotenv/config.js';
import sequelize from '../config/dbconfig.js';
import { DataTypes } from '@sequelize/core';
import Transfer from '../transfer/transferModel.js';


const User = sequelize.define(
    'User',
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telephone: {
            type: DataTypes.STRING, 
            allowNull: true,
        }

    },
    {
        tableName: 'Users',
        timestamps: true,
        freezeTableName: true,
    }
)

User.hasMany(Transfer, {
    foreignKey: 'userId'
})

export default User;