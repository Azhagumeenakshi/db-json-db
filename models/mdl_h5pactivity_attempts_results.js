const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_h5pactivity_attempts_results', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    attemptid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    subcontent: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    interactiontype: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    correctpattern: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    additionals: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rawscore: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    maxscore: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
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
    tableName: 'mdl_h5pactivity_attempts_results',
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
        name: "mdl_h5paatteresu_atttim_ix",
        using: "BTREE",
        fields: [
          { name: "attemptid" },
          { name: "timecreated" },
        ]
      },
      {
        name: "mdl_h5paatteresu_att_ix",
        using: "BTREE",
        fields: [
          { name: "attemptid" },
        ]
      },
    ]
  });
};
