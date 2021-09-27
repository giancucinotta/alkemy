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
      allowNull: false,
      is: /^[a-zA-Z0-9]+(([ ,.-][a-zA-Z0-9 ])?[a-zA-Z0-9]*)*$/
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transaction_type: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['Credit', 'Debit']
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};