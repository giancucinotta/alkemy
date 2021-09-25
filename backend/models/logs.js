const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Logs', {    
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    concept: {
      type: DataTypes.STRING,
      is: /^[a-zA-Z]+(([ ,.-][a-zA-Z ])?[a-zA-Z]*)*$/
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transactionType: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};