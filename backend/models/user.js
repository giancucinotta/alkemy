const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Users', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name:{
      type: DataTypes.STRING(64),
      allowNull: false,
      is: /^[a-zA-Z0-9]+(([ ][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/
    },
    last_name:{
      type: DataTypes.STRING(64),
      allowNull: false,
      is: /^[a-zA-Z0-9]+(([ ][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/
    },
    user_name:{
        type: DataTypes.STRING(64),
        unique: true,
        allowNull: false,
        is: /^[a-zA-Z0-9]+(([ ,.-][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/
    },
    email: {
      type: DataTypes.STRING(64),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
      is: /^[a-zA-Z0-9]+(([ ,.-][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/
    }
  });
};