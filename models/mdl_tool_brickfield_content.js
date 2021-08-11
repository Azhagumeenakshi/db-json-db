const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_brickfield_content', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    areaid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    contenthash: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    iscurrent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timechecked: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_brickfield_content',
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
        name: "mdl_toolbriccont_sta_ix",
        using: "BTREE",
        fields: [
          { name: "status" },
        ]
      },
      {
        name: "mdl_toolbriccont_iscare_ix",
        using: "BTREE",
        fields: [
          { name: "iscurrent" },
          { name: "areaid" },
        ]
      },
      {
        name: "mdl_toolbriccont_are_ix",
        using: "BTREE",
        fields: [
          { name: "areaid" },
        ]
      },
    ]
  });
};
