// import { DataType, Column, Model, Table } from 'sequelize-typescript';
import { DataTypes, Model } from 'sequelize';
import sequelizeConnect from '../config';

const User = sequelizeConnect.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  surname: {
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
});

export default User;
