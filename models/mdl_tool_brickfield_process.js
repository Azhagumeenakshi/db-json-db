const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_brickfield_process', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    item: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    innercontextid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timecompleted: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_brickfield_process',
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
        name: "mdl_toolbricproc_tim_ix",
        using: "BTREE",
        fields: [
          { name: "timecompleted" },
        ]
      },
    ]
  });
};
