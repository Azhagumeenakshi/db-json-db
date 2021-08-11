const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_h5pactivity_attempts', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    h5pactivityid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    attempt: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 1
    },
    rawscore: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    maxscore: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    scaled: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false,
      defaultValue: 0.00000
    },
    duration: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    completion: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    success: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_h5pactivity_attempts',
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
        name: "mdl_h5paatte_h5puseatt_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "h5pactivityid" },
          { name: "userid" },
          { name: "attempt" },
        ]
      },
      {
        name: "mdl_h5paatte_tim_ix",
        using: "BTREE",
        fields: [
          { name: "timecreated" },
        ]
      },
      {
        name: "mdl_h5paatte_h5ptim_ix",
        using: "BTREE",
        fields: [
          { name: "h5pactivityid" },
          { name: "timecreated" },
        ]
      },
      {
        name: "mdl_h5paatte_h5puse_ix",
        using: "BTREE",
        fields: [
          { name: "h5pactivityid" },
          { name: "userid" },
        ]
      },
      {
        name: "mdl_h5paatte_h5p_ix",
        using: "BTREE",
        fields: [
          { name: "h5pactivityid" },
        ]
      },
    ]
  });
};
