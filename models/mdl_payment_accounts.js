const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_payment_accounts', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    idnumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    archived: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_payment_accounts',
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
    ]
  });
};
