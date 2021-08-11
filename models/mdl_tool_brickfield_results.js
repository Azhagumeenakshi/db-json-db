const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_brickfield_results', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    contentid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    checkid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    errorcount: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_brickfield_results',
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
        name: "mdl_toolbricresu_conche_ix",
        using: "BTREE",
        fields: [
          { name: "contentid" },
          { name: "checkid" },
        ]
      },
      {
        name: "mdl_toolbricresu_con_ix",
        using: "BTREE",
        fields: [
          { name: "contentid" },
        ]
      },
      {
        name: "mdl_toolbricresu_che_ix",
        using: "BTREE",
        fields: [
          { name: "checkid" },
        ]
      },
    ]
  });
};
