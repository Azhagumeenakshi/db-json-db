const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_badge_backpack_oauth2', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    issuerid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    externalbackpackid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    refreshtoken: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    expires: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    scope: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_badge_backpack_oauth2',
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
        name: "mdl_badgbackoaut_use_ix",
        using: "BTREE",
        fields: [
          { name: "usermodified" },
        ]
      },
      {
        name: "mdl_badgbackoaut_use2_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_badgbackoaut_iss_ix",
        using: "BTREE",
        fields: [
          { name: "issuerid" },
        ]
      },
      {
        name: "mdl_badgbackoaut_ext_ix",
        using: "BTREE",
        fields: [
          { name: "externalbackpackid" },
        ]
      },
    ]
  });
};
