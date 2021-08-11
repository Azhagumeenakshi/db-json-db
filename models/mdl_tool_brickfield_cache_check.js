const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_brickfield_cache_check', {
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
    checkid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    checkcount: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    errorcount: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_brickfield_cache_check',
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
        name: "mdl_toolbriccachchec_sta_ix",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "mdl_toolbriccachchec_err_ix",
        using: "BTREE",
        fields: [
          { name: "errorcount" },
        ]
      },
      {
        name: "mdl_toolbriccachchec_cou_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
    ]
  });
};
