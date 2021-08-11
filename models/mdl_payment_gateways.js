const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_payment_gateways', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    accountid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    gateway: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    config: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_payment_gateways',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "mdl_paymgate_acc_ix",
        using: "BTREE",
        fields: [
          { name: "accountid" },
        ]
      },
    ]
  });
};
