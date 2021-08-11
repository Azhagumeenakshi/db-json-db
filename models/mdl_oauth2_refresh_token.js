const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_oauth2_refresh_token', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    issuerid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    scopehash: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_oauth2_refresh_token',
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
        name: "mdl_oautrefrtoke_useisssco_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "issuerid" },
          { name: "scopehash" },
        ]
      },
      {
        name: "mdl_oautrefrtoke_iss_ix",
        using: "BTREE",
        fields: [
          { name: "issuerid" },
        ]
      },
      {
        name: "mdl_oautrefrtoke_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
