const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_infected_files', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    filename: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    quarantinedfile: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_infected_files',
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
        name: "mdl_infefile_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
