const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_paygw_paypal', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    paymentid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "mdl_paygpayp_pay_uix"
    },
    pp_orderid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "The ID of the order in PayPal"
    }
  }, {
    sequelize,
    tableName: 'mdl_paygw_paypal',
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
        name: "mdl_paygpayp_pay_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "paymentid" },
        ]
      },
    ]
  });
};
