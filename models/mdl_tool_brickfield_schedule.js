const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_brickfield_schedule', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    contextlevel: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 50
    },
    instanceid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    timeanalyzed: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_brickfield_schedule',
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
        name: "mdl_toolbricsche_conins_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contextlevel" },
          { name: "instanceid" },
        ]
      },
      {
        name: "mdl_toolbricsche_sta_ix",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
    ]
  });
};
