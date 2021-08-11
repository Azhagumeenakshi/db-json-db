const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_brickfield_errors', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    resultid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    linenumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    errordata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    htmlcode: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_brickfield_errors',
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
        name: "mdl_toolbricerro_res_ix",
        using: "BTREE",
        fields: [
          { name: "resultid" },
        ]
      },
    ]
  });
};
