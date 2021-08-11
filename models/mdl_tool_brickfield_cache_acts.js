const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_brickfield_cache_acts', {
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
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    component: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    totalactivities: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    failedactivities: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    passedactivities: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    errorcount: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_brickfield_cache_acts',
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
        name: "mdl_toolbriccachacts_sta_ix",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "mdl_toolbriccachacts_cou_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
    ]
  });
};
