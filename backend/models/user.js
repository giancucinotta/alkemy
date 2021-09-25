const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name:{
      type: DataTypes.STRING(64),
      is: /^[a-zA-Z]+(([ ][a-zA-Z ])?[a-zA-Z]*)*$/
    },
    lastName:{
      type: DataTypes.STRING(64),
      is: /^[a-zA-Z]+(([ ][a-zA-Z ])?[a-zA-Z]*)*$/
    },
    userName:{
        type: DataTypes.STRING(64),
        unique: true,
        allowNull: false,
        is: /^[a-zA-Z]+(([ ,.-][a-zA-Z ])?[a-zA-Z]*)*$/
    },
    email: {
      type: DataTypes.STRING(64),
      unique: true,
      allowNull: false,
      is: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    }
  });
};