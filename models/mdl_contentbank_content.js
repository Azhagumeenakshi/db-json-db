const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_contentbank_content', {
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
    contenttype: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    instanceid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    configdata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    usercreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_contentbank_content',
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
        name: "mdl_contcont_nam_ix",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "mdl_contcont_conconins_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
          { name: "contenttype" },
          { name: "instanceid" },
        ]
      },
      {
        name: "mdl_contcont_con_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
      {
        name: "mdl_contcont_use_ix",
        using: "BTREE",
        fields: [
          { name: "usermodified" },
        ]
      },
      {
        name: "mdl_contcont_use2_ix",
        using: "BTREE",
        fields: [
          { name: "usercreated" },
        ]
      },
    ]
  });
};
