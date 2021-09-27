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
      is: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
      is: /^[a-zA-Z0-9]+(([ ,.-][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/
    }
  });
};