const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_payments', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    component: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    paymentarea: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    amount: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    currency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: ""
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
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_payments',
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
        name: "mdl_paym_gat_ix",
        using: "BTREE",
        fields: [
          { name: "gateway" },
        ]
      },
      {
        name: "mdl_paym_compayite_ix",
        using: "BTREE",
        fields: [
          { name: "component" },
          { name: "paymentarea" },
          { name: "itemid" },
        ]
      },
      {
        name: "mdl_paym_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_paym_acc_ix",
        using: "BTREE",
        fields: [
          { name: "accountid" },
        ]
      },
    ]
  });
};
