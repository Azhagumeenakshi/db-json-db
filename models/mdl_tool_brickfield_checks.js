const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_brickfield_checks', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    checktype: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    shortname: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    checkgroup: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    severity: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_brickfield_checks',
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
        name: "mdl_toolbricchec_che_ix",
        using: "BTREE",
        fields: [
          { name: "checktype" },
        ]
      },
      {
        name: "mdl_toolbricchec_che2_ix",
        using: "BTREE",
        fields: [
          { name: "checkgroup" },
        ]
      },
      {
        name: "mdl_toolbricchec_sta_ix",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
};
